"use client";

import { useVoiceControl } from "../hooks/useVoiceControl";
import { Mic, MicOff, Command } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function VoiceHud() {
    const { isListening, transcript, commandMatch, startListening } = useVoiceControl();

    return (
        <>
            <button
                onClick={startListening}
                className={`fixed bottom-4 right-4 z-40 p-3 rounded-full border transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] 
                    ${isListening
                        ? 'bg-red-500/20 border-red-500 text-red-500 animate-pulse'
                        : 'bg-slate-950/80 border-cyber-primary/30 text-cyber-primary hover:bg-cyber-primary/20 hover:border-cyber-primary'}`}
            >
                {isListening ? <Mic size={20} /> : <MicOff size={20} />}
            </button>

            <AnimatePresence>
                {isListening && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="fixed bottom-20 right-4 z-40 pointer-events-none flex flex-col items-end gap-2"
                    >
                        {/* Live Transcript */}
                        <div className="bg-slate-950/90 border border-cyber-primary/30 p-3 rounded-lg backdrop-blur text-right min-w-[200px]">
                            <div className="text-[10px] text-cyber-muted uppercase flex items-center justify-end gap-2 mb-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                VOICE_INPUT_ACTIVE
                            </div>
                            <div className="font-mono text-white text-sm">
                                {transcript || "Listening..."}
                            </div>
                        </div>

                        {/* Visualizer Wave (CSS Fake) */}
                        <div className="flex gap-1 h-8 items-end justify-end">
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{ height: [10, 30, 10] }}
                                    transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                                    className="w-1 bg-cyber-primary rounded-full"
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {commandMatch && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
                    >
                        <div className="bg-slate-950/90 border border-cyber-primary px-8 py-4 rounded-xl shadow-[0_0_50px_rgba(6,182,212,0.5)] flex items-center gap-4 text-cyber-primary">
                            <Command size={32} />
                            <div className="text-xl font-bold font-mono uppercase tracking-widest">
                                {commandMatch}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
