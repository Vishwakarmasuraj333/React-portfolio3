import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed w-full z-50 backdrop-blur-md bg-white/30 shadow-md ">
            <div className="container mx-auto flex justify-between items-center px-4 py-6">

                <h1 className="text-3xl font-bold hover:text-yellow-400 transition-transform transform hover:scale-105 text">
                    Suraj
                </h1>

                {/* Desktop Menu */}
                <nav className="hidden md:block">
                    <ul className="flex gap-6 font-medium">
                        <li><Link to="/" >Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/expr">Expr</Link></li>
                        <li><Link to="/education">Education</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>

                {/* Hamburger */}
                <div
                    className="md:hidden text-2xl cursor-pointer"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            <hr className="border-blue-800 w-full" />

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden w-full backdrop-blur-lg bg-white/40 text-center py-10">
                    <ul className="flex flex-col gap-6 font-medium">
                        <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
                        <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
                        <li><Link to="/education" onClick={() => setOpen(false)}>Education</Link></li>
                        <li>
                            <Link to="/expr" onClick={() => setOpen(false)}>Experience</Link>
                        </li>

                        <li><Link to="/projects" onClick={() => setOpen(false)}>Projects</Link></li>
                        <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
