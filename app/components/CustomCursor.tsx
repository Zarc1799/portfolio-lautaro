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

    // Crosshair Lines (Vertical & Horizontal)
    const variants = {
        default: {
            height: 20,
            width: 20,
            opacity: 1,
            rotate: 0,
            backgroundColor: "transparent",
            borderColor: "rgba(6, 182, 212, 0.5)", // cyan-500/50
            borderWidth: "1px",
            scale: 1,
        },
        hover: {
            height: 48,
            width: 48,
            opacity: 1,
            rotate: 45,
            backgroundColor: "rgba(6, 182, 212, 0.1)",
            borderColor: "#22d3ee", // cyan-400
            borderWidth: "2px",
            scale: 1.2,
        }
    };

    const dotVariants = {
        default: { opacity: 1, scale: 1 },
        hover: { opacity: 0, scale: 0 }
    };

    return (
        <div className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block">
            {/* Main Crosshair Box */}
            <motion.div
                className="fixed top-0 left-0 border border-cyber-primary rounded-sm pointer-events-none z-[9999]"
                variants={variants}
                animate={isHovering ? "hover" : "default"}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
                style={{
                    x: mousePosition.x - (isHovering ? 24 : 10),
                    y: mousePosition.y - (isHovering ? 24 : 10),
                }}
            >
                {/* Corner Accents for "Tech" feel */}
                <div className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t border-l border-cyber-primary" />
                <div className="absolute -top-[1px] -right-[1px] w-2 h-2 border-t border-r border-cyber-primary" />
                <div className="absolute -bottom-[1px] -left-[1px] w-2 h-2 border-b border-l border-cyber-primary" />
                <div className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b border-r border-cyber-primary" />
            </motion.div>

            {/* Center Dot */}
            <motion.div
                className="fixed top-0 left-0 w-1 h-1 bg-cyber-primary rounded-full pointer-events-none z-[9999]"
                variants={dotVariants}
                animate={isHovering ? "hover" : "default"}
                style={{
                    x: mousePosition.x,
                    y: mousePosition.y,
                }}
            />

            {/* Trailing Crosshair Lines (Full Screen) */}
            <div
                className="fixed top-0 left-0 w-full h-px bg-cyber-primary/10 pointer-events-none z-[9998]"
                style={{ top: mousePosition.y }}
            />
            <div
                className="fixed top-0 left-0 w-px h-full bg-cyber-primary/10 pointer-events-none z-[9998]"
                style={{ left: mousePosition.x }}
            />
        </div>
    );
}
