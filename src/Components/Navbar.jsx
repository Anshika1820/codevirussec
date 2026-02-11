import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Photos/logo.jpg";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/project" },
    { name: "Team", path: "/team" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const handleSearch = () => {
    if (!query.trim()) return;

    const match = menuItems.find((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );

    if (match) {
      navigate(match.path);
      setQuery("");
    } else {
      alert("No page found");
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Company Logo" className="h-15 w-auto" />
        </Link>

        <ul className="hidden md:flex gap-10 ml-16 font-medium text-[#0b2a5b]">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* RIGHT SECTION */}
        <div className="ml-auto hidden md:flex items-center gap-3">
          
          {/* Search */}
          <div className="flex items-center border rounded-full px-3 py-2">
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="outline-none text-sm"
            />

            <FiSearch
              onClick={handleSearch}
              className="ml-2 cursor-pointer text-[#0b2a5b]"
              size={18}
            />
          </div>

          {/* LOGIN BUTTON (restored) */}
          <Link to="/login">
            <button className="px-5 py-2 rounded-full border border-[#0b2a5b] text-[#0b2a5b] hover:bg-[#0b2a5b] hover:text-white transition">
              Login
            </button>
          </Link>

          {/* CONTACT BUTTON */}
          <Link to="/contact">
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-[#0b2a5b] to-[#163d82] text-white">
              Contact
            </button>
          </Link>
        </div>

        <button
          className="ml-auto md:hidden text-3xl text-[#0b2a5b]"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t px-6 py-6 space-y-4">
          {menuItems.map((item) => (
            <Link key={item.name} to={item.path}>
              {item.name}
            </Link>
          ))}

          <Link to="/login">Login</Link>

          <div className="flex items-center border rounded-full px-3 py-2">
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="w-full outline-none"
            />

            <FiSearch
              onClick={handleSearch}
              className="ml-2 cursor-pointer text-[#0b2a5b]"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
