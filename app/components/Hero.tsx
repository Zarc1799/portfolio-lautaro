"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Terminal, ArrowRight, Shield } from "lucide-react";
import DecryptedText from "./DecryptedText";
import { useLanguage } from "../context/LanguageContext";
import { useSound } from "../hooks/useSound";

export default function Hero() {
    const [text, setText] = useState("");
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

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
                {/* Left Column: Text */}
                <div className="space-y-2">
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

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mt-6">
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

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#skills"
                        aria-label="View Technical Skills"
                        className="flex items-center gap-2 px-8 py-3 glass text-cyber-text font-medium rounded-lg hover:border-cyber-primary/50 transition-all font-mono"
                        onMouseEnter={() => play("hover")}
                        onClick={() => play("click")}
                    >
                        <Terminal size={20} />
                        {t.hero.secondaryCta}
                    </motion.a>

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

                {/* Right Column: Interactive 3D Cyber Core (Native Framer Motion) */}
                <div className="hidden lg:flex w-full h-[500px] xl:h-[650px] items-center justify-center relative rounded-3xl overflow-hidden glass border border-cyber-primary/20 shadow-[0_0_50px_rgba(56,189,248,0.15)] group perspective-1000">
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyber-primary/5 via-transparent to-cyber-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />
                    
                    {/* The Core */}
                    <motion.div 
                        className="relative w-80 h-80 flex items-center justify-center preserve-3d cursor-crosshair"
                        animate={{ rotateY: 360, rotateX: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        whileHover={{ scale: 1.1, rotateY: 0, rotateX: 0, transition: { duration: 0.5 } }}
                    >
                        {/* Outer Ring */}
                        <div className="absolute inset-0 border-2 border-slate-700 rounded-full border-t-cyber-primary/80 animate-[spin_8s_linear_infinite]" />
                        <div className="absolute inset-2 border border-slate-800 rounded-full border-b-cyber-secondary/80 animate-[spin_12s_linear_infinite_reverse]" />
                        
                        {/* Middle Tech Ring */}
                        <div className="absolute inset-8 border-[0.5px] border-dashed border-cyber-primary/40 rounded-full animate-[spin_20s_linear_infinite]" />
                        
                        {/* Inner Glowing Core */}
                        <div className="absolute inset-20 bg-gradient-to-br from-cyber-primary/20 to-cyber-secondary/20 rounded-full backdrop-blur-md border border-white/10 shadow-[0_0_40px_rgba(56,189,248,0.4)] flex items-center justify-center group-hover:shadow-[0_0_80px_rgba(56,189,248,0.8)] transition-all duration-500">
                            <div className="w-16 h-16 bg-cyber-background rounded-full flex items-center justify-center border border-cyber-primary/30 shadow-inner">
                                <Terminal className="text-cyber-primary w-8 h-8 animate-pulse" />
                            </div>
                        </div>

                        {/* Floating particles */}
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 bg-cyber-primary rounded-full blur-[1px]"
                                animate={{
                                    x: [Math.sin(i) * 100, Math.cos(i) * 150, Math.sin(i) * 100],
                                    y: [Math.cos(i) * 100, Math.sin(i) * 150, Math.cos(i) * 100],
                                    scale: [1, 1.5, 1],
                                }}
                                transition={{
                                    duration: 3 + i,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                style={{
                                    left: '50%',
                                    top: '50%',
                                }}
                            />
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
