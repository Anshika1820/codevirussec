import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaCogs,
  FaProjectDiagram,
  FaUsers,
  FaInfoCircle,
  FaPhone,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import logo from "../assets/logo.png"; // make sure logo exists

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        
        {/* LOGO LEFT SIDE */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-auto object-contain"
          />
          <span className="text-xl font-bold text-blue-900">
            CodeVirusSec
          </span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6 text-blue-900 font-medium">
          <NavLink to="/" className="flex items-center gap-2 hover:text-blue-600">
            <FaHome /> Home
          </NavLink>

          <NavLink to="/services" className="flex items-center gap-2 hover:text-blue-600">
            <FaCogs /> Services
          </NavLink>

          <NavLink to="/projects" className="flex items-center gap-2 hover:text-blue-600">
            <FaProjectDiagram /> Projects
          </NavLink>

          <NavLink to="/team" className="flex items-center gap-2 hover:text-blue-600">
            <FaUsers /> Team
          </NavLink>

          <NavLink to="/about" className="flex items-center gap-2 hover:text-blue-600">
            <FaInfoCircle /> About
          </NavLink>

          <NavLink to="/contact" className="flex items-center gap-2 hover:text-blue-600">
            <FaPhone /> Contact
          </NavLink>

          {/* SEARCH BOX */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-full pl-10 pr-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <FaSearch className="absolute left-3 top-2 text-gray-400" />
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-4 flex flex-col gap-4 text-blue-900 font-medium">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/team">Team</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
