"use client";

import { useDarkWeb } from "../context/DarkWebContext";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Shield, Lock, RefreshCw, Menu } from "lucide-react";

export default function TorFrame() {
    const { isDarkWeb } = useDarkWeb();

    return (
        <AnimatePresence>
            {isDarkWeb && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] pointer-events-none flex flex-col font-mono text-sm leading-none"
                >
                    {/* Tor Browser Top Bar */}
                    <div className="bg-[#3c3c3c] text-white p-2 flex items-center gap-4 border-b border-black shadow-xl pointer-events-auto">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                        </div>

                        <div className="flex-1 bg-[#2b2b2b] rounded flex items-center px-3 py-1.5 gap-2 border border-[#1a1a1a]">
                            <Lock size={12} className="text-green-500" />
                            <span className="text-green-500 text-xs">onion</span>
                            <div className="flex-1 text-[#e0e0e0] font-mono text-xs overflow-hidden whitespace-nowrap">
                                http://lautaro7xsmqdsga.onion/portfolio/v3/classified
                            </div>
                            <Shield size={12} className="text-slate-400" />
                        </div>

                        <div className="flex items-center gap-3 text-slate-400">
                            <RefreshCw size={14} />
                            <Menu size={16} />
                        </div>
                    </div>

                    {/* Window Frame Filter Overlay */}
                    <div className="flex-1 relative pointer-events-none">
                        {/* CRT / Dark Web Filter */}
                        <div className="absolute inset-0 bg-green-900/10 mix-blend-overlay pointer-events-none" />
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none" />

                        {/* Onion Logo Watermark */}
                        <div className="absolute bottom-4 right-4 opacity-10 pointer-events-none">
                            <Globe size={128} className="text-white" />
                        </div>
                    </div>

                    {/* Floating Warning */}
                    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-red-900/90 text-red-200 px-6 py-2 rounded-full border border-red-500/50 backdrop-blur-md text-xs uppercase tracking-widest flex items-center gap-2 animate-pulse pointer-events-auto shadow-[0_0_30px_rgba(220,38,38,0.5)]">
                        <AlertTriangle size={14} className="text-red-500" />
                        Unencrypted Connection via TOR Node 192.0.2.1
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

// Helper component for Icon
function AlertTriangle({ size, className }: { size: number, className: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
        </svg>
    )
}
