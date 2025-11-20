'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-accent/20 to-accent-purple/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-[32rem] h-[32rem] bg-gradient-to-br from-accent-teal/20 to-accent/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-r from-accent-purple/10 via-accent/10 to-accent-teal/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Profile Picture */}
        <div className={`mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="relative w-56 h-56 mx-auto group">
            {/* Animated ring around profile */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-accent-purple to-accent-teal bg-[length:200%_100%] animate-gradient-rotate p-1 shadow-glow">
              <div className="w-full h-full rounded-full bg-white"></div>
            </div>

            {/* Outer glow ring */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-accent/20 via-accent-purple/20 to-accent-teal/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Profile image container */}
            <div className="absolute inset-2 rounded-full overflow-hidden bg-gradient-to-br from-accent-light/10 via-accent-purple/10 to-accent-teal/10 shadow-2xl group-hover:scale-105 transition-transform duration-500 ring-4 ring-white">
              <div className="w-full h-full flex items-center justify-center text-accent/40 bg-gradient-to-br from-blue-50 to-purple-50 relative">
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

        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold text-primary mb-6 leading-tight transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Qaim Baaden<br />
          <span className="bg-gradient-to-r from-accent via-accent-purple to-accent-teal bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
            Learning & Building
          </span>
        </h1>

        <p className={`text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-300 leading-relaxed ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block font-semibold bg-gradient-to-r from-accent-teal to-accent bg-clip-text text-transparent">Now building AI solutions in Tokyo.</span>
        </p>

        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-gradient-to-r from-accent to-accent-purple text-white rounded-xl hover:shadow-glow transition-all duration-300 font-semibold shadow-card hover:shadow-card-hover hover:scale-105 overflow-hidden shimmer-effect"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              View My Work
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-white border-2 border-accent text-accent rounded-xl hover:bg-accent hover:text-white transition-all duration-300 font-semibold shadow-card hover:shadow-card-hover hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Download CV
              <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </span>
          </a>
        </div>

        <div className="mt-20 animate-bounce">
          <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-accent to-accent-purple flex items-center justify-center shadow-glow">
            <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
