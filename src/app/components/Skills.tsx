"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaPython, FaJava, FaDatabase, FaHtml5, FaCss3, FaJs, FaReact, FaPhp, FaGitAlt } from "react-icons/fa";
import { SiPytorch, SiTensorflow, SiC } from "react-icons/si";

const skills = [
  { name: "C", icon: <SiC />, color: "text-blue-500" },
  { name: "Java", icon: <FaJava />, color: "text-red-500" },
  { name: "Python", icon: <FaPython />, color: "text-yellow-400" },
  { name: "PyTorch", icon: <SiPytorch />, color: "text-red-400" },
  { name: "TensorFlow", icon: <SiTensorflow />, color: "text-yellow-500" },
  { name: "HTML", icon: <FaHtml5 />, color: "text-orange-400" },
  { name: "CSS", icon: <FaCss3 />, color: "text-blue-400" },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-300" },
  { name: "React", icon: <FaReact />, color: "text-blue-300" },
  { name: "PHP", icon: <FaPhp />, color: "text-orange-400" },
  { name: "SQL", icon: <FaDatabase />, color: "text-purple-400" },
  { name: "Git", icon: <FaGitAlt />, color: "text-red-400" },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the device is mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // ✅ Fix: Precompute `useTransform` outside `.map()`
  const parallaxEffects = skills.map((_, index) => {
    const yRange = isMobile ? [-5, 5] : [-20, 20];
    return useTransform(
      scrollYProgress,
      [0, 1],
      index % 3 === 0 ? yRange : index % 3 === 1 ? [0, 0] : [-yRange[0], -yRange[1]]
    );
  });

  return (
    <section
      ref={sectionRef}
      className="py-20 relative overflow-hidden text-white text-center"
      style={{
        background: "linear-gradient(to bottom, #111827, #0f172a)",
        minHeight: "100vh",
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]"></div>
      </div>

      {/* Section title */}
      <motion.h2
        className="text-4xl font-bold mb-10 bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Skills & Technologies
        <div className="w-94 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-10 mt-1"></div>
      </motion.h2>

      {/* Skills grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-10 relative z-10 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {skills.map((skill, index) => {
          const y = parallaxEffects[index]; // ✅ Now using precomputed transforms

          return (
            <motion.div
              key={index}
              className="relative"
              style={isMobile ? {} : { y }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <motion.div
                className={`
                  p-6 rounded-xl backdrop-blur-sm flex flex-col items-center
                  border border-opacity-20 border-blue-400
                  bg-gray-800 bg-opacity-40
                  hover:bg-opacity-50 transition-all
                  relative overflow-hidden
                `}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
                }}
              >
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-500 opacity-0"
                  whileHover={{ opacity: 0.2 }}
                />
                
                {/* Tech icon */}
                <motion.div
                  className={`text-5xl ${skill.color}`}
                  whileHover={{
                    rotate: [0, -5, 5, -5, 0],
                    transition: { duration: 0.5 },
                  }}
                >
                  {skill.icon}
                </motion.div>

                {/* Tech name */}
                <p className="mt-3 text-lg font-semibold">{skill.name}</p>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}