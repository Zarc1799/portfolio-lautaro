"use client";

import { useWebOS } from "../context/WebOSContext";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Square, Monitor, FileText, Terminal, Linkedin, Github, Mail, Phone, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

// Mini Terminal Component for WebOS
const InteractiveTerminal = () => {
    const [history, setHistory] = useState<string[]>([
        "LautaroOS v1.0.0 (tty1)",
        "Login: root",
        "Last login: Just now from 127.0.0.1",
        "",
        "Welcome to Lautaro's System.",
        "Type 'help' for a list of commands.",
        ""
    ]);
    const [input, setInput] = useState("");
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [history]);

    const handleCommand = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            const cmd = input.trim();
            const newHistory = [...history, `root@lautaro-os:~# ${cmd}`];

            switch (cmd.toLowerCase()) {
                case "help":
                    newHistory.push("Available commands: help, clear, whoami, ls, date, contact");
                    break;
                case "clear":
                    setHistory([]);
                    setInput("");
                    return;
                case "whoami":
                    newHistory.push("root (System Architect)");
                    break;
                case "ls":
                    newHistory.push("Documents  Downloads  Arsenal  Secrets");
                    break;
                case "date":
                    newHistory.push(new Date().toString());
                    break;
                case "contact":
                    newHistory.push("Email: contact@lautaromir.com");
                    newHistory.push("Phone: +34 627 623 807");
                    break;
                case "":
                    break;
                default:
                    newHistory.push(`bash: ${cmd}: command not found`);
            }
            setHistory(newHistory);
            setInput("");
        }
    };

    return (
        <div className="bg-black p-4 font-mono text-xs h-full flex flex-col text-green-500" onClick={e => e.stopPropagation()}>
            <div className="flex-1 overflow-y-auto">
                {history.map((line, i) => (
                    <div key={i} className="mb-1">{line}</div>
                ))}
                <div ref={bottomRef} />
            </div>
            <div className="flex items-center gap-2 mt-2 border-t border-green-900 pt-2">
                <span>root@lautaro-os:~#</span>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleCommand}
                    className="bg-transparent border-none outline-none flex-1 text-green-500 focus:ring-0"
                    autoFocus
                />
            </div>
        </div>
    );
};

export default function DesktopEnvironment() {
    const { isWebOS, windows, closeApp, minimizeApp, openApp, toggleWebOS, registerApp } = useWebOS();
    const constraintsRef = useRef(null);
    const hasRegisteredRef = useRef(false);
    const { language } = useLanguage();

    // Register Apps on Mount
    useEffect(() => {
        if (!hasRegisteredRef.current) {
            registerApp({
                id: "readme",
                title: "README.txt",
                icon: FileText,
                component: (
                    <div className="font-mono text-sm space-y-4 p-2">
                        <h1 className="text-xl font-bold border-b border-gray-600 pb-2">LAUTARO MIR</h1>
                        <p className="text-cyber-primary">SYSTEMS ARCHITECT & NETWORK ENGINEER</p>

                        <div className="bg-slate-900/50 p-4 rounded border border-gray-700">
                            <p className="italic text-gray-400 mb-2">"Building digital fortresses and interactive experiences."</p>
                            <p className="text-xs text-cyber-muted">Built with AI & Patience.</p>
                        </div>

                        <div className="space-y-2 mt-4">
                            <h3 className="font-bold text-gray-300">CONTACT INFO:</h3>
                            <div className="flex items-center gap-2">
                                <Mail size={14} className="text-cyber-primary" />
                                <a href="mailto:lautaromir2@gmail.com" className="hover:text-cyber-primary transition-colors">lautaromir2@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Github size={14} className="text-cyber-primary" />
                                <a href="https://github.com/Zarc1799" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-primary transition-colors">github.com/Zarc1799</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Linkedin size={14} className="text-cyber-primary" />
                                <a href="https://linkedin.com/in/lautaromir" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-primary transition-colors">linkedin.com/in/lautaromir</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone size={14} className="text-cyber-primary" />
                                <span>+34 627 623 807</span>
                            </div>
                        </div>
                    </div>
                )
            });

            // Replaced Projects_V4 with Technical Arsenal
            registerApp({
                id: "arsenal",
                title: "Arsenal_Specs",
                icon: Globe,
                component: (
                    <div className="grid grid-cols-2 gap-4 p-2 text-xs">
                        {["OpenLDAP Config", "Zabbix Monitor", "Mikrotik Scripts", "Docker Swarm", "K8s Manifests", "Python Exploits"].map(item => (
                            <div key={item} className="flex items-center gap-2 p-3 bg-slate-800 rounded border border-slate-700 hover:border-cyber-primary transition-colors cursor-pointer">
                                <FileText size={16} className="text-blue-400" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                )
            });

            registerApp({
                id: "terminal",
                title: "System_Terminal",
                icon: Terminal,
                component: <InteractiveTerminal />
            });

            registerApp({
                id: "secrets",
                title: "Top_Secret.enc",
                icon: FileText,
                component: (
                    <div className="font-mono text-xs text-red-400 space-y-2">
                        <p>ENCRYPTED FILE - AES-256</p>
                        <p>-------------------------</p>
                        <p className="break-all blur-[2px] select-none">
                            U2FsdGVkX1+q8X5q8X5q8X5q8X5q8X5q8X5q8X5q8X5q8X5q8X5q8X5q8X5q8X5q
                            8X5q8X5q8X5q8X5q8X5q8X5q8X5q8X5q8X5q8X5q8X5q8X5q8X5q8X5q8X5q8X5q
                        </p>
                        <p>-------------------------</p>
                        <p>ACCESS DENIED: MISSING PRIVATE KEY</p>
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
                className="fixed top-24 right-4 z-40 bg-slate-950/80 border border-cyber-primary/30 text-cyber-primary p-2 rounded-lg hover:bg-cyber-primary/20 hover:border-cyber-primary transition-all flex items-center gap-2 backdrop-blur-md shadow-lg group"
            >
                <Monitor size={18} className="group-hover:animate-pulse" />
                <span className="text-xs font-mono hidden md:inline">DESKTOP_MODE</span>
            </button>
        );
    }

    return (
        <div className="fixed inset-0 z-[200] bg-slate-900 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center font-sans">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

            {/* Desktop Area */}
            <div className="absolute inset-0 p-8 flex flex-col flex-wrap content-start gap-6" ref={constraintsRef}>
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
                        <span className="text-xs font-medium text-shadow-sm bg-black/50 px-2 rounded mt-1">{app.title}</span>
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
                            style={{ zIndex: 50 }}
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

                <div className="ml-auto text-xs font-mono text-cyber-primary flex items-center gap-4">
                    <span className="opacity-50">USER: ROOT</span>
                    <span>{new Date().toLocaleTimeString()}</span>
                </div>
            </div>
        </div>
    );
}
