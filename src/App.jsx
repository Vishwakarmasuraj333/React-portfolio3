import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Banner from "./Components/Banner";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Expr from "./Components/Expr.jsx";
import Graduation from "./Components/Graducation.jsx";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router basename="/React-portfolio3/"> 
      
      <Header />
      <div className="pt-20 md:pt-20">
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Graduation />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/expr" element={<Expr />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
