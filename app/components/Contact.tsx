"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass rounded-2xl p-8 md:p-12"
                >
                    <div className="inline-flex p-4 rounded-full bg-cyber-primary/10 text-cyber-primary mb-6">
                        <Mail size={32} />
                    </div>

                    <h2 className="text-4xl font-bold mb-4 text-cyber-text">
                        Initialize Communication
                    </h2>
                    <p className="text-cyber-muted text-lg mb-8 max-w-2xl mx-auto">
                        Currently available for new opportunities. Whether you have a security audit request, a question, or just want to connect.
                    </p>

                    <a
                        href="mailto:lautaromir2@gmail.com"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-cyber-primary text-cyber-background font-bold rounded-lg shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:scale-105 transition-all text-lg"
                    >
                        <Send size={20} />
                        Send Encrypted Message
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
