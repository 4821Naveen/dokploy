"use client";

import React from "react";
import { useBranding } from "@/context/BrandingContext";
import Link from "next/link";

export const Footer = () => {
    const { branding } = useBranding();

    return (
        <footer className="py-24 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-32">
                    <div className="col-span-1 md:col-span-2">
                        <div className="mb-10">
                            {branding.logoUrl ? (
                                <img src={branding.logoUrl} alt={branding.companyName} className="h-8 w-auto" />
                            ) : (
                                <span className="font-heading text-4xl tracking-tighter text-white">
                                    {branding.companyName}
                                </span>
                            )}
                        </div>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
                            {branding.info}
                        </p>
                        <div className="mt-10 flex gap-6">
                            {["github", "linkedin", "twitter"].map(social => (
                                <Link key={social} href="#" className="text-gray-500 hover:text-primary transition-colors uppercase text-[10px] font-bold tracking-[0.2em]">
                                    {social}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-heading text-gray-300 text-xs tracking-[0.3em] mb-8">Navigation</h4>
                        <ul className="space-y-6">
                            {["Home", "Services", "About", "Contact"].map(item => (
                                <li key={item}>
                                    <Link href={`#${item.toLowerCase()}`} className="text-gray-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-heading text-gray-300 text-xs tracking-[0.3em] mb-8">Capabilities</h4>
                        <ul className="space-y-6">
                            {["Web Development", "Networking", "Digital Marketing"].map(item => (
                                <li key={item} className="text-gray-500 text-sm font-bold uppercase tracking-widest cursor-default">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
                    <p className="text-gray-600 text-[10px] uppercase tracking-[0.4em] font-medium text-center md:text-left">
                        &copy; {new Date().getFullYear()} {branding.companyName}. Based in {branding.address.split(',')[1]?.trim() || "Global"}.
                    </p>
                    <div className="flex gap-10">
                        <Link href="#" className="text-gray-600 hover:text-white transition-colors text-[10px] uppercase font-bold tracking-[0.3em]">Privacy Policy</Link>
                        <Link href="#" className="text-gray-600 hover:text-white transition-colors text-[10px] uppercase font-bold tracking-[0.3em]">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
