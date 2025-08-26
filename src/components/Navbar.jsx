import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="font-bold text-xl">MyPortfolio</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-indigo-500">About</a>
          <a href="#skills" className="hover:text-indigo-500">Skills</a>
          <a href="#projects" className="hover:text-indigo-500">Projects</a>
          <a href="#contact" className="hover:text-indigo-500">Contact</a>
          <a href="#practice-projects" className="hover:text-indigo-500">Practice Projects</a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-white shadow-md rounded-lg py-4 px-6 space-y-4">
          <a href="#about" className="block hover:text-indigo-500" onClick={() => setIsOpen(false)}>About</a>
          <a href="#skills" className="block hover:text-indigo-500" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#projects" className="block hover:text-indigo-500" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" className="block hover:text-indigo-500" onClick={() => setIsOpen(false)}>Contact</a>
          <a href="#practice-projects" className="block hover:text-indigo-500" onClick={() => setIsOpen(false)}>Practice Projects</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
