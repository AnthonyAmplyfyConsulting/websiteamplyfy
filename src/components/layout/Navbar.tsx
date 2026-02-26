"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-5xl rounded-full ${isScrolled
                ? "bg-black/60 backdrop-blur-md border border-white/10 shadow-lg py-3 px-6"
                : "bg-transparent py-4 px-6"
                }`}
        >
            <div className="flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                    <Image
                        src="/amplyfy_logo_transparent.png"
                        alt="Amplyfy Logo"
                        width={150}
                        height={50}
                        className="w-auto h-8 object-contain"
                        priority
                        unoptimized
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    <Link href="#services" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">
                        Services
                    </Link>
                    <Link href="#expertise" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">
                        Expertise
                    </Link>
                    <Link href="#process" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">
                        Process
                    </Link>
                    <Link href="#pricing" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">
                        Pricing
                    </Link>
                    <Link
                        href="#contact"
                        className="text-sm font-medium bg-white text-black px-5 py-2 rounded-full hover:bg-neutral-200 transition-colors"
                    >
                        Book a Call
                    </Link>
                </div>

                {/* Mobile Nav Toggle */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 mt-4 w-full bg-mine-shaft/95 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col gap-4 shadow-2xl md:hidden"
                >
                    <Link href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-neutral-300 hover:text-brand-orange">Services</Link>
                    <Link href="#expertise" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-neutral-300 hover:text-brand-orange">Expertise</Link>
                    <Link href="#process" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-neutral-300 hover:text-brand-orange">Process</Link>
                    <Link href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-neutral-300 hover:text-brand-orange">Pricing</Link>
                    <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-brand-orange">Book a Call</Link>
                </motion.div>
            )}
        </motion.nav>
    );
}
