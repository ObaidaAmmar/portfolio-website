"use client";
import { useRef, useEffect, useState, useMemo } from "react";
import { motion, useScroll } from "framer-motion";
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

// Function to calculate the y position for parallax effect
const getParallaxY = (scrollYProgress: number, index: number, isMobile: boolean): number => {
  const yRange = isMobile ? [-5, 5] : [-20, 20];
  if (index % 3 === 0) {
    return scrollYProgress * (yRange[1] - yRange[0]) + yRange[0];
  } else if (index % 3 === 1) {
    return 0;
  } else {
    return scrollYProgress * (-yRange[1] + yRange[0]) - yRange[0];
  }
};

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Generate particle data with useMemo to ensure it's only created once
  const particleData = useMemo(() => {
    return [...Array(20)].map(() => ({
      width: Math.random() * 8 + 2,
      height: Math.random() * 8 + 2,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      yMovement: Math.random() * -100 - 50,
      xMovement: Math.random() * 40 - 20,
      duration: Math.random() * 5 + 10,
      delay: Math.random() * 5
    }));
  }, []);

  // Check if the device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Parallax effect setup for skill cards
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Update scroll progress state when scrollYProgress changes
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(value => {
      setScrollProgress(value);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section
      ref={sectionRef}
      className="py-20 relative overflow-hidden text-white text-center"
      style={{
        background: "linear-gradient(to bottom, #111827, #0f172a)",
        minHeight: "100vh",
      }}
    >
      {/* Futuristic background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]"></div>
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-30"
          style={{
            background: "linear-gradient(45deg, transparent 45%, rgba(59, 130, 246, 0.1) 50%, transparent 55%)",
            backgroundSize: "200% 200%"
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
        
        {/* Fixed particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particleData.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white bg-opacity-20"
              style={{
                width: particle.width,
                height: particle.height,
                left: particle.left,
                top: particle.top,
                position: "absolute",
                willChange: "transform, opacity" 
              }}
              initial={{ 
                y: 0, 
                x: 0, 
                opacity: 0 
              }}
              animate={{ 
                y: particle.yMovement, 
                x: particle.xMovement,
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                delay: particle.delay
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <motion.h2
        className="text-4xl font-bold mb-10 relative z-10 bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Skills & Technologies
      </motion.h2>
      <div className="w-93 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto -mt-8 mb-20"></div>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-10 relative z-10 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {skills.map((skill, index) => {
          const delay = index * 0.05;
          // Calculate the y position based on scroll progress and index
          const yPosition = isMobile ? 0 : getParallaxY(scrollProgress, index, isMobile);
          return (
            <motion.div
              key={index}
              className="relative"
              style={isMobile ? {} : { y: yPosition }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay }}
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
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)"
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
                    transition: { duration: 0.5 }
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