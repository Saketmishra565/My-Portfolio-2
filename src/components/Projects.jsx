import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "AI SEO Video Automation",
      link: "#",
      tech: ["GPT-4", "DALL·E", "ElevenLabs", "Docker", "Kubernetes", "AWS S3", "YouTube API", "PowerBI"],
      description: `• Automated blog generation using GPT-4 with keyword research and backlinks.
• Developed website replicator using Puppeteer and SEO backlinks (Stocklinks).
• Built AI-powered video generation pipeline (GPT → DALL·E → Voiceover → YouTube).
• Used PowerBI to auto-generate CTR, views, ranking reports.
• Embedded SEO metadata (schema.org, transcripts) for improved rankings.

Impact:
• Achieved fully automated SEO campaigns via multimedia content.
• Scaled reach across replicated and white-labeled websites.
• Boosted user engagement and keyword rankings.`
    },
    {
      name: "Portfolio Website",
      link: "https://www.ultraxpert.in/",
      tech: ["React", "TailwindCSS", "EmailJS"],
      image: "https://github.com/Saketmishra565/My-Portfolio-2/blob/main/public/UltraXpert.png?raw=true",
      description: "Personal portfolio to showcase projects, skills, and resume with contact form.",
    },
    {
      name: "Notes Manager App",
      link: "https://github.com/yourgithub/notes-app",
      tech: ["React", "FastAPI", "MongoDB", "JWT Auth"],
      description: "A fullstack CRUD app for managing personal notes securely with login/signup.",
    },
    {
      name: "MindfulMe Wellness",
      link: "https://github.com/yourgithub/mindfulme",
      tech: ["React", "FastAPI", "MongoDB Atlas", "Authentication", "2FA", "CI/CD"],
      image: "https://github.com/Saketmishra565/My-Portfolio-2/blob/main/public/mindfulme_screenshot.png?raw=true",
      description:
        "Mental wellness web app with features like mood tracking, reminders, motivational quotes, secure login with 2FA, and CI/CD for continuous delivery."
    },
  ];

  return (
    <section id="projects" className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8 inline-block border-b-4 border-red-600 
                       bg-gradient-to-r from-red-600 to-black text-transparent bg-clip-text">
          Projects
        </h3>
        <ul className="space-y-10 mt-6 text-left">
          {projects.map((p, index) => (
            <li
              key={index}
              className="p-6 border rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-blue-600 underline hover:text-blue-800 font-semibold"
              >
                {p.name}
              </a>

              {/* Image block */}
              {p.image && (
                <img
                  src={p.image}
                  alt={`${p.name} Screenshot`}
                  className="mt-4 w-full max-h-64 object-cover rounded-lg shadow-md"
                />
              )}

              {/* Description */}
              {p.description && (
                <p className="mt-4 text-gray-700 whitespace-pre-line text-sm">
                  {p.description}
                </p>
              )}

              {/* Tech stack */}
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm border border-gray-300 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
