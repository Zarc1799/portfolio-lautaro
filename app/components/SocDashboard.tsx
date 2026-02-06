"use client";

import { useState, useEffect, useRef } from "react";
import { Shield, AlertTriangle, Activity, X, Globe, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Threat = {
    id: number;
    ip: string;
    location: string;
    type: string;
    severity: "low" | "medium" | "high" | "critical";
    timestamp: string;
};

const LOCATIONS = ["CN", "RU", "BR", "US", "DE", "IN", "KP", "IR"];
const ATTACK_TYPES = ["SQL Injection", "XSS Payload", "Brute Force", "DDoS Volumetric", "Port Scan", "Malware C2"];

export default function SocDashboard() {
    const [isOpen, setIsOpen] = useState(false);
    const [threats, setThreats] = useState<Threat[]>([]);
    const [stats, setStats] = useState({ blocked: 1042, active: 3, load: 12 });
    const logRef = useRef<HTMLDivElement>(null);

    // Threat generator
    useEffect(() => {
        if (!isOpen) return;

        const interval = setInterval(() => {
            const newThreat: Threat = {
                id: Date.now(),
                ip: `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
                location: LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)],
                type: ATTACK_TYPES[Math.floor(Math.random() * ATTACK_TYPES.length)],
                severity: Math.random() > 0.8 ? "critical" : Math.random() > 0.5 ? "high" : "medium",
                timestamp: new Date().toLocaleTimeString(),
            };

            setThreats(prev => [newThreat, ...prev].slice(0, 20));
            setStats(prev => ({
                blocked: prev.blocked + 1,
                active: Math.floor(Math.random() * 15),
                load: Math.floor(Math.random() * 30) + 10
            }));
        }, 1200);

        return () => clearInterval(interval);
    }, [isOpen]);

    return (
        <>
            {/* Trigger Button (Fixed Bottom Left) */}
            <button
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-4 left-4 z-40 bg-slate-950/80 border border-cyber-primary/30 text-cyber-primary p-2 rounded-lg hover:bg-cyber-primary/20 hover:border-cyber-primary transition-all flex items-center gap-2 backdrop-blur-md ${isOpen ? 'opacity-0 pointer-events-none' : ''}`}
            >
                <Shield size={18} className="animate-pulse" />
                <span className="text-xs font-mono hidden md:inline">SOC: ACTIVE</span>
            </button>

            {/* Main Dashboard Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "-100%", opacity: 0 }}
                        transition={{ type: "spring", damping: 20 }}
                        className="fixed top-0 left-0 h-full w-full md:w-[450px] bg-slate-950/95 border-r border-cyber-primary/30 z-[60] backdrop-blur-xl shadow-[0_0_50px_rgba(6,182,212,0.15)] flex flex-col font-mono"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-cyber-primary/20 flex justify-between items-center bg-cyber-primary/5">
                            <div className="flex items-center gap-3">
                                <Shield className="text-cyber-primary" size={20} />
                                <div>
                                    <h2 className="text-sm font-bold text-white">Security Operations Center</h2>
                                    <div className="text-[10px] text-cyber-muted flex items-center gap-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                        SYSTEM PROTECTED
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-cyber-muted hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* KPI Grid */}
                        <div className="grid grid-cols-3 gap-2 p-4 border-b border-cyber-primary/20">
                            <div className="bg-slate-900/50 p-3 rounded border border-cyber-primary/10 text-center">
                                <div className="text-[10px] text-cyber-muted mb-1">THREATS BLOCKED</div>
                                <div className="text-xl font-bold text-cyber-primary">{stats.blocked}</div>
                            </div>
                            <div className="bg-slate-900/50 p-3 rounded border border-cyber-primary/10 text-center">
                                <div className="text-[10px] text-cyber-muted mb-1">ACTIVE NODES</div>
                                <div className="text-xl font-bold text-yellow-400">{stats.active}</div>
                            </div>
                            <div className="bg-slate-900/50 p-3 rounded border border-cyber-primary/10 text-center">
                                <div className="text-[10px] text-cyber-muted mb-1">CPU LOAD</div>
                                <div className="text-xl font-bold text-red-400">{stats.load}%</div>
                            </div>
                        </div>

                        {/* Visualizer Placeholder (Simplified Map) */}
                        <div className="h-48 bg-slate-900/50 relative overflow-hidden border-b border-cyber-primary/20 flex items-center justify-center group">
                            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyber-primary/20 to-transparent" />
                            {/* Simple "Radar" Effect */}
                            <div className="w-32 h-32 border border-cyber-primary/30 rounded-full animate-[spin_4s_linear_infinite] opacity-50 absolute" />
                            <div className="w-24 h-24 border border-cyber-primary/50 rounded-full animate-[spin_3s_linear_infinite_reverse] opacity-50 absolute" />
                            <Globe className="text-cyber-primary/20" size={64} />

                            {/* Random dots appearing */}
                            {threats.slice(0, 5).map((t, i) => (
                                <motion.div
                                    key={t.id}
                                    initial={{ scale: 0, opacity: 1 }}
                                    animate={{ scale: 2, opacity: 0 }}
                                    transition={{ duration: 1 }}
                                    className="absolute w-2 h-2 bg-red-500 rounded-full"
                                    style={{
                                        top: `${20 + (t.id % 60)}%`,
                                        left: `${20 + (t.id % 60)}%`
                                    }}
                                />
                            ))}

                            <div className="absolute bottom-2 right-2 text-[10px] text-cyber-primary/50 flex items-center gap-1">
                                <Activity size={10} /> LIVE FEED
                            </div>
                        </div>

                        {/* Threat Log */}
                        <div className="flex-1 overflow-auto p-4 space-y-2 bg-black/20" ref={logRef}>
                            <div className="text-xs text-cyber-muted uppercase tracking-wider mb-2 font-bold sticky top-0 bg-slate-950/90 py-1 border-b border-cyber-primary/10">Incidence Log</div>
                            {threats.map((threat) => (
                                <motion.div
                                    key={threat.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-[11px] flex items-center gap-2 p-2 rounded hover:bg-white/5 border border-transparent hover:border-white/10 transition-colors"
                                >
                                    <div className={`w-1.5 h-1.5 rounded-full ${threat.severity === 'critical' ? 'bg-red-500 animate-pulse' : threat.severity === 'high' ? 'bg-orange-500' : 'bg-yellow-500'}`} />
                                    <span className="text-slate-400 min-w-[60px]">{threat.timestamp}</span>
                                    <span className="text-cyber-primary min-w-[30px]">{threat.location}</span>
                                    <span className="text-white flex-1">{threat.type}</span>
                                    <span className="text-slate-500">{threat.ip}</span>
                                    <Lock size={10} className="text-cyber-primary/50" />
                                </motion.div>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="p-2 border-t border-cyber-primary/20 bg-slate-900 text-[10px] text-cyber-muted text-center uppercase">
                            Authorized Access Only - Level 5 Clearance
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
