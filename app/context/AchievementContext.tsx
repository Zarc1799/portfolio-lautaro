"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useSound } from "../hooks/useSound";
import { Trophy, Shield, Terminal, Globe, EyeOff, Gamepad2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export type Achievement = {
    id: string;
    title: string;
    description: string;
    icon: any;
    xp: number;
};

const ACHIEVEMENTS: Achievement[] = [
    { id: "observer", title: "The Observer", description: "Stayed on the site for 5 minutes.", icon: EyeOff, xp: 50 },
    { id: "hacker", title: "White Hat", description: "Gained ROOT access via Terminal.", icon: Shield, xp: 500 },
    { id: "spy", title: "Double Agent", description: "Activated Stealth Mode.", icon: Terminal, xp: 200 },
    { id: "explorer", title: "World Traveler", description: "Interacted with the 3D Globe.", icon: Globe, xp: 100 },
    { id: "konami", title: "Retro Gamer", description: "Entered the Konami Code.", icon: Gamepad2, xp: 1000 },
];

type AchievementContextType = {
    unlocked: string[];
    unlock: (id: string) => void;
};

const AchievementContext = createContext<AchievementContextType | undefined>(undefined);

export function AchievementProvider({ children }: { children: React.ReactNode }) {
    const [unlocked, setUnlocked] = useState<string[]>([]);
    const [toast, setToast] = useState<Achievement | null>(null);
    const { play } = useSound();

    useEffect(() => {
        const saved = localStorage.getItem("portfolio_achievements");
        if (saved) {
            setUnlocked(JSON.parse(saved));
        }

        // Observer Achievement (5 minutes)
        const timer = setTimeout(() => {
            unlock("observer");
        }, 300000); // 5 minutes

        return () => clearTimeout(timer);
    }, []);

    const unlock = (id: string) => {
        if (unlocked.includes(id)) return;

        const achievement = ACHIEVEMENTS.find(a => a.id === id);
        if (achievement) {
            const newUnlocked = [...unlocked, id];
            setUnlocked(newUnlocked);
            localStorage.setItem("portfolio_achievements", JSON.stringify(newUnlocked));

            setToast(achievement);
            play("success"); // Or specific achievement sound

            setTimeout(() => setToast(null), 5000);
        }
    };

    return (
        <AchievementContext.Provider value={{ unlocked, unlock }}>
            {children}
            <AnimatePresence>
                {toast && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.8 }}
                        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-[100] bg-slate-900 border border-yellow-500/50 rounded-xl p-4 shadow-[0_0_30px_rgba(234,179,8,0.2)] flex items-center gap-4 min-w-[300px]"
                    >
                        <div className="p-3 bg-yellow-500/10 rounded-full text-yellow-500">
                            <Trophy size={24} />
                        </div>
                        <div>
                            <div className="text-[10px] text-yellow-500 uppercase font-bold tracking-wider">Achievement Unlocked</div>
                            <div className="font-bold text-white text-sm">{toast.title}</div>
                            <div className="text-xs text-slate-400">{toast.description}</div>
                        </div>
                        <div className="text-xl font-bold text-yellow-500 ml-auto leading-none">
                            +{toast.xp}
                            <span className="text-[8px] block text-center opacity-50">XP</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </AchievementContext.Provider>
    );
}

export function useAchievement() {
    const context = useContext(AchievementContext);
    if (context === undefined) {
        throw new Error("useAchievement must be used within AchievementProvider");
    }
    return context;
}
