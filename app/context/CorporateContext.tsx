"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface CorporateContextType {
    isCorporate: boolean;
    toggleCorporate: () => void;
}

const CorporateContext = createContext<CorporateContextType | undefined>(undefined);

export function CorporateProvider({ children }: { children: React.ReactNode }) {
    const [isCorporate, setIsCorporate] = useState(false);

    const toggleCorporate = () => {
        setIsCorporate(prev => !prev);
    };

    useEffect(() => {
        if (isCorporate) {
            document.documentElement.classList.add("corporate-mode");
            document.body.classList.add("bg-slate-50", "text-slate-900");
            document.body.classList.remove("bg-slate-950", "text-slate-200");
        } else {
            document.documentElement.classList.remove("corporate-mode");
            document.body.classList.remove("bg-slate-50", "text-slate-900");
            document.body.classList.add("bg-slate-950", "text-slate-200");
        }
    }, [isCorporate]);

    return (
        <CorporateContext.Provider value={{ isCorporate, toggleCorporate }}>
            {children}
        </CorporateContext.Provider>
    );
}

export const useCorporate = () => {
    const context = useContext(CorporateContext);
    if (context === undefined) {
        throw new Error("useCorporate must be used within a CorporateProvider");
    }
    return context;
};
