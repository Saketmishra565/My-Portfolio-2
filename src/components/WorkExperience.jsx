    import React from 'react';

    const experiences = [
    {
        role: "Frontend Developer",
        company: "Tech Solutions",
        duration: "Jan 2023 – Present",
        description: "Worked on building responsive UI using React and TailwindCSS.",
    },
    {
        role: "Intern – Web Development",
        company: "CodeCrafters",
        duration: "Aug 2022 – Dec 2022",
        description: "Built static websites and learned REST API integration.",
    },
    {
        role: "Software Engineer",
        company: "InnovateX",
        duration: "Mar 2021 – Jul 2022",
        description: "Worked on backend API development using Node.js and MongoDB.",
    }

    ];

    const WorkExperience = () => {
    return (
        <div className="px-4 py-8 bg-white dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">Work Experience</h2>
        <div className="max-w-4xl mx-auto space-y-6">
            {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-xl transition duration-300">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.role}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{exp.company} • {exp.duration}</p>
                <p className="mt-2 text-gray-700 dark:text-gray-200">{exp.description}</p>
            </div>
            ))}
        </div>
        </div>
    );
    };

    export default WorkExperience;
