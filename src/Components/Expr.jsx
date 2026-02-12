import React from "react";
export default function Experience() {
  const data = [
    { year: "2018", title: "HTML Developer", desc: "Started my journey with semantic HTML." },
    { year: "2019", title: "JavaScript Developer", desc: "Built dynamic interfaces using JS." },
    { year: "2020", title: "React Developer", desc: "Created component-based responsive UI." },
    { year: "2025", title: "Full-Stack Developer", desc: "Building scalable full-stack apps." },
  ];

  return (
    <section className="py-20 ">
      <h2 className="text-3xl text-indigo-700 font-bold text-center mb-16 ">
        Work Experience
      </h2>

      {/* horizontal line */}
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute top-8 left-0 w-full h-1 bg-blue-400"></div>

        <div className="grid grid-cols-4 gap-6 relative">
          {data.map((item, i) => (
            <div key={i} className="text-center">
              
              {/* vertical line */}
              <div className="w-1 h-12 bg-blue-400 mx-auto"></div>

              {/* card */}
              <div className="bg-white shadow-lg p-4 rounded-xl mt-4">
                <h3 className="font-bold">{item.year}</h3>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-gray-500 ">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
