import React from "react";
import { Typewriter } from "react-simple-typewriter";
import './hero.css'; // Import custom CSS

const Hero = () => {
  return (
    <section className="hero-section h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-indigo-200 via-white to-purple-100 relative overflow-hidden">
      <div className="motion-background absolute top-0 left-0 w-full h-full z-0"></div> {/* background animation */}
      
      <div className="hero-content z-10">
        <h1 className="text-5xl font-bold mb-4 text-indigo-800">Hi, I'm Saket Mishra</h1>
        <h2 className="text-2xl text-gray-700 mb-6">
          <Typewriter
            words={[
              "Full Stack Developer",
              "React Enthusiast",
              "Python + FastAPI",
              "Open Source Contributor",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>

        {/* 👇 Colorful Tech Tags Section */}
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          <span className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold shadow">GPT-4</span>
          <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold shadow">PYTHON</span>
          <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold shadow">React</span>
          <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-semibold shadow">FastAPI</span>
          <span className="bg-pink-200 text-pink-800 px-3 py-1 rounded-full text-sm font-semibold shadow">Tailwind CSS</span>
          <span className="bg-indigo-200 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold shadow">MongoDB</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
