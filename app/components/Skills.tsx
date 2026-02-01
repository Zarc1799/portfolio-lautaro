"use client";

import { motion } from "framer-motion";
import { resume } from "../data/resume";
import { Server, Shield, Globe, Terminal } from "lucide-react";

// Map skill categories to icons
const iconMap: Record<string, any> = {
    networking: Server,
    security: Shield,
    infrastructure: Globe,
    development: Terminal,
};

export default function Skills() {
    const categories = Object.keys(resume.skills) as Array<keyof typeof resume.skills>;

    return (
        <section id="skills" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                    <span className="text-cyber-primary">02.</span>
                    Technical Arsenal
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {categories.map((category, index) => {
                        const Icon = iconMap[category] || Terminal;

                        return (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass p-6 rounded-xl border-l-4 border-l-cyber-primary hover:border-l-cyber-accent transition-all group"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-cyber-surface rounded-lg text-cyber-primary group-hover:text-cyber-accent transition-colors">
                                        <Icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold capitalize text-cyber-text">
                                        {category}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {resume.skills[category].map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 text-sm rounded-full bg-cyber-surface border border-cyber-primary/20 text-cyber-muted hover:text-cyber-primary hover:border-cyber-primary transition-colors cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
