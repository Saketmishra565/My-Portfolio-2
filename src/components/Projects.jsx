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
      Role: ["Full Stack Developer"],
      tech: ["React", "Tailwind CSS", "FastAPI", "REST API", "ZenQuotes API", "MongoDB Atlas", "Authentication", "2FA", "CI/CD"],
      image: "https://github.com/Saketmishra565/My-Portfolio-2/blob/main/public/mindfulme_screenshot.png?raw=true",
      description: `Developed a responsive mental health web application for mood tracking, reminders, and progress analytics. Built reusable UI components using React and styled the interface with Tailwind CSS. Integrated FastAPI backend to handle CRUD operations for mood entries, reminders, and user profiles. Implemented RESTful APIs to store and retrieve user data securely. Designed a custom reminder system with support for daily and one-time events, including edit and delete functionality. Created interactive mood tracking interface with mood selection, trigger tags, and daily note input. Displayed weekly mood trends and user statistics using data visualization components. Integrated ZenQuotes API to display motivational quotes with a refresh feature. Captured user profile data across health, lifestyle, and personal attributes for personalized insights. Ensured mobile responsiveness, accessibility, and clean user experience across all devices.`
    },
  ];

  // 🎨 Tech tag color mapping
  const techColors = {
    "GPT-4": "bg-purple-200 text-purple-800",
    "DALL·E": "bg-yellow-200 text-yellow-800",
    "ElevenLabs": "bg-blue-200 text-blue-800",
    "Docker": "bg-cyan-200 text-cyan-800",
    "Kubernetes": "bg-green-200 text-green-800",
    "AWS S3": "bg-orange-200 text-orange-800",
    "YouTube API": "bg-red-200 text-red-800",
    "PowerBI": "bg-pink-200 text-pink-800",
    "React": "bg-sky-200 text-sky-800",
    "Tailwind CSS": "bg-teal-200 text-teal-800",
    "TailwindCSS": "bg-teal-300 text-teal-900",
    "EmailJS": "bg-indigo-200 text-indigo-800",
    "FastAPI": "bg-lime-200 text-lime-800",
    "REST API": "bg-green-100 text-green-700",
    "ZenQuotes API": "bg-amber-100 text-amber-800",
    "MongoDB": "bg-emerald-200 text-emerald-800",
    "MongoDB Atlas": "bg-emerald-300 text-emerald-900",
    "JWT Auth": "bg-zinc-200 text-zinc-800",
    "Authentication": "bg-gray-200 text-gray-800",
    "2FA": "bg-fuchsia-200 text-fuchsia-800",
    "CI/CD": "bg-blue-300 text-blue-900",
  };

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
                    className={`px-3 py-1 rounded-full text-sm font-semibold shadow-sm ${
                      techColors[tech] || "bg-gray-100 text-gray-800"
                    }`}
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
