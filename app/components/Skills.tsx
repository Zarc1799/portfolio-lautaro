"use client";

import { motion } from "framer-motion";
import { Terminal, Cpu, Network, Shield, Database, Code, Layout, Globe, Activity } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useAchievement } from "../context/AchievementContext";
import { resume } from "../data/resume";
import dynamic from "next/dynamic";

// Dynamic import for 3D component with no SSR to prevent build errors
const WorldGlobe = dynamic(() => import("./WorldGlobe"), {
    ssr: false,
    loading: () => <div className="w-full h-full flex items-center justify-center text-cyber-primary/30 animate-pulse">Initializing 3D Core...</div>
});

// Map skill categories to icons
const iconMap: Record<string, any> = {
    networking: Network,
    security: Shield,
    infrastructure: Globe,
    development: Terminal,
    database: Database,
    backend: Cpu,
    frontend: Layout,
    devops: Code,
};

export default function Skills() {
    const { t } = useLanguage();
    const { unlock } = useAchievement();
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
                    <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center gap-3">
                        <span className="text-cyber-primary">02.</span>
                        {t.skills.title}
                        <div className="hidden md:flex ml-auto items-center gap-2 text-xs font-mono text-cyber-muted px-3 py-1 border border-cyber-primary/20 rounded-full bg-cyber-primary/5">
                            <Globe size={14} className="animate-pulse" />
                            <span>Global Threat Map: ACTIVE</span>
                        </div>
                    </h2>
                </motion.div>

                {/* Trigger Achievement when seen */}
                <motion.div onViewportEnter={() => unlock("explorer")} viewport={{ once: true }} />

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* 3D Globe Section */}
                    <div className="h-[400px] lg:h-[500px] w-full relative order-2 lg:order-1 perspective-1000">
                        <div className="absolute inset-0 bg-cyber-primary/5 rounded-full blur-[100px] animate-pulse" />
                        <div className="w-full h-full border border-cyber-primary/20 rounded-xl overflow-hidden bg-slate-950/50 backdrop-blur-sm relative z-10 shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                            <div className="absolute top-4 left-4 z-20 font-mono text-xs text-cyber-primary flex items-center gap-2">
                                <Activity size={12} />
                                <span>NET_TOPOLOGY_V4</span>
                            </div>
                            <WorldGlobe />
                            {/* Overlay Data */}
                            <div className="absolute bottom-4 right-4 z-20 text-right font-mono text-[10px] text-cyber-muted leading-tight pointer-events-none">
                                <div>NODES: 5</div>
                                <div>LATENCY: 12ms</div>
                                <div>ENCRYPTION: AES-256</div>
                            </div>
                        </div>
                    </div>

                    {/* Skill Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 order-1 lg:order-2">
                        {categories.map((category, index) => {
                            const Icon = iconMap[category] || Terminal;
                            // Dynamically get the randomized list from translations based on category
                            const listKey = `${category}List` as keyof typeof t.skills;
                            const resumeKey = category as keyof typeof resume.skills;
                            const titleKey = category as keyof typeof t.skills.categories;

                            const title = t.skills.categories[titleKey] || category;
                            const skillItems = (t.skills[listKey] as string[]) || resume.skills[resumeKey];

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
                                        {Array.isArray(skillItems) && skillItems.map((item) => (
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
            </div>
        </section>
    );
}
