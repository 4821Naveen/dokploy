"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useBranding } from "@/context/BrandingContext";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export const Hero = () => {
    const { branding } = useBranding();
    const headingRef = useRef(null);
    const subRef = useRef(null);
    const btnRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(headingRef.current,
            { opacity: 0, y: 100, rotateX: 45 },
            { opacity: 1, y: 0, rotateX: 0, duration: 1.2, ease: "power4.out" }
        )
            .fromTo(subRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
                "-=0.8"
            )
            .fromTo(btnRef.current,
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" },
                "-=0.6"
            )
            .fromTo(imgRef.current,
                { opacity: 0, filter: "blur(20px)", scale: 1.2 },
                { opacity: 1, filter: "blur(0px)", scale: 1, duration: 1.5, ease: "power2.out" },
                "-=1"
            );
    }, []);

    return (
        <section id="home" className="min-h-screen flex items-center pt-24 pb-20 px-6 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-primary/5 blur-[200px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <div className="text-center lg:text-left">
                    <h1
                        ref={headingRef}
                        className="font-heading text-6xl md:text-8xl lg:text-[140px] leading-[0.85] mb-12 tracking-[-0.05em]"
                    >
                        {branding.companyName.toUpperCase()}
                        <br />
                        <span className="text-primary opacity-80 italic">FOR 1001</span>
                    </h1>

                    <p
                        ref={subRef}
                        className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed"
                    >
                        Custom websites, networking solutions, and digital marketing services tailored to your business needs.
                    </p>

                    <div ref={btnRef} className="flex justify-center lg:justify-start">
                        <MagneticButton>
                            <button className="btn-primary group !py-5 !px-10 !text-xs !uppercase !tracking-[0.2em]">
                                Start Your Project
                                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                            </button>
                        </MagneticButton>
                    </div>
                </div>

                <div ref={imgRef} className="relative aspect-square flex items-center justify-center">
                    <div className="absolute inset-0 bg-primary/10 blur-[150px] rounded-full animate-pulse pointer-events-none" />
                    <img
                        src="/assets/image2.webp"
                        alt="Hero Illustration"
                        className="relative w-full max-w-[500px] h-auto object-contain drop-shadow-[0_0_50px_rgba(151,254,92,0.2)]"
                    />
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold">Scroll</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent" />
            </div>
        </section>
    );
};
