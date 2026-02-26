"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquareText, Code2, Rocket, ArrowRight, ArrowDown } from "lucide-react";

const steps = [
    {
        title: "Applications Strategy Discussion",
        description: "We dive deep into your business bottlenecks to identify high-ROI opportunities for AI integration, ensuring our solutions align perfectly with your goals.",
        icon: <MessageSquareText className="text-[#ff5500]" size={32} />
    },
    {
        title: "Applications Development",
        description: "Our engineers build bespoke AI agents and automated workflows, rigorously testing them to guarantee enterprise-grade reliability and performance.",
        icon: <Code2 className="text-[#ff5500]" size={32} />
    },
    {
        title: "Deployment",
        description: "We seamlessly integrate the custom solutions into your existing systems, providing comprehensive training and ongoing support to maximize your efficiency.",
        icon: <Rocket className="text-[#ff5500]" size={32} />
    }
];

export default function Process() {
    return (
        <section id="process" className="py-24 bg-white relative overflow-hidden">
            <div className="container px-6 mx-auto max-w-7xl">
                <div className="text-center mb-20 lg:mb-24">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-mine-shaft tracking-tight mb-4">
                        What is the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3300] to-[#ff9900]">AMPLYFY</span> process?
                    </h2>
                    <p className="text-xl text-neutral-500 max-w-2xl mx-auto font-medium">
                        A streamlined, collaborative approach to transforming your operations from manual to autonomous.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4 relative">

                    {/* Subtle background connecting line for desktop */}
                    <div className="hidden md:absolute md:block top-[48px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-neutral-200 to-transparent -z-10 w-[70%]" />

                    {steps.map((step, index) => (
                        <React.Fragment key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="flex flex-col items-center w-full md:w-[28%] lg:w-[30%] relative z-10 group mt-4 md:mt-0"
                            >
                                {/* Icon Circle */}
                                <div className="w-24 h-24 rounded-full bg-white border-2 border-neutral-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center mb-8 relative group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(255,85,0,0.15)] transition-all duration-300">
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#ff5500]/5 to-[#ff9900]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                                        {step.icon}
                                    </div>

                                    {/* Step Number Badge */}
                                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-mine-shaft text-white font-bold flex items-center justify-center text-sm shadow-md border-2 border-white">
                                        {index + 1}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="bg-white rounded-[2rem] p-8 border border-neutral-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col w-full text-center">
                                    <h3 className="text-2xl font-bold text-mine-shaft mb-4 leading-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-neutral-500 font-medium leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Arrow linking to next step (Desktop) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:flex flex-col items-center justify-center mt-[36px] px-2 text-neutral-300">
                                    <motion.div
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        <ArrowRight size={32} strokeWidth={2} className="text-[#ff9900]/60" />
                                    </motion.div>
                                </div>
                            )}
                            {/* Arrow linking to next step (Mobile) */}
                            {index < steps.length - 1 && (
                                <div className="md:hidden my-4 flex items-center justify-center text-[#ff9900]/60">
                                    <motion.div
                                        animate={{ y: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        <ArrowDown size={32} strokeWidth={2} />
                                    </motion.div>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}
