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
      title: "InspectAI",
      subtitle: "Industrial Defect Detection System",
      description: "A computer vision system for automated quality control in manufacturing. Built with deep learning to detect surface defects, learning from real-world industrial challenges.",
      metrics: ["94% Accuracy", "Real-time Processing", "Production-Ready"],
      techStack: ["PyTorch", "FastAPI", "OpenCV", "Docker"],
      github: "https://github.com/qaim-b/InspectAI",
      demo: "#",
      highlight: true,
      image: "/images/project-1.png",
    },
    {
      title: "Speech Emotion Recognition",
      subtitle: "Exploring Human Emotions Through AI",
      description: "An emotion detection system that analyzes audio signals to classify emotional states. Exploring how to combine audio feature extraction with deep learning approaches.",
      metrics: ["7 Emotion Classes", "Audio Processing", "Real-time Inference"],
      techStack: ["TensorFlow", "Librosa", "Python", "Scikit-learn"],
      github: "https://github.com/qaim-b/SpeechEmo_Recognition_System",
      demo: "#",
      highlight: false,
      image: "/images/project-2.png",
    },
    {
      title: "AerialVision",
      subtitle: "Aerial Imagery Analysis & Object Detection",
      description: "A computer vision system for analyzing aerial and satellite imagery. Experimenting with object detection algorithms to identify and classify objects from aerial perspectives, with potential applications in urban planning and environmental monitoring.",
      metrics: ["Multi-Scale Detection", "Geo-Spatial Analysis", "Real-time Processing"],
      techStack: ["YOLO", "Python", "OpenCV", "TensorFlow"],
      github: "https://github.com/qaim-b/AerialVision",
      demo: "#",
      highlight: false,
      image: "/images/project-3.png",
    },
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-white to-purple-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-gradient-to-br from-accent-teal/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-gradient-to-tl from-accent-purple/10 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center">
          Technical <span className="bg-gradient-to-r from-accent-teal to-accent-purple bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Exploring technical solutions through hands-on learning
        </p>

        <div className="grid md:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                projectRefs.current[index] = el;
              }}
              className={`bg-white rounded-3xl shadow-card hover:shadow-card-hover transition-all duration-500 overflow-hidden group relative ${
                project.highlight ? 'ring-2 ring-accent ring-offset-4 ring-offset-purple-50/30' : ''
              } ${
                visibleProjects.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Gradient border effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent-purple to-accent-teal opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl"></div>

              <div className="md:flex md:flex-row-reverse relative z-10">
                {/* Project Image */}
                <div className="md:w-2/5 relative h-64 md:h-auto bg-gradient-to-br from-accent/10 via-accent-purple/10 to-accent-teal/10 overflow-hidden">
                  <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-700">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent md:bg-gradient-to-r md:from-white"></div>
                </div>

                {/* Project Content */}
                <div className="md:w-3/5 p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary group-hover:from-accent group-hover:to-accent-purple bg-clip-text text-transparent transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="bg-gradient-to-r from-accent-teal to-accent bg-clip-text text-transparent font-semibold text-lg">{project.subtitle}</p>
                    </div>
                    {project.highlight && (
                      <span className="inline-block px-4 py-2 bg-gradient-to-r from-accent to-accent-purple text-white text-sm font-bold rounded-full self-start shadow-glow">
                        ⭐ Featured
                      </span>
                    )}
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.metrics.map((metric, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-gradient-to-br from-blue-50 to-purple-50 text-primary text-sm font-semibold rounded-xl border border-accent/20 hover:border-accent hover:shadow-md hover:scale-105 transition-all duration-300"
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
                          className="px-3 py-1.5 bg-gradient-to-r from-accent to-accent-purple text-white text-xs font-bold rounded-lg hover:from-accent-teal hover:to-accent transition-all duration-300 shadow-sm hover:shadow-md hover:scale-110"
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
                      className="group/btn flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl hover:bg-gradient-to-r hover:from-accent hover:to-accent-purple transition-all duration-300 font-semibold shadow-card hover:shadow-glow hover:scale-105"
                    >
                      <svg className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      className="group/btn flex items-center gap-2 px-6 py-3 border-2 border-accent text-accent rounded-xl hover:bg-accent hover:text-white transition-all duration-300 font-semibold shadow-card hover:shadow-card-hover hover:scale-105"
                    >
                      <svg className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
