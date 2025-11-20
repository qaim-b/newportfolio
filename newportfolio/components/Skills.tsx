'use client';

import { useEffect, useRef, useState } from 'react';

export default function Skills() {
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

  const technicalSkills = [
    {
      category: "Machine Learning & AI",
      skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Computer Vision", "NLP"],
    },
    {
      category: "Robotics",
      skills: ["ROS (Robot Operating System)", "Pepper SDK", "Human-Robot Interaction", "Lego Mindstorm EV3"],
    },
    {
      category: "Software Engineering",
      skills: ["Python", "FastAPI", "Docker", "Git", "Linux"],
    },
    {
      category: "Data & Vision",
      skills: ["OpenCV", "Image Processing", "NumPy", "Pandas", "Data Analysis"],
    },
  ]

  const languages = [
    { language: "English", level: "Fluent", proficiency: 100 },
    { language: "Malay", level: "Conversational", proficiency: 70 },
    { language: "Japanese", level: "N5 Level", proficiency: 40 },
  ]

  const softSkills = [
    "Cross-cultural Communication",
    "Team Leadership",
    "Adaptability",
    "Problem Solving",
    "Teaching & Mentoring",
    "Project Management",
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-white via-teal-50/20 to-white relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-accent-teal/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className={`text-4xl md:text-5xl font-bold text-primary mb-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Skills & <span className="bg-gradient-to-r from-accent-teal to-accent bg-clip-text text-transparent">Languages</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Technical Skills */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-8 flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-accent to-accent-purple rounded-xl">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((item, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-500 hover:scale-105 border border-gray-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <h4 className="font-bold bg-gradient-to-r from-accent-teal to-accent bg-clip-text text-transparent mb-3 text-lg">{item.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-2 bg-gradient-to-br from-blue-50 to-teal-50 text-primary text-sm font-semibold rounded-lg hover:bg-gradient-to-r hover:from-accent-teal hover:to-accent hover:text-white transition-all duration-300 cursor-default shadow-sm hover:shadow-md hover:scale-110"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & Soft Skills */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            style={{ transitionDelay: '200ms' }}
          >
            {/* Languages */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: '300ms' }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-8 flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-accent-teal to-accent rounded-xl">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z" clipRule="evenodd" />
                  </svg>
                </div>
                Languages
              </h3>
              <div className="space-y-4 bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-500 border border-gray-100">
                {languages.map((item, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-primary group-hover:text-accent transition-colors duration-300">{item.language}</span>
                      <span className="text-sm text-gray-500 font-medium">{item.level}</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden shadow-inner">
                      <div
                        className={`bg-gradient-to-r from-accent-teal via-accent to-accent-purple h-3 rounded-full transition-all duration-1000 shadow-md ${isVisible ? 'w-full' : 'w-0'}`}
                        style={{
                          width: isVisible ? `${item.proficiency}%` : '0%',
                          transitionDelay: `${500 + index * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
                <p className="text-sm text-gray-600 mt-4 italic border-t border-gray-200 pt-4">
                  Cultural fluency across Middle East, Central Asia, and Southeast Asia
                </p>
              </div>
            </div>

            {/* Soft Skills */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: '400ms' }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-8 flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-accent to-accent-purple rounded-xl">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                Soft Skills
              </h3>
              <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-500 border border-gray-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {softSkills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-3 group hover:translate-x-2 transition-transform duration-300 p-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50">
                      <div className="p-1.5 rounded-lg bg-gradient-to-br from-accent-teal to-accent group-hover:scale-125 transition-transform duration-300">
                        <svg className="w-4 h-4 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 group-hover:text-accent transition-colors duration-300 font-semibold">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className={`bg-gradient-accent text-white p-8 md:p-12 rounded-3xl text-center max-w-4xl mx-auto shadow-glow hover:shadow-glow-lg transition-all duration-700 hover:scale-[1.02] relative overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '800ms' }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="w-16 h-16 mx-auto mb-6 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-xl md:text-2xl italic leading-relaxed font-medium">
              "My unconventional path through 4 countries before age 22 taught me that the best solutions come from diverse perspectives. Now I'm applying this global mindset to create AI and robotics solutions that bridge cultures and enhance human capabilities."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
