'use client';

import { useEffect, useRef, useState } from 'react';

export default function Experience() {
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

  return (
    <section id="experience" className="py-20 px-6 bg-white" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-bold text-primary mb-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Experience & Research
        </h2>

        {/* Current Research - Featured */}
        <div className={`mb-16 bg-gradient-to-br from-primary to-accent text-white rounded-2xl p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.02] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="flex items-start gap-3 mb-4">
            <svg className="w-8 h-8 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
            <div>
              <span className="inline-block px-3 py-1 bg-white/20 text-sm font-medium rounded-full mb-3">
                Current - 2025
              </span>
              <h3 className="text-3xl font-bold mb-2">
                Graduate Researcher
              </h3>
              <p className="text-xl text-white/90 mb-4">
                University of Tokyo • GVLab, Hongo Campus
              </p>
            </div>
          </div>

          <div className="ml-11">
            <h4 className="text-xl font-bold mb-3">
              Human-Robot Interaction for Language Education
            </h4>
            <p className="text-white/90 leading-relaxed mb-4">
              Working on an interactive robot system using Pepper robot to teach Hiragana (Japanese writing system) to learners.
              Learning how to combine computer vision, natural language processing, and robotics to create engaging educational experiences.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-sm text-white/70 mb-1">Focus</p>
                <p className="font-medium">Writing Stroke Recognition</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-sm text-white/70 mb-1">Technology</p>
                <p className="font-medium">Pepper Robot + CV</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-sm text-white/70 mb-1">Application</p>
                <p className="font-medium">Pronunciation & Writing</p>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Experience */}
        <div className="space-y-8">
          <h3 className={`text-2xl font-bold text-primary mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            style={{ transitionDelay: '400ms' }}
          >
            Professional Experience
          </h3>

          {/* Shibaura Institute */}
          <div className={`group border-l-4 border-accent pl-6 py-2 hover:border-primary hover:pl-8 transition-all duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            style={{ transitionDelay: '500ms' }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <div>
                <h4 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">Research Intern</h4>
                <p className="text-lg text-accent">Shibaura Institute of Technology</p>
              </div>
              <span className="text-gray-500 font-medium">6 months</span>
            </div>
            <p className="text-gray-700">
              Participated in research projects exploring robotics and automation systems.
              Had the opportunity to work with international research teams on real-world engineering challenges.
            </p>
          </div>

          {/* Schoolscans */}
          <div className={`group border-l-4 border-accent pl-6 py-2 hover:border-primary hover:pl-8 transition-all duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <div>
                <h4 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">Engineering Intern</h4>
                <p className="text-lg text-accent">Schoolscans Sdn Bhd • Malaysia</p>
              </div>
              <span className="text-gray-500 font-medium">3 months</span>
            </div>
            <p className="text-gray-700">
              Worked on software development and engineering projects for educational technology solutions.
              Learned about building practical software systems for real users.
            </p>
          </div>

          {/* German International School */}
          <div className={`group border-l-4 border-accent pl-6 py-2 hover:border-primary hover:pl-8 transition-all duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            style={{ transitionDelay: '700ms' }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <div>
                <h4 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">Robotics Instructor</h4>
                <p className="text-lg text-accent">German International School • Kuala Lumpur</p>
              </div>
              <span className="text-gray-500 font-medium">6 months</span>
            </div>
            <p className="text-gray-700 mb-3">
              Taught robotics and programming to international students using Lego Mindstorm EV3 platform.
              Learned how to make complex engineering concepts accessible to young learners through hands-on activities.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-background text-primary text-sm rounded hover:bg-primary hover:text-white transition-colors duration-300 cursor-default">Lego Mindstorm EV3</span>
              <span className="px-3 py-1 bg-background text-primary text-sm rounded hover:bg-primary hover:text-white transition-colors duration-300 cursor-default">STEM Education</span>
              <span className="px-3 py-1 bg-background text-primary text-sm rounded hover:bg-primary hover:text-white transition-colors duration-300 cursor-default">Curriculum Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
