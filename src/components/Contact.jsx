import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="relative inline-block text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black mb-10">
          Contact Me
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-[60%] h-1 bg-gradient-to-r from-green-400 via-blue-500 to-blue-600 rounded-full -mb-2"></span>
        </h3>

        <form className="space-y-4 text-left">
          <div>
            <label htmlFor="name" className="block font-medium mb-1">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-medium mb-1">Your Message</label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Type your message here"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Send
          </button>
        </form>

        <div className="mt-8 text-left text-gray-700">
          <p>
            Or send me a direct email at{" "}
            <a
              href="mailto:sakkumishra1996@gmail.com"
              className="text-blue-600 underline"
            >
              sakkumishra1996@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
