"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface BrandingData {
    companyName: string;
    logoUrl: string | null;
    address: string;
    info: string;
}

interface BrandingContextType {
    branding: BrandingData;
    updateBranding: (data: Partial<BrandingData>) => void;
    isFlashAdmin: boolean;
    setFlashAdmin: (val: boolean) => void;
}

const defaultBranding: BrandingData = {
    companyName: "MachoDev",
    logoUrl: null,
    address: "123 Tech Lane, Innovation City",
    info: "Professional technology solutions for modern businesses.",
};

const BrandingContext = createContext<BrandingContextType | undefined>(undefined);

export const BrandingProvider = ({ children }: { children: ReactNode }) => {
    const [branding, setBranding] = useState<BrandingData>(defaultBranding);
    const [isFlashAdmin, setFlashAdmin] = useState(false);

    const updateBranding = (data: Partial<BrandingData>) => {
        setBranding((prev) => ({ ...prev, ...data }));
    };

    return (
        <BrandingContext.Provider value={{ branding, updateBranding, isFlashAdmin, setFlashAdmin }}>
            {children}
        </BrandingContext.Provider>
    );
};

export const useBranding = () => {
    const context = useContext(BrandingContext);
    if (!context) {
        throw new Error("useBranding must be used within a BrandingProvider");
    }
    return context;
};
