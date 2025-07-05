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
      setMenuOpen(false);
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
    <nav
      className="shadow-sm sticky top-0 z-50"
      style={{
        backgroundColor: "var(--color-light-bg)",
        color: "var(--color-dark-primary)",
      }}
    >
      <Toaster position="bottom-right" />

      <div className="max-w-6xl mx-auto flex items-center justify-between md:px-8 py-3">
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
                  className={`cursor-pointer px-3 py-1 transition duration-200 rounded-md font-medium ${
                    activeLink === to
                      ? "text-[var(--color-dark-primary)] border-b-2 border-[var(--color-dark-primary)]"
                      : "hover:text-[var(--color-dark-primary)]"
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

        {/* Desktop Resume Button */}
        <div className="hidden lg:flex">
          <button
            onClick={handleSendResume}
            className="px-4 py-2 rounded transition border"
            style={{
              color: "var(--color-dark-primary)",
              borderColor: "var(--color-dark-primary)",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--color-dark-primary)";
              e.currentTarget.style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "var(--color-dark-primary)";
            }}
          >
            Download Resume
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="btn btn-square btn-ghost lg:hidden ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ color: "var(--color-dark-primary)" }}
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="lg:hidden px-6 pb-4"
          style={{ backgroundColor: "var(--color-light-bg)", color: "var(--color-dark-primary)" }}
        >
          <ul className="flex flex-col gap-3">
            {navItems.map(({ name, to }) => (
              <li key={name}>
                <Link
                  to={to}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  className={`block p-2 rounded-md transition cursor-pointer ${
                    activeLink === to
                      ? "bg-[var(--color-dark-primary)] text-white"
                      : "hover:bg-gray-200"
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
            <li>
              <button
                onClick={() => {
                  handleSendResume();
                  setMenuOpen(false);
                }}
                className="w-full px-4 py-2 rounded transition border cursor-pointer"
                style={{
                  color: "var(--color-dark-primary)",
                  borderColor: "var(--color-dark-primary)",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-dark-primary)";
                  e.currentTarget.style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "var(--color-dark-primary)";
                }}
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
