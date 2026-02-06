"use client";

import { motion } from "framer-motion";
import { resume } from "../data/resume";
import { Server, Shield, Globe, Terminal } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

// Map skill categories to icons
const iconMap: Record<string, any> = {
    networking: Server,
    security: Shield,
    infrastructure: Globe,
    development: Terminal,
};

export default function Skills() {
    const { t } = useLanguage();
    const categories: Array<keyof typeof resume.skills> = ['networking', 'security', 'infrastructure', 'development'];

    return (
        <section id="skills" className="py-20 relative bg-cyber-background/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                        <span className="text-cyber-primary">02.</span>
                        {t.skills.title}
                    </h2>
                    <div className="h-1 w-20 bg-cyber-primary rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => {
                        const Icon = iconMap[category] || Terminal;
                        const title = t.skills.categories[category as keyof typeof t.skills.categories] || category;
                        // Dynamically get the randomized list from translations based on category
                        // e.g. networking -> networkingList
                        const listKey = `${category}List` as keyof typeof t.skills;
                        // Force casting because TS might not infer strict keys
                        const skillItems = (t.skills[listKey] as string[]) || resume.skills[category];

                        return (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass p-6 rounded-xl hover:border-cyber-primary/50 transition-colors group"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-3 rounded-lg bg-cyber-primary/10 text-cyber-primary group-hover:bg-cyber-primary group-hover:text-cyber-background transition-colors">
                                        <Icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold capitalize font-mono text-sm md:text-base">
                                        {title}
                                    </h3>
                                </div>
                                <ul className="space-y-2">
                                    {skillItems.map((item) => (
                                        <li key={item} className="text-cyber-muted text-xs md:text-sm flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-cyber-secondary flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
