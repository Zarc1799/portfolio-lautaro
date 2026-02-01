"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ShieldCheck, Cpu, Wifi } from "lucide-react";

export default function Certification() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        x.set(clientX - left - width / 2);
        y.set(clientY - top - height / 2);
    }

    const rotateX = useTransform(mouseY, [-100, 100], [30, -30]);
    const rotateY = useTransform(mouseX, [-100, 100], [-30, 30]);

    return (
        <section id="certifications" className="py-20 flex justify-center perspective-1000">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
                <h2 className="text-3xl font-bold mb-12 flex items-center gap-3 self-start md:self-center">
                    <span className="text-cyber-primary">02.5</span>
                    Certifications
                </h2>

                <motion.div
                    style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                    onMouseMove={onMouseMove}
                    onMouseLeave={() => {
                        x.set(0);
                        y.set(0);
                    }}
                    className="relative w-full max-w-md aspect-[1.586/1] rounded-xl bg-gradient-to-br from-cyber-surface to-slate-900 border border-cyber-primary/30 shadow-[0_0_50px_rgba(6,182,212,0.2)] cursor-pointer group"
                >
                    {/* Holographic Overlay */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ transform: "translateZ(50px)" }} />

                    {/* Card Content */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-between" style={{ transform: "translateZ(20px)" }}>
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-2 text-cyber-primary">
                                <Wifi size={32} />
                                <span className="font-bold text-xl tracking-wider">MIKROTIK</span>
                            </div>
                            <ShieldCheck size={40} className="text-cyber-accent opacity-80" />
                        </div>

                        <div className="text-center space-y-2">
                            <div className="text-cyber-muted text-sm tracking-[0.2em] uppercase">Certified Network Associate</div>
                            <h3 className="text-3xl md:text-4xl font-black text-white text-glow">MTCNA</h3>
                        </div>

                        <div className="flex justify-between items-end">
                            <div className="text-xs text-cyber-muted font-mono">
                            </div>
                            <Cpu size={32} className="text-cyber-secondary/50" />
                        </div>
                    </div>

                    {/* Glowing Border Animation */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyber-primary via-cyber-secondary to-cyber-primary rounded-xl opacity-20 blur transition duration-1000 group-hover:opacity-75 group-hover:duration-200 animate-gradient-xy -z-10" />
                </motion.div>

                <p className="mt-8 text-cyber-muted text-center max-w-lg">
                    Authorized to design, troubleshoot, and maintain massive scale routed networks using RouterOS.
                </p>
            </div>
        </section>
    );
}
