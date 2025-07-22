import React from "react";

const Projects = () => {
  const projects = [
    { name: "Portfolio Website", link: "https://your-portfolio.vercel.app" },
    { name: "Notes Manager App", link: "https://github.com/yourgithub/notes-app" },
    { name: "MindfulMe Wellness", link: "https://github.com/yourgithub/mindfulme" },
  ];

  return (
    <section id="projects" className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8 inline-block border-b-4 border-red-600 
                       bg-gradient-to-r from-red-600 to-black text-transparent bg-clip-text">
          Projects
        </h3>
        <ul className="space-y-4 mt-6">
          {projects.map((p, index) => (
            <li key={index}>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                {p.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
