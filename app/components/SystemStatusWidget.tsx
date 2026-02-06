"use client";

import { useEffect, useState } from "react";
import { Activity, ShieldCheck, Server, Cpu, Globe } from "lucide-react";
import { useCorporate } from "../context/CorporateContext";

export default function SystemStatusWidget() {
    const { isCorporate } = useCorporate();
    const [stats, setStats] = useState({
        cpu: 12,
        mem: 45,
        net: 1.2,
        uptime: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setStats(prev => ({
                cpu: Math.max(5, Math.min(30, prev.cpu + (Math.random() - 0.5) * 5)),
                mem: Math.max(40, Math.min(60, prev.mem + (Math.random() - 0.5) * 2)),
                net: Math.max(0.5, Math.min(5, prev.net + (Math.random() - 0.5))),
                uptime: prev.uptime + 1
            }));
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const formatUptime = (seconds: number) => {
        const d = Math.floor(seconds / (3600 * 24));
        const h = Math.floor((seconds % (3600 * 24)) / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        return `${d}d ${h}h ${m}m`;
    };

    if (isCorporate) return null; // Hide in corporate mode

    return (
        <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2 pointer-events-none select-none">
            <div className="bg-black/60 backdrop-blur-md border border-cyber-primary/30 p-3 rounded-lg text-xs font-mono text-cyber-primary shadow-[0_0_15px_rgba(6,182,212,0.1)] w-64">
                <div className="flex items-center justify-between mb-2 border-b border-cyber-primary/20 pb-1">
                    <span className="flex items-center gap-2 font-bold">
                        <Activity size={12} className="text-green-500 animate-pulse" />
                        SYSTEM_STATUS
                    </span>
                    <span className="text-[10px] text-cyber-muted">LIVE</span>
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <span className="flex items-center gap-1.5"><Server size={10} /> UPTIME</span>
                        <span className="text-white">{formatUptime(98234 + stats.uptime)}</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="flex items-center gap-1.5"><Cpu size={10} /> CPU LOAD</span>
                        <div className="flex items-center gap-2">
                            <div className="w-16 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-cyber-primary transition-all duration-500"
                                    style={{ width: `${stats.cpu}%` }}
                                />
                            </div>
                            <span className="text-white w-8 text-right">{stats.cpu.toFixed(1)}%</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="flex items-center gap-1.5"><Globe size={10} /> NET I/O</span>
                        <span className="text-green-400">{stats.net.toFixed(2)} MB/s</span>
                    </div>

                    <div className="flex justify-between items-center mt-2 pt-2 border-t border-cyber-primary/10">
                        <span className="flex items-center gap-1.5 text-green-500"><ShieldCheck size={10} /> THREAT LEVEL</span>
                        <span className="bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded text-[10px]">LOW</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
