"use client";
import { Link } from "react-scroll";
import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: ['400'],
});

export default function Navbar () {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="px-6 py-4 flex justify-between items-center">
        {/* Title */}
        <Link to="hero" smooth={true} duration={800} className="cursor-pointer">
          <h1 className={`text-2xl font-bold tracking-wide text-blue-400 ${pacifico.className}`}>Code with <span className="text-red-500">O</span></h1>
        </Link>
        {/* Navigation Links */}
        <ul className="flex justify-center space-x-8 text-lg text-white font-semibold">
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
      </div>
    </nav>
  );
};