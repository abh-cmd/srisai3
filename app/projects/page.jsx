"use client";

import Image from "next/image";
import { useState, useEffect } from 'react';

export default function Projects() {
    const [projects, setProjects] = useState([
        {
            id: 1,
            name: 'Drowing room for family time ',
            description: 'Badroom with a clean and comfortable design for your family. charming whit a modern design. ',
            image: '/image/project3.jpg',
            link: '',
            isHovered: false,
        },
        {
            id: 2,
            name: 'Kitchen look modern and clean',
            description: 'kitchen look modern and clean. charming whit a modern design. ',
            image: '/image/project2.jpg',
            link: '',
            isHovered: false,
        },
        {
            id: 3,
            name: 'Perfect living room for family time',
            description: 'Drowing room with a clean and comfortable design for your family. charming whit a modern design. ',
            image: '/image/project4.png',
            link: '',
            isHovered: false,
        },
        {
            id: 4,
            name: 'office interiors',
            description: 'Creating a modern and professional workspace designed for productivity and comfort.',
            image: '/image/office-interior.jpg',
            link: '',
            isHovered: false,
        },
    ]);

    const [isVisible, setIsVisible] = useState(false);
    const [isImageVisible, setIsImageVisible] = useState(false);

    useEffect(() => {
        // Trigger text animation
        const textTimer = setTimeout(() => {
            setIsVisible(true);
        }, 500);

        // Trigger image animation
        const imageTimer = setTimeout(() => {
            setIsImageVisible(true);
        }, 1000);

        return () => {
            clearTimeout(textTimer);
            clearTimeout(imageTimer);
        };
    }, []);

    const handleMouseEnter = (id) => {
        setProjects(projects.map(project =>
            project.id === id ? { ...project, isHovered: true } : project
        ));
    };

    const handleMouseLeave = (id) => {
        setProjects(projects.map(project =>
            project.id === id ? { ...project, isHovered: false } : project
        ));
    };

    return (
        <div className="min-h-screen bg-gray-900">
            {/* Hero Section with Enhanced Layout */}
            <div className="relative flex flex-col min-h-[80vh] px-0 md:px-0 lg:px-0 overflow-hidden bg-gray-900">
                {/* Background Image with Transition */}
                <div className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${isImageVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                    <Image
                        src="/image/backgroundproject.jpg"
                        alt="Background"
                        fill
                        className="object-cover brightness-125"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/50 to-transparent"></div>
                </div>

                {/* Text Box with Enhanced Positioning and Animation */}
                <div className={`relative flex items-center min-h-[80vh] w-full`}>
                    <div className={`relative inline-block max-w-xl ml-4 mr-auto mt-32 bg-black/25 backdrop-blur-lg p-6 rounded-2xl border border-white/15 shadow-2xl transition-all duration-1000 ease-in-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <h1 className="text-3xl md:text-4xl font-noto-serif font-bold text-white mb-4 [text-shadow:_0_0_30px_rgba(255,255,255,0.3)]">OUR RANGE OF WORK</h1>
                        <div className="w-20 h-1 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 rounded-full mb-4 shadow-[0_0_20px_rgba(251,191,36,0.5),_0_0_40px_rgba(251,191,36,0.3)]"></div>
                        <p className="text-base md:text-lg font-noto-sans text-gray-200 leading-relaxed">
                            Transforming spaces across India with bespoke interior designs that blend traditional craftsmanship with modern aesthetics. Explore our diverse portfolio of residential and commercial projects.
                        </p>
                    </div>
                </div>
            </div>

            {/* Projects Grid Section with Enhanced Layout */}
            <section className="py-24 bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {projects.map((project) => (
                            <div 
                                key={project.id} 
                                className="relative overflow-hidden rounded-2xl group cursor-pointer aspect-w-16 aspect-h-9 shadow-xl hover:shadow-2xl transition-all duration-500"
                                onMouseEnter={() => handleMouseEnter(project.id)}
                                onMouseLeave={() => handleMouseLeave(project.id)}
                            >
                                {
                                    (project.name === 'Perfect living room for family time' || 
                                     project.name === 'Drowing room for family time ' ||
                                     project.name === 'Kitchen look modern and clean' ||
                                     project.name === 'office interiors') && project.isHovered ? (
                                        <video
                                            className="w-full h-full object-cover"
                                            controls={false}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            src={
                                                project.name === 'Drowing room for family time ' 
                                                    ? "/videos/4231453-hd_1920_1080_25fps.mp4"
                                                    : project.name === 'Kitchen look modern and clean'
                                                        ? "/videos/3444432-hd_1920_1080_30fps.mp4"
                                                        : project.name === 'office interiors'
                                                            ? "/videos/8347237-uhd_3840_2160_25fps.mp4"
                                                            : "/videos/3770033-hd_1920_1080_25fps.mp4"
                                            }
                                        >
                                            Your browser does not support the video tag.
                                        </video>
                                    ) : (
                                        <Image 
                                            src={project.image} 
                                            width={800} 
                                            height={450} 
                                            alt={project.name} 
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                        />
                                    )
                                }
                                
                                {/* Enhanced Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                                {/* Enhanced Text Overlay */}
                                <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h2 className="text-2xl md:text-3xl font-noto-serif font-bold text-white mb-3">{project.name}</h2>
                                    <p className="text-gray-200 font-noto-sans text-base md:text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style jsx global>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slideInLeft {
                    from {
                        transform: translateX(-100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    );
}