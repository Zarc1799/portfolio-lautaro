"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Certification from "./components/Certification";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { useCorporate } from "./context/CorporateContext";

export default function Home() {
    return <HomeContent />;
}

function HomeContent() {
    const { isCorporate } = useCorporate();

    return (
        <main className={`min-h-screen text-cyber-text selection:bg-cyber-primary/30 selection:text-cyber-primary transition-colors duration-500 ${isCorporate ? 'bg-slate-50' : 'bg-cyber-background'}`}>
            <Navbar />
            <Hero />
            <div className="space-y-20 pb-20">
                <About />
                <Certification />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </div>
            <Footer />
        </main>
    );
}
