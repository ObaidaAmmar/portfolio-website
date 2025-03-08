"use client";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ParallaxProvider>
      <section id = "hero" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        {/* Left Circuit Board */}
        {mounted && (
          <Parallax translateX={[0, -100]} className="absolute left-0 bottom-0 w-1/3 h-full z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 0.6, x: 0 }}
              transition={{ duration: 1.5 }}
              className="w-full h-full"
            >
              <svg viewBox="0 0 200 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,0 L200,0 L200,400 L0,400 Z" fill="none" />
                <g stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="none">
                  <path d="M20,20 L180,20 L180,380 L20,380 Z" />
                  <path d="M40,40 L160,40 L160,360 L40,360 Z" />
                  <path d="M20,100 L180,100" />
                  <path d="M20,200 L180,200" />
                  <path d="M20,300 L180,300" />
                  <path d="M60,20 L60,380" />
                  <path d="M100,20 L100,380" />
                  <path d="M140,20 L140,380" />
                </g>
                <g>
                  <circle cx="60" cy="100" r="5" fill="#4ADE80" />
                  <circle cx="100" cy="100" r="5" fill="#FB7185" />
                  <circle cx="140" cy="100" r="5" fill="#60A5FA" />
                  <circle cx="60" cy="200" r="5" fill="#FB7185" />
                  <circle cx="100" cy="200" r="5" fill="#60A5FA" />
                  <circle cx="140" cy="200" r="5" fill="#4ADE80" />
                  <circle cx="60" cy="300" r="5" fill="#60A5FA" />
                  <circle cx="100" cy="300" r="5" fill="#4ADE80" />
                  <circle cx="140" cy="300" r="5" fill="#FB7185" />
                </g>
              </svg>
            </motion.div>
          </Parallax>
        )}

        {/* Right Circuit Board */}
        {mounted && (
          <Parallax translateX={[0, 100]} className="absolute right-0 bottom-0 w-1/3 h-full z-10">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 0.6, x: 0 }}
              transition={{ duration: 1.5 }}
              className="w-full h-full"
            >
              <svg viewBox="0 0 200 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,0 L200,0 L200,400 L0,400 Z" fill="none" />
                <g stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="none">
                  <path d="M20,20 L180,20 L180,380 L20,380 Z" />
                  <path d="M40,40 L160,40 L160,360 L40,360 Z" />
                  <path d="M20,100 L180,100" />
                  <path d="M20,200 L180,200" />
                  <path d="M20,300 L180,300" />
                  <path d="M60,20 L60,380" />
                  <path d="M100,20 L100,380" />
                  <path d="M140,20 L140,380" />
                </g>
                <g>
                  <circle cx="60" cy="100" r="5" fill="#60A5FA" />
                  <circle cx="100" cy="100" r="5" fill="#4ADE80" />
                  <circle cx="140" cy="100" r="5" fill="#FB7185" />
                  <circle cx="60" cy="200" r="5" fill="#4ADE80" />
                  <circle cx="100" cy="200" r="5" fill="#FB7185" />
                  <circle cx="140" cy="200" r="5" fill="#60A5FA" />
                  <circle cx="60" cy="300" r="5" fill="#FB7185" />
                  <circle cx="100" cy="300" r="5" fill="#60A5FA" />
                  <circle cx="140" cy="300" r="5" fill="#4ADE80" />
                </g>
              </svg>
            </motion.div>
          </Parallax>
        )}

        {/* Rising Tech Orb */}
        {mounted && (
          <Parallax translateY={[100, -20]} className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-64 z-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.9, scale: 1 }}
              transition={{ duration: 2 }}
              className="w-full h-full"
            >
              <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="techOrb" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.9" />
                    <stop offset="70%" stopColor="#818CF8" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#C084FC" stopOpacity="0.4" />
                  </radialGradient>
                </defs>
                <circle cx="100" cy="100" r="80" fill="url(#techOrb)" />
                <g stroke="rgba(255,255,255,0.7)" strokeWidth="0.5" fill="none">
                  <circle cx="100" cy="100" r="90" />
                  <circle cx="100" cy="100" r="70" />
                  <circle cx="100" cy="100" r="50" />
                </g>
                <path d="M50,100 L150,100" stroke="rgba(255,255,255,0.7)" strokeWidth="0.5" />
                <path d="M100,50 L100,150" stroke="rgba(255,255,255,0.7)" strokeWidth="0.5" />
              </svg>
            </motion.div>
          </Parallax>
        )}

        {/* Main Content */}
        {mounted && (
          <Parallax speed={-5} className="z-20 relative">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-center px-4"
            >
              <h1 className="text-5xl font-extrabold">
                Hi, I&apos;m <span className="text-red-500">Obaida Ammar</span>
              </h1>
              <p className="text-lg mt-4">AI Researcher &#124; ML Engineer &#124; RL Enthusiast</p>
              <div className="mt-6 flex flex-wrap gap-4 justify-center">
                <Link
                  to="projects" smooth={true} duration={800} 
                  className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  View Projects
                </Link>
                <Link
                  to="contact" smooth={true} duration={800}
                  className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors"
                >
                  Hire Me
                </Link>
              </div>
            </motion.div>
          </Parallax>
        )}

        {/* Floating Tech Elements */}
        {mounted && (
          <>
            <Parallax speed={-2} className="absolute top-1/4 left-1/4 z-5">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 2 }}
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="5" width="30" height="30" stroke="#60A5FA" strokeWidth="2" />
                  <rect x="15" y="15" width="10" height="10" fill="#60A5FA" />
                </svg>
              </motion.div>
            </Parallax>

            <Parallax speed={3} className="absolute bottom-1/4 right-1/4 z-5">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 2 }}
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="15" stroke="#4ADE80" strokeWidth="2" />
                  <circle cx="20" cy="20" r="5" fill="#4ADE80" />
                </svg>
              </motion.div>
            </Parallax>

            <Parallax speed={-4} className="absolute top-1/3 right-1/3 z-5">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 2 }}
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="20,5 35,30 5,30" stroke="#FB7185" strokeWidth="2" fill="none" />
                  <circle cx="20" cy="15" r="3" fill="#FB7185" />
                </svg>
              </motion.div>
            </Parallax>
          </>
        )}
      </section>
    </ParallaxProvider>
  );
}
