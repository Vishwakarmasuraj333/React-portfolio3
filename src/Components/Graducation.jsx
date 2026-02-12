import React from 'react';
import img1 from "../assets/a.jpeg";
import img2 from "../assets/vvv.jpeg";

const educations = [
  {
    degree: "10th & 12th",
    year: "2018",
    school: "Vidhya Varidhi Vidyalay",
    image: img2
  },
  {
    degree: "Bachelor Degree",
    year: "2025",
    school: "Abhinav College",
    image: img1
  },
];

const Graduation = () => {
  return (
    <section className="py-20 bg-gradient-to from-indigo-50 to-blue-100" id="Graducation">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        <h2 className="text-4xl font-bold mb-12 text-indigo-700">
          Education
        </h2>

        <div className="flex flex-col items-center md:flex-row md:justify-center gap-10">
          {educations.map((edu, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-xl hover:scale-105 transition-all w-full max-w-sm"
            >
              <img
                src={edu.image}
                alt={edu.school}
                className="w-full h-52 object-cover rounded-lg mb-4"
              />

              <h3 className="text-2xl font-bold mb-2 text-indigo-600">
                {edu.degree}
              </h3>

              <p className="text-gray-700 font-medium">
                {edu.school}
              </p>

              <p className="text-gray-500">
                {edu.year}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Graduation;
