"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MdBrush, MdAccessTime, MdPayments, MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';

export default function Consultation() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        homeType: '2BHK',
        email: '',
        location: ''
    });

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const textVariants = {
        hidden: { 
            opacity: 0,
            x: -50
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="relative min-h-screen bg-black/25 backdrop-blur-lg">
            {/* Background Overlay with Gradient */}
            <div className="absolute inset-0 bg-black/25 backdrop-blur-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/30"></div>
            </div>
            
            <div className="relative z-20 pt-56 mt-20">
                <div className="container mx-auto px-4 py-8">
                    <motion.div 
                        className="max-w-6xl mx-auto"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        {/* Header Section with Enhanced Animation */}
                        <motion.div 
                            variants={itemVariants}
                            className="text-center mb-16"
                        >
                            <motion.h1 
                                variants={textVariants}
                                className="text-4xl md:text-6xl font-noto-serif font-bold mb-6 text-white relative inline-block"
                            >
                                Start Your Design Journey
                                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 rounded-full shadow-[0_0_20px_rgba(251,191,36,0.5)]"></div>
                            </motion.h1>
                            <motion.p 
                                variants={textVariants}
                                className="text-xl text-gray-200 font-noto-sans max-w-2xl mx-auto leading-relaxed"
                            >
                                Let&apos;s create your dream space together. Fill out the form below and our design experts will get in touch with you.
                            </motion.p>
                        </motion.div>

                        {/* Main Content with Enhanced Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                            {/* Left Column - Features with Enhanced Cards */}
                            <div className="lg:col-span-1 space-y-8">
                                <motion.div 
                                    variants={itemVariants}
                                    className="bg-black/15 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-amber-500/10 group"
                                >
                                    <motion.h2 
                                        variants={textVariants}
                                        className="text-2xl font-noto-serif font-semibold text-white mb-8 relative inline-block"
                                    >
                                        Our Promise to You
                                        <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-amber-500 to-transparent group-hover:w-24 transition-all duration-500"></div>
                                    </motion.h2>
                                    <div className="space-y-8">
                                        <motion.div 
                                            variants={itemVariants}
                                            className="flex items-start space-x-4 group/item"
                                        >
                                            <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                                                <MdBrush className="w-6 h-6 text-amber-400 group-hover/item:text-amber-300 transition-colors duration-300" />
                                            </div>
                                            <div>
                                                <motion.h3 
                                                    variants={textVariants}
                                                    className="font-semibold text-white mb-2 group-hover/item:text-amber-300 transition-colors duration-300"
                                                >
                                                    Creative Excellence
                                                </motion.h3>
                                                <motion.p 
                                                    variants={textVariants}
                                                    className="text-gray-300 text-sm leading-relaxed"
                                                >
                                                    Innovative designs that reflect your unique style and personality
                                                </motion.p>
                                            </div>
                                        </motion.div>
                                        <motion.div 
                                            variants={itemVariants}
                                            className="flex items-start space-x-4 group/item"
                                        >
                                            <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                                                <MdAccessTime className="w-6 h-6 text-amber-400 group-hover/item:text-amber-300 transition-colors duration-300" />
                                            </div>
                                            <div>
                                                <motion.h3 
                                                    variants={textVariants}
                                                    className="font-semibold text-white mb-2 group-hover/item:text-amber-300 transition-colors duration-300"
                                                >
                                                    Timely Delivery
                                                </motion.h3>
                                                <motion.p 
                                                    variants={textVariants}
                                                    className="text-gray-300 text-sm leading-relaxed"
                                                >
                                                    We respect your time and deliver on schedule, every time
                                                </motion.p>
                                            </div>
                                        </motion.div>
                                        <motion.div 
                                            variants={itemVariants}
                                            className="flex items-start space-x-4 group/item"
                                        >
                                            <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                                                <MdPayments className="w-6 h-6 text-amber-400 group-hover/item:text-amber-300 transition-colors duration-300" />
                                            </div>
                                            <div>
                                                <motion.h3 
                                                    variants={textVariants}
                                                    className="font-semibold text-white mb-2 group-hover/item:text-amber-300 transition-colors duration-300"
                                                >
                                                    Transparent Pricing
                                                </motion.h3>
                                                <motion.p 
                                                    variants={textVariants}
                                                    className="text-gray-300 text-sm leading-relaxed"
                                                >
                                                    No hidden costs, clear and fair pricing structure
                                                </motion.p>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>

                                <motion.div 
                                    variants={itemVariants}
                                    className="bg-black/15 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-amber-500/10 group"
                                >
                                    <motion.h2 
                                        variants={textVariants}
                                        className="text-2xl font-noto-serif font-semibold text-white mb-8 relative inline-block"
                                    >
                                        Contact Information
                                        <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-amber-500 to-transparent group-hover:w-24 transition-all duration-500"></div>
                                    </motion.h2>
                                    <div className="space-y-6">
                                        <motion.div 
                                            variants={itemVariants}
                                            className="flex items-center space-x-4 group/item"
                                        >
                                            <div className="w-10 h-10 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                                                <MdPhone className="w-5 h-5 text-amber-400 group-hover/item:text-amber-300 transition-colors duration-300" />
                                            </div>
                                            <motion.span 
                                                variants={textVariants}
                                                className="text-gray-300 group-hover/item:text-white transition-colors duration-300"
                                            >
                                                +91 701 382 5454
                                            </motion.span>
                                        </motion.div>
                                        <motion.div 
                                            variants={itemVariants}
                                            className="flex items-center space-x-4 group/item"
                                        >
                                            <div className="w-10 h-10 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                                                <MdEmail className="w-5 h-5 text-amber-400 group-hover/item:text-amber-300 transition-colors duration-300" />
                                            </div>
                                            <motion.span 
                                                variants={textVariants}
                                                className="text-gray-300 group-hover/item:text-white transition-colors duration-300"
                                            >
                                                Saiinteriors2015&#64;gmail.com
                                            </motion.span>
                                        </motion.div>
                                        <motion.div 
                                            variants={itemVariants}
                                            className="flex items-center space-x-4 group/item"
                                        >
                                            <div className="w-10 h-10 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                                                <MdLocationOn className="w-5 h-5 text-amber-400 group-hover/item:text-amber-300 transition-colors duration-300" />
                                            </div>
                                            <motion.span 
                                                variants={textVariants}
                                                className="text-gray-300 group-hover/item:text-white transition-colors duration-300"
                                            >
                                                Hyderabad, Telangana
                                            </motion.span>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Right Column - Form with Enhanced Styling */}
                            <motion.div 
                                variants={itemVariants}
                                className="lg:col-span-2"
                            >
                                <div className="bg-black/15 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-amber-500/10">
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <motion.div 
                                                variants={textVariants}
                                                className="group"
                                            >
                                                <label htmlFor="name" className="block text-sm font-medium text-white mb-2 group-hover:text-amber-300 transition-colors duration-300">
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 hover:border-white/20"
                                                    placeholder="Enter your full name"
                                                />
                                            </motion.div>

                                            <motion.div 
                                                variants={textVariants}
                                                className="group"
                                            >
                                                <label htmlFor="mobile" className="block text-sm font-medium text-white mb-2 group-hover:text-amber-300 transition-colors duration-300">
                                                    Mobile Number *
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="mobile"
                                                    name="mobile"
                                                    required
                                                    value={formData.mobile}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 hover:border-white/20"
                                                    placeholder="Enter your mobile number"
                                                />
                                            </motion.div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <motion.div 
                                                variants={textVariants}
                                                className="group"
                                            >
                                                <label htmlFor="email" className="block text-sm font-medium text-white mb-2 group-hover:text-amber-300 transition-colors duration-300">
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 hover:border-white/20"
                                                    placeholder="Enter your email address"
                                                />
                                            </motion.div>

                                            <motion.div 
                                                variants={textVariants}
                                                className="group"
                                            >
                                                <label htmlFor="location" className="block text-sm font-medium text-white mb-2 group-hover:text-amber-300 transition-colors duration-300">
                                                    Location *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="location"
                                                    name="location"
                                                    required
                                                    value={formData.location}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 hover:border-white/20"
                                                    placeholder="Enter your location"
                                                />
                                            </motion.div>
                                        </div>

                                        <motion.div 
                                            variants={textVariants}
                                            className="group"
                                        >
                                            <label htmlFor="homeType" className="block text-sm font-medium text-white mb-2 group-hover:text-amber-300 transition-colors duration-300">
                                                Property Type *
                                            </label>
                                            <select
                                                id="homeType"
                                                name="homeType"
                                                required
                                                value={formData.homeType}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 hover:border-white/20"
                                            >
                                                <option value="2BHK">2 BHK Apartment</option>
                                                <option value="3BHK">3 BHK Apartment</option>
                                                <option value="4+BHK">4+ BHK / Duplex</option>
                                                <option value="Independent">Independent House / Villa</option>
                                                <option value="Commercial">Commercial Space</option>
                                                <option value="Others">Others</option>
                                            </select>
                                        </motion.div>

                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            type="submit"
                                            className="w-full relative overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600 text-white px-10 py-4 rounded-xl text-lg font-medium transition-all duration-300 ease-in-out hover:from-amber-600 hover:to-amber-700 shadow-lg hover:shadow-xl"
                                        >
                                            <span className="relative z-10">Schedule Consultation</span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                                        </motion.button>
                                    </form>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
} 