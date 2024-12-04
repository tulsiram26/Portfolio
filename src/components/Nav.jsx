import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Portfolio</h1>

        {/* Desktop Menu */}
        <div>
          <ul className="hidden md:flex gap-6 pr-20 font-semibold text-lg">
            <li>
              <Link to="/" className="hover:text-gray-400 hover:italic">
                <span className="border-2 border-zinc-500 rounded-lg px-4 py-2 transition-transform hover:scale-105">
                  Home
                </span>
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-gray-400 hover:italic">
                <span className="border-2 border-zinc-500 rounded-lg px-4 py-2 transition-transform hover:scale-105">
                  About Me
                </span>
              </Link>
            </li>

            <li>
              <Link to="/project" className="hover:text-gray-400 hover:italic">
                <span className="border-2 border-zinc-500 rounded-lg px-4 py-2 transition-transform hover:scale-105">
                  Project
                </span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-400 hover:italic">
                <span className="border-2 border-zinc-500 rounded-lg px-4 py-2 transition-transform hover:scale-105">
                  Contact
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden focus:outline-none"
        >
          <i className="ri-menu-line text-2xl"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 p-4">
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-gray-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-gray-400"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="/resume"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-gray-400"
              >
                Resume
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-gray-400"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Nav;
