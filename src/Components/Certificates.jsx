import React from "react";
import cert1 from "../assets/c1.jpeg";
import cert2 from "../assets/c2.jpeg";
import datacom from "../assets/c3.jpeg";
import jsCert from "../assets/c4.jpeg";

const certificates = [
  {
    title: "Software Development Job Simulation",
    issuer: "Datacom - Forage",
    year: "2025",
    image: datacom,
  },
  {
    title: "React Development  Certificate",
    issuer: "freeCodeCamp",
    year: "2024",
    image: jsCert,
  },
  {
    title: "javascript Certificate",
    issuer: "Udemy",
    year: "2024",
    image: cert1,
  },
  {
    title: "Full Stack Web Development",
    issuer: "Coursera",
    year: "2025",
    image: cert2,
  },
];

const Certificates = () => {
  return (
    <section className="py-20 bg-gradient-to from-indigo-50 to-blue-100" id="Certificates">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12 text-indigo-700">
          Certificates & Achievements
        </h2>

        {/* Bigger cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-2xl hover:shadow-indigo-300 hover:scale-105 transition duration-300"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-72 object-cover rounded-xl mb-6"
              />

              <h3 className="text-2xl font-bold text-indigo-600 mb-2">
                {cert.title}
              </h3>
              <p className="text-lg text-gray-700">{cert.issuer}</p>
              <p className="text-gray-500">{cert.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
