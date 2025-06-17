"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import ConsultationModal from "./ConsultationModal";
import WhatsAppWidget from "./WhatsAppWidget";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
    const videoRef = useRef(null);
    const contentRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1.0; // Normal speed
        }
    }, []);

    useEffect(() => {
        if (contentRef.current) {
            // Add animation class after a small delay
            const timer = setTimeout(() => {
                contentRef.current.classList.add('animate-slide-up');
            }, 200);
            
            return () => clearTimeout(timer);
        }
    }, []);

    const handleConsultationClick = () => {
        setIsButtonClicked(true);
        setTimeout(() => {
            setIsModalOpen(true);
            setIsButtonClicked(false);
        }, 500);
    };

    return (
        <div className="relative min-h-screen">
            <div className="absolute inset-0 z-0">
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover brightness-125"
                    autoPlay
                    loop
                    muted
                    playsInline
                    src="/videos/Untitled design (2).mp4"
                >
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
            </div>

            <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
                <div className="w-full max-w-xl mx-auto text-center">
                    <div 
                        ref={contentRef}
                        className="bg-black/5 backdrop-blur-[1px] p-4 md:p-6 rounded-xl border border-white/5 shadow-lg transition-all duration-300 ease-in-out hover:bg-black/10 opacity-0 transform translate-y-32"
                        style={{
                            animation: 'slideUp 1.2s ease-out 0.2s forwards'
                        }}
                    >
                        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 md:mb-3 font-noto-serif bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-200">
                            Welcome to Sri Sai Interiors
                        </h1>
                        <p className="text-sm md:text-base text-gray-200 mb-4 md:mb-6 leading-relaxed">
                            Transform your space into a masterpiece with our expert interior design services. 
                            From concept to completion, we bring your vision to life.
                        </p>
                        <div className="relative">
                            <motion.button
                                onClick={handleConsultationClick}
                                className="relative bg-gradient-to-r from-amber-500/90 to-orange-500/90 hover:from-amber-600 hover:to-orange-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-base overflow-hidden"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.span
                                    className="relative z-10"
                                    animate={isButtonClicked ? { opacity: 0 } : { opacity: 1 }}
                                >
                                    Get Free Consultation
                                </motion.span>
                                <AnimatePresence>
                                    {isButtonClicked && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            exit={{ scale: 0 }}
                                            className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400"
                                        >
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                exit={{ scale: 0 }}
                                                className="absolute inset-0 flex items-center justify-center"
                                            >
                                                <motion.div
                                                    initial={{ rotate: 0 }}
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 0.5, ease: "linear" }}
                                                    className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                                                />
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.button>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={isButtonClicked ? { scale: 1.5, opacity: 0 } : { scale: 0, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 bg-gradient-to-r from-amber-500/30 to-orange-500/30 rounded-full blur-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Consultation Modal */}
            <ConsultationModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />

            {/* WhatsApp Widget */}
            <WhatsAppWidget />

            <style jsx>{`
                @keyframes slideUp {
                    0% {
                        opacity: 0;
                        transform: translateY(150px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(80px);
                    }
                }
            `}</style>
        </div>
    );
};

export default HeroSection;