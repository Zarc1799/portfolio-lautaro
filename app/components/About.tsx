"use client";

import { motion } from "framer-motion";
import { resume } from "../data/resume";
import { User, MapPin, Mail, Linkedin, Phone, Github, Lock } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useSound } from "../hooks/useSound";

export default function About() {
    const { t } = useLanguage();
    const { play } = useSound();

    return (
        <section id="about" className="py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass rounded-2xl p-5 md:p-12 relative z-10"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <User size={120} />
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold mb-6 flex flex-row items-baseline gap-2 md:gap-3 leading-tight">
                        <span className="text-cyber-primary flex-shrink-0 self-center">01.</span>
                        <span className="break-words">{t.about.title}</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <p className="text-cyber-muted text-base md:text-lg leading-relaxed break-words">
                                {t.personalInfo.summary}
                            </p>

                            <div className="space-y-3 pt-4">
                                <div className="flex items-center gap-3 text-cyber-text text-sm md:text-base">
                                    <MapPin className="text-cyber-secondary flex-shrink-0" size={18} />
                                    <span className="break-words">{t.about.location}</span>
                                </div>

                                <div className="flex items-center gap-3 text-cyber-text text-sm md:text-base">
                                    <Mail className="text-cyber-secondary flex-shrink-0" size={18} />
                                    <a
                                        href={`mailto:${resume.personalInfo.email}`}
                                        className="hover:text-cyber-primary transition-colors break-all"
                                        onMouseEnter={() => play("hover")}
                                        onClick={() => play("click")}
                                    >
                                        {resume.personalInfo.email}
                                    </a>
                                </div>
                                <div className="flex items-center gap-3 text-cyber-text text-sm md:text-base">
                                    <Phone className="text-cyber-secondary flex-shrink-0" size={18} />
                                    <a
                                        href={`tel:${(resume.personalInfo.phone || "").replace(/\s/g, '')}`}
                                        className="hover:text-cyber-primary transition-colors"
                                        onMouseEnter={() => play("hover")}
                                        onClick={() => play("click")}
                                    >
                                        {resume.personalInfo.phone || t.about.contact}
                                    </a>
                                </div>
                                <div className="flex items-center gap-3 text-cyber-text text-sm md:text-base">
                                    <Linkedin className="text-cyber-secondary flex-shrink-0" size={18} />
                                    <a
                                        href={resume.personalInfo.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-cyber-primary transition-colors truncate"
                                        onMouseEnter={() => play("hover")}
                                        onClick={() => play("click")}
                                    >
                                        {t.about.linkedin}
                                    </a>
                                </div>
                                {/* GitHub Button - Active */}
                                <div className="flex items-center gap-3 text-cyber-text text-sm md:text-base">
                                    <Github className="text-cyber-secondary flex-shrink-0" size={18} />
                                    <a
                                        href={resume.personalInfo.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-cyber-primary transition-colors truncate"
                                        onMouseEnter={() => play("hover")}
                                        onClick={() => play("click")}
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyber-primary to-cyber-secondary opacity-20 blur-2xl rounded-full" />
                            <div className="relative border border-cyber-primary/20 bg-cyber-surface/50 p-4 md:p-6 rounded-lg font-mono text-xs md:text-sm text-cyber-muted overflow-hidden">
                                <div className="flex justify-between items-center mb-4 border-b border-cyber-primary/10 pb-2">
                                    <span className="text-xs md:text-sm">cat profile.json</span>
                                    <span className="flex gap-1 group/controls">
                                        <span className="w-2 h-2 rounded-full bg-red-500 hover:bg-red-400 hover:shadow-[0_0_8px_rgba(239,68,68,0.8)] transition-all duration-300 cursor-pointer" onClick={() => play("click")}></span>
                                        <span className="w-2 h-2 rounded-full bg-yellow-500 hover:bg-yellow-400 hover:shadow-[0_0_8px_rgba(234,179,8,0.8)] transition-all duration-300 cursor-pointer" onClick={() => play("click")}></span>
                                        <span className="w-2 h-2 rounded-full bg-green-500 hover:bg-green-400 hover:shadow-[0_0_8px_rgba(34,197,94,0.8)] transition-all duration-300 cursor-pointer" onClick={() => play("click")}></span>
                                    </span>
                                </div>
                                <pre className="overflow-x-auto scrollbar-thin scrollbar-thumb-cyber-primary/20 scrollbar-track-transparent">
                                    <code className="text-xs md:text-sm">
                                        {`{
  "status": "${t.about.json.status}",
  "role": "${t.about.json.role}",
  "clearance": "${t.about.json.clearance}",
  "languages": [
    "${t.about.json.languages[0]}",
    "${t.about.json.languages[1]}",
    "${t.about.json.languages[2]}"
  ]
}`}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
