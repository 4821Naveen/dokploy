"use client";

import React, { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const services = [
    { name: "React", icon: "⚛️", desc: "Build fast, scalable web apps." },
    { name: "Git", icon: "/assets/github-icon.png", desc: "Version control & collaboration." },
    { name: "Flutter", icon: "/assets/flutter-icon.png", desc: "Multi-platform mobile apps." },
    { name: "Django", icon: "/assets/django-icon.png", desc: "Secure, robust backend systems." },
];

export const Services = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(cardsRef.current,
            { opacity: 0, y: 60, scale: 0.95 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                stagger: 0.15,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            }
        );
    }, []);

    return (
        <section id="services" ref={sectionRef} className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 text-center lg:text-left">
                    <h2 className="font-heading text-4xl md:text-6xl mb-6 flex flex-col lg:flex-row lg:items-center gap-4">
                        MACHO<span className="text-primary italic">DEV</span>
                        <span className="hidden lg:block w-20 h-[1px] bg-white/10" />
                        <span className="opacity-40 uppercase tracking-widest text-2xl lg:text-3xl">Services</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {services.map((service, i) => (
                        <div
                            key={service.name}
                            ref={(el) => { cardsRef.current[i] = el!; }}
                            className="group glass-panel p-10 rounded-[40px] hover:bg-white/[0.08] transition-all duration-500 cursor-default"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 overflow-hidden shadow-2xl">
                                {typeof service.icon === "string" && service.icon.startsWith("/") ? (
                                    <img src={service.icon} alt={service.name} className="w-8 h-8 object-contain" />
                                ) : (
                                    <span className="text-2xl">{service.icon}</span>
                                )}
                            </div>
                            <h3 className="font-heading text-xl mb-4 tracking-wider">{service.name}</h3>
                            <p className="text-gray-400 text-xs leading-relaxed tracking-wide">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
