"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Terminal, Shield, Code, Cpu } from "lucide-react";
import clsx from "clsx";

const navItems = [
    { name: "Identity", href: "#hero", icon: Terminal },
    { name: "Mission", href: "#about", icon: Shield },
    { name: "Arsenal", href: "#skills", icon: Code },
    { name: "Ops Log", href: "#experience", icon: Cpu },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
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
                    >
                        &lt;Lautaro.Mir /&gt;
                    </motion.div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item, i) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group flex items-center gap-2 text-cyber-muted hover:text-cyber-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    <item.icon className="w-4 h-4 group-hover:text-cyber-accent transition-colors" />
                                    <span className="font-mono group-hover:text-glow">
                                        {item.name}
                                    </span>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
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

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="md:hidden glass border-b border-cyber-primary/20"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-3 text-cyber-muted hover:text-cyber-primary block px-3 py-2 rounded-md text-base font-medium font-mono"
                                onClick={() => setIsOpen(false)}
                            >
                                <item.icon className="w-5 h-5" />
                                {item.name}
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
