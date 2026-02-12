import React from 'react'; 
import MyImage from '../assets/suraj.jpeg';

const About = () => {

  return (
    <section id='About' className="py-20 px-4 bg-blue-400" >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
      <img src={MyImage} alt="local image" className="w-100% h-140 object-cover border-4" />
        <div>
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          
          <p className="text-white-700 mb-4">
            I am a passionate web developer with experience in React, Tailwind CSS, and modern frontend technologies.
          </p>
          <p className="text-white-700">
            I love building professional and responsive websites with smooth animations and interactions.
          </p>
              {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
              Hire Me
            </button>

            <a
              href="Suraj-Resume.pdf"
              className="bg-yellow-400 px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default About;
