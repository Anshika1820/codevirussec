import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/project" },
    { name: "Team", path: "/tp1" },
    { name: "About Us", path: "/about" },
  
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Company Logo"
            className="h-15 w-auto object-contain"
          />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-10 ml-16 font-medium text-[#0b2a5b]">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="hover:text-[#163d82] transition relative after:block after:h-[2px] after:w-0 after:bg-[#0b2a5b] after:transition-all hover:after:w-full"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE */}
        <div className="ml-auto hidden md:flex items-center gap-4">
          <input
            type="text"
            placeholder="Search…"
            className="px-4 py-2 rounded-full border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0b2a5b] text-sm"
          />

          <Link to="/login">
            <button className="px-4 py-2 rounded-full bg-[#0b2a5b] text-white font-semibold hover:bg-[#163d82] transition">
              Login
            </button>
          </Link>

          <Link to="/contact">
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-[#0b2a5b] to-[#163d82] text-white font-semibold shadow-lg hover:scale-105 transition">
              Contact
            </button>
          </Link>
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
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className="block"
            >
              {item.name}
            </Link>
          ))}

          <input
            type="text"
            placeholder="Search…"
            className="w-full px-4 py-2 rounded-full border border-slate-300"
          />

          <Link to="/login" onClick={() => setOpen(false)}>
            <button className="w-full py-2 rounded-full bg-[#0b2a5b] text-white">
              Login
            </button>
          </Link>

          <Link to="/contact" onClick={() => setOpen(false)}>
            <button className="w-full py-2 rounded-full bg-gradient-to-r from-[#0b2a5b] to-[#163d82] text-white">
              Contact
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
