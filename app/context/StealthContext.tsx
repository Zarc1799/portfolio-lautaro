"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useSound } from "../hooks/useSound";
import { useAchievement } from "./AchievementContext";

type StealthContextType = {
    isStealth: boolean;
    toggleStealth: () => void;
};

const StealthContext = createContext<StealthContextType | undefined>(undefined);

export function StealthProvider({ children }: { children: React.ReactNode }) {
    const [isStealth, setIsStealth] = useState(false);
    const { play } = useSound();
    const { unlock } = useAchievement();

    const toggleStealth = () => {
        setIsStealth((prev) => !prev);
        // Play specific sounds
        if (!isStealth) {
            // Enter stealth - quiet or office noise?
            play("click");
            unlock("spy");
        } else {
            // Exit stealth - boot sound?
            play("boot");
        }
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Panic Button: ESC or ALT+S
            if (e.key === "Escape" || (e.altKey && e.key.toLowerCase() === "s")) {
                toggleStealth();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isStealth]);

    return (
        <StealthContext.Provider value={{ isStealth, toggleStealth }}>
            {children}
        </StealthContext.Provider>
    );
}

export function useStealth() {
    const context = useContext(StealthContext);
    if (context === undefined) {
        throw new Error("useStealth must be used within a StealthProvider");
    }
    return context;
}
