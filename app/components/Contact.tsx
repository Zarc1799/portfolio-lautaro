import { motion } from "framer-motion";
import { Terminal, Wifi, Send, ShieldCheck, ChevronRight } from "lucide-react";
import { Typewriter } from "./Typewriter";
import { useLanguage } from "../context/LanguageContext";
import { useSound } from "../hooks/useSound";

export default function Contact() {
    const { t } = useLanguage();
    const { play } = useSound();
    // HARDCODED DATA TO PREVENT CRASHES
    const email = "lautaromir2@gmail.com";
    const phone = "+34 627 623 807";

    const logs = [
        "Initializing secure handshake...",
        "Resolving host: lautaromir.dev...",
        "Exchange keys: ECDH-SHA256 [ESTABLISHED]",
        "Tunnel status: ACTIVE (128-bit AES)",
        "Awaiting user payload..."
    ];

    return (
        <section id="contact" className="py-20 bg-cyber-surface/20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-full bg-slate-950 rounded-lg overflow-hidden border border-cyber-primary/30 shadow-[0_0_50px_rgba(6,182,212,0.15)] font-mono text-sm md:text-base relative"
                >
                    {/* Mikrotik/Terminal Header */}
                    <div className="bg-slate-900 px-4 py-2 border-b border-cyber-primary/20 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-cyber-muted">
                            <Terminal size={14} />
                            <span>guest@lautaro-node: ~</span>
                        </div>
                        <div className="flex gap-2 group/controls">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50 hover:bg-red-500 hover:shadow-[0_0_8px_rgba(239,68,68,0.6)] transition-all duration-300 cursor-pointer" onClick={() => play("click")} />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50 hover:bg-yellow-500 hover:shadow-[0_0_8px_rgba(234,179,8,0.6)] transition-all duration-300 cursor-pointer" onClick={() => play("click")} />
                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50 hover:bg-green-500 hover:shadow-[0_0_8px_rgba(34,197,94,0.6)] transition-all duration-300 cursor-pointer" onClick={() => play("click")} />
                        </div>
                    </div>

                    {/* Terminal Body */}
                    <div className="p-6 md:p-10 min-h-[400px] flex flex-col justify-between relative">
                        {/* Background Grid Animation */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

                        <div className="space-y-4 z-10">
                            <div className="text-cyber-primary font-bold mb-4">
                                <Typewriter text="Welcome to Lautaro's Secure Gateway v3.0.1" />
                            </div>

                            {logs.map((log, index) => (
                                <div key={index} className="flex items-center gap-2 text-cyber-text">
                                    <span className="text-cyber-secondary">➜</span>
                                    {/* Cascading delay: 1500ms initial + 800ms per previous line */}
                                    <Typewriter text={log} delay={1500 + (index * 800)} />
                                    {log.includes("ACTIVE") && <Wifi size={14} className="animate-pulse text-green-400" />}
                                </div>
                            ))}

                            {/* Packet Animation Line */}
                            <div className="py-4 opacity-50">
                                <div className="flex items-center gap-4 text-xs text-cyber-muted">
                                    <span className="text-green-500">YOU (Client)</span>
                                    <div className="flex-1 h-px bg-cyber-primary/20 relative overflow-hidden">
                                        <div className="absolute top-0 bottom-0 w-8 bg-cyber-primary blur-[2px] animate-packet-flow" />
                                    </div>
                                    <span className="text-cyber-primary">SERVER (Lautaro)</span>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Area */}
                        <div className="mt-8 z-10 border-t border-cyber-primary/20 pt-8">
                            <div className="flex flex-col gap-6">
                                <div className="flex items-start gap-3">
                                    <ChevronRight className="text-cyber-primary animate-pulse" />
                                    <div className="w-full">
                                        <p className="text-cyber-muted mb-6">
                                            {t.contact.available}
                                        </p>

                                        <div className="flex flex-col sm:flex-row gap-6 items-center">
                                            <a
                                                href={`mailto:${email}`}
                                                className="group relative px-6 py-3 bg-cyber-primary/10 border border-cyber-primary text-cyber-primary hover:bg-cyber-primary hover:text-slate-900 transition-all w-full sm:w-auto text-center font-bold flex items-center justify-center gap-3"
                                                onMouseEnter={() => play("hover")}
                                                onClick={() => play("success")}
                                            >
                                                <Send size={18} />
                                                <span>{t.contact.send}</span>
                                                <div className="absolute inset-0 bg-cyber-primary/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity" />
                                            </a>

                                            <div
                                                className="flex items-center gap-2 text-cyber-muted text-sm border px-4 py-2 border-cyber-secondary/20 rounded bg-slate-900/50"
                                                onMouseEnter={() => play("hover")}
                                            >
                                                <ShieldCheck size={16} className="text-green-500" />
                                                <span className="text-xs uppercase tracking-widest">{t.contact.secureVoice}</span>
                                                <span className="text-cyber-text font-bold">{phone}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
