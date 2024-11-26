import React from "react";

const Contact = () => {
  return (
    <div className="p-10 bg-black min-h-screen">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white">Let's Get Connected</h2>
        <p className="text-gray-400 mt-2">I'd love to hear from you!</p>
      </div>

      {/* Form Section */}
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message here"
              rows="4"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Social Media Icons */}
      <div className="mt-10 text-center">
        <h3 className="text-white text-xl mb-4">Follow Me On</h3>
        <div className="flex justify-center gap-6">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <i className="fab fa-instagram text-pink-500 text-3xl hover:scale-110 transition-transform"></i>
          </a>

          {/* Email */}
          <a
            href="mailto:your-email@example.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Email"
          >
            <i className="fas fa-envelope text-gray-300 text-3xl hover:scale-110 transition-transform"></i>
          </a>

          {/* X (Twitter) */}
          <a
            href="https://x.com/i/"
            target="_blank"
            rel="noopener noreferrer"
            title="X (Twitter)"
          >
            <i className="fab fa-x-twitter text-blue-400 text-3xl hover:scale-110 transition-transform"></i>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <i className="fab fa-github text-gray-400 text-3xl hover:scale-110 transition-transform"></i>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <i className="fab fa-linkedin text-blue-600 text-3xl hover:scale-110 transition-transform"></i>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/your-number"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
          >
            <i className="fab fa-whatsapp text-green-500 text-3xl hover:scale-110 transition-transform"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
