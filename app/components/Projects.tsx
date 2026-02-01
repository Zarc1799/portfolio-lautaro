"use client";

import { motion } from "framer-motion";
import { resume } from "../data/resume";
import { Server, Database, Activity, Lock, ArrowUpRight } from "lucide-react";

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-cyber-surface/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                    <span className="text-cyber-primary">03.</span>
                    Major Deployments
                </h2>

                <div className="grid gap-12">
                    {resume.projects.map((project, index) => (
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
                                        <Lock size={12} /> ENTERPRISE GRADE
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

                                {/* Right: Metrics/Visuals */}
                                <div className="space-y-6">
                                    <div className="bg-slate-950/50 rounded-xl p-6 border border-cyber-primary/10">
                                        <h4 className="text-sm font-mono text-cyber-muted mb-4 flex items-center gap-2 border-b border-white/5 pb-2">
                                            <Activity size={16} className="text-green-500" /> SYSTEM ARCHITECTURE
                                        </h4>

                                        <div className="grid gap-4">
                                            <div className="flex items-start gap-3">
                                                <div className="p-2 bg-blue-500/10 rounded text-blue-400 mt-1"><Server size={18} /></div>
                                                <div>
                                                    <div className="text-white font-bold">OpenLDAP + Roaming</div>
                                                    <div className="text-xs text-cyber-muted">Data Portability across nodes</div>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="p-2 bg-purple-500/10 rounded text-purple-400 mt-1"><Database size={18} /></div>
                                                <div>
                                                    <div className="text-white font-bold">Automated NAS Backups</div>
                                                    <div className="text-xs text-cyber-muted">RAID-Z Fault Tolerance</div>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="p-2 bg-red-500/10 rounded text-red-400 mt-1"><Activity size={18} /></div>
                                                <div>
                                                    <div className="text-white font-bold">Zabbix + Telegram</div>
                                                    <div className="text-xs text-cyber-muted">Instant Alerting Pipeline</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
