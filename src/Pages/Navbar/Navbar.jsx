import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Toaster, toast } from "react-hot-toast";
import Logo from "../../components/Logo";

const navItems = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setMenuOpen(false); // ✅ Fixed syntax

      const scrollPos = window.scrollY + 90;
      let current = "hero";
      for (const item of navItems) {
        const elem = document.getElementById(item.to);
        if (elem && scrollPos >= elem.offsetTop) {
          current = item.to;
        }
      }
      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSendResume = () => {
    toast.success("Resume downloaded");
  };

  return (
    <nav className="bg-primary text-primary-content shadow-sm sticky top-0 z-50">
      {/* Toast Container */}
      <Toaster position="bottom-right" />

      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-8 py-3">
        {/* Logo */}
        <Logo />

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="menu menu-horizontal px-1 space-x-8">
            {navItems.map(({ name, to }) => (
              <li key={name}>
                <Link
                  to={to}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  className={`cursor-pointer px-3 py-1 rounded-t-md transition-colors duration-200 ${
                    activeLink === to ? "text-secondary border-b-2 border-black" : ""
                  }`}
                  onClick={() => {
                    setMenuOpen(false);
                    setActiveLink(to);
                  }}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resume Button Desktop */}
        <div className="hidden lg:flex">
          <button
            onClick={handleSendResume}
            className="btn px-6 bg-transparent border border-secondary text-white hover:bg-secondary hover:text-black transition"
          >
            Send Resume
          </button>
        </div>

        {/* Hamburger for Mobile */}
        <button
          className="btn btn-square btn-ghost lg:hidden ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
          aria-expanded={menuOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-secondary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-primary text-white px-6 pb-4">
          <ul className="flex flex-col gap-3">
            {navItems.map(({ name, to }) => (
              <li key={name}>
                <Link
                  to={to}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  className={`block cursor-pointer p-2 rounded-md transition-colors duration-200 ${
                    activeLink === to ? "bg-secondary text-black border-b-2 border-black" : ""
                  }`}
                  onClick={() => {
                    setMenuOpen(false);
                    setActiveLink(to);
                  }}
                >
                  {name}
                </Link>
              </li>
            ))}

            {/* Resume Button Mobile */}
            <li>
              <button
                onClick={() => {
                  handleSendResume();
                  setMenuOpen(false);
                }}
                className="block border border-secondary text-white px-4 py-2 rounded hover:bg-secondary hover:text-black transition"
              >
                Download Resume
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
