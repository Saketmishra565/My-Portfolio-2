import React from "react";
import { Typewriter } from "react-simple-typewriter";
import './hero.css'; 

const Hero = () => {
  return (
    <section className="hero-section min-h-screen flex items-center justify-center bg-[#05010d] relative overflow-hidden px-6 lg:px-20">
      
      {/* Background Glows (Desktop par premium look ke liye) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/20 blur-[120px] rounded-full z-0"></div>

      <div className="hero-content z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-12 mt-10 lg:mt-0">
        
        {/* LEFT SIDE: Text Content */}
        <div className="text-left flex-1 order-2 lg:order-1">
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-4 text-white leading-tight">
            Hi, I'm <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
              Saket Mishra
            </span>
          </h1>
          
          <div className="text-xl lg:text-2xl text-gray-400 mb-8 h-10">
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
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="bg-white/5 border border-white/10 text-purple-300 px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm hover:bg-purple-900/20 transition-all cursor-default">GPT-4</span>
            <span className="bg-white/5 border border-white/10 text-yellow-300 px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm hover:bg-yellow-900/20 transition-all cursor-default">PYTHON</span>
            <span className="bg-white/5 border border-white/10 text-blue-300 px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm hover:bg-blue-900/20 transition-all cursor-default">React</span>
            <span className="bg-white/5 border border-white/10 text-green-300 px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm hover:bg-green-900/20 transition-all cursor-default">FastAPI</span>
            <span className="bg-white/5 border border-white/10 text-pink-300 px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm hover:bg-pink-900/20 transition-all cursor-default">Tailwind CSS</span>
            <span className="bg-white/5 border border-white/10 text-indigo-300 px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm hover:bg-indigo-900/20 transition-all cursor-default">MongoDB</span>
          </div>
        </div>

        {/* RIGHT SIDE: Photo Section */}
        <div className="relative flex-1 flex justify-center order-1 lg:order-2">
          {/* Main Glow behind photo - Iski bhi size badhayi hai background blur ke liye */}
          <div className="absolute inset-0 m-auto w-80 h-80 lg:w-[500px] lg:h-[500px] bg-purple-600/30 blur-[100px] rounded-full animate-pulse z-0"></div>
          
          <div className="relative z-10 group">
             <img 
              src="/saket.png"  // 👈 Maan raha hoon public folder mein saket.png hai
              alt="Saket Mishra"
              /* 👇 MAINE YAHAN SIZE BADHAYI HAI */
              className="w-80 h-80 lg:w-[600px] lg:h-[600px] object-contain drop-shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-transform duration-500 group-hover:scale-105"
            />
            {/* Bottom Gradient Fade - image ko background se smooth merge karne ke liye */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#05010d] to-transparent z-20"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;