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
    title: "Lautaro Mir | Enterprise Systems Architect",
    description:
        "Portfolio of Lautaro Mir. Expert in OpenLDAP, NAS Infrastructure, and Zabbix Monitoring. Certified Mikrotik Associate.",
    openGraph: {
        title: "Lautaro Mir - Systems Architect",
        description:
            "Designing fault-tolerant networks and secure authentication systems.",
        type: "website",
        locale: "en_US",
        url: "https://lautaro-mir.vercel.app",
    },
    twitter: {
        card: "summary_large_image",
        title: "Lautaro Mir | CyberSec & Systems",
        description: "Designing fault-tolerant networks and secure authentication systems.",
    },
    keywords: [
        "Cybersecurity",
        "Mikrotik",
        "OpenLDAP",
        "Zabbix",
        "NAS",
        "System Admin",
        "Network Engineering",
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
