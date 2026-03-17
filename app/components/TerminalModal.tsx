import { useState, useEffect, useRef } from "react";
import { X, Minus, Square, Terminal as TerminalIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { useSound } from "../hooks/useSound";

interface TerminalModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function TerminalModal({ isOpen, onClose }: TerminalModalProps) {
    const { t, language } = useLanguage();
    const { play } = useSound();
    const [input, setInput] = useState("");
    const [currentDir, setCurrentDir] = useState("~");
    const [isBooting, setIsBooting] = useState(false);

    // Config & Data
    const terminalConfig = {
        user: "guest",
        host: "lautaro-node",
        bootSequence: [
            { text: '> Initializing kernel...', delay: 600 },
            { text: '> Loading modules... [OK]', delay: 500 },
            { text: '> Mounting filesystems... [OK]', delay: 400 },
            { text: '> Starting network services... [OK]', delay: 300 },
            { text: '> System ready.', delay: 400 },
            { text: '', delay: 100 },
            { text: '$ neofetch --name', delay: 200 }
        ],
        asciiArt: [
            "    __               __                  __  ____     ",
            "   / /   ____ __  __/ /_____ __________ /  |/  (_)____",
            "  / /   / __ `/ / / / __ / __`/ ___/ __ \\ /|_/ / / ___/",
            " / /___/ /_/ / /_/ / /_/ /_/ / /  / /_/ / /  / / /    ",
            "/_____/\\__,_/\\__,_/\\__/\\__,_/_/   \\____/_/  /_/_/_/   "
        ]
    };

    // Virtual File System
    const fileSystem: Record<string, any> = {
        "~": {
            files: {
                "about.txt": "Lautaro Mir. Systems Architect. Expert in OpenLDAP, Zabbix, and High Availability Networks.",
                "skills.json": `["OpenLDAP", "Zabbix", "Mikrotik", "Linux", "Docker", "Cybersecurity", "Blockchain"]`,
                "contact.sh": "Executing mail client... (Use the contact form)",
            },
            dirs: {}
        }
    };

    const [history, setHistory] = useState<string[]>([]);
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);

    const bottomRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const hasBooted = useRef(false);

    const [isRoot, setIsRoot] = useState(false);

    // Boot Sequence Effect
    useEffect(() => {
        if (isOpen && !hasBooted.current) {
            setIsBooting(true);
            setHistory([]);
            let delaySum = 0;

            terminalConfig.bootSequence.forEach((step, index) => {
                delaySum += step.delay;
                setTimeout(() => {
                    play("typing");
                    setHistory(prev => [...prev, step.text]);
                    if (index === terminalConfig.bootSequence.length - 1) {
                        // After boot, show ASCII art and welcome
                        setTimeout(() => {
                            play("success");
                            setHistory(prev => [
                                ...prev,
                                ...terminalConfig.asciiArt,
                                "Lautaro Mir",
                                "> Systems Architect | OpenLDAP | Zabbix Expert",
                                "",
                                "Type 'help' for available commands.",
                                "",
                                "⚠ SYSTEM WARNING: Unpatched vulnerability detected in kernel.",
                                "Hint: Privileged access might be possible...",
                                ""
                            ]);
                            setIsBooting(false);
                            hasBooted.current = true;
                        }, 500);
                    }
                }, delaySum);
            });
        }
    }, [isOpen]);

    // Auto-scroll effect
    useEffect(() => {
        if (isOpen && bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: "smooth" });
            if (!isBooting) inputRef.current?.focus();
        }
    }, [isOpen, history, isBooting]);

    const handleCommand = (cmd: string) => {
        // Add to history if not empty
        if (cmd.trim()) {
            setCommandHistory(prev => [...prev, cmd]);
            setHistoryIndex(-1); // Reset index
        }

        const parts = cmd.trim().split(" ");
        const command = parts[0].toLowerCase();
        const args = parts.slice(1);
        let output: string | string[] = "";

        switch (command) {
            case "help":
                output = [
                    ...t.terminal.outputs.help,
                    isRoot ? "ROOT COMMANDS: [decode] [trace] [nuke]" : ""
                ].filter(Boolean);
                break;
            case "whoami":
                output = isRoot ? "root (GOD MODE ACTIVE)" : t.terminal.outputs.whoami;
                break;
            case "hack":
                if (isRoot) {
                    output = "Already root. You own this system.";
                } else {
                    play("boot"); // Use boot sound for "processing"
                    setHistory(prev => [...prev, `${terminalConfig.user} @${terminalConfig.host}:${currentDir}$ ${cmd} `, "Initiating exploit...", "Bypassing firewall...", "Escalating privileges..."]);
                    setTimeout(() => {
                        play("success");
                        setIsRoot(true);
                        setHistory(prev => [...prev, "ACCESS GRANTED. WELCOME, ADMINISTRATOR.", "", "Secret Contact Unlocked: +34 627 623 807 (Priority Line)"]);
                    }, 2000);
                    return; // Return early to handle async history update
                }
                break;
            case "tor_connect":
            case "darkweb": // Alias for ease of use
            case "tor":
                play("boot");
                setHistory(prev => [...prev, `${terminalConfig.user} @${terminalConfig.host}:${currentDir}$ ${cmd} `, "Connecting to TOR network...", "Establishing secure tunnel..."]);
                setTimeout(() => {
                    setHistory(prev => [...prev, "Connection Failed.", "WARNING: Protocol not supported in this environment."]);
                }, 1500);
                return;
            case "os_boot":
                play("boot");
                setHistory(prev => [...prev, `${terminalConfig.user} @${terminalConfig.host}:${currentDir}$ ${cmd} `, "Booting WebOS Kernel..."]);
                setTimeout(() => {
                    setHistory(prev => [...prev, "Boot Failed.", "WebOS is no longer supported."]);
                }, 1000);
                return;
            case "skills":
                output = t.terminal.outputs.skills;
                break;
            case "blockchain":
                output = t.terminal.outputs.blockchain;
                break;
            case "status":
                output = t.terminal.outputs.status;
                break;
            case "ls":
                const dir = fileSystem["~"];
                const files = Object.keys(dir.files).join("  ");
                const dirs = dir.dirs ? Object.keys(dir.dirs).map((d: string) => d + "/").join("  ") : "";
                const secretFiles = isRoot ? " shadow_config.yml  director_contact.vcf" : "";
                output = `${dirs}  ${files}${secretFiles} `.trim();
                break;
            case "cd":
                if (!args[0] || args[0] === "~") {
                    setCurrentDir("~");
                } else if (args[0] === ".." && currentDir !== "~") {
                    setCurrentDir("~");
                } else {
                    play("error");
                    output = `bash: cd: ${args[0]}: ${language === 'en' ? 'No such file or directory' : 'No existe el fichero o directorio'} `;
                }
                break;
            case "cat":
                if (!args[0]) {
                    output = "Usage: cat [filename]";
                } else {
                    const currentDirObj = fileSystem["~"];
                    if (currentDirObj.files[args[0]]) {
                        output = currentDirObj.files[args[0]];
                    } else if (currentDirObj.dirs && currentDirObj.dirs[args[0]]) {
                        output = `cat: ${args[0]}: Is a directory`;
                    } else if (args[0] === "director_contact.vcf" && isRoot) {
                        output = "Name: Lautaro Mir\nRole: Director\nPhone: +34 627 623 807\nEmail: lautaromir2@gmail.com\nPriority: HIGH";
                    } else if (args[0] === "shadow_config.yml" && isRoot) {
                        output = "encryption: AES-256\nmaster_key: ******************\nbackdoor_port: 1337";
                    } else {
                        play("error");
                        output = `cat: ${args[0]}: No such file or directory`;
                    }
                }
                break;
            case "date":
                output = new Date().toString();
                break;
            case "clear":
                setHistory([]);
                setInput(""); // Clears the input so it doesn't get stuck
                return;
            case "exit":
                onClose();
                return;
            case "poweroff":
            case "shutdown":
                play("error"); // Or a specific shutdown sound
                setHistory(prev => [...prev, "System is going down for halt NOW!", ""]);
                setTimeout(() => {
                    document.body.innerHTML = `
                    <div style="cursor: auto; height:100vh;background:black;color:#ef4444;display:flex;align-items:center;justify-content:center;font-family:monospace;font-size:2rem;font-weight:bold;position:relative;flex-direction:column;gap:20px;">
                        <div style="text-shadow: 0 0 10px #ef4444;">SYSTEM HALTED</div>
                        <div style="font-size: 1rem; color: #666;">It is now safe to turn off your computer.</div>
                        <button onclick="window.location.reload()" style="margin-top:20px;background:none;border:2px solid #ef4444;border-radius:50%;width:60px;height:60px;color:#ef4444;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.3s;box-shadow: 0 0 15px rgba(239,68,68,0.3);">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
                                <line x1="12" y1="2" x2="12" y2="12"></line>
                            </svg>
                        </button>
                    </div>
                    `;
                }, 1500);
                return;
            case "":
                break;
            default:
                play("error");
                output = `${language === 'en' ? 'Command not found' : language === 'es' ? 'Comando no encontrado' : 'Comando no trobat'}: ${command} `;
        }

        const promptUser = isRoot ? "root" : terminalConfig.user;
        const promptSymbol = isRoot ? "#" : "$";

        const newHistory = [...history, `${promptUser} @${terminalConfig.host}:${currentDir}${promptSymbol} ${cmd} `];
        if (Array.isArray(output)) {
            newHistory.push(...output);
        } else if (output) {
            newHistory.push(output);
        }
        setHistory(newHistory);
        setInput("");

        // Play success sound for valid commands that don't have explicit error sound
        if (command && command !== "cd" && command !== "cat" && command !== "poweroff" && command !== "shutdown" && command !== "default") {
            play("typing"); // Using typing as a generic 'proicessed' sound, or could be success
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (!isBooting) {
            if (e.key === "Enter") {
                play("click");
                handleCommand(input);
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                if (commandHistory.length > 0) {
                    // Start from end or go back one
                    const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
                    setHistoryIndex(newIndex);
                    setInput(commandHistory[newIndex]);
                }
            } else if (e.key === "ArrowDown") {
                e.preventDefault();
                if (historyIndex !== -1) {
                    const newIndex = Math.min(commandHistory.length - 1, historyIndex + 1);
                    // If we go past the last item, clear input
                    if (historyIndex === commandHistory.length - 1) {
                        setHistoryIndex(-1);
                        setInput("");
                    } else {
                        setHistoryIndex(newIndex);
                        setInput(commandHistory[newIndex]);
                    }
                }
            } else {
                play("typing");
            }
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            >
                <div
                    className="w-full max-w-3xl bg-[#0c0c0c] rounded-lg border border-gray-700 shadow-2xl overflow-hidden font-mono text-sm sm:text-base text-gray-300"
                    onClick={e => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="bg-[#1f1f1f] px-4 py-2 flex items-center justify-between handle cursor-move">
                        <div className="flex items-center gap-2 text-gray-400">
                            <TerminalIcon size={16} />
                            <span>{terminalConfig.user}@{terminalConfig.host}: ~</span>
                        </div>
                        <div className="flex gap-2">
                            <div className="p-1 hover:bg-white/10 rounded cursor-pointer"><Minus size={14} /></div>
                            <div className="p-1 hover:bg-white/10 rounded cursor-pointer"><Square size={14} /></div>
                            <div className="p-1 hover:bg-red-500/80 rounded cursor-pointer" onClick={() => { play("click"); onClose(); }}><X size={14} /></div>
                        </div>
                    </div>

                    {/* Terminal Window */}
                    <div className="p-4 h-[60vh] overflow-y-auto custom-scrollbar" onClick={() => !isBooting && inputRef.current?.focus()}>
                        {history.map((line, i) => (
                            <div key={i} className={`mb - 1 ${line.startsWith(terminalConfig.user + "@") ? "text-green-400 font-bold" : "text-gray-300 ml-0"} whitespace - pre - wrap`}>
                                {line}
                            </div>
                        ))}
                        {!isBooting && (
                            <div className="flex items-center gap-2 mt-2 text-green-400 font-bold">
                                <span>
                                    {isRoot ? <span className="text-red-500">root@{terminalConfig.host}:{currentDir}#</span> : <span>{terminalConfig.user}@{terminalConfig.host}:{currentDir}$</span>}
                                </span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    className="bg-transparent border-none outline-none flex-1 text-gray-100 placeholder-transparent"
                                    autoFocus
                                    autoComplete="off"
                                />
                            </div>
                        )}
                        <div ref={bottomRef} />
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
