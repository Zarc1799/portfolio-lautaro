"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
    text: string;
    delay?: number;
    onComplete?: () => void;
}

export const Typewriter = ({ text, delay = 0, onComplete }: TypewriterProps) => {
    const [displayedText, setDisplayedText] = useState("");
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setStarted(true);
        }, delay);
        return () => clearTimeout(timeout);
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length) {
                setDisplayedText((prev) => prev + text.charAt(index));
                index++;
            } else {
                clearInterval(interval);
                if (onComplete) onComplete();
            }
        }, 30); // Typing speed

        return () => clearInterval(interval);
    }, [started, text, onComplete]);

    return <span>{displayedText}<span className="animate-pulse">_</span></span>;
};
