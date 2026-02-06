"use client";

import { useEffect } from "react";
import { useAchievement } from "../context/AchievementContext";

export default function EasterEggs() {
    const { unlock } = useAchievement();

    useEffect(() => {
        // 1. CONSOLE EASTER EGG
        const asciiArt = `
    ██╗      █████╗ ██╗   ██╗████████╗ █████╗ ██████╗  ██████╗ 
    ██║     ██╔══██╗██║   ██║╚══██╔══╝██╔══██╗██╔══██╗██╔═══██╗
    ██║     ███████║██║   ██║   ██║   ███████║██████╔╝██║   ██║
    ██║     ██╔══██║██║   ██║   ██║   ██╔══██║██╔══██╗██║   ██║
    ███████╗██║  ██║╚██████╔╝   ██║   ██║  ██║██║  ██║╚██████╔╝
    ╚══════╝╚═╝  ╚═╝ ╚═════╝    ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ 
    `;
        console.log(
            `%c${asciiArt}`,
            "color: #06b6d4; font-weight: bold; font-family: monospace;"
        );
        console.log(
            "%c SYSTEM STATUS: SECURE \n ACCESS LEVEL: GRANTED \n WELCOME TO THE NETWORK.",
            "color: #22c55e; font-family: monospace; font-size: 12px; background: #020617; padding: 10px; border: 1px solid #22c55e; border-radius: 5px;"
        );

        // 2. TAB STEALTH MODE
        const originalTitle = document.title;
        const handleVisibilityChange = () => {
            if (document.hidden) {
                document.title = "⚠️ Signal Lost...";
            } else {
                document.title = "📡 Re-establishing connection...";
                setTimeout(() => {
                    document.title = originalTitle;
                }, 1000);
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);

        // 3. KONAMI CODE
        const konamiCode = [
            "ArrowUp",
            "ArrowUp",
            "ArrowDown",
            "ArrowDown",
            "ArrowLeft",
            "ArrowRight",
            "ArrowLeft",
            "ArrowRight",
            "b",
            "a",
        ];
        let konamiIndex = 0;

        const handleKeydown = (e: KeyboardEvent) => {
            if (e.key === konamiCode[konamiIndex]) {
                konamiIndex++;
                if (konamiIndex === konamiCode.length) {
                    activateKonamiMode();
                    konamiIndex = 0;
                }
            } else {
                konamiIndex = 0;
            }
        };

        const activateKonamiMode = () => {
            unlock("konami");
            alert("🔓 SYSTEM OVERRIDE: ROOT ACCESS GRANTED");
            document.body.style.fontFamily = "'Courier New', monospace";
            document.body.style.color = "#00ff00";
            document.body.style.textShadow = "0 0 5px #00ff00";
        };

        document.addEventListener("keydown", handleKeydown);

        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            document.removeEventListener("keydown", handleKeydown);
        };
    }, []);

    return null; // This component renders nothing visually
}
