"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Terminal } from "lucide-react";

export default function Hero() {
    const [text, setText] = useState("");
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
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-cyber-primary/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-cyber-secondary/20 rounded-full blur-[100px] animate-pulse delay-1000" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyber-primary/30 bg-cyber-primary/5 text-cyber-primary mb-8 font-mono text-sm"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-primary"></span>
                    </span>
                    Open for Work / Opportunities
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                    <span className="block text-cyber-text">Securing the</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary to-cyber-secondary text-glow">
                        Digital Frontier
                    </span>
                </h1>

                <div className="h-8 mb-8 font-mono text-cyber-muted text-lg md:text-xl">
                    {text}
                    <span className="animate-pulse">_</span>
                </div>

                <p className="max-w-2xl mx-auto text-cyber-muted text-lg mb-10 leading-relaxed">
                    Specialized in Network Defense, Ethical Hacking, and System Administration.
                    Turning vulnerabilities into fortified assets.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#contact"
                        className="flex items-center gap-2 px-8 py-3 bg-cyber-primary text-cyber-background font-bold rounded-lg shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all"
                    >
                        <ShieldAlert size={20} />
                        Initialize Contact
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#skills"
                        className="flex items-center gap-2 px-8 py-3 glass text-cyber-text font-medium rounded-lg hover:border-cyber-primary/50 transition-all font-mono"
                    >
                        <Terminal size={20} />
                        View Arsenal
                    </motion.a>
                </div>
            </div>
        </section>
    );
}
