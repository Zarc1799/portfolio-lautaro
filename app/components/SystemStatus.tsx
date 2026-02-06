"use client";

import { useState, useEffect } from "react";
import { Activity, Server, Cpu, Wifi } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { useSound } from "../hooks/useSound";

export default function SystemStatus() {
    const { t } = useLanguage();
    const { play } = useSound();

    const [metrics, setMetrics] = useState({
        cpu: 12,
        ram: 34,
        network: 120, // kbps
        uptime: "99.98%"
    });
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setMetrics(prev => ({
                ...prev,
                cpu: Math.min(100, Math.max(5, prev.cpu + (Math.random() - 0.5) * 10)),
                ram: Math.min(100, Math.max(20, prev.ram + (Math.random() - 0.5) * 5)),
                network: Math.max(0, prev.network + (Math.random() - 0.5) * 50)
            }));
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            className="fixed bottom-4 left-4 z-40 font-mono text-xs cursor-pointer"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
        >
            <div
                className="bg-slate-900/90 border border-cyber-primary/30 rounded-md overflow-hidden shadow-[0_0_15px_rgba(6,182,212,0.1)] backdrop-blur-sm"
                onClick={() => {
                    play("click");
                    setIsExpanded(!isExpanded);
                }}
            >
                <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-950/50 border-b border-cyber-primary/10">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-cyber-muted font-bold tracking-wider">{t.systemStatus.title}</span>
                </div>

                <div className="p-3 space-y-2 min-w-[180px]">
                    <div className="flex justify-between items-center text-cyber-text">
                        <div className="flex items-center gap-2">
                            <Activity size={12} className="text-cyber-primary" />
                            <span>{t.systemStatus.cpu}</span>
                        </div>
                        <span className={metrics.cpu > 80 ? "text-red-500" : "text-cyber-secondary"}>
                            {metrics.cpu.toFixed(1)}%
                        </span>
                    </div>
                    {/* CPU Bar */}
                    <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-cyber-primary"
                            animate={{ width: `${metrics.cpu}%` }}
                        />
                    </div>

                    <div className="flex justify-between items-center text-cyber-text">
                        <div className="flex items-center gap-2">
                            <Server size={12} className="text-purple-400" />
                            <span>{t.systemStatus.ram}</span>
                        </div>
                        <span className="text-purple-300">
                            {metrics.ram.toFixed(1)}%
                        </span>
                    </div>

                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="space-y-2 pt-2 border-t border-cyber-primary/10 overflow-hidden"
                            >
                                <div className="flex justify-between items-center text-cyber-text">
                                    <div className="flex items-center gap-2">
                                        <Wifi size={12} className="text-yellow-400" />
                                        <span>{t.systemStatus.net}</span>
                                    </div>
                                    <span className="text-yellow-300">
                                        {metrics.network.toFixed(0)} KB/s
                                    </span>
                                </div>
                                <div className="flex justify-between items-center text-cyber-text">
                                    <div className="flex items-center gap-2">
                                        <Cpu size={12} className="text-green-400" />
                                        <span>{t.systemStatus.uptime}</span>
                                    </div>
                                    <span className="text-green-300">
                                        {metrics.uptime}
                                    </span>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
}
