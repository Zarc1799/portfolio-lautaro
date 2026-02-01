"use client";

import { motion } from "framer-motion";
import { resume } from "../data/resume";
import { User, MapPin, Mail, Linkedin } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass rounded-2xl p-8 md:p-12 relative z-10"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <User size={120} />
                    </div>

                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                        <span className="text-cyber-primary">01.</span>
                        Mission Briefing
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <p className="text-cyber-muted text-lg leading-relaxed">
                                {resume.personalInfo.summary}
                            </p>

                            <div className="space-y-4 pt-4">
                                <div className="flex items-center gap-3 text-cyber-text">
                                    <MapPin className="text-cyber-secondary" />
                                    <span>{resume.personalInfo.location}</span>
                                </div>
                                {/* 
                  Since the CV had placeholders for email/linkedin, 
                  we'll render them if they look valid or show a "Contact for info" 
                */}
                                <div className="flex items-center gap-3 text-cyber-text">
                                    <Mail className="text-cyber-secondary" />
                                    <a href={`mailto:${resume.personalInfo.email}`} className="hover:text-cyber-primary transition-colors">
                                        {resume.personalInfo.email}
                                    </a>
                                </div>
                                <div className="flex items-center gap-3 text-cyber-text">
                                    <Linkedin className="text-cyber-secondary" />
                                    <a href={resume.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyber-primary transition-colors">
                                        LinkedIn Profile
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyber-primary to-cyber-secondary opacity-20 blur-2xl rounded-full" />
                            <div className="relative border border-cyber-primary/20 bg-cyber-surface/50 p-6 rounded-lg font-mono text-sm text-cyber-muted">
                                <div className="flex justify-between items-center mb-4 border-b border-cyber-primary/10 pb-2">
                                    <span>cat profile.json</span>
                                    <span className="flex gap-1">
                                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                                        <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                    </span>
                                </div>
                                <pre className="overflow-x-auto">
                                    <code>
                                        {`{
  "status": "Active",
  "role": "${resume.personalInfo.title}",
  "clearance": "Level 1",
  "languages": [
    "Spanish (Native)",
    "Catalan (Native)",
    "English (B1)"
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
