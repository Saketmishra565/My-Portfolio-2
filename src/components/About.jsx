import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white" data-aos="fade-up">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black">
          About Me
        </h3>
        {/* Gradient underline */}
        <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-red-600 to-black rounded"></div>

        <p className="text-gray-600">
          I’m a Software Engineer with 1.5+ years of experience in building scalable backend systems, developing FastAPI-based microservices, and integrating AI capabilities into applications. Proficient in designing RAG pipelines, deploying LLMs using OpenAI APIs, and containerizing solutions with Docker. Experienced with both RESTful and asynchronous APIs, with strong exposure to cloud platforms (AWS/GCP) and CI/CD workflows.
        </p>
      </div>
    </section>
  );
};

export default About;
