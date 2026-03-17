import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://lautaromir.com"),
    title: "Lautaro Mir | Enterprise Systems & AI Architect",
    description:
        "Portfolio of Lautaro Mir. Expert in OpenLDAP, NAS Infrastructure, and Zabbix Monitoring. Certified Mikrotik Associate.",
    openGraph: {
        title: "Lautaro Mir - Systems & AI Architect",
        description:
            "Designing fault-tolerant networks, secure authentication systems, and autonomous multi-agent AI frameworks.",
        type: "website",
        locale: "en_US",
        url: "https://lautaromir.com",
    },
    twitter: {
        card: "summary_large_image",
        title: "Lautaro Mir | CyberSec & AI Systems",
        description: "Designing fault-tolerant networks and autonomous multi-agent frameworks.",
    },
    keywords: [
        "Cybersecurity",
        "Mikrotik",
        "OpenLDAP",
        "Zabbix",
        "NAS",
        "System Admin",
        "Network Engineering",
        "AI Agents",
        "n8n",
        "Multi-Agent Systems",
        "Systems Architect Barcelona"
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
            <body className="bg-cyber-background text-cyber-text selection:bg-cyber-primary/30 selection:text-cyber-primary">
                <LanguageProvider>
                    {children}
                </LanguageProvider>
            </body>
        </html>
    );
}
