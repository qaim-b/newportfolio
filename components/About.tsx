'use client';

import { useEffect, useRef, useState } from 'react';

export default function About() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const skills = [
        { category: "AI & ML", items: ["PyTorch", "TensorFlow", "Computer Vision", "NLP"] },
        { category: "Development", items: ["Python", "FastAPI", "Docker", "Git"] },
        { category: "Robotics", items: ["ROS", "Pepper SDK", "HRI"] },
        { category: "Data", items: ["OpenCV", "NumPy", "Pandas", "Data Analysis"] },
    ];

    return (
        <section id="about" className="py-20 px-6 bg-gradient-to-b from-background-light via-primary-light to-primary relative overflow-hidden" ref={sectionRef}>
            {/* Background decoration */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-tl from-accent-cyan/20 to-transparent rounded-full blur-3xl"></div>

            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        About <span className="bg-gradient-to-r from-accent via-accent-cyan to-accent-amber bg-clip-text text-transparent">Me</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        AI Engineer passionate about building intelligent solutions that make a real impact
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    {/* Story */}
                    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: '200ms' }}>
                        <div className="bg-primary-light/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-accent/30 transition-all duration-500 h-full">
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <div className="p-2 bg-accent/20 rounded-lg">
                                    <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                    </svg>
                                </div>
                                My Journey
                            </h3>
                            <div className="space-y-4 text-gray-300 leading-relaxed">
                                <p>
                                    🇲🇾 Started in <span className="text-accent font-semibold">Malaysia</span>, where I learned Software Engineering at University of Malaya
                                </p>
                                <p>
                                    🇯🇵 Now pursuing my Masters in Mechanical Engineering at <span className="text-accent-cyan font-semibold">University of Tokyo</span>, focusing on Robotics at GVLab
                                </p>
                                <p>
                                    🤖 Currently researching <span className="text-accent-amber font-semibold">Human-Robot Interaction</span> for language education at GVLab
                                </p>
                                <p>
                                    🌏 Lived in 4 countries before age 22, bringing a global perspective to problem-solving
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Current Focus */}
                    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '300ms' }}>
                        <div className="bg-primary-light/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-accent-cyan/30 transition-all duration-500 h-full">
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <div className="p-2 bg-accent-cyan/20 rounded-lg">
                                    <svg className="w-6 h-6 text-accent-cyan" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                What I Do
                            </h3>
                            <div className="space-y-4">
                                <div className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-accent/30 transition-all duration-300">
                                    <h4 className="text-accent font-semibold mb-2">🧠 Machine Learning</h4>
                                    <p className="text-gray-400 text-sm">Building intelligent systems for computer vision, NLP, and predictive analytics</p>
                                </div>
                                <div className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-accent-cyan/30 transition-all duration-300">
                                    <h4 className="text-accent-cyan font-semibold mb-2">🤖 Robotics</h4>
                                    <p className="text-gray-400 text-sm">Exploring human-robot interaction and educational robotics applications</p>
                                </div>
                                <div className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-accent-amber/30 transition-all duration-300">
                                    <h4 className="text-accent-amber font-semibold mb-2">🌱 Sustainability</h4>
                                    <p className="text-gray-400 text-sm">Developing AI solutions for energy optimization and environmental impact</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills Grid */}
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">
                        Technical <span className="bg-gradient-to-r from-accent to-accent-cyan bg-clip-text text-transparent">Skills</span>
                    </h3>
                    <div className="grid md:grid-cols-4 gap-6">
                        {skills.map((skillGroup, index) => (
                            <div
                                key={index}
                                className="bg-primary-light/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-accent/30 transition-all duration-300 hover:scale-105"
                                style={{ transitionDelay: `${500 + index * 100}ms` }}
                            >
                                <h4 className="text-accent font-bold mb-4">{skillGroup.category}</h4>
                                <div className="space-y-2">
                                    {skillGroup.items.map((skill, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                                            <span className="text-gray-300 text-sm">{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
