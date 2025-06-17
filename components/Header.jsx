"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
                <div className="w-full">
                    <div className={`bg-blue-950/80 backdrop-blur-sm shadow-lg px-4 md:px-8 py-4 md:py-6 flex items-center justify-between min-h-[80px] md:min-h-[120px] transition-all duration-300 ${isScrolled ? 'bg-blue-950/90 shadow-xl' : ''}`}>
                        {/* Logo */}
                        <div 
                            className="relative w-[250px] md:w-[500px] h-[90px] md:h-[180px] transition-all duration-500 hover:scale-110 hover:brightness-150 hover:drop-shadow-2xl group cursor-pointer z-[60]"
                        >
                            <div className="relative z-[70] h-full">
                                <Image
                                    src="/image/WhatsApp Image 2025-06-17 at 10.31.42_5ded47ec.png"
                                    alt="SRI SAI INTERIORS Logo"
                                    fill
                                    quality={100}
                                    sizes="(max-width: 768px) 250px, 500px"
                                    className="object-contain p-2 transition-all duration-500 group-hover:scale-105"
                                    priority
                                    style={{
                                        objectFit: 'contain',
                                        objectPosition: 'center',
                                        filter: 'drop-shadow(0 4px 12px rgba(255,255,255,0.3)) brightness(1.2) contrast(1.1)',
                                    }}
                                />
                            </div>
                        </div>

                        {/* Company Name - Mobile */}
                        <div className="md:hidden relative transform hover:scale-105 transition-transform duration-300">
                            <h1 className="text-2xl font-noto-serif font-bold text-white [text-shadow:_0_0_30px_rgba(255,255,255,0.5)] tracking-wide">
                                SRI SAI INTERIORS
                            </h1>
                            <div className="w-full h-1.5 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 rounded-full mt-1 shadow-[0_0_30px_rgba(251,191,36,0.7),_0_0_60px_rgba(251,191,36,0.4)]"></div>
                        </div>

                        {/* Company Name - Desktop */}
                        <div className="hidden md:block relative ml-2 transform hover:scale-105 transition-transform duration-300">
                            <h1 className="text-4xl md:text-5xl font-noto-serif font-bold text-white [text-shadow:_0_0_30px_rgba(255,255,255,0.5)] tracking-wide">
                                SRI SAI INTERIORS
                            </h1>
                            <div className="w-full h-2 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 rounded-full mt-3 shadow-[0_0_30px_rgba(251,191,36,0.7),_0_0_60px_rgba(251,191,36,0.4)]"></div>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-16">
                            <Link href="/" className={`text-white text-2xl md:text-3xl font-medium relative group transition-all duration-300 ease-in-out hover:text-4xl hover:text-white hover:font-semibold ${pathname === '/' ? 'text-white font-semibold' : ''}`}>
                                <span className="relative z-10">Home</span>
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-white to-white/50 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                                <span className="absolute -bottom-1 left-0 w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out group-hover:scale-150"></span>
                            </Link>
                            <Link href="/about" className={`text-white text-2xl md:text-3xl font-medium relative group transition-all duration-300 ease-in-out hover:text-4xl hover:text-white hover:font-semibold ${pathname === '/about' ? 'text-white font-semibold' : ''}`}>
                                <span className="relative z-10">About Us</span>
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-white to-white/50 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                                <span className="absolute -bottom-1 left-0 w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out group-hover:scale-150"></span>
                            </Link>
                            <Link href="/projects" className={`text-white text-2xl md:text-3xl font-medium relative group transition-all duration-300 ease-in-out hover:text-4xl hover:text-white hover:font-semibold ${pathname === '/projects' ? 'text-white font-semibold' : ''}`}>
                                <span className="relative z-10">Projects</span>
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-white to-white/50 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                                <span className="absolute -bottom-1 left-0 w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out group-hover:scale-150"></span>
                            </Link>
                            <Link href="/gallery" className={`text-white text-2xl md:text-3xl font-medium relative group transition-all duration-300 ease-in-out hover:text-4xl hover:text-white hover:font-semibold ${pathname === '/gallery' ? 'text-white font-semibold' : ''}`}>
                                <span className="relative z-10">Gallery</span>
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-white to-white/50 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                                <span className="absolute -bottom-1 left-0 w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out group-hover:scale-150"></span>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <div className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
                <div className={`absolute right-0 top-0 bottom-0 w-[280px] bg-blue-900/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="px-4 pt-20 pb-6 space-y-2">
                        <Link href="/" className={`block px-4 py-3 text-white text-2xl hover:text-white hover:text-3xl hover:font-semibold hover:bg-white/5 rounded-lg transition-all duration-300 ease-in-out ${pathname === '/' ? 'text-white font-semibold bg-white/10' : ''}`}>
                            Home
                        </Link>
                        <Link href="/about" className={`block px-4 py-3 text-white text-2xl hover:text-white hover:text-3xl hover:font-semibold hover:bg-white/5 rounded-lg transition-all duration-300 ease-in-out ${pathname === '/about' ? 'text-white font-semibold bg-white/10' : ''}`}>
                            About Us
                        </Link>
                        <Link href="/projects" className={`block px-4 py-3 text-white text-2xl hover:text-white hover:text-3xl hover:font-semibold hover:bg-white/5 rounded-lg transition-all duration-300 ease-in-out ${pathname === '/projects' ? 'text-white font-semibold bg-white/10' : ''}`}>
                            Projects
                        </Link>
                        <Link href="/gallery" className={`block px-4 py-3 text-white text-2xl hover:text-white hover:text-3xl hover:font-semibold hover:bg-white/5 rounded-lg transition-all duration-300 ease-in-out ${pathname === '/gallery' ? 'text-white font-semibold bg-white/10' : ''}`}>
                            Gallery
                        </Link>
                        <Link href="/contact" className={`block px-4 py-3 text-white text-2xl hover:text-white hover:text-3xl hover:font-semibold hover:bg-white/5 rounded-lg transition-all duration-300 ease-in-out ${pathname === '/contact' ? 'text-white font-semibold bg-white/10' : ''}`}>
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;