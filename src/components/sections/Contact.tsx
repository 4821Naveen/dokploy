"use client";

import React from "react";
import { Send } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export const Contact = () => {
    return (
        <section id="contact" className="py-32 px-6 relative">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                <div>
                    <h2 className="font-heading text-5xl md:text-7xl lg:text-[100px] leading-[0.85] mb-12 tracking-tighter">
                        GET IN <br /><span className="text-primary italic opacity-70">TOUCH</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-md">
                        We'd love to hear about your project. Our team is ready to streamline your operations with custom technology.
                    </p>

                    <div className="space-y-4">
                        <div className="glass-panel p-8 rounded-[30px] border-white/5">
                            <h4 className="font-heading text-primary text-xs tracking-[0.3em] mb-4">Location</h4>
                            <p className="text-white font-bold">No: 4/137, Muthumari Amman Kovil Street, M.A.Nagar Redhills, Chennai - 52.</p>
                        </div>
                        <div className="glass-panel p-8 rounded-[30px] border-white/5">
                            <h4 className="font-heading text-primary text-xs tracking-[0.3em] mb-4">Email</h4>
                            <p className="text-white font-bold">info@machodev.com</p>
                        </div>
                    </div>
                </div>

                <div className="glass-panel p-12 rounded-[50px] border-white/10 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    <form className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                        <div className="space-y-4">
                            <label className="font-heading text-[10px] text-gray-500 tracking-[0.2em]">First Name</label>
                            <input type="text" className="w-full bg-white/5 border-b border-white/10 py-3 text-sm focus:outline-none focus:border-primary transition-all text-white font-medium" />
                        </div>
                        <div className="space-y-4">
                            <label className="font-heading text-[10px] text-gray-500 tracking-[0.2em]">Last Name</label>
                            <input type="text" className="w-full bg-white/5 border-b border-white/10 py-3 text-sm focus:outline-none focus:border-primary transition-all text-white font-medium" />
                        </div>
                        <div className="space-y-4 sm:col-span-2">
                            <label className="font-heading text-[10px] text-gray-500 tracking-[0.2em]">Email Address</label>
                            <input type="email" className="w-full bg-white/5 border-b border-white/10 py-3 text-sm focus:outline-none focus:border-primary transition-all text-white font-medium" />
                        </div>
                        <div className="space-y-4">
                            <label className="font-heading text-[10px] text-gray-500 tracking-[0.2em]">Mobile</label>
                            <input type="tel" className="w-full bg-white/5 border-b border-white/10 py-3 text-sm focus:outline-none focus:border-primary transition-all text-white font-medium" />
                        </div>
                        <div className="space-y-4">
                            <label className="font-heading text-[10px] text-gray-500 tracking-[0.2em]">Company</label>
                            <input type="text" className="w-full bg-white/5 border-b border-white/10 py-3 text-sm focus:outline-none focus:border-primary transition-all text-white font-medium" />
                        </div>
                        <div className="space-y-4 sm:col-span-2">
                            <label className="font-heading text-[10px] text-gray-500 tracking-[0.2em]">Your Message</label>
                            <textarea rows={4} className="w-full bg-white/5 border-b border-white/10 py-3 text-sm focus:outline-none focus:border-primary transition-all text-white font-medium resize-none"></textarea>
                        </div>

                        <div className="sm:col-span-2 pt-6">
                            <MagneticButton className="w-full">
                                <button className="btn-primary w-full justify-center group !py-5 !text-[11px] !uppercase !tracking-[0.3em] !rounded-2xl">
                                    Send Message <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </MagneticButton>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
