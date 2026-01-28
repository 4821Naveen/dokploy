"use client";

import React, { useRef, ReactNode } from "react";
import { gsap } from "@/lib/gsap";

export const MagneticButton = ({ children, className = "" }: { children: ReactNode, className?: string }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = containerRef.current!.getBoundingClientRect();

        // Calculate distance from center
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);

        // Magnetic effect on container and content
        gsap.to(containerRef.current, { x: x * 0.3, y: y * 0.3, duration: 0.4, ease: "power2.out" });
        gsap.to(contentRef.current, { x: x * 0.5, y: y * 0.5, duration: 0.4, ease: "power2.out" });
    };

    const handleMouseLeave = () => {
        gsap.to([containerRef.current, contentRef.current], { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.3)" });
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative inline-block ${className}`}
        >
            <div ref={contentRef}>
                {children}
            </div>
        </div>
    );
};
