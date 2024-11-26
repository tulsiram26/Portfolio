import React from "react";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Obeys Agency",
      image: "/agency.jpg",
      description: "This is the description for Project 1.",
      technologies: ["React", "Tailwind", "Vite"],
    },
    {
      id: 2,
      title: "Dribble",
      image: "/dribble.jpg",
      description: "This is the description for Project 2.",
      technologies: ["JavaScript", "CSS", "HTML"],
    },
    {
      id: 3,
      title: "Premier",
      image: "/premier1.jpg",
      description: "This is the description for Project 3.",
      technologies: ["Node.js", "Express", "MongoDB"],
    },
    {
      id: 4,
      title: "Refokus",
      image: "/refokus.jpg",
      description: "This is the description for Project 4.",
      technologies: ["Python", "Django", "PostgreSQL"],
    },
    {
      id: 5,
      title: "StreamSphere",
      image: "/stream.jpg",
      description: "This is the description for Project 5.",
      technologies: ["Angular", "TypeScript", "SCSS"],
    },
    {
      id: 6,
      title: "ChatBot",
      image: "/chatbot.jpg",
      description: "This is the description for Project 6.",
      technologies: ["Java", "Spring Boot", "MySQL"],
    },
  ];

  return (
    <div className="p-10 bg-black min-h-screen">
      {/* Title Section */}
      <div className="text-center mb-10">
      <h1 className="text-4xl font-bold text-white mt-9 transform transition-all duration-300 hover:scale-125 hover:text-yellow-500">
          My Projects
        </h1>
      </div>

      {/* Projects List - Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-24 p-10 w-full h-[120vh] ">

        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-slate-400 rounded-lg shadow-lg overflow-hidden flex flex-col shadow-2xl shadow-red-950"
          >
            {/* Thumbnail */}
            <div className="relative w-full h-48 md:h-64 hover:scale-125 object-fill drop-shadow-2xl rounded-lg overflow-hidden">
              <img
                src={project.image || '/default-image.jpg'} // Default image if no thumbnail
                alt={project.title}
                className="w-full h-full object-cover"
              />
              {/* Hover Description */}
              {/* <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white text-center p-4">
                <p>{project.description}</p>
              </div> */}
            </div>

            {/* Details */}
            <div className="w-full p-6 mt-2">
              <hr className="w-full border-t-2 border-zinc-500 " />
              <h3 className="text-xl font-bold text-blue-900 drop-shadow-lg  px-2 mb-4">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-4">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-gray-200 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    <span className="text-gray-600">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
