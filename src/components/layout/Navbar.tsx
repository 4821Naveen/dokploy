"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useBranding } from "@/context/BrandingContext";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";

export const Navbar = () => {
    const { branding } = useBranding();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-[60] py-6 flex justify-center px-6 pointer-events-none">
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className={`glass-panel rounded-full h-14 flex items-center px-2 pr-4 gap-8 pointer-events-auto transition-all duration-500 ${scrolled ? "w-auto shadow-2xl shadow-primary/10" : "w-auto"}`}
                >
                    <div className="flex items-center gap-2 pl-4">
                        <Link href="/" className="flex items-center gap-2">
                            <img src="assets/Macho_Logo_256X256.svg" alt="Logo" className="h-8 w-auto" />
                        </Link>
                    </div>

                    <nav className="hidden md:flex items-center gap-6">
                        {["Home", "Services", "About", "Contact"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-[11px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-all"
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-2">
                        <MagneticButton>
                            <button className="bg-primary text-black h-10 px-6 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">
                                Get Started
                            </button>
                        </MagneticButton>
                        <button
                            className="md:hidden p-2 text-white"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <Menu size={20} />
                        </button>
                    </div>
                </motion.div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="fixed inset-0 z-[70] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center p-6"
                    >
                        <button
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <X size={32} />
                        </button>
                        <div className="flex flex-col items-center gap-8">
                            {["Home", "Services", "About", "Contact"].map((item) => (
                                <Link
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="font-heading text-4xl hover:text-primary transition-all"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
