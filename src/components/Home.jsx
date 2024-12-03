import React, { useState, useEffect, useRef } from "react";
import Resume from "./Resume";
import Project from "./Project";
import Contact from "./Contact";
import AboutMe from "./Aboutme";

function Home() {
  const [showHandles, setShowHandles] = useState(false);
  const [displayedText, setDisplayedText] = useState(""); // For the animated name
  const [index, setIndex] = useState(0); // For animating letter by letter
  const timeoutId = useRef(null); // Add a ref to store the timeoutId
  const name = "Tulsi Ram Gavde"; // Your name

  useEffect(() => {
    // Start animating the name on mount
    const interval = setInterval(() => {
      if (index < name.length) {
        setDisplayedText((prev) => prev + name[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }
    }, 200); // Adjust the speed of animation

    // Clear interval once the animation is complete
    return () => clearInterval(interval);
  }, [index, name]);

  const handleMouseEnter = () => {
    clearTimeout(timeoutId.current);
    setShowHandles(true);
  };

  const handleMouseLeave = () => {
    timeoutId.current = setTimeout(() => {
      setShowHandles(false);
    }, 1000);
  };

  const handleSocialMediaMouseEnter = () => {
    clearTimeout(timeoutId.current);
  };

  const handleSocialMediaMouseLeave = () => {
    timeoutId.current = setTimeout(() => {
      setShowHandles(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-black via-red-800 to-black">
      <div className="py-12 h-[100vh] text-white flex flex-col md:flex-row items-center justify-center gap-10 p-24">
        {/* Left Section */}
        <div
          className="text-center md:text-left md:w-1/2 space-y-4 relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h1 className="text-4xl md:text-6xl font-semibold">
            Hello, I'm <hr className="border-transparent" />
            <span className="animated-name text-[#00BFFF] text-glow text-transition">
              {displayedText} {/* Displaying the animated name here */}
            </span>
          </h1>

          <hr />
          <p className="text-lg md:text-xl text-gray-300">
            I’m someone who loves creating websites and making them easy to use.
            I’m always excited to learn about new technology and how it can
            improve the way we use the internet. Every day brings new
            opportunities to build something better, and I’m passionate about
            being part of that. "
          </p>
          <button
            className="px-6 py-3 bg-[#00BFFF] text-white rounded hover:bg-[#DC143C]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Contact Me
          </button>

          {/* Social Media Handles */}
          {showHandles && (
            <div
              className="absolute flex flex-row justify-center md:justify-start mt-4 space-x-4 bg-transparent py-4 px-6 rounded-lg w-64 top-full left-0 z-10"
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
            src="GAVDE,18.jpg"
            alt="Tulsi Ram Gavde"
            className="rounded-md w-[64vw] h-[64vh] object-cover bg-white drop-shadow-2xl image-hover-motion"
          />
        </div>
      </div>
      {/* Other Components */}
      <AboutMe />
      <Project />
      <Contact />
    </div>
  );
}

export default Home;