"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useSound } from "../hooks/useSound";

type DarkWebContextType = {
    isDarkWeb: boolean;
    toggleDarkWeb: () => void;
};

const DarkWebContext = createContext<DarkWebContextType | undefined>(undefined);

export function DarkWebProvider({ children }: { children: React.ReactNode }) {
    const [isDarkWeb, setIsDarkWeb] = useState(false);
    const { play } = useSound();

    const toggleDarkWeb = () => {
        if (!isDarkWeb) {
            play("click"); // Maybe a dial-up sound later?
            document.documentElement.classList.add("dark-web-mode");
        } else {
            play("click");
            document.documentElement.classList.remove("dark-web-mode");
        }
        setIsDarkWeb(prev => !prev);
    };

    return (
        <DarkWebContext.Provider value={{ isDarkWeb, toggleDarkWeb }}>
            {children}
        </DarkWebContext.Provider>
    );
}

export function useDarkWeb() {
    const context = useContext(DarkWebContext);
    if (context === undefined) {
        throw new Error("useDarkWeb must be used within DarkWebProvider");
    }
    return context;
}
