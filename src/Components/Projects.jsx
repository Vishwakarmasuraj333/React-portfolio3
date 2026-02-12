import React from "react";
import p1 from "../assets/project1.jpg";
import p2 from "../assets/project2.jpg";
import p3 from "../assets/project3.jpg";

const projects = [
  { 
    name: "Project 1", 
    desc: "Portfolio Website", 
    link: "https://vishwakarmasuraj333.github.io/portfolio-website/", 
    img: p1 
  },
  { 
    name: "Project 2", 
    desc: "React App with Dashboard", 
    link: "https://vishwakarmasuraj333.github.io/javascript-oneshorts/", 
    img: p2 
  },
  { 
    name: "Project 3", 
    desc: "Official Portfolio", 
    link: "", 
    img: p3 
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to from-indigo-50 to-blue-100" id="projects">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-indigo-700">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-xl"
            >
              {/* Image */}
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-200 mb-4">{project.desc}</p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold transform translate-y-6 group-hover:translate-y-0 transition duration-500"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
