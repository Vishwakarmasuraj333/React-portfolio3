import React from 'react';
import { FaReact, FaJs, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> }
];

const Skills = () => {
  return (
    <section id='Skills' className="py-20 px-4" >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">My Skills</h2>

        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-yellow-500 text-yellow-950 px-6 py-3 rounded-full font-semibold hover:scale-110 transform transition-all cursor-pointer"
            >
              <span className="text-xl">{skill.icon}</span>
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
