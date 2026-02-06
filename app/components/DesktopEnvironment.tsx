"use client";

import { useWebOS } from "../context/WebOSContext";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Square, Monitor, FileText, Folder, Terminal } from "lucide-react";
import { useEffect, useRef } from "react";

export default function DesktopEnvironment() {
    const { isWebOS, windows, closeApp, minimizeApp, openApp, toggleWebOS, registerApp } = useWebOS();
    const constraintsRef = useRef(null);
    const hasRegisteredRef = useRef(false);

    // Register Apps on Mount
    useEffect(() => {
        if (!hasRegisteredRef.current) {
            registerApp({
                id: "readme",
                title: "README.txt",
                icon: FileText,
                component: (
                    <div className="font-mono text-sm space-y-4">
                        <p># LAUTARO MIR - FULL STACK DEVELOPER</p>
                        <p>Mission: Building digital fortresses and interactive experiences.</p>
                        <br />
                        <p>CONTACT:</p>
                        <ul className="list-disc pl-4">
                            <li>Email: contact@lautaromir.com</li>
                            <li>GitHub: github.com/lautaromir</li>
                        </ul>
                    </div>
                )
            });

            registerApp({
                id: "projects",
                title: "Projects_V4",
                icon: Folder,
                component: (
                    <div className="grid grid-cols-3 gap-4">
                        {["Portfolio_GodMode", "Neural_Net_V2", "Crypto_Bot", "Legacy_Systems"].map(p => (
                            <div key={p} className="flex flex-col items-center gap-2 p-2 hover:bg-slate-800 rounded cursor-pointer">
                                <Folder size={32} className="text-yellow-500" />
                                <span className="text-xs text-center">{p}</span>
                            </div>
                        ))}
                    </div>
                )
            });

            registerApp({
                id: "terminal",
                title: "System_Terminal",
                icon: Terminal,
                component: (
                    <div className="font-mono text-xs text-green-500">
                        <p>root@lautaro-os:~# systemctl status portfolio</p>
                        <p>● portfolio.service - The Ultimate Portfolio</p>
                        <p>   Loaded: loaded (/etc/systemd/system/portfolio.service; enabled)</p>
                        <p>   Active: active (running) since Thu 2026-02-06 14:00:00 UTC</p>
                        <br />
                        <p className="animate-pulse">_</p>
                    </div>
                )
            });

            hasRegisteredRef.current = true;
        }
    }, [registerApp]);

    // Prevent body scroll when WebOS is active
    useEffect(() => {
        if (isWebOS) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isWebOS]);

    if (!isWebOS) {
        return (
            <button
                onClick={toggleWebOS}
                className="fixed bottom-4 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-24 z-40 bg-slate-950/80 border border-cyber-primary/30 text-cyber-primary p-2 rounded-lg hover:bg-cyber-primary/20 hover:border-cyber-primary transition-all flex items-center gap-2 backdrop-blur-md"
            >
                <Monitor size={18} />
                <span className="text-xs font-mono hidden md:inline">DESKTOP_MODE</span>
            </button>
        );
    }

    return (
        <div className="fixed inset-0 z-[200] bg-slate-900 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center font-sans">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

            {/* Desktop Area */}
            <div className="absolute inset-0 p-8 flex flex-col flex-wrap content-start gap-4" ref={constraintsRef}>
                {/* Desktop Icons */}
                {windows.map(app => (
                    <button
                        key={app.id}
                        onClick={() => openApp(app.id)}
                        className="flex flex-col items-center gap-1 w-24 p-2 rounded hover:bg-white/10 text-white group transition-colors"
                    >
                        <div className="p-3 bg-cyber-primary/20 rounded-xl group-hover:bg-cyber-primary/40 transition-colors ring-1 ring-cyber-primary/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                            <app.icon size={32} className="text-cyber-primary" />
                        </div>
                        <span className="text-xs font-medium text-shadow-sm bg-black/50 px-2 rounded">{app.title}</span>
                    </button>
                ))}

                {/* Windows */}
                <AnimatePresence>
                    {windows.filter(w => w.isOpen && !w.isMinimized).map(app => (
                        <motion.div
                            key={app.id}
                            drag
                            dragConstraints={constraintsRef}
                            dragMomentum={false}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="absolute top-20 left-1/4 w-[600px] h-[400px] bg-slate-950/90 border border-cyber-primary/30 rounded-lg shadow-2xl flex flex-col backdrop-blur-xl overflow-hidden"
                            style={{ zIndex: 50 }} // Simple z-index, could be state managed
                        >
                            {/* Window Bar */}
                            <div className="bg-slate-900 border-b border-cyber-primary/20 p-2 flex justify-between items-center cursor-move" onPointerDown={(e) => e.preventDefault()}>
                                <div className="flex items-center gap-2 text-cyber-primary text-sm font-mono pl-2">
                                    <app.icon size={14} />
                                    {app.title}
                                </div>
                                <div className="flex items-center gap-1">
                                    <button onClick={() => minimizeApp(app.id)} className="p-1 hover:bg-white/10 rounded text-slate-400"><Minus size={14} /></button>
                                    <button className="p-1 hover:bg-white/10 rounded text-slate-400"><Square size={12} /></button>
                                    <button onClick={() => closeApp(app.id)} className="p-1 hover:bg-red-500 rounded text-slate-400 hover:text-white"><X size={14} /></button>
                                </div>
                            </div>

                            {/* Window Content */}
                            <div className="flex-1 overflow-auto p-4 text-slate-300 relative">
                                {app.component}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Taskbar */}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-slate-950/80 backdrop-blur-md border-t border-cyber-primary/30 flex items-center px-4 gap-2 z-[250]">
                <button
                    onClick={toggleWebOS}
                    className="mr-4 p-2 bg-gradient-to-r from-cyber-primary to-blue-600 rounded text-white font-bold text-xs hover:opacity-80 transition-opacity"
                >
                    EXIT OS
                </button>

                {windows.filter(w => w.isOpen).map(app => (
                    <button
                        key={app.id}
                        onClick={() => openApp(app.id)} // Restore if minimized
                        className={`flex items-center gap-2 px-3 py-1.5 rounded transition-all border ${app.isMinimized ? 'bg-transparent border-transparent text-slate-400 hover:bg-white/5' : 'bg-white/10 border-white/20 text-white'}`}
                    >
                        <app.icon size={14} />
                        <span className="text-xs">{app.title}</span>
                    </button>
                ))}

                <div className="ml-auto text-xs font-mono text-cyber-primary">
                    {new Date().toLocaleTimeString()}
                </div>
            </div>
        </div>
    );
}
