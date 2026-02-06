"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useSound } from "../hooks/useSound";

type Ghost = {
    id: string;
    name: string;
    x: number;
    y: number;
    color: string;
    status: string;
};

type GhostContextType = {
    ghosts: Ghost[];
    activeCount: number;
};

const GhostContext = createContext<GhostContextType | undefined>(undefined);

export function GhostProvider({ children }: { children: React.ReactNode }) {
    const [ghosts, setGhosts] = useState<Ghost[]>([]);
    const { play } = useSound();

    // Initialize Ghosts
    useEffect(() => {
        const initialGhosts = [
            { id: "g1", name: "Agent_404", x: 10, y: 10, color: "#10b981", status: "Scanning..." },
            { id: "g2", name: "Spectre_X", x: 80, y: 50, color: "#f59e0b", status: "Idle" },
            { id: "g3", name: "NetRunner", x: 40, y: 80, color: "#ef4444", status: "Breaching..." },
        ];
        setGhosts(initialGhosts);
    }, []);

    // Move Ghosts Randomly
    useEffect(() => {
        const interval = setInterval(() => {
            setGhosts(prev => prev.map(ghost => ({
                ...ghost,
                x: Math.max(0, Math.min(100, ghost.x + (Math.random() - 0.5) * 20)),
                y: Math.max(0, Math.min(100, ghost.y + (Math.random() - 0.5) * 20)),
                status: Math.random() > 0.7 ? ["Scanning...", "Idle", "Analyzing", "Watching"][Math.floor(Math.random() * 4)] : ghost.status
            })));
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <GhostContext.Provider value={{ ghosts, activeCount: ghosts.length + 1 }}>
            {children}
        </GhostContext.Provider>
    );
}

export function useGhost() {
    const context = useContext(GhostContext);
    if (context === undefined) {
        throw new Error("useGhost must be used within GhostProvider");
    }
    return context;
}
