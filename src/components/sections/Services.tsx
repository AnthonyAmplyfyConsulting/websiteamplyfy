"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Bot, Database, Zap, Users, LineChart } from "lucide-react";

const titles = ["Workflows", "Automations", "Agents"];

export default function Services() {
    const [titleIndex, setTitleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTitleIndex((prev) => (prev + 1) % titles.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="services" className="py-24 bg-white overflow-hidden relative">
            <div className="container px-6 mx-auto max-w-6xl">
                {/* Animated Title Section */}
                <div className="mb-16 w-full flex flex-col items-center md:items-start text-center md:text-left">
                    <h2 className="text-5xl md:text-7xl font-bold mb-2 flex flex-col md:flex-row items-center md:items-baseline gap-2 md:gap-4 overflow-hidden py-2 text-brand-orange drop-shadow-sm">
                        <span className="relative inline-block h-[1.2em] w-[280px] md:w-[460px] overflow-hidden text-left">
                            <AnimatePresence>
                                <motion.span
                                    key={titleIndex}
                                    initial={{ y: "100%", opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: "-100%", opacity: 0 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="absolute left-0 w-full text-center md:text-left"
                                >
                                    {titles[titleIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                    </h2>
                    <h2 className="text-5xl md:text-7xl font-bold text-mine-shaft tracking-tight">
                        personalized to your business
                    </h2>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Card 1: Large Left */}
                    <div className="group relative bg-gradient-to-br from-[#ff5500] to-[#ff9900] rounded-[2rem] p-8 md:p-10 overflow-hidden min-h-[250px] flex flex-col justify-between hover:shadow-[0_20px_40px_rgba(255,85,0,0.3)] transition-all cursor-pointer">
                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">Custom AI Agents</h3>
                            <p className="text-white/90 text-xl font-medium">tailored to your business</p>
                        </div>

                        <Bot size={220} className="absolute right-[-30px] bottom-[-30px] text-white/10 group-hover:scale-110 transition-transform duration-700 ease-out" strokeWidth={1} />

                        <div className="relative z-10 flex items-end justify-between w-full mt-24">
                            <p className="text-white font-medium text-sm md:text-base">from rapid prototyping to enterprise scale</p>
                            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md group-hover:bg-white/30 transition-colors shrink-0">
                                <ArrowRight className="text-white" size={20} />
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Large Right */}
                    <div className="group relative bg-[#1a1a1a] border border-white/5 rounded-[2rem] p-8 md:p-10 overflow-hidden min-h-[250px] flex flex-col items-center justify-center hover:bg-[#222] hover:border-white/10 transition-colors cursor-pointer text-center">
                        <div className="mb-6">
                            <p className="text-neutral-500 text-sm font-semibold uppercase tracking-widest flex items-center justify-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#ff3300] to-[#ff9900] animate-pulse"></span>
                                High ROI
                            </p>
                        </div>
                        <h3 className="text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600 mb-2 tracking-tighter">
                            10<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3300] to-[#ff9900] text-5xl md:text-7xl">+</span><span className="text-3xl md:text-5xl text-neutral-500 font-medium">hrs</span>
                        </h3>
                        <p className="text-neutral-400 text-lg lg:text-xl max-w-sm mb-10 leading-relaxed font-medium">
                            saved weekly by integrating our bespoke <span className="text-white">workflow automations</span>
                        </p>
                        <a href="#contact" className="px-8 py-3 rounded-full bg-[#ff9900] text-black font-semibold hover:bg-white transition-colors text-sm shadow-lg shadow-[#ff9900]/20 inline-block">
                            Click to learn how
                        </a>
                    </div>

                    {/* Small Row 1 */}
                    <div className="bg-[#1a1a1a] border border-white/5 rounded-[2rem] p-8 flex items-center justify-between hover:bg-[#222] transition-colors cursor-pointer group">
                        <div className="flex flex-col">
                            <h4 className="text-2xl font-semibold text-white group-hover:text-[#ff9900] transition-colors tracking-tight">Predictive <span className="text-neutral-500 font-medium">analytics</span></h4>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 rounded-[1.25rem] bg-gradient-to-br from-[#ff9900]/20 to-[#ff5500]/10 flex items-center justify-center shadow-[inset_0_0_20px_rgba(255,153,0,0.1)]">
                                <LineChart className="text-[#ff9900]" size={30} strokeWidth={1.5} />
                            </div>
                            <ArrowRight className="text-neutral-600 group-hover:text-white transition-colors" size={24} />
                        </div>
                    </div>

                    <div className="bg-[#1a1a1a] border border-white/5 rounded-[2rem] p-8 flex items-center justify-between hover:bg-[#222] transition-colors cursor-pointer group">
                        <div className="flex flex-col">
                            <h4 className="text-2xl font-semibold text-white group-hover:text-brand-green transition-colors tracking-tight">CRM <span className="text-neutral-500 font-medium">integrations</span></h4>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 rounded-[1.25rem] bg-gradient-to-br from-brand-green/20 to-teal-500/10 flex items-center justify-center shadow-[inset_0_0_20px_rgba(0,255,136,0.1)]">
                                <Database className="text-brand-green" size={30} strokeWidth={1.5} />
                            </div>
                            <ArrowRight className="text-neutral-600 group-hover:text-white transition-colors" size={24} />
                        </div>
                    </div>

                    {/* Small Row 2 */}
                    <div className="bg-[#1a1a1a] border border-white/5 rounded-[2rem] p-8 flex items-center justify-between hover:bg-[#222] transition-colors cursor-pointer group">
                        <div className="flex flex-col">
                            <h4 className="text-2xl font-semibold text-white group-hover:text-[#ff3300] transition-colors tracking-tight">Lead <span className="text-neutral-500 font-medium">generation bots</span></h4>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 rounded-[1.25rem] bg-gradient-to-br from-[#ff3300]/20 to-[#ff6600]/10 flex items-center justify-center shadow-[inset_0_0_20px_rgba(255,51,0,0.1)]">
                                <Zap className="text-[#ff3300]" size={30} strokeWidth={1.5} />
                            </div>
                            <ArrowRight className="text-neutral-600 group-hover:text-white transition-colors" size={24} />
                        </div>
                    </div>

                    <div className="bg-[#1a1a1a] border border-white/5 rounded-[2rem] p-8 flex items-center justify-between hover:bg-[#222] transition-colors cursor-pointer group">
                        <div className="flex flex-col">
                            <h4 className="text-2xl font-semibold text-white group-hover:text-zinc-300 transition-colors tracking-tight">Team <span className="text-neutral-500 font-medium">AI training</span></h4>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 rounded-[1.25rem] bg-white/5 flex items-center justify-center shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]">
                                <Users className="text-white/80" size={30} strokeWidth={1.5} />
                            </div>
                            <ArrowRight className="text-neutral-600 group-hover:text-white transition-colors" size={24} />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
