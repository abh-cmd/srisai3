"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';

const HeroSection = () => {
    const router = useRouter();

    const handleConsultationClick = () => {
        router.push('/consultation');
    };

    return (
        <div className="relative min-h-screen">
            <div className="absolute inset-0 z-0">
                <video
                    className="w-full h-full object-cover brightness-125"
                    autoPlay
                    loop
                    muted
                    playsInline
                    src="/videos/7578545-uhd_3840_2160_30fps.mp4"
                >
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/45 via-black/35 to-black/45" />
            </div>
            
            {/* Content Box */}
            <div className="relative z-20 flex items-center justify-center min-h-screen px-4 pt-24 md:pt-32">
                <div className="w-full max-w-3xl mx-auto text-center">
                    <div className="bg-black/25 backdrop-blur-lg p-6 md:p-8 rounded-2xl border border-white/15 shadow-2xl transition-all duration-300 ease-in-out hover:bg-black/40">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 md:mb-4 font-noto-serif bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-200">
                            Welcome to Sri Sai Interiors
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-50 mb-4 md:mb-6 font-noto-sans px-2">
                            Transform your space into a masterpiece of design and comfort
                        </p>
                        <button 
                            onClick={handleConsultationClick}
                            className="relative overflow-hidden bg-[#1a73e8] text-white px-6 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-medium transition-all duration-300 ease-in-out hover:bg-[#1557b0] shadow-[0_4px_14px_0_rgba(0,118,255,0.39)] hover:shadow-[0_6px_20px_rgba(0,118,255,0.23)] hover:scale-105 active:scale-95"
                        >
                            <span className="relative z-10">Book a Free Consultation</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#1a73e8] to-[#1557b0] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;