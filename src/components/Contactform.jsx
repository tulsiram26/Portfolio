import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
        e.target, // Form element
        "YOUR_USER_ID" // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setSending(false);
          setSuccess(true);
        },
        (error) => {
          console.error("Email sending failed:", error.text);
          setSending(false);
          setSuccess(false);
        }
      );
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here"
            rows="4"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className={`px-6 py-2 ${
              sending ? "bg-gray-400" : "bg-indigo-500"
            } text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200`}
            disabled={sending}
          >
            {sending ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>

      {/* Success or Error Message */}
      {success && <p className="text-green-500 text-center mt-4">Message sent successfully!</p>}
      {!success && !sending && <p className="text-red-500 text-center mt-4">Something went wrong. Please try again.</p>}
    </div>
  );
};

export default ContactForm;
