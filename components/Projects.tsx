'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projectRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1 && !visibleProjects.includes(index)) {
              setVisibleProjects((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Green Pulse",
      subtitle: "AI-Powered Building Energy Optimization",
      description: "A machine learning platform that predicts and optimizes building energy consumption. Developed during undergraduate studies in Malaysia, focusing on sustainability and ROI-driven efficiency improvements for commercial buildings. Web app available, for best experience try on your smartphone.",
      metrics: ["92% Accuracy", "Energy Prediction", "Cost Optimization"],
      techStack: ["Python", "Machine Learning", "Streamlit", "Data Analytics"],
      github: "https://github.com/qaim-b/green-pulse",
      demo: "https://the-green-pulse-project.streamlit.app/",
      highlight: true,
      image: "/images/green-pulse.png",
      accentColor: "accent",
    },
    {
      title: "InspectAI",
      subtitle: "Industrial Defect Detection System",
      description: "A computer vision system for automated quality control in manufacturing. Built with deep learning to detect surface defects, learning from real-world industrial challenges.",
      metrics: ["94% Accuracy", "Real-time Processing", "Production-Ready"],
      techStack: ["PyTorch", "FastAPI", "OpenCV", "Docker"],
      github: "https://github.com/qaim-b/InspectAI",
      demo: "",
      highlight: false,
      image: "/images/project-1.png",
      accentColor: "accent-cyan",
    },
    {
      title: "EcoTrace",
      subtitle: "Gamified Carbon Footprint Tracker",
      description: "A cross-platform app that helps users log daily activities, visualize carbon impact, and build sustainable habits through streaks, badges, and challenges. Try on mobile for the best experience!",
      metrics: ["Activity Tracking", "Impact Insights", "Gamification"],
      techStack: ["Flutter", "Dart", "Provider", "Vercel"],
      github: "https://github.com/qaim-b/EcoTrace",
      demo: "https://ecotrace-web.vercel.app",
      highlight: false,
      image: "/images/project-4.png",
      accentColor: "accent-cyan",
    },
    {
      title: "Speech Emotion Recognition",
      subtitle: "Exploring Human Emotions Through AI",
      description: "An emotion detection system that analyzes audio signals to classify emotional states. Exploring how to combine audio feature extraction with deep learning approaches.",
      metrics: ["7 Emotion Classes", "Audio Processing", "Real-time Inference"],
      techStack: ["TensorFlow", "Librosa", "Python", "Scikit-learn"],
      github: "https://github.com/qaim-b/SpeechEmo_Recognition_System",
      demo: "",
      highlight: false,
      image: "/images/project-2.png",
      accentColor: "accent-amber",
    },
    {
      title: "AerialVision",
      subtitle: "Aerial Imagery Analysis & Object Detection",
      description: "A computer vision system for analyzing aerial and satellite imagery. Experimenting with object detection algorithms to identify and classify objects from aerial perspectives, with potential applications in urban planning and environmental monitoring.",
      metrics: ["Multi-Scale Detection", "Geo-Spatial Analysis", "Real-time Processing"],
      techStack: ["YOLO", "Python", "OpenCV", "TensorFlow"],
      github: "https://github.com/qaim-b/AerialVision",
      demo: "",
      highlight: false,
      image: "/images/project-3.png",
      accentColor: "accent",
    },
  ]

  const getAccentClasses = (color: string) => {
    const colorMap: Record<string, { border: string, glow: string, text: string, bg: string }> = {
      'accent': {
        border: 'border-accent',
        glow: 'shadow-glow',
        text: 'text-accent',
        bg: 'bg-accent'
      },
      'accent-cyan': {
        border: 'border-accent-cyan',
        glow: 'shadow-glow-cyan',
        text: 'text-accent-cyan',
        bg: 'bg-accent-cyan'
      },
      'accent-amber': {
        border: 'border-accent-amber',
        glow: 'shadow-glow-amber',
        text: 'text-accent-amber',
        bg: 'bg-accent-amber'
      }
    };
    return colorMap[color] || colorMap['accent'];
  };

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-primary via-primary-light to-background-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-gradient-to-tl from-accent-cyan/20 to-transparent rounded-full blur-3xl"></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-accent via-accent-cyan to-accent-amber bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Exploring technical solutions through hands-on learning and experimentation
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8">
          {projects.map((project, index) => {
            const accentClasses = getAccentClasses(project.accentColor);
            return (
              <div
                key={index}
                ref={(el) => {
                  projectRefs.current[index] = el;
                }}
                className={`bg-primary-light/50 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-${project.accentColor}/30 shadow-card hover:shadow-card-hover transition-all duration-500 overflow-hidden group relative ${project.highlight ? `ring-1 ring-${project.accentColor}/30` : ''
                  } ${visibleProjects.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${project.accentColor}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <div className="md:flex md:flex-row relative z-10">
                  {/* Project Image */}
                  <div className="md:w-2/5 relative h-64 md:h-auto bg-gradient-to-br from-accent/10 via-accent-cyan/10 to-background-light overflow-hidden">
                    <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-700">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    </div>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-light/90 via-transparent to-transparent md:bg-gradient-to-r md:from-primary-light/90"></div>

                    {/* Featured badge */}
                    {project.highlight && (
                      <div className="absolute top-4 left-4">
                        <span className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-${project.accentColor} to-accent-cyan text-white text-sm font-bold rounded-full ${accentClasses.glow}`}>
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="md:w-3/5 p-8 md:p-10">
                    <div className="mb-4">
                      <h3 className={`text-2xl md:text-3xl font-bold text-white mb-2 group-hover:${accentClasses.text} transition-colors duration-300`}>
                        {project.title}
                      </h3>
                      <p className={`${accentClasses.text} font-semibold text-lg`}>{project.subtitle}</p>
                    </div>

                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.metrics.map((metric, i) => (
                        <span
                          key={i}
                          className={`px-4 py-2 bg-${project.accentColor}/10 border border-${project.accentColor}/30 ${accentClasses.text} text-sm font-semibold rounded-lg hover:bg-${project.accentColor}/20 hover:scale-105 transition-all duration-300`}
                        >
                          {metric}
                        </span>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <p className="text-sm text-gray-500 mb-3 font-semibold">Tech Stack:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 bg-white/5 border border-white/10 text-gray-300 text-xs font-bold rounded-lg hover:border-accent/50 hover:text-accent transition-all duration-300 hover:scale-110"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-gradient-to-r hover:from-accent hover:to-accent-cyan hover:border-transparent transition-all duration-300 font-semibold hover:shadow-glow hover:scale-105"
                      >
                        <svg className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        GitHub
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          className={`group/btn flex items-center gap-2 px-6 py-3 border-2 ${accentClasses.border} ${accentClasses.text} rounded-xl hover:bg-gradient-to-r hover:from-${project.accentColor} hover:to-accent-cyan hover:text-white hover:border-transparent transition-all duration-300 font-semibold hover:${accentClasses.glow} hover:scale-105`}
                        >
                          <svg className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
