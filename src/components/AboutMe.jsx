import React, { useState } from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiPython,
  SiCplusplus,
} from "react-icons/si";
import { useNavigate } from "react-router-dom";

function AboutMe() {
  const navigate = useNavigate(); // Initialize the navigate function

  // State to track which skill is being hovered
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const handleDownloadClick = () => {
    navigate("/resume"); // Navigate to the /resume page when clicked
  };

  // Skill data including names and proficiency percentages
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 className="text-4xl text-orange-500 mx-auto mb-2" />,
      percentage: 90,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="text-4xl text-blue-500 mx-auto mb-2" />,
      percentage: 85,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-4xl text-yellow-400 mx-auto mb-2" />,
      percentage: 80,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-4xl text-teal-400 mx-auto mb-2" />,
      percentage: 75,
    },
    {
      name: "React",
      icon: <FaReact className="text-4xl text-cyan-400 mx-auto mb-2" />,
      percentage: 70,
    },
    {
      name: "Python",
      icon: <SiPython className="text-4xl text-blue-400 mx-auto mb-2" />,
      percentage: 65,
    },
    {
      name: "C++",
      icon: <SiCplusplus className="text-4xl text-indigo-400 mx-auto mb-2" />,
      percentage: 60,
    },
    {
      name: "C",
      icon: <p className="text-4xl text-gray-300 mx-auto mb-2 font-bold">C</p>,
      percentage: 60,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white flex flex-col items-center py-12">
      {/* About Me Title */}
      <h1 className="text-5xl font-bold text-center mb-12">About Me</h1>

      {/* Who Am I Section */}
      <div className="w-11/12 md:w-9/12 lg:w-8/12 bg-gray-800 p-8 rounded-lg shadow-lg space-y-6">
        <div className="flex items-center space-x-4">
          <i className="ri-play-fill text-[#ff5733] text-5xl"></i>
          <h2 className="text-3xl font-semibold">Who Am I?</h2>
        </div>
        <p className="text-gray-300 leading-relaxed text-lg italic">
          My name is Tulsi Ram Gavde, and I am a passionate frontend web
          developer. My primary focus is on frontend development, where I excel
          in crafting beautiful user interfaces that are both visually appealing
          and user-friendly. My technical skills include proficiency in HTML,
          CSS(Tailwind), JavaScript, and frameworks like React.js. Continuously
          learning and staying up-to-date with the latest trends and
          technologies is a priority for me. I am exploring new tools,
          frameworks, and techniques to enhance my skills.
        </p>
      </div>

      {/* Skills Section */}
      <div className="w-11/12 md:w-9/12 lg:w-8/12 bg-gray-800 p-8 mt-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-center mb-6">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`bg-gray-700 p-5 rounded text-center relative transition-transform transform ${
                hoveredSkill === index ? "scale-110" : "scale-100"
              }`}
              onMouseEnter={() => setHoveredSkill(index)} 
              onMouseLeave={() => setHoveredSkill(null)} 
            >
              {skill.icon}
              <p>{skill.name}</p>
              {hoveredSkill === index && (
                <div className="absolute bottom-[-40px] left-0 w-full">
                  <div className="bg-gray-600 h-2 w-full rounded">
                    <div
                      className="bg-[#ff5733] h-2 rounded"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-sm mt-1">{skill.percentage}%</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Download Resume Button */}
      <div className="mt-8">
        <button
          className="px-6 py-3 bg-[#ff5733] text-white rounded hover:bg-[#e64e1b] transition-colors"
          onClick={handleDownloadClick}
        >
          Download Resume
        </button>
      </div>
    </div>
  );
}

export default AboutMe;
