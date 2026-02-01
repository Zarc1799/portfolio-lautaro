"use client";

import { motion } from "framer-motion";
import { resume } from "../data/resume";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

export default function Experience() {
    return (
        <section id="experience" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                    <span className="text-cyber-primary">03.</span>
                    Operations Log
                </h2>

                <div className="space-y-12">
                    {/* Education */}
                    <div>
                        <h3 className="text-xl font-mono text-cyber-secondary mb-6 flex items-center gap-2">
                            <GraduationCap /> Education
                        </h3>
                        <div className="space-y-8 pl-4 border-l-2 border-cyber-primary/20">
                            {resume.education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative pl-8"
                                >
                                    <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-cyber-surface border-2 border-cyber-primary"></span>
                                    <div className="bg-cyber-surface/30 p-6 rounded-lg hover:bg-cyber-surface/50 transition-colors">
                                        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                                            <h4 className="text-lg font-bold text-cyber-text">
                                                {edu.degree}
                                            </h4>
                                            <span className="text-sm font-mono text-cyber-accent flex items-center gap-1">
                                                <Calendar size={14} /> {edu.period}
                                            </span>
                                        </div>
                                        <div className="text-cyber-primary mb-2 font-medium">
                                            {edu.institution}
                                        </div>
                                        <p className="text-cyber-muted text-sm">{edu.details}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Experience */}
                    <div>
                        <h3 className="text-xl font-mono text-cyber-secondary mb-6 flex items-center gap-2">
                            <Briefcase /> Work History
                        </h3>
                        <div className="space-y-8 pl-4 border-l-2 border-cyber-primary/20">
                            {resume.experience.map((job, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative pl-8"
                                >
                                    <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-cyber-surface border-2 border-cyber-primary"></span>
                                    <div className="bg-cyber-surface/30 p-6 rounded-lg hover:bg-cyber-surface/50 transition-colors">
                                        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                                            <h4 className="text-lg font-bold text-cyber-text">
                                                {job.role}
                                            </h4>
                                            <span className="text-sm font-mono text-cyber-accent flex items-center gap-1">
                                                <Calendar size={14} /> {job.period}
                                            </span>
                                        </div>
                                        <div className="text-cyber-primary mb-2 font-medium">
                                            {job.company}
                                        </div>
                                        <p className="text-cyber-muted text-sm">{job.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
