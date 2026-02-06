"use client";

import { motion } from "framer-motion";
import { Server, Shield, Globe, Database, Smartphone, Laptop, Cloud } from "lucide-react";
import { useState } from "react";
import { useCorporate } from "../context/CorporateContext";

// Node Types
type NodeType = "server" | "firewall" | "internet" | "db" | "client" | "cloud";

interface Node {
    id: string;
    type: NodeType;
    label: string;
    x: number;
    y: number;
    details: string;
}

interface Connection {
    from: string;
    to: string;
    label?: string;
}

const nodes: Node[] = [
    { id: "internet", type: "internet", label: "Internet / WAN", x: 50, y: 50, details: "Public IP: 88.x.x.x (ISP)" },
    { id: "firewall", type: "firewall", label: "pfSense FW", x: 50, y: 250, details: "VLANs, Snort IPS, OpenVPN Gate" },
    { id: "switch", type: "server", label: "Core Switch", x: 250, y: 250, details: "L3 Managed Switch | VLAN Trunking" },
    { id: "ldap", type: "server", label: "OpenLDAP Auth", x: 450, y: 100, details: "Centralized Auth, Roaming Profiles" },
    { id: "zabbix", type: "server", label: "Zabbix Monitor", x: 450, y: 250, details: "SNMP Traps, Telegram Alerts" },
    { id: "nas", type: "db", label: "TrueNAS Core", x: 450, y: 400, details: "ZFS Pool (RAID-Z), SMB/NFS Shares" },
    { id: "clients", type: "client", label: "Workstations", x: 250, y: 450, details: "Win10/Linux Clients (Domain Joined)" },
];

const connections: Connection[] = [
    { from: "internet", to: "firewall", label: "WAN" },
    { from: "firewall", to: "switch", label: "Trunk" },
    { from: "switch", to: "ldap", label: "VLAN 10" },
    { from: "switch", to: "zabbix", label: "VLAN 20" },
    { from: "switch", to: "nas", label: "VLAN 30" },
    { from: "switch", to: "clients", label: "Access" },
];

const iconMap: Record<NodeType, any> = {
    server: Server,
    firewall: Shield,
    internet: Globe,
    db: Database,
    client: Laptop,
    cloud: Cloud
};

export default function NetworkDiagram() {
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);
    const { isCorporate } = useCorporate();

    return (
        <div className={`relative w-full h-[500px] border rounded-lg overflow-hidden ${isCorporate ? 'bg-slate-100 border-slate-300' : 'bg-slate-900/50 border-cyber-primary/30'}`}>
            <div className="absolute top-4 left-4 text-xs font-mono opacity-50">
                ARCHITECTURE_TOPOLOGY_V1.2
            </div>

            {/* SVG Connections (Lines) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {connections.map((conn, i) => {
                    const fromNode = nodes.find(n => n.id === conn.from);
                    const toNode = nodes.find(n => n.id === conn.to);
                    if (!fromNode || !toNode) return null;

                    return (
                        <g key={i}>
                            <motion.line
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 1, delay: i * 0.2 }}
                                x1={fromNode.x}
                                y1={fromNode.y}
                                x2={toNode.x}
                                y2={toNode.y}
                                stroke={isCorporate ? "#64748b" : "#06b6d4"}
                                strokeWidth="2"
                                strokeDasharray="5,5"
                            />
                            {conn.label && (
                                <text
                                    x={(fromNode.x + toNode.x) / 2}
                                    y={(fromNode.y + toNode.y) / 2 - 10}
                                    fill={isCorporate ? "#475569" : "#94a3b8"}
                                    fontSize="10"
                                    textAnchor="middle"
                                >
                                    {conn.label}
                                </text>
                            )}
                        </g>
                    );
                })}
            </svg>

            {/* Nodes */}
            {nodes.map((node) => {
                const Icon = iconMap[node.type] || Server;
                return (
                    <motion.div
                        key={node.id}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className={`absolute flex flex-col items-center justify-center cursor-pointer transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2`}
                        style={{ left: node.x, top: node.y }}
                        onMouseEnter={() => setHoveredNode(node.id)}
                        onMouseLeave={() => setHoveredNode(null)}
                    >
                        <div className={`p-3 rounded-xl shadow-lg relative z-10 ${isCorporate
                                ? 'bg-white text-slate-700 shadow-slate-200 border border-slate-200'
                                : 'bg-black/80 text-cyber-primary border border-cyber-primary/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                            } ${hoveredNode === node.id ? 'scale-110 ring-2 ring-offset-2 ring-current' : ''}`}>
                            <Icon size={24} />
                        </div>

                        <div className={`mt-2 text-xs font-bold px-2 py-1 rounded ${isCorporate ? 'bg-slate-200 text-slate-800' : 'bg-black/50 text-cyber-primary backdrop-blur-md'
                            }`}>
                            {node.label}
                        </div>

                        {/* Hover Details Bubble */}
                        {hoveredNode === node.id && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`absolute top-14 w-48 p-3 rounded-lg text-xs z-50 pointer-events-none ${isCorporate
                                        ? 'bg-slate-800 text-white shadow-xl'
                                        : 'bg-cyber-primary/10 border border-cyber-primary text-cyber-primary backdrop-blur-xl'
                                    }`}
                            >
                                <div className="font-bold mb-1 border-b border-white/20 pb-1">NODE_DETAILS</div>
                                {node.details}
                            </motion.div>
                        )}
                    </motion.div>
                );
            })}
        </div>
    );
}
