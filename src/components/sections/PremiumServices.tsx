"use client";

import React, { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { Monitor, Shield, Mail, CheckCircle2 } from "lucide-react";

const premiumServices = [
    {
        id: "web-dev",
        category: "Website Development",
        icon: Monitor,
        image: "/assets/Website-Development.webp",
        alignment: "right", // Content on the right, Image on the left
        items: [
            { name: "Custom Website Design", text: "Bespoke digital experiences tailored to your brand." },
            { name: "E-Commerce Solutions", text: "High-conversion online stores with seamless UX." },
            { name: "Modern Tech Stack", text: "Built with Next.js, React, and GSAP for performance." },
        ]
    },
    {
        id: "networking",
        category: "Networking Solutions",
        icon: Shield,
        image: "/assets/Networking-Solutions.webp",
        alignment: "left", // Content on the left, Image on the right
        items: [
            { name: "Cloud Infrastructure", text: "Scalable and secure cloud-native environments." },
            { name: "Network Engineering", text: "Robust systems designed for zero downtime." },
            { name: "Cybersecurity Audits", text: "Advanced threat detection and mitigation." },
        ]
    },
    {
        id: "marketing",
        category: "Digital Marketing",
        icon: Mail,
        image: "/assets/hero-illustration.webp",
        alignment: "right", // Content on the right, Image on the left
        items: [
            { name: "Performance SEO", text: "Dominate search results with data-driven strategies." },
            { name: "Brand Architecture", text: "Design a compelling visual and narrative identity." },
            { name: "Conversion Optimization", text: "Turn visitors into customers with targeted funnels." },
        ]
    }
];

export const PremiumServices = () => {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        premiumServices.forEach((_, i) => {
            const section = document.querySelector(`.premium-feature-${i}`);
            if (!section) return;

            const content = section.querySelector(".content-side");
            const image = section.querySelector(".image-side");
            const items = section.querySelectorAll(".service-item");

            // Entrance reveal
            if (content && image) {
                gsap.fromTo(content,
                    { opacity: 0, x: i % 2 === 0 ? 100 : -100 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 1.5,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 80%",
                        }
                    }
                );

                gsap.fromTo(image,
                    { opacity: 0, scale: 0.8, rotate: i % 2 === 0 ? -5 : 5 },
                    {
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                        duration: 1.8,
                        ease: "elastic.out(1, 0.75)",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 80%",
                        }
                    }
                );

                // Floating animation for image
                gsap.to(image.querySelector("img"), {
                    y: 20,
                    duration: 2 + i,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });

                // Staggered list items
                gsap.fromTo(items,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.15,
                        delay: 0.5,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 70%",
                        }
                    }
                );
            }
            // Scroll indicator animation
            const scrollIndicator = section.querySelector(".scroll-indicator");
            const scrollLine = section.querySelector(".scroll-line");

            if (scrollIndicator && scrollLine) {
                gsap.to(scrollIndicator, {
                    opacity: 1,
                    duration: 1,
                    delay: 1,
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                    }
                });

                gsap.fromTo(scrollLine,
                    { y: "-100%" },
                    {
                        y: "100%",
                        duration: 2,
                        repeat: -1,
                        ease: "power1.inOut"
                    }
                );
            }
        });
    }, []);

    return (
        <section id="premium" ref={containerRef} className="py-40 px-6 relative overflow-hidden bg-[#030014]">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[150px] -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/5 blur-[150px] -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="mb-40 text-center relative">
                    <h2 className="font-heading text-5xl md:text-8xl mb-8 tracking-[0.1em] text-white">
                        OUR <span className="text-primary italic">PREMIUM</span> SOLUTIONS
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto mb-8 shadow-[0_0_20px_#97fe5c]" />
                    <p className="text-gray-400 text-sm md:text-base uppercase tracking-[0.5em] font-light mb-12">Architecting the future of digital infrastructure</p>

                    {/* Animated Scroll Indicator */}
                    <div className="scroll-indicator flex flex-col items-center gap-4 opacity-0">
                        <span className="text-primary/50 text-[10px] tracking-[0.5em] uppercase font-bold">Scroll Down</span>
                        <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent relative overflow-hidden">
                            <div className="scroll-line absolute top-0 left-0 w-full h-full bg-primary" />
                        </div>
                    </div>
                </div>

                <div className="space-y-64">
                    {premiumServices.map((cat, i) => (
                        <div
                            key={cat.id}
                            className={`premium-feature-${i} grid grid-cols-1 lg:grid-cols-2 gap-24 items-center`}
                        >
                            {/* Image Side */}
                            <div className={`image-side flex justify-center ${cat.alignment === "right" ? "lg:order-1" : "lg:order-2"}`}>
                                <div className="relative group w-full max-w-[550px] aspect-square">
                                    {/* Glass Backing */}
                                    <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl rounded-[80px] border border-white/10 shadow-2xl -rotate-3 group-hover:rotate-0 transition-transform duration-700" />

                                    <div className="relative w-full h-full flex items-center justify-center p-8">
                                        <img
                                            src={cat.image}
                                            alt={cat.category}
                                            className="w-full h-full object-contain filter drop-shadow-[0_0_50px_rgba(151,254,92,0.2)] transition-all duration-700"
                                        />
                                    </div>

                                    {/* Particle Glow */}
                                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 blur-[60px] rounded-full animate-pulse" />
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className={`content-side ${cat.alignment === "right" ? "lg:order-2" : "lg:order-1"}`}>
                                <div className="flex items-center gap-6 mb-12">
                                    <div className="bg-primary/10 w-20 h-20 rounded-[30px] flex items-center justify-center text-primary border border-primary/20 shadow-[0_10px_40px_rgba(151,254,92,0.1)]">
                                        <cat.icon size={36} strokeWidth={1.5} />
                                    </div>
                                    <div className="h-[1px] flex-grow bg-gradient-to-r from-primary/30 to-transparent" />
                                </div>

                                <h3 className="font-heading text-4xl md:text-6xl mb-14 tracking-wider leading-tight text-white uppercase">
                                    {cat.category}
                                </h3>

                                <ul className="space-y-12">
                                    {cat.items.map((item) => (
                                        <li key={item.name} className="service-item flex gap-8 items-start group">
                                            <div className="mt-2 flex-shrink-0 w-6 h-6 rounded-full border border-primary/30 flex items-center justify-center group-hover:border-primary transition-colors">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary opacity-30 group-hover:opacity-100 shadow-[0_0_10px_#97fe5c] transition-all" />
                                            </div>
                                            <div>
                                                <p className="font-heading text-xl text-white mb-3 tracking-wide group-hover:text-primary transition-colors">{item.name}</p>
                                                <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md font-light">{item.text}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-20">
                                    <button className="group relative px-10 py-5 bg-transparent border border-primary/20 text-primary font-heading text-xs tracking-[0.3em] uppercase overflow-hidden transition-all duration-500 hover:text-black">
                                        <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                        <span className="relative z-10">Inquire Now &rarr;</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
