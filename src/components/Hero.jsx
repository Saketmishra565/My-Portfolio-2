import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-200 via-white to-indigo-100">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Saket Mishra</h1>
      <h2 className="text-2xl text-gray-700">
        <Typewriter
          words={["Full Stack Developer", "React Enthusiast", "Python + FastAPI", "Open Source Contributor"]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h2>
    </section>
  );
};

export default Hero;
