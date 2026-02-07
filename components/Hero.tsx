'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-primary via-primary-light to-background-light relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-gradient-to-br from-accent/30 to-accent-cyan/30 rounded-full blur-3xl animate-float-slow"
          style={{
            top: '10%',
            left: '5%',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        ></div>
        <div
          className="absolute w-[32rem] h-[32rem] bg-gradient-to-br from-accent-cyan/20 to-accent-amber/20 rounded-full blur-3xl animate-float-slow"
          style={{
            bottom: '10%',
            right: '5%',
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
            animationDelay: '2s'
          }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-r from-accent/10 via-accent-cyan/10 to-accent-amber/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Profile Picture with neon glow */}
        <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="relative w-48 h-48 mx-auto group">
            {/* Animated neon ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-accent-cyan to-accent-amber bg-[length:200%_100%] animate-gradient-rotate p-1 shadow-glow-lg animate-glow-pulse">
              <div className="w-full h-full rounded-full bg-primary"></div>
            </div>

            {/* Outer glow */}
            <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-accent/30 via-accent-cyan/30 to-accent-amber/30 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow"></div>

            {/* Profile image */}
            <div className="absolute inset-2 rounded-full overflow-hidden bg-gradient-to-br from-accent/20 via-accent-cyan/20 to-background-light shadow-2xl group-hover:scale-105 transition-transform duration-500 ring-2 ring-accent/50">
              <div className="w-full h-full flex items-center justify-center text-accent/40 bg-gradient-to-br from-primary-light to-background-light relative">
                <Image
                  src="/images/profile.png"
                  alt="Qaim Baaden Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Greeting text */}
        <div className={`mb-4 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-accent-cyan text-lg font-medium tracking-wider">Hi, I'm</p>
        </div>

        {/* Name */}
        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Qaim Baaden
        </h1>

        {/* Animated role text */}
        <div className={`mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-accent via-accent-cyan to-accent-amber bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
            AI Engineer & Builder
          </h2>
        </div>

        {/* Description */}
        <p className={`text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 leading-relaxed ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Building intelligent solutions in <span className="text-accent-cyan font-semibold">Tokyo</span>.
          Passionate about <span className="text-accent font-semibold">machine learning</span>,
          <span className="text-accent-amber font-semibold"> computer vision</span>, and creating impactful AI applications.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-gradient-to-r from-accent to-accent-cyan text-white rounded-xl hover:shadow-glow-lg transition-all duration-300 font-semibold shadow-glow hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              View My Work
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
          </a>

          <a
            href="#contact"
            className="group relative px-8 py-4 bg-transparent border-2 border-accent text-accent rounded-xl hover:bg-accent hover:text-white transition-all duration-300 font-semibold shadow-card hover:shadow-glow hover:scale-105"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Get In Touch
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 animate-bounce">
          <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-accent to-accent-cyan flex items-center justify-center shadow-glow">
            <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
