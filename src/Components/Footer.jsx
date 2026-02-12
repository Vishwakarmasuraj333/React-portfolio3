import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 text-center">
      
      {/* Social Icons */}
      <div className="flex justify-center gap-6 mb-4 text-2xl">
        <a href="https://github.com/Vishwakarmasuraj333" target="_blank" rel="noreferrer" className="text-blue-700;hover:text-yellow-400 transition">
          <FaGithub />
        </a>
        <a href="https://in.linkedin.com/in/suraj-vishwakarma-2ab64436a" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/surajvishwakarma_bittu?igsh=NXlyNHBrbjNvbGJ0&utm_source=ig_contact_invite" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/share/16a5Gdy654/" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition">
          <FaFacebook />
        </a>
      </div>

      <p className="hover:text-secondary transition-colors">
        &copy; 2026 Suraj Portfolio. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
