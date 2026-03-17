"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, Shield, Code, Cpu, Globe } from "lucide-react";
import clsx from "clsx";
import DecryptedText from "./DecryptedText";
import TerminalModal from "./TerminalModal";
import { useLanguage } from "../context/LanguageContext";
import { Language } from "../data/translations";
import { useSound } from "../hooks/useSound";

const navItems = [
    { nameKey: "identity", href: "#hero", icon: Terminal },
    { nameKey: "mission", href: "#about", icon: Shield },
    { nameKey: "arsenal", href: "#skills", icon: Code },
    { nameKey: "opsLog", href: "#experience", icon: Cpu },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isTerminalOpen, setIsTerminalOpen] = useState(false);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();
    const { play } = useSound();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleLanguage = (lang: Language) => {
        play("click");
        setLanguage(lang);
        setIsLangMenuOpen(false);
    };

    return (
        <>
            <TerminalModal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
            <nav
                className={clsx(
                    "fixed w-full z-50 transition-all duration-300 border-b",
                    scrolled
                        ? "bg-cyber-background/90 backdrop-blur-md border-cyber-primary/20 py-2"
                        : "bg-transparent border-transparent py-4"
                )}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex-shrink-0 font-mono text-cyber-primary font-bold text-xl tracking-tighter"
                            onMouseEnter={() => play("hover")}
                        >
                            &lt;<DecryptedText text="Lautaro.Mir" /> /&gt;
                        </motion.div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-center space-x-8">
                                {navItems.map((item, i) => (
                                    <motion.a
                                        key={item.href}
                                        href={item.href}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="group flex items-center gap-2 text-cyber-muted hover:text-cyber-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                        onMouseEnter={() => play("hover")}
                                        onClick={() => play("click")}
                                    >
                                        <item.icon className="w-4 h-4 group-hover:text-cyber-accent transition-colors" />
                                        <span className="font-mono group-hover:text-glow">
                                            {t.nav[item.nameKey as keyof typeof t.nav]}
                                        </span>
                                    </motion.a>
                                ))}

                                {/* Language Switcher */}
                                <div className="relative">
                                    <button
                                        onClick={() => {
                                            play("click");
                                            setIsLangMenuOpen(!isLangMenuOpen);
                                        }}
                                        onMouseEnter={() => play("hover")}
                                        className="flex items-center gap-2 p-2 rounded-md text-cyber-primary hover:bg-cyber-primary/10 transition-colors"
                                    >
                                        <Globe size={18} />
                                        <span className="uppercase font-mono text-sm">{language}</span>
                                    </button>

                                    <AnimatePresence>
                                        {isLangMenuOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                className="absolute right-0 mt-2 w-32 bg-cyber-surface border border-cyber-primary/30 rounded-md shadow-xl overflow-hidden"
                                            >
                                                {(['en', 'es', 'ca', 'zh'] as Language[]).map((lang) => (
                                                    <button
                                                        key={lang}
                                                        onClick={() => toggleLanguage(lang)}
                                                        onMouseEnter={() => play("hover")}
                                                        className={clsx(
                                                            "w-full text-left px-4 py-2 text-sm font-mono hover:bg-cyber-primary/20 transition-colors",
                                                            language === lang ? "text-cyber-accent bg-cyber-primary/10" : "text-cyber-muted"
                                                        )}
                                                    >
                                                        {lang === 'en' ? 'ENGLISH' : lang === 'es' ? 'ESPAÑOL' : lang === 'ca' ? 'CATALÀ' : '中文'}
                                                    </button>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Terminal Trigger Button */}
                                <motion.button
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5 }}
                                    onClick={() => {
                                        play("boot");
                                        setIsTerminalOpen(true);
                                    }}
                                    onMouseEnter={() => play("hover")}
                                    className="ml-4 p-2 bg-slate-800 rounded-md border border-cyber-primary/30 text-cyber-primary hover:bg-cyber-primary hover:text-slate-900 transition-all shadow-[0_0_10px_rgba(6,182,212,0.1)] hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                                    title="Open CMD"
                                >
                                    <Terminal size={20} />
                                </motion.button>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => {
                                    play("click");
                                    setIsOpen(!isOpen);
                                }}
                                className="inline-flex items-center justify-center p-2 rounded-md text-cyber-muted hover:text-cyber-primary hover:bg-cyber-surface focus:outline-none"
                            >
                                <span className="sr-only">Open main menu</span>
                                {isOpen ? (
                                    <X className="block h-6 w-6" />
                                ) : (
                                    <Menu className="block h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="md:hidden glass border-b border-cyber-primary/20"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="flex items-center gap-3 text-cyber-muted hover:text-cyber-primary block px-3 py-2 rounded-md text-base font-medium font-mono"
                                    onClick={() => {
                                        play("click");
                                        setIsOpen(false);
                                    }}
                                >
                                    <item.icon className="w-5 h-5" />
                                    {t.nav[item.nameKey as keyof typeof t.nav]}
                                </a>
                            ))}

                            {/* Mobile Language Switcher */}
                            <div className="flex gap-2 p-3 border-t border-cyber-primary/10 mt-2">
                                {(['en', 'es', 'ca', 'zh'] as Language[]).map((lang) => (
                                    <button
                                        key={lang}
                                        onClick={() => toggleLanguage(lang)}
                                        className={clsx(
                                            "px-3 py-1 rounded border text-xs font-mono transition-colors",
                                            language === lang
                                                ? "border-cyber-accent text-cyber-accent bg-cyber-accent/10"
                                                : "border-cyber-muted/30 text-cyber-muted"
                                        )}
                                    >
                                        {lang.toUpperCase()}
                                    </button>
                                ))}
                            </div>

                            {/* Mobile Terminal Button */}
                            <button
                                onClick={() => {
                                    play("boot");
                                    setIsOpen(false);
                                    setIsTerminalOpen(true);
                                }}
                                className="w-full text-left flex items-center gap-3 text-cyber-primary hover:text-cyber-accent block px-3 py-2 rounded-md text-base font-medium font-mono border-t border-cyber-primary/10 mt-2 pt-4"
                            >
                                <Terminal className="w-5 h-5" />
                                {t.nav.openTerminal}
                            </button>
                        </div>
                    </motion.div>
                )}
            </nav>
        </>
    );
}
