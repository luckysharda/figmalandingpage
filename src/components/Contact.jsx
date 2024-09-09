import React from "react";
import backgroundImage from "../assets/background23.jpg";

const Contact = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-4">Get in touch with us</h1>
        <p className="mb-6 text-gray-600">
          Thank you for your interest in DotSpace! Whether you have a question,
          need assistance, or want to explore potential collaboration, we're
          here to connect with you.
        </p>
        <form>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your work mail"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Company Name *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Enter your company name"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="requirements"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Requirements *
            </label>
            <textarea
              id="requirements"
              name="requirements"
              rows="4"
              placeholder="Tell us what you need"
              className="w-full p-2 border border-gray-300 rounded"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-400 text-white py-2 px-4 rounded hover:bg-orange-500 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
