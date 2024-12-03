import React from "react";

const SocialMedia = () => {
  return (
    <div className="text-center mt-10">
      <h3 className="text-2xl text-white font-bold mb-4">Follow Me</h3>
      <div className="flex justify-center space-x-6">
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-indigo-500"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-indigo-500"
        >
          GitHub
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-indigo-500"
        >
          Twitter
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
