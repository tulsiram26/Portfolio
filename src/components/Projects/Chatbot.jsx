import React from "react";
import { Link } from "react-router-dom";

const Chatbot = () => {
  return (
    <div className="h-full bg-gray-600 flex items-center justify-center">
      <div className="relative max-w-4xl w-full h-[60vh] shadow-lg rounded-lg overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/chatbot.mp4" // Unique video for Chatbot
          autoPlay
          loop
          muted
        ></video>
        <div className="relative z-10 bg-black bg-opacity-50 h-full p-8">
          <h1 className="text-3xl font-bold text-white mb-4">Chatbot</h1>
          <p className="text-gray-300 mb-6">
            Build intelligent conversational agents with ease.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Java
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Spring Boot
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              MySQL
            </span>
          </div>
          <a
            href="https://chatbot.example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600"
          >
            Visit Project
          </a>
          <div className="mt-6">
            <Link to="/" className="text-blue-400 hover:text-blue-600 font-medium">
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
