import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Certification from "./components/Certification";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen text-cyber-text selection:bg-cyber-primary/30 selection:text-cyber-primary bg-cyber-background">
            <Navbar />
            <Hero />
            <Marquee />
            <div className="space-y-20 flex flex-col pt-10 pb-20">
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
