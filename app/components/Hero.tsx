"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Terminal, ArrowRight, Shield } from "lucide-react";
import DecryptedText from "./DecryptedText";
import { useLanguage } from "../context/LanguageContext";
import { useSound } from "../hooks/useSound";
import TerminalModal from "./TerminalModal";

export default function Hero() {
    const [text, setText] = useState("");
    const [isTerminalOpen, setIsTerminalOpen] = useState(false);
    const { t } = useLanguage();
    const { play } = useSound();
    // We can localize this typing text too if we want, or keep it "system" style
    const fullText = "SYSTEM.INIT(USER: LAUTARO_MIR)...";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) clearInterval(interval);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
        >
            {/* Background Grid */}
            <div className="absolute inset-0 z-0 bg-grid opacity-30 pointer-events-none" />

            {/* Animated Gradient Blob */}
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-cyber-primary/10 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-cyber-secondary/10 rounded-full blur-[100px] animate-pulse delay-1000" />

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
                
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-slate-800/50 backdrop-blur-sm shadow-xl text-cyber-primary mb-8 font-mono text-sm"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-primary"></span>
                    </span>
                    System Online
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                    <span className="block text-cyber-text">
                        <DecryptedText text="Lautaro Mir" />
                    </span>
                </h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl md:text-2xl text-cyber-secondary font-mono mb-8"
                >
                    &lt;{t.hero.role} /&gt;
                </motion.div>

                <div className="h-20 sm:h-8 mb-8 font-mono text-cyber-muted text-lg md:text-xl flex items-center justify-center">
                    <span className="break-all">
                        {text}
                    </span>
                    <span className="animate-pulse">_</span>
                </div>

                <p className="max-w-2xl mx-auto text-cyber-muted text-lg mb-10 leading-relaxed">
                    {t.hero.subtext}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#contact"
                        aria-label="Contact Lautaro"
                        className="flex items-center gap-2 px-8 py-3 bg-cyber-primary text-slate-900 font-bold rounded-lg shadow-[0_0_15px_rgba(56,189,248,0.4)] hover:shadow-[0_0_25px_rgba(56,189,248,0.6)] transition-all"
                        onMouseEnter={() => play("hover")}
                        onClick={() => play("click")}
                    >
                        <ShieldAlert size={20} />
                        {t.hero.cta}
                    </motion.a>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => { play("click"); setIsTerminalOpen(true); }}
                        aria-label="Open Interactive Terminal"
                        className="flex items-center gap-2 px-8 py-3 glass text-cyber-text font-medium rounded-lg hover:border-cyber-primary/50 transition-all font-mono"
                        onMouseEnter={() => play("hover")}
                    >
                        <Terminal size={20} />
                        {t.hero.secondaryCta}
                    </motion.button>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://github.com/Zarc1799"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit GitHub Profile"
                        className="flex items-center gap-2 px-8 py-3 bg-slate-800 text-gray-300 font-medium rounded-lg border border-gray-700 hover:border-slate-500 hover:bg-slate-700 transition-all font-mono"
                        onMouseEnter={() => play("hover")}
                        onClick={() => play("click")}
                    >
                        <span className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                            GitHub
                        </span>
                    </motion.a>
                </div>
            </div>
            
            <TerminalModal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
        </section>
    );
}
