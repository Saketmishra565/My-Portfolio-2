import React from "react";

const Navbar = () => {
  return (
    <nav className="p-4 bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between">
        <h1 className="font-bold text-xl">MyPortfolio</h1>
        <div className="space-x-4">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
