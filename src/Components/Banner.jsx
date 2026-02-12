import React, { useState, useEffect } from "react";
import img1 from "../assets/banner1.jpg";
import img2 from "../assets/banner2.avif";
import img3 from "../assets/banner3.webp";

const images = [img1, img2, img3];
const texts = [
  "👨‍💻 Web Developer",
  "⚛️ React Developer",
  "🎯 UI/UX Designer",
  "🚀 Full-Stack Developer"
];

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  // 🔹 Background image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // 🔹 Typewriter effect
  useEffect(() => {
    if (charIndex < texts[textIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex]);

  // 🔹 Smooth scroll to all sections
  const handleExploreClick = () => {
    // Scroll to the top of the next section (About)
    const nextSection = document.getElementById("about"); // Make sure your About section has id="about"
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center text-white bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className="bg-black/60 p-8 rounded-xl">
        <h2 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h2>

        <p className="text-2xl mb-8 h-8">
          I am <span className="text-yellow-400">{displayText}|</span>
        </p>

        {/* Explore Button */}
        <button
          onClick={handleExploreClick}
          className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold 
                     hover:bg-white hover:text-black transition-all transform hover:scale-110"
        >
          Explore🔥
        </button>
      </div>
    </section>
  );
};

export default Banner;
