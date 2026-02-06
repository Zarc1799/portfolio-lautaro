"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        window.addEventListener("mousemove", updateMousePosition);

        // Attach listeners to all interactive elements
        const handleInteractions = () => {
            const interactives = document.querySelectorAll("a, button, input, textarea, [role='button']");
            interactives.forEach((el) => {
                el.addEventListener("mouseenter", handleMouseEnter);
                el.addEventListener("mouseleave", handleMouseLeave);
            });
        };

        handleInteractions();

        // Re-attach listeners when DOM changes (basic observer)
        const observer = new MutationObserver(handleInteractions);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            observer.disconnect();
            const interactives = document.querySelectorAll("a, button, input, textarea, [role='button']");
            interactives.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, [isVisible]);

    // Hide default cursor
    useEffect(() => {
        if (typeof window !== 'undefined' && window.matchMedia("(hover: hover)").matches) {
            document.body.style.cursor = "none";
            const elements = document.querySelectorAll("a, button, input, textarea, [role='button']");
            elements.forEach((el: any) => el.style.cursor = "none");
        }
        return () => {
            document.body.style.cursor = "auto";
        };
    }, []);

    if (!isVisible) return null;

    // Minimalist Design
    const variants = {
        default: {
            height: 10,
            width: 10,
            backgroundColor: "#06b6d4", // cyan-500
            borderWidth: "0px",
            borderColor: "transparent",
            opacity: 0.8,
            scale: 1,
        },
        hover: {
            height: 32,
            width: 32,
            backgroundColor: "transparent",
            borderWidth: "1px",
            borderColor: "#06b6d4", // cyan-500
            opacity: 1,
            scale: 1,
        }
    };

    return (
        <motion.div
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-screen"
            variants={variants}
            animate={isHovering ? "hover" : "default"}
            transition={{ type: "spring", stiffness: 800, damping: 35, mass: 0.5 }}
            style={{
                x: mousePosition.x - (isHovering ? 16 : 5),
                y: mousePosition.y - (isHovering ? 16 : 5),
            }}
        />
    );
}
