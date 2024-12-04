import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contactform = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gqmpraq", // Replace with your EmailJS Service ID
        "template_i1ws2wj", // Replace with your EmailJS Template ID
        form.current,
        "cPvGHjn3J4mrJ98fL" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <form
      className="flex opacity-60 flex-col max-w-screen-sm mx-auto"
      ref={form}
      onSubmit={sendEmail}
    >
      {/* Name Field */}
      <label htmlFor="user_name" className="text-white mb-2">
        Name:
      </label>
      <input
        id="user_name"
        name="user_name"
        type="text"
        className="text-black px-3 py-2 rounded-3xl outline-none mb-4"
        placeholder="Enter your name"
        required
      />

      {/* Email Field */}
      <label htmlFor="user_email" className="text-white mb-2">
        Email:
      </label>
      <input
        id="user_email"
        name="user_email"
        type="email"
        className="text-black px-3 py-2 rounded-3xl outline-none mb-4"
        placeholder="Enter your email"
        required
      />

      {/* Message Field */}
      <label htmlFor="message" className="text-white mb-2">
        Message:
      </label>
      <textarea
        id="message"
        name="message"
        className="text-black px-3 py-2 w-full h-[32vh] rounded-xl outline-none mb-4"
        placeholder="Enter your message"
        required
      />

      {/* Submit Button */}
      <div className="flex justify-center  items-center mt-8">
        <button
          type="submit"
          className="px-6 py-2  bg-blue-700 rounded-xl text-white font-semibold text-lg"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default Contactform;
