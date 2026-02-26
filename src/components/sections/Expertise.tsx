"use client";

import { motion } from "framer-motion";
import { Zap, Database, Server, Cpu, MessageSquare, Code, LayoutTemplate, Layers } from "lucide-react";

export default function Expertise() {
    const tools = [
        { name: "n8n", icon: <Zap className="text-[#ff7f50]" size={28} /> },
        { name: "Supabase", icon: <Database className="text-[#00ff88]" size={28} /> },
        { name: "Azure", icon: <Server className="text-[#007fff]" size={28} /> },
        { name: "Gemini", icon: <Cpu className="text-[#8a2be2]" size={28} /> },
        { name: "ChatGPT", icon: <MessageSquare className="text-[#10a37f]" size={28} /> },
        { name: "Antigravity", icon: <Code className="text-[#ff9900]" size={28} /> },
        { name: "Framer", icon: <LayoutTemplate className="text-[#0055ff]" size={28} /> },
        { name: "Higgsfield", icon: <Zap className="text-[#ff007f]" size={28} /> },
        { name: "qDrant", icon: <Layers className="text-[#dc143c]" size={28} /> },
    ];

    return (
        <section id="expertise" className="py-24 bg-[#fafafa] relative overflow-hidden">
            <div className="container px-6 mx-auto max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

                    {/* Left Column: Text & Stats */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10">
                        <h2 className="text-5xl md:text-6xl font-bold text-mine-shaft tracking-tight mb-2 leading-tight">
                            Gain Access to our
                        </h2>
                        <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5500] to-[#ff9900]">
                                Expertise
                            </span>
                        </h2>

                        <p className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-xl leading-relaxed">
                            Our Amplyfy team has spent over 6 months and $5,000 learning every aspect of applicable AI applications, so you don&apos;t have to.
                        </p>

                        {/* Stat Cards */}
                        <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
                            <div className="bg-white rounded-3xl p-8 flex-1 border border-neutral-100 shadow-sm">
                                <h3 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff3300] to-[#ff9900] mb-2">
                                    6+
                                </h3>
                                <p className="text-neutral-500 font-medium">Months R&D</p>
                            </div>
                            <div className="bg-white rounded-3xl p-8 flex-1 border border-neutral-100 shadow-sm">
                                <h3 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff3300] to-[#ff9900] mb-2">
                                    $5k+
                                </h3>
                                <p className="text-neutral-500 font-medium">Invested</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: 3x3 Grid */}
                    <div className="relative z-10 flex justify-center lg:justify-end">
                        {/* Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(255,153,0,0.1)_0%,transparent_70%)] -z-10" />

                        <div className="grid grid-cols-3 gap-4 md:gap-6">
                            {tools.map((tool, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white rounded-3xl p-6 flex flex-col items-center justify-center gap-4 aspect-square shadow-sm border border-neutral-100 hover:shadow-md hover:scale-105 transition-all w-28 h-28 md:w-36 md:h-36"
                                >
                                    <div className="w-12 h-12 rounded-full bg-neutral-50 flex items-center justify-center">
                                        {tool.icon}
                                    </div>
                                    <span className="text-sm font-bold text-mine-shaft">{tool.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
