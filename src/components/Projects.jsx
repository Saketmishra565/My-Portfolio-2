import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "Blackhat SEO – AI-Powered SEO & Multimedia Automation System",
      link: "#",
      tech: ["GPT-4", "Gemini Flash 2.0", "Gemini Flash 2.5", "Gemini Pro 2.5", "Gemini Flash Live", "Semrush", "Google Search Console", "Puppeteer", "DALL·E", "PowerBI", "YouTube API"],
      description: `• Automated blog creation using GPT-4, Gemini Flash 2.0, Gemini Flash 2.5, Gemini Pro 2.5, Gemini Flash Live for enhanced content generation.
• Integrated Semrush and Google Search Console for keyword research, SEO analytics, and performance tracking.
• Developed SEO scheduling and backlinks generation pipeline.
• Built a website replicator using Puppeteer with SEO embedding capabilities.
• Created an AI video pipeline (GPT → DALL·E → Voice → YouTube).
• Designed PowerBI dashboards for tracking views, CTR, and SERP rankings.
• Embedded SEO metadata for improved search visibility.`
    },
    {
      name: "Mood Tracker Mobile Application",
      link: "#",
      tech: ["React Native", "Tailwind CSS", "FastAPI", "AI", "Authentication", "Push Notifications", "Analytics"],
      image: "https://github.com/Saketmishra565/My-Portfolio-2/blob/main/public/mood_tracker_app.png?raw=true", // <-- 🖼️ image added here
      description: `Designed and developed a feature-rich mental health tracking app that enables users to log moods, track triggers, and visualize emotional patterns over time. Integrated AI-based features for mood prediction, pattern detection, and personalized coping suggestions.

Key Features:
• Multi-color theme switching with 4 preset combinations.
• User authentication with multipart profile creation capturing personal, professional, and lifestyle data.
• Reminders, notifications, and motivational prompts to support emotional well-being.
• Advanced analytics: Mood Forecast, Emotional DNA profile, Location-based mood tracking, and AI-powered mood copilot.
• Gamification with mood streak challenges, badges, and interactive mood widgets.
• Integration of music-mood correlation, mood journals with AI feedback, and social interaction tracking.

Impact: Improved user engagement and self-awareness by offering 80+ unique mental health features, increasing daily active usage by fostering proactive mood management.`,
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
    "React Native": "bg-sky-300 text-sky-900",
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
    "AI": "bg-indigo-100 text-indigo-900",
    "Gemini Flash 2.0": "bg-orange-100 text-orange-900",
    "Gemini Flash 2.5": "bg-orange-200 text-orange-800",
    "Gemini Pro 2.5": "bg-orange-300 text-orange-900",
    "Gemini Flash Live": "bg-orange-400 text-white",
    "Semrush": "bg-red-100 text-red-800",
    "Google Search Console": "bg-green-100 text-green-800",
    "Puppeteer": "bg-gray-100 text-gray-900",
    "Push Notifications": "bg-yellow-100 text-yellow-800",
    "Analytics": "bg-blue-100 text-blue-900",
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
