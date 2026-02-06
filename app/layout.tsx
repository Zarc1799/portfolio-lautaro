import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import EasterEggs from "./components/EasterEggs";
import SystemStatus from "./components/SystemStatus";
import { StealthProvider } from "./context/StealthContext";
import StealthLayer from "./components/StealthLayer";
import { LanguageProvider } from "./context/LanguageContext";
import ClientBiosWrapper from "./components/ClientBiosWrapper";
import SocDashboard from "./components/SocDashboard";
import VoiceHud from "./components/VoiceHud";
import { AchievementProvider } from "./context/AchievementContext";
import { DarkWebProvider } from "./context/DarkWebContext";
import TorFrame from "./components/TorFrame";
import { WebOSProvider } from "./context/WebOSContext";
import DesktopEnvironment from "./components/DesktopEnvironment";
import { GhostProvider } from "./context/GhostContext";
import GhostOverlay from "./components/GhostOverlay";

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

import CyberRain from "./components/CyberRain";

// ... existing imports

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
            <body>
                <LanguageProvider>
                    <AchievementProvider>
                        <DarkWebProvider>
                            <WebOSProvider>
                                <StealthProvider>
                                    <GhostProvider>
                                        <ClientBiosWrapper>
                                            <TorFrame />
                                            <DesktopEnvironment />
                                            <GhostOverlay />
                                            <StealthLayer />
                                            <SocDashboard />
                                            <VoiceHud />
                                            <CyberRain />
                                            <EasterEggs />
                                            <SystemStatus />
                                            {children}
                                        </ClientBiosWrapper>
                                    </GhostProvider>
                                </StealthProvider>
                            </WebOSProvider>
                        </DarkWebProvider>
                    </AchievementProvider>
                </LanguageProvider>
            </body>
        </html>
    );
}
