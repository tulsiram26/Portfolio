import React from "react";
import Contactform from "./Contactform";
import SocialMedia from "./SocialMedia";

const Contact = () => {
  return (
    <div className="p-10 bg-black min-h-screen">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white">Let's Get Connected</h2>
        <p className="text-gray-400 mt-2">I'd love to hear from you!</p>
      </div>

      {/* Contact Form Section */}
      <Contactform />

      {/* Social Media Links Section */}
      <SocialMedia />
    </div>
  );
};

export default Contact;
