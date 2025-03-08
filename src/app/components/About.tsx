"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import { useEffect, useState } from "react";

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="about" className="w-full py-20 bg-gray-900 text-white overflow-hidden relative">
      {/* Tech-themed background elements */}
      {mounted && (
        <>
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
            <Parallax speed={5}>
              <svg width="100%" height="100%" viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="50" stroke="#60A5FA" strokeWidth="2" />
                <circle cx="900" cy="500" r="70" stroke="#4ADE80" strokeWidth="2" />
                <path d="M200,100 L800,500" stroke="#FB7185" strokeWidth="2" />
                <path d="M100,500 L900,100" stroke="#60A5FA" strokeWidth="2" />
                <rect x="400" y="200" width="200" height="200" stroke="#4ADE80" strokeWidth="2" />
                <polygon points="500,100 600,300 400,300" stroke="#FB7185" strokeWidth="2" />
              </svg>
            </Parallax>
          </div>
        </>
      )}

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 relative z-10">
        {/* Profile Image */}
        {mounted ? (
          <Parallax translateX={[-20, 20]} translateY={[-10, 10]} className="flex justify-center md:justify-start">
            <motion.div
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-blue-500 opacity-30 rounded-full blur-md transform scale-110"></div>
              
              {/* Profile image */}
              <div className="relative z-10 w-full h-full">
                <Image
                  src="/profile.jpg"
                  alt="Obaida Ammar"
                  width={256}
                  height={256}
                  className="object-cover w-full h-full"
                />
              </div>
              
              {/* Decorative tech circles */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-2 border-white"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-400 rounded-full border-2 border-white"></div>
            </motion.div>
          </Parallax>
        ) : (
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
            <Image
              src="/profile.jpg"
              alt="Obaida Ammar"
              width={256}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>
        )}

        {/* Bio */}
        {mounted ? (
          <Parallax speed={5} className="flex-1">
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {/* Floating tech elements */}
              <div className="absolute -top-4 right-4 w-8 h-8 opacity-30 hidden md:block">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="4" width="24" height="24" stroke="#60A5FA" strokeWidth="2" />
                </svg>
              </div>
              <div className="absolute bottom-4 left-10 w-6 h-6 opacity-30 hidden md:block">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="12,2 22,22 2,22" stroke="#FB7185" strokeWidth="2" />
                </svg>
              </div>
              
              {/* Section heading */}
              <h2 className="text-4xl font-bold mb-3 inline-block relative">
                About Me
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform translate-y-2"></span>
              </h2>
              
              <div className="space-y-4">
                <p className="text-gray-300 text-lg">
                  Hi, I&apos;m <span className="text-blue-400 font-semibold">Obaida Ammar</span>, a passionate AI/ML researcher and developer with a Master&apos;s in Information Systems & Data Intelligence from the Lebanese University. My thesis focused on <span className="text-green-400 font-semibold">Explainable AI, Fairness, and Reinforcement Learning</span>, and I love working on cutting-edge AI solutions. 🚀
                </p>
                <p className="text-gray-300 text-lg">
                  I also have experience in <span className="text-purple-400 font-semibold">data science, AI/ML engineering, and web development</span>, and I&apos;ve collaborated on projects like an <span className="text-purple-400 font-semibold">academic registration system</span>, an <span className="text-purple-400 font-semibold">RL framework for fair counterfactual explanations</span>, and more.
                </p>
                
                {/* Skills pills */}
                <motion.div 
                  className="flex flex-wrap gap-2 mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <span className="px-3 py-1 bg-pink-900 text-blue-200 rounded-full text-sm font-medium">Explainable AI</span>
                  <span className="px-3 py-1 bg-green-900 text-green-200 rounded-full text-sm font-medium">Fairness</span>
                  <span className="px-3 py-1 bg-purple-900 text-purple-200 rounded-full text-sm font-medium">Reinforcement Learning</span>
                </motion.div>
              </div>
            </motion.div>
          </Parallax>
        ) : (
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold mb-3">About Me</h2>
            <p className="text-gray-300 text-lg">
              Hi, I&apos;m <span className="text-blue-400 font-semibold">Obaida Ammar</span>, a passionate AI/ML researcher and developer with a Master&apos;s in Information Systems & Data Intelligence from the Lebanese University. My thesis focused on <span className="text-green-400 font-semibold">Explainable AI, Fairness, and Reinforcement Learning</span>, and I love working on cutting-edge AI solutions. 🚀
            </p>
            <p className="mt-4 text-gray-300 text-lg">
              I also have experience in <span className="text-purple-400 font-semibold">data science, AI/ML engineering, and web development</span>, and I&apos;ve collaborated on projects like an <span className="text-purple-400 font-semibold">academic registration system</span>, an <span className="text-purple-400 font-semibold">RL framework for fair counterfactual explanations</span>, and more.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}