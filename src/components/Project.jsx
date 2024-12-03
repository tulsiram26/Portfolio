import React from "react";
import { Link } from "react-router-dom";
import projectsData from "../data/projectsData";

const Project = () => {
  return (
    <div className="p-10 bg-black min-h-screen">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-white mt-9 transform transition-all duration-300 hover:scale-125 hover:text-yellow-500">
          My Projects
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 p-10">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-slate-400 rounded-lg shadow-lg flex flex-col overflow-hidden"
          >
            <Link to={`/projects/${project.id}`}>
              <img
                src={project.image || "/default-image.jpg"}
                alt={project.title}
                className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
              />
            </Link>
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                <Link to={`/projects/${project.id}`} className="hover:underline">
                  {project.title}
                </Link>
              </h3>
              <p className="text-gray-700">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
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
