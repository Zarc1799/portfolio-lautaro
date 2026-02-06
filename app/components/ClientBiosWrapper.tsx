"use client";

import { useState, useEffect } from "react";
import BiosBoot from "./BiosBoot";

export default function ClientBiosWrapper({ children }: { children: React.ReactNode }) {
    const [booted, setBooted] = useState(false);
    const [showBios, setShowBios] = useState(true);

    useEffect(() => {
        // Check session storage to only show BIOS once per session
        const hasBooted = sessionStorage.getItem("bios_booted");
        if (hasBooted) {
            setBooted(true);
            setShowBios(false);
        }
    }, []);

    const handleBiosComplete = () => {
        sessionStorage.setItem("bios_booted", "true");
        setBooted(true);
        setTimeout(() => setShowBios(false), 500); // Small fade out or instant
    };

    if (!booted) {
        return <BiosBoot onComplete={handleBiosComplete} />;
    }

    return <>{children}</>;
}
