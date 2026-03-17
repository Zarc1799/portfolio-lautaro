"use client";

import { motion } from "framer-motion";

const endorsements = [
  "Advanced Next.js Architecture",
  "Zero-Trust Security Models",
  "OpenLDAP Identity Provider",
  "Enterprise-Grade Deployments",
  "99.9% Uptime Engineering",
  "Fault-Tolerant Systems",
  "Full-Stack TypeScript",
  "AI & Multi-Agent Frameworks",
  "Docker Containerization",
  "Zabbix Infrastructure Monitoring"
];

export default function Marquee() {
    return (
        <div className="w-full relative overflow-hidden bg-cyber-background/80 py-4 border-y border-cyber-primary/20 backdrop-blur-md">
            {/* Gradient Mask for fading edges */}
            <div className="absolute inset-y-0 left-0 w-[10%] bg-gradient-to-r from-cyber-background to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-[10%] bg-gradient-to-l from-cyber-background to-transparent z-10 pointer-events-none"></div>

            <div className="flex w-[200%] animate-marquee">
                <div className="flex w-1/2 justify-around items-center">
                    {endorsements.map((text, i) => (
                        <div key={`a-${i}`} className="flex items-center gap-4 mx-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyber-primary animate-pulse shadow-[0_0_10px_#38bdf8]"></span>
                            <span className="text-cyber-muted font-mono whitespace-nowrap text-sm tracking-widest uppercase font-semibold">
                                {text}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="flex w-1/2 justify-around items-center">
                    {endorsements.map((text, i) => (
                        <div key={`b-${i}`} className="flex items-center gap-4 mx-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyber-primary animate-pulse shadow-[0_0_10px_#38bdf8]"></span>
                            <span className="text-cyber-muted font-mono whitespace-nowrap text-sm tracking-widest uppercase font-semibold">
                                {text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
