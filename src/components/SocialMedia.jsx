import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { TbX } from "react-icons/tb"; // X (formerly Twitter) icon from react-icons/tb

const SocialMedia = () => {
  return (
    <div className="text-center mt-10">
      <h3 className="text-2xl text-white font-bold mb-4">Follow Me</h3>
      <div className="flex justify-center space-x-6">
        <a
          href="https://www.linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-indigo-500"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/tulsiram26"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-indigo-500"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://x.com/Gavdetulsi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-indigo-500"
        >
          <TbX size={24} /> {/* Updated X icon */}
        </a>
        <a
          href="https://www.instagram.com/i_trgave.16/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-indigo-500"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://web.whatsapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-indigo-500"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
