"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

interface DecryptedTextProps {
    text: string;
    className?: string;
}

export default function DecryptedText({ text, className = "" }: DecryptedTextProps) {
    const [displayText, setDisplayText] = useState(text);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        let iteration = 0;

        const handleMouseOver = () => {
            clearInterval(interval);
            iteration = 0;

            interval = setInterval(() => {
                setDisplayText((prev) =>
                    text
                        .split("")
                        .map((letter, index) => {
                            if (index < iteration) {
                                return text[index];
                            }
                            return letters[Math.floor(Math.random() * letters.length)];
                        })
                        .join("")
                );

                if (iteration >= text.length) {
                    clearInterval(interval);
                }

                iteration += 1 / 3;
            }, 30);
        };

        const element = document.getElementById(`decrypt-${text.replace(/\s/g, "")}`);
        element?.addEventListener("mouseover", handleMouseOver);

        return () => {
            clearInterval(interval);
            element?.removeEventListener("mouseover", handleMouseOver);
        };
    }, [text]);

    return (
        <span id={`decrypt-${text.replace(/\s/g, "")}`} className={`cursor-default ${className}`}>
            {displayText}
        </span>
    );
}
