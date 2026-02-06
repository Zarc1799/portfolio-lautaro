"use client";

import { useEffect, useRef } from "react";

export default function CyberRain() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas dimensions
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        // Matrix characters (Katakana + Latin + Numbers)
        const chars = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンabcdefghijklmnopqrstuvwxyz0123456789";
        const charArray = chars.split("");

        const fontSize = 14;
        const columns = canvas.width / fontSize;

        // Array to track y-coordinate of each column
        const drops: number[] = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -100; // Start at random negative heights
        }

        const draw = () => {
            // Semi-transparent black to create trail effect
            ctx.fillStyle = "rgba(10, 10, 12, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#06b6d4"; // Cyber primary color (cyan)
            ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

            for (let i = 0; i < drops.length; i++) {
                // Random character
                const text = charArray[Math.floor(Math.random() * charArray.length)];

                // Draw character
                // Add some randomness to opacity for "glitch" feel
                const isGlitch = Math.random() > 0.98;
                ctx.fillStyle = isGlitch ? "#fff" : "#06b6d4";

                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                // Reset drop to top randomly after it clears screen
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        };

        const interval = setInterval(draw, 33); // ~30 FPS

        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0 opacity-20"
        />
    );
}
