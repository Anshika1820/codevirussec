import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaCogs,
  FaProjectDiagram,
  FaUsers,
  FaInfoCircle,
  FaSignInAlt,
  FaPhone,
  FaSearch,
} from "react-icons/fa";
import logo from "../assets/Photos/logo.jpg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Services", path: "/services", icon: <FaCogs /> },
    { name: "Projects", path: "/project", icon: <FaProjectDiagram /> },
    { name: "Team", path: "/tp1", icon: <FaUsers /> },
    { name: "About Us", path: "/about", icon: <FaInfoCircle /> },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center">
        
        {/* LOGO */}
        <NavLink to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Company Logo"
            className="h-12 w-auto object-contain"
          />
        </NavLink>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-10 ml-16 font-medium text-[#0b2a5b]">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 transition relative
                  ${
                    isActive
                      ? "text-[#163d82] font-semibold after:w-full"
                      : "hover:text-[#163d82]"
                  }
                  after:block after:h-[2px] after:w-0 after:bg-[#0b2a5b] after:transition-all hover:after:w-full`
                }
              >
                {item.icon}
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE */}
        <div className="ml-auto hidden md:flex items-center gap-4">
          
          {/* Search */}
          <div className="relative">
            <FaSearch className="absolute left-3 top-3 text-gray-400 text-sm" />
            <input
              type="text"
              placeholder="Search…"
              className="pl-9 pr-4 py-2 rounded-full border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0b2a5b] text-sm"
            />
          </div>

          {/* Login */}
          <NavLink to="/login">
            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0b2a5b] text-white font-semibold hover:bg-[#163d82] transition">
              <FaSignInAlt />
              Login
            </button>
          </NavLink>

          {/* Contact */}
          <NavLink to="/contact">
            <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#0b2a5b] to-[#163d82] text-white font-semibold shadow-lg hover:scale-105 transition">
              <FaPhone />
              Contact
            </button>
          </NavLink>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="ml-auto md:hidden text-3xl text-[#0b2a5b]"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-6 space-y-4 text-[#0b2a5b] font-medium">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-2 block ${
                  isActive ? "text-[#163d82] font-semibold" : ""
                }`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}

          <input
            type="text"
            placeholder="Search…"
            className="w-full px-4 py-2 rounded-full border border-slate-300"
          />

          <NavLink to="/login" onClick={() => setOpen(false)}>
            <button className="w-full py-2 rounded-full bg-[#0b2a5b] text-white flex items-center justify-center gap-2">
              <FaSignInAlt />
              Login
            </button>
          </NavLink>

          <NavLink to="/contact" onClick={() => setOpen(false)}>
            <button className="w-full py-2 rounded-full bg-gradient-to-r from-[#0b2a5b] to-[#163d82] text-white flex items-center justify-center gap-2">
              <FaPhone />
              Contact
            </button>
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;
