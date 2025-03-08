"use client";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "Fair Counterfactual Explanations with RL",
    description: "An RL framework that optimizes counterfactual explanations while ensuring fairness, and proximity.",
    link: "https://github.com/ObaidaAmmar/IGH-Fair-CFE",
    icon: "🤖",
    color: "from-blue-600 to-purple-600",
    tech: ["Reinforcement Learning", "XAI", "Python"]
  },
  {
    title: "Academic Registration System",
    description: "A full-stack web app for Lebanese University Faculty of Science students to register for courses and view their grades.",
    link: "https://github.com/ObaidaAmmar/Academic-Registration",
    icon: "🎓",
    color: "from-green-600 to-teal-600",
    tech: ["Vanilla JS", "Php", "SQL"]
  },
  {
    title: "Text to RDF Graph Generator",
    description: "A Java tool that generates RDF graphs from text using NLP techniques.",
    link: "https://github.com/ObaidaAmmar/Text-to-RDF-Graph-Generator",
    icon: "📊",
    color: "from-red-600 to-pink-600",
    tech: ["Java", "NLP", "RDF"]
  }
];

export default function Projects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="projects" className="py-16 bg-gray-800 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      {mounted && (
        <>
          <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
            <Parallax speed={-10}>
              <svg width="100%" height="100%" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,400 Q720,200 1440,400 Q720,600 0,400" stroke="#60A5FA" strokeWidth="2" opacity="0.5" fill="none" />
                <path d="M0,500 Q720,700 1440,500 Q720,300 0,500" stroke="#4ADE80" strokeWidth="2" opacity="0.5" fill="none" />
                <path d="M0,300 Q720,100 1440,300 Q720,500 0,300" stroke="#FB7185" strokeWidth="2" opacity="0.5" fill="none" />
                
                <circle cx="200" cy="200" r="40" stroke="#60A5FA" strokeWidth="2" opacity="0.5" fill="none" />
                <circle cx="1200" cy="600" r="40" stroke="#4ADE80" strokeWidth="2" opacity="0.5" fill="none" />
                <circle cx="700" cy="400" r="100" stroke="#FB7185" strokeWidth="2" opacity="0.5" fill="none" />
                
                <rect x="100" y="500" width="80" height="80" stroke="#60A5FA" strokeWidth="2" opacity="0.5" fill="none" />
                <rect x="1100" y="300" width="80" height="80" stroke="#4ADE80" strokeWidth="2" opacity="0.5" fill="none" />
                
                <polygon points="400,700 450,650 500,700 450,750" stroke="#FB7185" strokeWidth="2" opacity="0.5" fill="none" />
                <polygon points="900,100 950,50 1000,100 950,150" stroke="#60A5FA" strokeWidth="2" opacity="0.5" fill="none" />
              </svg>
            </Parallax>
          </div>
        </>
      )}

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Section heading */}
        {mounted ? (
          <Parallax speed={5}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl font-bold mb-2">Projects</h2>
              <div className="w-37 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-10"></div>
              <p className="text-gray-300 max-w-2xl mx-auto mb-10">
                Here are some of my featured projects that showcase my expertise in AI, machine learning, and web development.
              </p>
            </motion.div>
          </Parallax>
        ) : (
          <div>
            <h2 className="text-4xl font-bold mb-2">Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-10"></div>
          </div>
        )}

        {/* Projects grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            mounted ? (
              <Parallax
                key={index}
                translateY={[20 * (index % 3 - 1), -20 * (index % 3 - 1)]}
                opacity={[0.8, 1]}
              >
                <div className="h-full">
                  <motion.div
                    className="bg-slate-800/80 border border-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-lg flex flex-col overflow-hidden relative group"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    style={{
                      height: "400px",
                      maxWidth: "350px",
                      margin: "0 auto",
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Project card content */}
                    <div className="flex flex-col items-center justify-between h-full">
                      {/* Project icon with gradient background */}
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-4 bg-gradient-to-br ${project.color}`}>
                        {project.icon}
                      </div>
                      
                      <h3 className="text-2xl font-semibold text-center">{project.title}</h3>
                      <p className="text-gray-300 mt-2 text-center">{project.description}</p>
                      
                      {/* Tech tags */}
                      <div className="flex flex-wrap justify-center gap-2 mt-4">
                        {project.tech.map((tech, i) => (
                          <span 
                            key={i} 
                            className="px-2 py-1 bg-white/10 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {/* Link button with hover effect */}
                      <div className="mt-6">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white font-semibold transition-all"
                        >
                          View Project →
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </Parallax>
            ) : (
              <motion.div
                key={index}
                className="bg-slate-800/80 p-6 rounded-2xl shadow-lg backdrop-blur-lg border border-white/10 relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                style={{
                  height: "400px",
                  maxWidth: "350px",
                  margin: "0 auto",
                }}
              >
                <div className="flex flex-col justify-between h-full items-center">
                  <div>
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-4 bg-gradient-to-br ${project.color}`}>
                      {project.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-center">{project.title}</h3>
                    <p className="text-gray-300 mt-2 text-center">{project.description}</p>
                  </div>
                  <div className="mt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white font-semibold transition-all"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}


/*
"use client";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "Fair Counterfactual Explanations with RL",
    description: "An RL framework that optimizes counterfactual explanations while ensuring fairness, and proximity.",
    link: "https://github.com/ObaidaAmmar/IGH-Fair-CFE",
    icon: "🤖",
    color: "from-blue-600 to-purple-600",
    tech: ["Python", "TensorFlow", "Reinforcement Learning"]
  },
  {
    title: "Academic Registration System",
    description: "A full-stack web app for Lebanese University Faculty of Science students to register for courses and view their grades.",
    link: "https://github.com/ObaidaAmmar/Academic-Registration",
    icon: "🎓",
    color: "from-green-600 to-teal-600",
    tech: ["Vanilla JS", "PHP", "SQL"]
  },
  {
    title: "Text to RDF Graph Generator",
    description: "A Java tool that generates RDF graphs from text using NLP techniques.",
    link: "https://github.com/ObaidaAmmar/Text-to-RDF-Graph-Generator",
    icon: "📊",
    color: "from-red-600 to-pink-600",
    tech: ["Java", "NLP", "RDF"]
  }
];

export default function Projects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="projects" className="py-16 bg-gray-800 text-white relative overflow-hidden">
      {/* Decorative background elements *//*}
      {mounted && (
        <>
          <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
            <Parallax speed={-10}>
              <svg width="100%" height="100%" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,400 Q720,200 1440,400 Q720,600 0,400" stroke="#60A5FA" strokeWidth="2" opacity="0.5" fill="none" />
                <path d="M0,500 Q720,700 1440,500 Q720,300 0,500" stroke="#4ADE80" strokeWidth="2" opacity="0.5" fill="none" />
                <path d="M0,300 Q720,100 1440,300 Q720,500 0,300" stroke="#FB7185" strokeWidth="2" opacity="0.5" fill="none" />
                
                <circle cx="200" cy="200" r="40" stroke="#60A5FA" strokeWidth="2" opacity="0.5" fill="none" />
                <circle cx="1200" cy="600" r="40" stroke="#4ADE80" strokeWidth="2" opacity="0.5" fill="none" />
                <circle cx="700" cy="400" r="100" stroke="#FB7185" strokeWidth="2" opacity="0.5" fill="none" />
                
                <rect x="100" y="500" width="80" height="80" stroke="#60A5FA" strokeWidth="2" opacity="0.5" fill="none" />
                <rect x="1100" y="300" width="80" height="80" stroke="#4ADE80" strokeWidth="2" opacity="0.5" fill="none" />
                
                <polygon points="400,700 450,650 500,700 450,750" stroke="#FB7185" strokeWidth="2" opacity="0.5" fill="none" />
                <polygon points="900,100 950,50 1000,100 950,150" stroke="#60A5FA" strokeWidth="2" opacity="0.5" fill="none" />
              </svg>
            </Parallax>
          </div>
        </>
      )}

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Section heading with parallax effect *//*}
        {mounted ? (
          <Parallax speed={5}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl font-bold mb-2">Projects</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-10"></div>
              <p className="text-gray-300 max-w-2xl mx-auto mb-10">
                Here are some of my featured projects that showcase my expertise in AI, machine learning, and web development.
              </p>
            </motion.div>
          </Parallax>
        ) : (
          <div>
            <h2 className="text-4xl font-bold mb-2">Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-10"></div>
          </div>
        )}

        {/* Projects grid with parallax effects *//*}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            mounted ? (
              <Parallax
                key={index}
                translateY={[20 * (index % 3 - 1), -20 * (index % 3 - 1)]}
                opacity={[0.8, 1]}
              >
                <motion.div
                  className="bg-gradient-to-br border border-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-lg transition transform hover:scale-105 flex flex-col justify-between"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  style={{
                    minHeight: "320px",
                    maxWidth: "350px",
                    margin: "0 auto",
                    background: "rgba(30, 41, 59, 0.7)",
                  }}
                >
                  {/* Project card content *//*}
                  <div className="flex flex-col items-center justify-between h-full">
                    {/* Project icon with gradient background *//*}
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-4 bg-gradient-to-br ${project.color}`}>
                      {project.icon}
                    </div>
                    
                    <h3 className="text-2xl font-semibold text-center">{project.title}</h3>
                    <p className="text-gray-300 mt-2 text-center">{project.description}</p>
                    
                    {/* Tech tags *//*}
                    <div className="flex flex-wrap justify-center gap-2 mt-4">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-2 py-1 bg-white/10 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Link button with hover effect *//*}
                    <div className="mt-6">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white font-semibold transition-all"
                      >
                        View Project →
                      </a>
                    </div>
                  </div>
                </motion.div>
              </Parallax>
            ) : (
              <motion.div
                key={index}
                className="bg-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-lg border border-white/20 transition transform hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                style={{
                  minHeight: "250px",
                  maxWidth: "350px",
                  margin: "0 auto",
                }}
              >
                <div className="flex flex-col justify-between h-full items-center">
                  <h3 className="text-2xl font-semibold text-center">{project.title}</h3>
                  <p className="text-gray-300 mt-2 text-center">{project.description}</p>
                  <div className="mt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 font-semibold"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
*/