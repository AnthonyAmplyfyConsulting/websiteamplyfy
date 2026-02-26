"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/Herovideo.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay for text readability */}
            <div className="absolute inset-0 bg-black/60 pointer-events-none" />

            <div className="container px-6 mx-auto relative z-10 text-center max-w-5xl">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-lg"
                >
                    Why pay for busywork when you can{" "}
                    <span className="inline-flex items-center gap-2">
                        <span className="font-cursive font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff3300] to-[#ff9900] text-7xl md:text-8xl tracking-wider pt-2">Automate it?</span>
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-2xl text-neutral-300 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
                >
                    Stop wasting your valuable billable hours on repetitive tasks that stifle your growth.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <a href="#contact" className="px-8 py-4 rounded-full bg-gradient-to-r from-[#ff3300] to-[#ff6600] text-white font-bold hover:shadow-[0_0_20px_rgba(255,85,0,0.5)] hover:scale-105 transition-all flex items-center gap-2 w-full sm:w-auto justify-center text-lg">
                        Book a Strategy Call
                    </a>
                    <a href="#services" className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold hover:bg-white/20 transition-all w-full sm:w-auto justify-center text-lg">
                        Explore More
                    </a>
                </motion.div>
            </div>
        </section >
    );
}
