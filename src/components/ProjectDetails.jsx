import React from "react";
import { useParams, Link } from "react-router-dom";
import projectsData from "../data/projectsData";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return <h2 className="text-center text-red-500">Project Not Found</h2>;
  }

  return (
    <div
      className="h-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${project.backgroundImage})` }} // Use backgroundImage from projectsData
    >
      {/* Video Background */}
      <div className="relative max-w-4xl w-full h-[60vh] shadow-lg rounded-lg overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={project.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content Overlay */}
        <div className="relative z-10 bg-black bg-opacity-50 h-full p-8">
          <h1 className="text-3xl font-bold text-white mb-4 ">{project.title}</h1>
          <p className="text-gray-300 mb-6">{project.description}</p>
          <div className="flex flex-wrap gap-4 mb-28 ">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600"
          >
            Visit Project
          </a>
          <div className="mt-6 ">
            <Link to="/" className="text-blue-400 hover:text-blue-600 font-medium">
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
