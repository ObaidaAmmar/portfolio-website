"use client";
import { useState } from "react";
import { Link } from "react-scroll";
import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: ['400'],
});

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="px-6 py-4 flex justify-between items-center">
        {/* Title - Responsive font size */}
        <Link to="hero" smooth={true} duration={800} className="cursor-pointer">
          <h1 className={`text-xl md:text-2xl font-bold tracking-wide text-blue-400 ${pacifico.className} whitespace-nowrap`}>
            Code with <span className="text-red-500">O</span>
          </h1>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex justify-center space-x-8 text-lg text-white font-semibold">
          <li>
            <Link to="about" smooth={true} duration={800} className="cursor-pointer hover:text-blue-400 transition-all">
              About
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={800} className="cursor-pointer hover:text-blue-400 transition-all">
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={800} className="cursor-pointer hover:text-blue-400 transition-all">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="px-6 py-4 bg-gray-800 md:hidden">
          <ul className="flex flex-col space-y-4 text-white font-semibold">
            <li>
              <Link
                to="about"
                smooth={true}
                duration={800}
                className="block hover:text-blue-400 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={800}
                className="block hover:text-blue-400 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={800}
                className="block hover:text-blue-400 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}