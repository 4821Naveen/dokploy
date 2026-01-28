"use client";

import React, { useState } from "react";
import { useBranding } from "@/context/BrandingContext";
import { X, Upload, Save } from "lucide-react";

export const AdminTrigger = () => {
    const { setFlashAdmin, isFlashAdmin, updateBranding, branding } = useBranding();
    const [inputValue, setInputValue] = useState("");
    const [showPanel, setShowPanel] = useState(false);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setInputValue(val);
        if (val.toLowerCase() === "flash admin") {
            setFlashAdmin(true);
            setShowPanel(true);
            setInputValue("");
        }
    };

    const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            updateBranding({ logoUrl: url });
        }
    };

    if (!isFlashAdmin) {
        return (
            <div className="fixed bottom-4 right-4 z-[100] group">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInput}
                    placeholder="Admin..."
                    className="w-10 group-hover:w-48 transition-all px-2 py-1 rounded bg-white/5 border border-white/10 text-xs focus:outline-none focus:border-primary opacity-20 group-hover:opacity-100"
                />
            </div>
        );
    }

    return (
        <>
            <button
                onClick={() => setShowPanel(!showPanel)}
                className="fixed bottom-4 right-4 z-[100] w-12 h-12 rounded-full bg-primary text-black flex items-center justify-center shadow-lg shadow-primary/20 animate-pulse"
            >
                {showPanel ? <X size={20} /> : <Save size={20} />}
            </button>

            {showPanel && (
                <div className="fixed bottom-20 right-4 z-[100] w-80 bg-black/90 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl">
                    <h3 className="text-primary font-bold mb-4 uppercase tracking-widest text-sm">Flash Admin Panel</h3>

                    <div className="space-y-4">
                        <div className="space-y-1">
                            <label className="text-[10px] uppercase text-gray-500 font-bold">Company Name</label>
                            <input
                                type="text"
                                value={branding.companyName}
                                onChange={(e) => updateBranding({ companyName: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] uppercase text-gray-500 font-bold">Logo Upload</label>
                            <div className="relative group cursor-pointer h-20 bg-white/5 border border-dashed border-white/20 rounded-lg flex items-center justify-center overflow-hidden">
                                {branding.logoUrl ? (
                                    <img src={branding.logoUrl} className="h-full w-auto object-contain" alt="Preview" />
                                ) : (
                                    <Upload size={20} className="text-gray-500" />
                                )}
                                <input
                                    type="file"
                                    onChange={handleLogoUpload}
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] uppercase text-gray-500 font-bold">Address</label>
                            <input
                                type="text"
                                value={branding.address}
                                onChange={(e) => updateBranding({ address: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] uppercase text-gray-500 font-bold">Company Info</label>
                            <textarea
                                value={branding.info}
                                onChange={(e) => updateBranding({ info: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary h-20 resize-none"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
