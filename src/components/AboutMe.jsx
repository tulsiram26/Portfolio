import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";

function AboutMe() {
  return (
    <div className="py-12 bg-gray-900 text-white flex flex-col md:flex-row items-center justify-center gap-10 p-12">
      {/* Left Section */}
      <div className="md:w-1/3 flex justify-center items-center">
        <img
          src="/GAVDE,18.jpg" // Replace with your image URL
          alt="Your Name"
          className="rounded-md w-64vw h-[64vh] object-cover bg-white shadow-lg"
        />
      </div>

      {/* Right Section */}
      <div className="md:w-2/3 space-y-6 px-20">
        {/* About Me Title */}
        <div className="flex items-center space-x-3">
          <i className="ri-play-fill text-[#ff5733] text-5xl"></i>
          <h2 className="text-3xl font-bold">About Me</h2>
        </div>

        {/* Who Am I */}
        <h3 className="text-2xl font-semibold text-gray-300">WHO AM I</h3>

        {/* Description */}
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        {/* Skills */}
        <div>
          <h4 className="text-xl font-bold text-gray-300 mb-4">Skills</h4>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-800 p-4 rounded text-center">
              <FaHtml5 className="text-4xl text-orange-500 mx-auto mb-2" />
              <p>HTML</p>
            </div>
            <div className="bg-gray-800 p-4 rounded text-center">
              <FaCss3Alt className="text-4xl text-blue-500 mx-auto mb-2" />
              <p>CSS</p>
            </div>
            <div className="bg-gray-800 p-4 rounded text-center">
              <SiJavascript className="text-4xl text-yellow-400 mx-auto mb-2" />
              <p>JavaScript</p>
            </div>
            <div className="bg-gray-800 p-4 rounded text-center">
              <FaReact className="text-4xl text-cyan-400 mx-auto mb-2" />
              <p>React</p>
            </div>
            <div className="bg-gray-800 p-4 rounded text-center">
              <SiTailwindcss className="text-4xl text-teal-400 mx-auto mb-2" />
              <p>Tailwind CSS</p>
            </div>
            <div className="bg-gray-800 p-4 rounded text-center">
              <FaGitAlt className="text-4xl text-orange-600 mx-auto mb-2" />
              <p>Git</p>
            </div>
          </div>
        </div>

        {/* Download Resume */}
        <div>
          <button
            className="px-6 py-3 bg-[#ff5733] text-white rounded hover:bg-[#e64e1b]"
            onClick={() => {
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              });
            }}
          >
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
