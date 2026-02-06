"use client";

import React, { createContext, useContext, useState } from "react";
import { useSound } from "../hooks/useSound";

export type WindowApp = {
    id: string;
    title: string;
    icon: any;
    component: React.ReactNode;
    isOpen: boolean;
    isMinimized: boolean;
};

type WebOSContextType = {
    isWebOS: boolean;
    toggleWebOS: () => void;
    windows: WindowApp[];
    openApp: (id: string) => void;
    closeApp: (id: string) => void;
    minimizeApp: (id: string) => void;
    registerApp: (app: Omit<WindowApp, "isOpen" | "isMinimized">) => void;
};

const WebOSContext = createContext<WebOSContextType | undefined>(undefined);

export function WebOSProvider({ children }: { children: React.ReactNode }) {
    const [isWebOS, setIsWebOS] = useState(false);
    const [windows, setWindows] = useState<WindowApp[]>([]);
    const { play } = useSound();

    const toggleWebOS = () => {
        play("click"); // Startup sound
        setIsWebOS(prev => !prev);
    };

    const registerApp = (app: Omit<WindowApp, "isOpen" | "isMinimized">) => {
        setWindows(prev => {
            if (prev.find(w => w.id === app.id)) return prev;
            return [...prev, { ...app, isOpen: false, isMinimized: false }];
        });
    };

    const openApp = (id: string) => {
        play("click");
        setWindows(prev => prev.map(w => w.id === id ? { ...w, isOpen: true, isMinimized: false } : w));
    };

    const closeApp = (id: string) => {
        play("error"); // Closing sound
        setWindows(prev => prev.map(w => w.id === id ? { ...w, isOpen: false } : w));
    };

    const minimizeApp = (id: string) => {
        play("click");
        setWindows(prev => prev.map(w => w.id === id ? { ...w, isMinimized: true } : w));
    };

    return (
        <WebOSContext.Provider value={{ isWebOS, toggleWebOS, windows, openApp, closeApp, minimizeApp, registerApp }}>
            {children}
        </WebOSContext.Provider>
    );
}

export function useWebOS() {
    const context = useContext(WebOSContext);
    if (context === undefined) {
        throw new Error("useWebOS must be used within WebOSProvider");
    }
    return context;
}
