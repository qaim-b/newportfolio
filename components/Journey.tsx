'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function Journey() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1 && !visibleSteps.includes(index)) {
              setVisibleSteps((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const journeySteps = [
    {
      age: "Age 0-2",
      location: "Malaysia",
      flagCode: "my",
      description: "My earliest years in Southeast Asia.",
      impact: null,
    },
    {
      age: "Age 2-9",
      location: "Oman",
      flagCode: "om",
      description: "Experiencing life in the Middle East",
      impact: "Learning to adapt and appreciate different perspectives",
    },
    {
      age: "Age 9-14",
      location: "Kazakhstan",
      flagCode: "kz",
      description: "Growing up in Central Asia",
      impact: "Beginning to understand diverse cultures and how to connect across languages",
    },
    {
      age: "Age 14-22",
      location: "Malaysia",
      flagCode: "my",
      description: "University of Malaya - Where I learned Software Engineering",
      impact: "Started UM Global Buddies Football Team, learning how sports can bring people together",
    },
    {
      age: "Age 22-Present",
      location: "Japan",
      flagCode: "jp",
      description: "University of Tokyo - Masters in Mechanical Engineering, Robotics",
      impact: "Researching at GVLab, Hongo Campus — combining robotics with real-world applications",
    },
  ]

  const outcomes = [
    "Learning to work with people from different backgrounds",
    "Developing adaptability through new environments",
    "Growing a broader perspective on challenges",
    "Building resilience and cultural awareness",
  ]

  return (
    <section id="journey" className="py-20 px-6 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent-purple/10 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center">
          My <span className="bg-gradient-to-r from-accent to-accent-purple bg-clip-text text-transparent">Journey</span>
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          A learning path shaped by experiences across four countries
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-accent/30 via-accent to-accent-purple rounded-full shadow-glow"></div>

          {journeySteps.map((step, index) => (
            <div
              key={index}
              ref={(el) => {
                stepRefs.current[index] = el;
              }}
              className="relative mb-16 last:mb-0"
            >
              <div className={`flex flex-col md:flex-row gap-8 items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Content */}
                <div className={`w-full md:w-5/12 transition-all duration-700 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                } ${
                  visibleSteps.includes(index)
                    ? 'opacity-100 translate-x-0'
                    : `opacity-0 ${index % 2 === 0 ? 'translate-x-10' : '-translate-x-10'}`
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="group bg-white p-6 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 hover:scale-105 border border-gray-100 shimmer-effect relative overflow-hidden">
                    {/* Gradient accent on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                    <div className="relative z-10">
                      <h3 className={`text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300 flex items-center gap-2 ${
                        index % 2 === 0 ? 'justify-end md:justify-end' : 'justify-start md:justify-start'
                      }`}>
                        <Image
                          src={`https://flagcdn.com/w40/${step.flagCode}.png`}
                          alt={`${step.location} flag`}
                          width={32}
                          height={24}
                          className="inline-block rounded-sm"
                        />
                        <span>{step.location}</span>
                      </h3>
                      <p className="text-sm bg-gradient-to-r from-accent to-accent-purple bg-clip-text text-transparent font-semibold mb-3">
                        {step.age}
                      </p>
                      <p className="text-gray-700 mb-3 leading-relaxed">
                        {step.description}
                      </p>
                      {step.impact && (
                        <p className="text-gray-600 italic text-sm border-l-4 border-gradient-to-b from-accent to-accent-purple pl-4 py-2 bg-blue-50/50 rounded-r">
                          {step.impact}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-br from-accent to-accent-purple rounded-full border-4 border-white shadow-glow z-10 transition-all duration-700 ${
                  visibleSteps.includes(index)
                    ? 'scale-100 opacity-100'
                    : 'scale-0 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100 + 150}ms` }}
                >
                  <div className="absolute inset-0 rounded-full bg-accent/50 animate-ping"></div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Journey Outcomes */}
        <div className="mt-20 bg-gradient-modern text-white p-8 md:p-12 rounded-3xl shadow-glow-lg hover:shadow-glow-lg transition-all duration-700 hover:scale-[1.02] relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              What I'm still learning:
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20">
                  <div className="bg-white/20 rounded-lg p-2 group-hover:bg-white/30 transition-colors duration-300">
                    <svg className="w-6 h-6 text-white flex-shrink-0 group-hover:scale-125 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-lg leading-relaxed font-medium">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
