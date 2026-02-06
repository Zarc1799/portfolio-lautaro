"use client";

import { useState, useEffect, useRef } from "react";
import { useSound } from "../hooks/useSound";

export default function BiosBoot({ onComplete }: { onComplete: () => void }) {
    const [lines, setLines] = useState<string[]>([]);
    const [memoryCount, setMemoryCount] = useState(0);
    const { play } = useSound();
    const hasStartedRef = useRef(false);

    useEffect(() => {
        if (hasStartedRef.current) return;
        hasStartedRef.current = true;

        const bootSequence = [
            { text: "American Megatrends, Inc.", delay: 100 },
            { text: "BIOS Date: 02/06/26 15:32:00 Ver: 1.0.0", delay: 200 },
            { text: "CPU: Neural Quantum Processor @ 45.0 GHz", delay: 100 },
            { text: "Speed: 45000 MHz", delay: 100 },
            { text: "", delay: 0 },
            { text: "Press DEL to run Setup", delay: 0 },
            { text: "Press F11 for Boot Menu", delay: 0 },
            { text: "", delay: 100 },
        ];

        let delaySum = 0;

        // Initial text lines
        bootSequence.forEach((step) => {
            delaySum += step.delay;
            setTimeout(() => {
                setLines((prev) => [...prev, step.text]);
            }, delaySum);
        });

        // Memory Test Simulation
        const memoryStartDelay = delaySum + 500;
        setTimeout(() => {
            setLines((prev) => [...prev, "Memory Clock: 6400 MHz"]);
            const duration = 1500;
            const steps = 50;
            const increment = 64000 / steps;

            let currentMem = 0;
            const interval = setInterval(() => {
                currentMem += increment;
                if (currentMem >= 65536) {
                    currentMem = 65536;
                    clearInterval(interval);
                    setMemoryCount(65536);
                } else {
                    setMemoryCount(Math.floor(currentMem));
                }
            }, duration / steps);
        }, memoryStartDelay);

        // Hardware Detection
        const detectionDelay = memoryStartDelay + 1800;
        const hardwareSteps = [
            { text: "Detecting NVMe Drives...", delay: 200 },
            { text: "  > M.2_1: SAMSUNG 990 PRO 2TB (Good)", delay: 400 },
            { text: "  > M.2_2: SYSTEM_ROOT (Encrypted)", delay: 200 },
            { text: "Detecting USB Devices...", delay: 300 },
            { text: "  > USB_1: Keyboard", delay: 100 },
            { text: "  > USB_2: Mouse", delay: 100 },
            { text: "  > USB_3: Neural Interface Link", delay: 300 },
            { text: "Initializing High-Level OS...", delay: 800 },
            { text: "Booting...", delay: 500 },
        ];

        let hardwareDelaySum = detectionDelay;
        hardwareSteps.forEach(step => {
            hardwareDelaySum += step.delay;
            setTimeout(() => {
                setLines(prev => [...prev, step.text]);
                if (step.text === "Booting...") {
                    play("click"); // Simulating boot/click sound
                }
            }, hardwareDelaySum);
        });

        // Finish
        setTimeout(() => {
            onComplete();
        }, hardwareDelaySum + 1000);

    }, [play, onComplete]);

    // Skip handler
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
                onComplete();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 bg-black z-[99999] font-mono text-white p-8 cursor-none select-none overflow-hidden text-lg">
            <div className="flex justify-between mb-8">
                <div>
                    {lines.map((line, i) => (
                        <div key={i} className="min-h-[1.5rem] whitespace-pre-wrap">{line}</div>
                    ))}
                    {memoryCount > 0 && (
                        <div className="mt-2">
                            Memory Test: {memoryCount}K OK
                        </div>
                    )}
                </div>
                <div className="text-right">
                    <div className="w-32 h-32 border-4 border-white flex items-center justify-center mb-4">
                        <span className="text-4xl font-bold">LM</span>
                    </div>
                    <div>Energy Star Ally</div>
                </div>
            </div>

            <div className="absolute bottom-8 left-8 right-8 border-t-2 border-white pt-2 flex justify-between text-sm">
                <div>02/06/2026-LautaroMir-v3.0.1</div>
                <div>DEL:Setup  F11:Boot Menu  F12:Network Boot</div>
            </div>
        </div>
    );
}
