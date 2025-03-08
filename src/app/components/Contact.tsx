"use client";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [fieldFocus, setFieldFocus] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const controls = useAnimation();
  
  // For the interactive background effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const currentContainer = containerRef.current;
    if (currentContainer) {
      currentContainer.addEventListener("mousemove", handleMouseMove);
      return () => {
        currentContainer.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = (field: string) => {
    setFieldFocus(field);
  };

  const handleBlur = () => {
    setFieldFocus(null);
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await emailjs.sendForm(
        "service_ogr3q7x", 
        "template_kcfverj", 
        e.target as HTMLFormElement,
        "F0gmKpDbmRVz4XFkl" 
      );
      
      // Successful animation
      controls.start({
        scale: [1, 1.02, 1],
        transition: { duration: 0.5 }
      });
      
      setSuccessMessage("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email send error:", error);
      setSuccessMessage("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="py-20 text-white relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        minHeight: "100vh",
      }}
    >
      {/* Interactive Background */}
      <div className="absolute inset-0 z-0">
        {/* Main glowing orbs with pulse effect */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl">
          <motion.div 
            className="w-full h-full rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2] 
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
        </div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500 opacity-20 rounded-full blur-3xl">
          <motion.div 
            className="w-full h-full rounded-full"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2] 
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1 
            }}
          />
        </div>
        
        {/* Extra ambient orbs */}
        <motion.div 
          className="absolute top-1/3 right-1/3 w-48 h-48 bg-cyan-400 opacity-10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.5, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        
        {/* Cyberpunk-inspired grid lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(79, 209, 197, 0.2) 25%, rgba(79, 209, 197, 0.2) 26%, transparent 27%, transparent 74%, rgba(79, 209, 197, 0.2) 75%, rgba(79, 209, 197, 0.2) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(79, 209, 197, 0.2) 25%, rgba(79, 209, 197, 0.2) 26%, transparent 27%, transparent 74%, rgba(79, 209, 197, 0.2) 75%, rgba(79, 209, 197, 0.2) 76%, transparent 77%, transparent)`,
            backgroundSize: '100px 100px',
          }} />
        </div>
        
        {/* Mouse follower glow effect */}
        <motion.div 
          className="absolute w-96 h-96 rounded-full blur-3xl pointer-events-none"
          animate={{
            x: mousePosition.x - 192, // half of width
            y: mousePosition.y - 192, // half of height
          }}
          transition={{ type: "spring", damping: 15 }}
          style={{ 
            background: 'radial-gradient(circle, rgba(56, 182, 255, 0.12) 0%, rgba(56, 182, 255, 0) 70%)',
            opacity: 0.8
          }}
        />
      </div>
      
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.h2 
          className="text-5xl font-bold mb-4 relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Contact Me
          </span>
          <motion.div 
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "17rem" }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.h2>
        
        <motion.p
          className="mb-10 text-lg text-gray-300 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Let&apos;s connect and discuss how we can work together on your next project.
        </motion.p>
        
        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Contact Form */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.form
              ref={formRef}
              animate={controls}
              className="w-full bg-gray-900 p-8 rounded-xl shadow-2xl backdrop-blur-md bg-opacity-70 border border-gray-800 relative overflow-hidden"
              onSubmit={sendEmail}
            >
              {/* Form background glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              
              <div className="relative space-y-5">
                <div className="relative">
                  <motion.div 
                    className="absolute inset-0 border-2 border-blue-500 rounded opacity-0 pointer-events-none"
                    animate={{ opacity: fieldFocus === 'name' ? 0.5 : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full p-4 rounded-lg bg-gray-800 bg-opacity-50 border border-gray-700 focus:border-blue-400 focus:outline-none transition-all"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    required
                  />
                </div>
                
                <div className="relative">
                  <motion.div 
                    className="absolute inset-0 border-2 border-blue-500 rounded opacity-0 pointer-events-none"
                    animate={{ opacity: fieldFocus === 'email' ? 0.5 : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full p-4 rounded-lg bg-gray-800 bg-opacity-50 border border-gray-700 focus:border-blue-400 focus:outline-none transition-all"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    required
                  />
                </div>
                
                <div className="relative">
                  <motion.div 
                    className="absolute inset-0 border-2 border-blue-500 rounded opacity-0 pointer-events-none"
                    animate={{ opacity: fieldFocus === 'message' ? 0.5 : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    className="w-full p-4 rounded-lg bg-gray-800 bg-opacity-50 border border-gray-700 focus:border-blue-400 focus:outline-none transition-all"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    required
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-lg font-semibold text-lg flex items-center justify-center group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <motion.div 
                      className="w-6 h-6 border-4 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  ) : (
                    <>
                      Send Message
                      <motion.div
                        className="ml-2"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                      >
                        <FaPaperPlane />
                      </motion.div>
                    </>
                  )}
                </motion.button>
                
                <AnimatePresence>
                  {successMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={`mt-4 p-3 rounded-lg ${successMessage.includes("Failed") ? "bg-red-500/20 text-red-300" : "bg-green-500/20 text-green-300"}`}
                    >
                      {successMessage}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.form>
          </motion.div>
          
          {/* Info & Social Links */}
          <motion.div
            className="md:col-span-2 flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="bg-gray-900 bg-opacity-70 backdrop-blur-md p-6 rounded-xl border border-gray-800 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Connect With Me</h3>
              
              <div className="flex flex-col space-y-4">
                <motion.a 
                  href="https://linkedin.com/in/obaida-ammar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800 bg-opacity-50 hover:bg-blue-900/30 transition-all group"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-blue-700/30 p-3 rounded-lg group-hover:bg-blue-700/50 transition-colors">
                    <FaLinkedin className="text-2xl text-blue-400" />
                  </div>
                  <span>LinkedIn Profile</span>
                </motion.a>
                
                <motion.a 
                  href="https://github.com/ObaidaAmmar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800 bg-opacity-50 hover:bg-gray-700/30 transition-all group"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-gray-700/30 p-3 rounded-lg group-hover:bg-gray-700/50 transition-colors">
                    <FaGithub className="text-2xl text-gray-300" />
                  </div>
                  <span>GitHub Projects</span>
                </motion.a>
                
                <motion.a 
                  href="https://instagram.com/obaida_ammar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800 bg-opacity-50 hover:bg-pink-900/30 transition-all group"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-pink-700/30 p-3 rounded-lg group-hover:bg-pink-700/50 transition-colors">
                    <FaInstagram className="text-2xl text-pink-400" />
                  </div>
                  <span>Instagram Profile</span>
                </motion.a>
              </div>
            </div>
            
            <motion.div
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-500/20 backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Looking for a Developer?</h3>
              <p className="text-gray-300">I&apos;m currently available for freelance work and new opportunities.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Footer section */}
      <motion.div 
        className="mt-20 pt-8 border-t border-gray-800 text-center text-gray-400 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <p>&copy; {new Date().getFullYear()} Obaida Ammar. All rights reserved.</p>
      </motion.div>
    </section>
  );
}
