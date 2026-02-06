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
    // Allow dragging by state, but framer motion handles it mostly. 
    // We need state to track positions if we want lines to follow, but standard SVG lines won't follow dragged motion divs automatically without state updates.
    // For simplicity/performance in this iteration, we'll keep lines static or specific just to node default positions, 
    // OR we upgrade to use a re-render loop. 
    // Given the request "moveable", let's use a simpler approach: 
    // We will use a ref-based approach or just let them float and lines might detach (less ideal) or update state onDrag.

    // Better approach: Store node positions in state
    const [nodeState, setNodeState] = useState(nodes);

    const updateNodePosition = (id: string, info: any) => {
        setNodeState(prev => prev.map(n =>
            n.id === id ? { ...n, x: n.x + info.offset.x, y: n.y + info.offset.y } : n
        ));
    };

    // Actually, for lines to follow smoothly, we need the actual coordinates. 
    // Framer Motion drag updates the transform, not the underlying x/y prop. 
    // To make lines follow, we need controlled components or an svg layer that listens to drag.
    // Let's try a simpler "Drag to Reorganize" where lines are just a visual guide or we make them `motion.line` that share coords.

    // Simplified Movable:
    // We will use `drag` but lines won't follow perfectly in real-time without heavy logic. 
    // user said "organize by hand that is movable".
    // Let's try to make lines `motion.line` work with state.

    return (
        <div className={`relative w-full h-[600px] rounded-lg overflow-hidden transition-colors duration-500 ${isCorporate ? 'bg-transparent border-none' : 'bg-slate-900/50 border border-cyber-primary/30'}`}>
            {!isCorporate && (
                <div className="absolute top-4 left-4 text-xs font-mono opacity-50 pointer-events-none">
                    ARCHITECTURE_TOPOLOGY_V1.3 [DRAGGABLE_NODES_ACTIVE]
                </div>
            )}

            {/* SVG Connections (Lines) */}
            {/* Since simple dragging breaks lines without complex state, we will hide lines in 'edit' mode or just keep them static background for now? 
                No, user wants to organize. 
                Let's stick to fixed positions for lines for now but allow node dragging for fun "interaction" unless we rebuild the graph engine.
                Wait, if I use `drag` constrained to parent, the lines won't update.
                
                Correction: I will implement a basic React Flow style state for positions.
            */}

            {/* We will skip dynamic lines for this specific edit to ensure stability, 
                 OR we just make nodes draggable and let lines be 'logical' connections that might visually break until release (not good).
                 
                 Let's go with: Nodes are fixed for the diagram integrity, but have a "float" animation. 
                 User explicitly asked "organize by hand". I must implement drag.
            */}

            <GraphEngine isCorporate={isCorporate} />
        </div>
    );
}

function GraphEngine({ isCorporate }: { isCorporate: boolean }) {
    // Local state for nodes to allow dragging updating lines
    const [graphNodes, setGraphNodes] = useState(nodes);

    return (
        <>
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                {connections.map((conn, i) => {
                    const fromNode = graphNodes.find(n => n.id === conn.from);
                    const toNode = graphNodes.find(n => n.id === conn.to);
                    if (!fromNode || !toNode) return null;

                    return (
                        <g key={i}>
                            <motion.line
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{
                                    pathLength: 1,
                                    opacity: 1,
                                    x1: fromNode.x,
                                    y1: fromNode.y,
                                    x2: toNode.x,
                                    y2: toNode.y
                                }}
                                transition={{ duration: 0.5 }}
                                stroke={isCorporate ? "#94a3b8" : "#06b6d4"}
                                strokeWidth="2"
                                strokeDasharray="5,5"
                            />
                        </g>
                    );
                })}
            </svg>

            {graphNodes.map((node) => {
                const Icon = iconMap[node.type] || Server;
                return (
                    <motion.div
                        key={node.id}
                        drag
                        dragMomentum={false}
                        onDrag={(event, info) => {
                            // Update functionality would require ref based tracking or state updates causing re-renders. 
                            // To avoid too many re-renders, we usually use motion values. 
                            // For this simple portfolio, let's update state onDragEnd or use a simplified interval.
                            // Actually, let's just update state onDrag for smooth lines (might depend on performance).
                        }}
                        onDragEnd={(e, info) => {
                            // Update final position
                            const parentRect = (e.target as HTMLElement).parentElement?.getBoundingClientRect();
                            if (parentRect) {
                                // This calculation is tricky with just info.point.
                                // Let's use a simpler way: just update x/y by delta.
                                setGraphNodes(prev => prev.map(n =>
                                    n.id === node.id ? { ...n, x: n.x + info.offset.x, y: n.y + info.offset.y } : n
                                ));
                            }
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1, x: 0, y: 0 }} // Reset transform, rely on left/top which we don't change dynamically efficiently without layout shift
                        // Better: Use motion values for X/Y and map them to line coords. 
                        // FALLBACK: User wants it movable. 
                        // We will allow dragging but lines will only update ON RELEASE to save performance since "page is heavy".

                        className={`absolute flex flex-col items-center justify-center cursor-grab active:cursor-grabbing transition-shadow`}
                        style={{ left: node.x, top: node.y }}
                    >
                        <div className={`p-3 rounded-xl shadow-lg relative z-10 ${isCorporate
                            ? 'bg-white text-slate-700 shadow-xl border border-slate-200'
                            : 'bg-black/90 text-cyber-primary border border-cyber-primary/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                            }`}>
                            <Icon size={24} />
                        </div>

                        <div className={`mt-2 text-xs font-bold px-2 py-1 rounded select-none ${isCorporate ? 'bg-slate-200 text-slate-800' : 'bg-black/50 text-cyber-primary backdrop-blur-md'
                            }`}>
                            {node.label}
                        </div>
                    </motion.div>
                );
            })}
        </>
    )
}
