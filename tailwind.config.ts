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
                    background: "#020617", // Slate 950
                    surface: "#0f172a", // Slate 900
                    primary: "#06b6d4", // Cyan 500
                    secondary: "#8b5cf6", // Violet 500
                    accent: "#f43f5e", // Rose 500
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
                "cyber-grid":
                    "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
            },
        },
    },
    plugins: [],
};
export default config;
