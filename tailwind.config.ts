import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                cyber: {
                    background: "#0B1120", // Deep modern dark
                    surface: "#111827", // Gray 900
                    primary: "#38bdf8", // Sky 400
                    secondary: "#818cf8", // Indigo 400
                    accent: "#22d3ee", // Cyan 400
                    text: "#f8fafc", // Slate 50
                    muted: "#94a3b8", // Slate 400
                },
            },
            fontFamily: {
                mono: ["var(--font-jetbrains-mono)", "monospace"],
                sans: ["var(--font-inter)", "sans-serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "custom-grid": "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            },
        },
    },
    plugins: [],
};
export default config;
