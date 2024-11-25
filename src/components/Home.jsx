import React, { useState } from "react";

function Home() {
  const [showHandles, setShowHandles] = useState(false);
  let timeoutId;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId); // Clear any existing timeouts
    setShowHandles(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setShowHandles(false);
    }, 1000); // 1-second delay
  };

  const handleSocialMediaMouseEnter = () => {
    clearTimeout(timeoutId); // Clear any existing timeout when the mouse enters the social media handles
  };

  const handleSocialMediaMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setShowHandles(false);
    }, 1000); // 1-second delay when the mouse leaves the social media container
  };

  return (
    <div>
      <div className="py-12 bg-zinc-800 text-white flex flex-col md:flex-row items-center justify-center gap-10 p-24">
        {/* Left Section */}
        <div
          className="text-center md:text-left md:w-1/2 space-y-4 relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Hello, I'm <hr className="border-transparent" />{" "}
            <span className="text-[#ff5733]">Tulsi Ram Gavde</span>
          </h1>
          <hr />
          <p className="text-lg md:text-xl text-gray-300">
            I’m someone who loves creating websites and making them easy to use.
            I’m always excited to learn about new technology and how it can
            improve the way we use the internet. Every day brings new
            opportunities to build something better, and I’m passionate about
            being part of that."
          </p>
          <button
            className="px-6 py-3 bg-[#ff5733] text-white rounded hover:bg-[#e64e1b]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Contact Me
          </button>

          {/* Social Media Handles */}
          {showHandles && (
            <div
              className="absolute flex flex-row justify-center md:justify-start mt-4 space-x-4 bg-zinc-600 py-4 px-6 rounded-lg w-64 top-full left-0 z-10"
              onMouseEnter={handleSocialMediaMouseEnter}
              onMouseLeave={handleSocialMediaMouseLeave}
            >
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl hover:text-[#ff5733] transition-colors"
              >
                <i className="ri-linkedin-box-fill"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl hover:text-[#ff5733] transition-colors"
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl hover:text-[#ff5733] transition-colors"
              >
                <i className="ri-twitter-fill"></i>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl hover:text-[#ff5733] transition-colors"
              >
                <i className="ri-github-fill"></i>
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl hover:text-[#ff5733] transition-colors"
              >
                <i className="ri-whatsapp-fill"></i>
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl hover:text-[#ff5733] transition-colors"
              >
                <i className="ri-discord-fill"></i>
              </a>
            </div>
          )}
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 pl-20">
          <img
            src="profileport.png"
            alt="Tulsi Ram Gavde"
            className="rounded-full w-[64vw] h-[64vh] object-cover bg-white drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
