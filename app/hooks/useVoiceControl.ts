"use client";

import { useState, useEffect, useCallback } from "react";
import { useSound } from "./useSound";
import { useStealth } from "../context/StealthContext";

// Define SpeechRecognition types safely
interface IWindow extends Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
}

export function useVoiceControl() {
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState("");
    const [commandMatch, setCommandMatch] = useState<string | null>(null);
    const { play } = useSound();
    const { toggleStealth, isStealth } = useStealth();

    const startListening = useCallback(() => {
        const win = window as unknown as IWindow;
        const SpeechRecognition = win.SpeechRecognition || win.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            console.warn("Speech Recognition not supported");
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.lang = "en-US";
        recognition.interimResults = true;
        recognition.maxAlternatives = 1;

        recognition.onstart = () => {
            setIsListening(true);
            play("click"); // Activation sound
        };

        recognition.onresult = (event: any) => {
            const current = event.resultIndex;
            const transcriptText = event.results[current][0].transcript.toLowerCase();
            setTranscript(transcriptText);

            // Command Matching
            if (transcriptText.includes("home")) {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setCommandMatch("Navigating to Home");
            } else if (transcriptText.includes("contact")) {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                setCommandMatch("Opening Comms");
            } else if (transcriptText.includes("skills") || transcriptText.includes("threat")) {
                document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
                setCommandMatch("analyzing threats");
            } else if (transcriptText.includes("stealth") || transcriptText.includes("boss") || transcriptText.includes("hide")) {
                if (!isStealth) toggleStealth();
                setCommandMatch("STEALTH MODE ENGAGED");
            } else if (transcriptText.includes("system") || transcriptText.includes("status")) {
                // Trigger status modal - requires context or global event
                // For now just visual acknowledgement
                setCommandMatch("Checking Systems...");
            } else if (transcriptText.includes("hack") || transcriptText.includes("access")) {
                // Could trigger terminal
                setCommandMatch("Access Denied. Terminal required.");
            }
        };

        recognition.onend = () => {
            setIsListening(false);
            setTimeout(() => setTranscript(""), 2000); // Clear after delay
        };

        recognition.start();

    }, [play, toggleStealth, isStealth]);

    return { isListening, transcript, commandMatch, startListening };
}
