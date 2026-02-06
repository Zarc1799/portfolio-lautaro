"use client";

import { useGhost } from "../context/GhostContext";
import { motion } from "framer-motion";
import { MousePointer2 } from "lucide-react";

export default function GhostOverlay() {
    const { ghosts } = useGhost();

    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            {ghosts.map(ghost => (
                <motion.div
                    key={ghost.id}
                    initial={{ x: `${ghost.x}%`, y: `${ghost.y}%` }}
                    animate={{ x: `${ghost.x}%`, y: `${ghost.y}%` }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="absolute flex flex-col gap-1"
                >
                    <MousePointer2
                        size={16}
                        className="transform -rotate-12"
                        fill={ghost.color}
                        color={ghost.color}
                    />
                    <div
                        className="px-2 py-0.5 rounded text-[10px] font-mono text-white whitespace-nowrap backdrop-blur-sm"
                        style={{ backgroundColor: ghost.color }}
                    >
                        {ghost.name} | {ghost.status}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
