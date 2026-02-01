export default function Footer() {
    return (
        <footer className="py-8 border-t border-cyber-primary/10 bg-cyber-background">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-cyber-muted font-mono text-sm">
                    © {new Date().getFullYear()} Lautaro Mir. All systems operational.
                </p>
                <p className="text-xs text-cyber-muted/50 mt-2 font-mono">
                    Built with Next.js, Tailwind, & Framer Motion
                </p>
            </div>
        </footer>
    );
}
