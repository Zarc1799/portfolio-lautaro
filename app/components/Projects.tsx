"use client";

import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import NetworkDiagram from "./NetworkDiagram";
import { useLanguage } from "../context/LanguageContext";

export default function Projects() {
    const { t } = useLanguage();

    return (
        <section id="projects" className="py-20 bg-cyber-surface/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                    <span className="text-cyber-primary">03.</span>
                    {t.projects.title}
                </h2>

                <div className="grid gap-12">
                    {t.projects.list.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group relative glass rounded-2xl overflow-hidden border border-cyber-primary/20 hover:border-cyber-primary/50 transition-all duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyber-primary/5 via-transparent to-cyber-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="p-8 md:p-12 relative z-10 grid md:grid-cols-2 gap-8 md:gap-12">
                                {/* Left: Info */}
                                <div className="space-y-6">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-primary/10 text-cyber-primary text-xs font-mono border border-cyber-primary/20">
                                        <Lock size={12} /> {t.projects.badge}
                                    </div>

                                    <h3 className="text-3xl font-bold text-white group-hover:text-glow transition-all">
                                        {project.title}
                                    </h3>

                                    <p className="text-cyber-muted text-lg leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {project.tech.map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-slate-900 border border-slate-700 rounded text-sm text-cyber-secondary font-mono">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Right: Metrics/Visuals or Interactive Diagram */}
                                <div className="min-h-[400px] relative">
                                    <div className="absolute inset-0 bg-cyber-primary/5 rounded-xl blur-xl" />
                                    <NetworkDiagram />
                                    <p className="text-center text-xs text-cyber-muted mt-2 font-mono opacity-70">
                                        {t.networkDiagram.dragHint}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
