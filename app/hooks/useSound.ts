"use client";

import { useEffect, useRef, useCallback } from "react";

// Sound types
type SoundType = "hover" | "click" | "success" | "error" | "typing" | "boot";

export function useSound() {
    const audioContextRef = useRef<AudioContext | null>(null);

    useEffect(() => {
        // Initialize AudioContext on user interaction
        const initAudio = () => {
            if (!audioContextRef.current) {
                audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
            }
            if (audioContextRef.current.state === "suspended") {
                audioContextRef.current.resume();
            }
        };

        window.addEventListener("click", initAudio);
        window.addEventListener("keydown", initAudio);

        return () => {
            window.removeEventListener("click", initAudio);
            window.removeEventListener("keydown", initAudio);
        };
    }, []);

    const play = useCallback((type: SoundType, volume: number = 0.1) => {
        if (!audioContextRef.current) return;

        const ctx = audioContextRef.current;
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        const now = ctx.currentTime;

        // Sound Synthesis based on type
        switch (type) {
            case "hover":
                // High frequency short blip
                oscillator.type = "sine";
                oscillator.frequency.setValueAtTime(800, now);
                oscillator.frequency.exponentialRampToValueAtTime(1200, now + 0.05);
                gainNode.gain.setValueAtTime(volume * 0.5, now);
                gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
                oscillator.start(now);
                oscillator.stop(now + 0.05);
                break;

            case "click":
                // Mechanical click (square wave + quick decay)
                oscillator.type = "square";
                oscillator.frequency.setValueAtTime(300, now);
                oscillator.frequency.exponentialRampToValueAtTime(100, now + 0.1);
                gainNode.gain.setValueAtTime(volume * 0.8, now);
                gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
                oscillator.start(now);
                oscillator.stop(now + 0.1);
                break;

            case "typing":
                // Very short high pitch blip for typing
                oscillator.type = "triangle";
                oscillator.frequency.setValueAtTime(600 + Math.random() * 200, now); // Randomize slightly
                gainNode.gain.setValueAtTime(volume * 0.3, now);
                gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
                oscillator.start(now);
                oscillator.stop(now + 0.03);
                break;

            case "success":
                // Ascending major arpeggio
                oscillator.type = "sine";
                oscillator.frequency.setValueAtTime(440, now);
                oscillator.frequency.setValueAtTime(554, now + 0.1); // C#
                oscillator.frequency.setValueAtTime(659, now + 0.2); // E
                gainNode.gain.setValueAtTime(volume, now);
                gainNode.gain.linearRampToValueAtTime(volume, now + 0.2);
                gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
                oscillator.start(now);
                oscillator.stop(now + 0.4);
                break;

            case "error":
                // Descending dissonance
                oscillator.type = "sawtooth";
                oscillator.frequency.setValueAtTime(100, now);
                oscillator.frequency.linearRampToValueAtTime(50, now + 0.3);
                gainNode.gain.setValueAtTime(volume, now);
                gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
                oscillator.start(now);
                oscillator.stop(now + 0.3);
                break;

            case "boot":
                // Modem-like handshake sound
                oscillator.type = "square";
                oscillator.frequency.setValueAtTime(440, now);
                oscillator.frequency.linearRampToValueAtTime(1200, now + 0.5);
                oscillator.frequency.linearRampToValueAtTime(440, now + 1.0);
                gainNode.gain.setValueAtTime(0, now);
                gainNode.gain.linearRampToValueAtTime(volume, now + 0.1);
                gainNode.gain.linearRampToValueAtTime(0.001, now + 1.5);
                oscillator.start(now);
                oscillator.stop(now + 1.5);
                break;
        }

    }, []);

    return { play };
}
