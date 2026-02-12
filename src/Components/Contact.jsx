import React from "react";
import contactImg from "../assets/contact.jpeg"; 

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to from-indigo-50 to-blue-100" id="Contact">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src={contactImg}
            alt="Contact"
            className="w-full max-w-md rounded-2xl shadow-xl border-4"
          />
        </div>

        {/* Right Form */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-indigo-700">
          LOGIN HERE ✌️
          </h2>
          <p className="mb-6 text-gray-600">
            Interested in working together? Fill the form.
          </p>

          <form className="flex flex-col gap-4">
            <input
              className="p-3 rounded-lg border"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="p-3 rounded-lg border"
              type="email"
              placeholder="Your Email"
            />
            <textarea
              className="p-3 rounded-lg border"
              placeholder="Your Message"
              rows="4"
            ></textarea>

            <button className="bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
