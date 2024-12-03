import React from "react";
import { Link } from "react-router-dom";

const Premier = () => {
  return (
    <div className="h-full bg-gray-600 flex items-center justify-center">
      <div className="relative max-w-4xl w-full h-[60vh] shadow-lg rounded-lg overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/premier.mp4" // Unique video for Premier
          autoPlay
          loop
          muted
        ></video>

        {/* Content Overlay */}
        <div className="relative z-10 bg-black bg-opacity-50 h-full p-8">
          <h1 className="text-3xl font-bold text-white mb-4">Premier</h1>
          <p className="text-gray-300 mb-6">
            Discover the premier platform for exclusive movie releases.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Node.js
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Express
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              MongoDB
            </span>
          </div>
          <a
            href="https://premier.example.com"
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

export default Premier;
