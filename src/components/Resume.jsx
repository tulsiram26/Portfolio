import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLanguage,
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaSmile,
  FaLaptopCode,
  FaGithub,
  FaProjectDiagram,
} from "react-icons/fa";

const Resume = () => {
  return (
    <div className="min-h-screen bg-black text-gray-200 flex gap-10 p-10">
      {/* Left Div */}
      <div className="w-1/3 bg-gray-800 p-8 flex  rounded-lg flex-col items-center">
        {/* Image */}
        <div className="w-32 h-32 rounded-full mt-7 overflow-hidden mb-4">
          <img
            src="/GAVDE,18.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Name */}
        <h2 className="text-2xl font-bold">Tulsi Ram Gavde</h2>
        {/* Role */}
        <p className="text-lg text-red-500  font-bold mb-6">
          Frontend Developer
        </p>

        <hr className="w-[70%] border-t-2 border-white my-4" />

        {/* Email */}
        <div className="flex items-center mb-4 mt-3">
          <FaEnvelope className="text-red-500 mr-2" />
          <span className="ml-2">gavdetusiram82@gmail.com</span>
        </div>
        {/* Phone */}
        <div className="flex items-center mb-4 mr-20">
          <FaPhone className="text-red-500 mr-2" />
          <span className="ml-2">+91 7484749098</span>
        </div>
        {/* Address */}
        <div className="flex items-center">
          <FaMapMarkerAlt className="text-red-500 mr-2" />
          <span className="m-2">
            Bastanar , Bastar Chaattisgarh <br /> Pin Code - 494442
          </span>
        </div>
      </div>

      {/* Right Div */}
      <div className="w-2/3 bg-gray-900 p-8 rounded-lg">
        {/* Title */}
        <div className="bg-red-500  text-white text-center py-4 rounded mb-6">
          <h2 className="text-2xl font-bold">Resume</h2>
        </div>
        {/* Content */}
        <div className="grid grid-cols-2 gap-8 ">
          {/* Left Column */}
          <div>
            {/* Profile */}
            <div className="mb-4">
              <h3 className="text-xl font-bold border-b border-gray-700 pb-2 mb-2 flex items-center">
                <FaUser className="text-red-500 mr-2" />
                Profile
              </h3>
              <p>
                A passionate Frontend Developer with experience in creating
                responsive and user-friendly web applications.
              </p>
            </div>
            {/* Education */}
            <div className="mb-4">
              <h3 className="text-xl font-bold border-b border-gray-700 pb-2 mb-2 flex items-center">
                <FaGraduationCap className="text-red-500 mr-2" />
                Education
              </h3>
              <ul className="space-y-2">
                <li>
                  B. Tech in (Computer Science Engineering) <br />
                  Government Engineering College Raipur
                </li>
                <li>
                  B. Sc in (Data Science and Application) <br />
                  Indian Institute of Technology Madras
                </li>
              </ul>
            </div>

            {/* Projects */}
            <div className="mb-4">
              <h3 className="text-xl font-bold border-b border-gray-700 pb-2 mb-2 flex items-center">
                <FaProjectDiagram className="text-red-500 mr-2" />
                Projects
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <a
                    href="https://your-link-for-obeyagecy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500"
                  >
                    Obey Agency
                  </a>
                </li>
                <li>
                  <a
                    href="https://your-link-for-refokus.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500"
                  >
                    Refokus
                  </a>
                </li>
                <li>
                  <a
                    href="https://your-link-for-streamsphere.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500"
                  >
                    StreamSphere
                  </a>
                </li>
                <li>
                  <a
                    href="https://your-link-for-premier.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500"
                  >
                    Premier
                  </a>
                </li>
                <li>
                  <a
                    href="https://your-link-for-dribble.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500"
                  >
                    Dribble
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="px-18">
            {/* Languages */}
            <div className="mb-4">
              <h3 className="text-xl font-bold border-b border-gray-700 pb-2 mb-2 flex items-center">
                <FaLanguage className="text-red-500 mr-2" />
                Languages
              </h3>
              <ul className="list-disc">
                <li>English</li>
                <li>Hindi</li>
                <li>Gondi</li>
                <li>Halbi</li>
                <li>Chhattisgarhi</li>
              </ul>
            </div>
            {/* Soft Skills */}
            <div className="mb-4">
              <h3 className="text-xl font-bold border-b border-gray-700 pb-2 mb-2 flex items-center">
                <FaSmile className="text-red-500 mr-2" />
                Soft Skills
              </h3>
              <p>Teamwork, Communication, Problem-Solving</p>
            </div>
            {/* Technical Skills */}
            <div className="mb-4">
              <h3 className="text-xl font-bold border-b border-gray-700 pb-2 mb-2 flex items-center">
                <FaLaptopCode className="text-red-500 mr-2" />
                Technical Skills
              </h3>
              <p>HTML, CSS, JavaScript, React, Git</p>
            </div>
            {/* Github */}
            <div>
              <h3 className="text-xl font-bold border-b border-gray-700 pb-2 mb-2 flex items-center">
                <FaGithub className="text-red-500 mr-2" />
                Github
              </h3>
              <p>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500"
                >
                  github.com/yourusername
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-6" />
      </div>
    </div>
  );
};

export default Resume;