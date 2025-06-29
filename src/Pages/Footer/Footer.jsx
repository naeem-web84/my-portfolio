import React from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/yourusername",
    },
    {
      icon: <FaLinkedinIn />,
      url: "https://linkedin.com/in/yourprofile",
    },
    {
      icon: <FaEnvelope />,
      url: "mailto:youremail@example.com",
    },
  ];

  const footerNavItems = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <footer className="bg-primary text-white py-10 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-6">
        {/* Left - Logo & Name */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="h-8 w-8" />
          <span className="text-lg font-semibold tracking-wider">Naeem Islam</span>
        </div>

        {/* Center - Smooth Scroll Nav Links (no active styling) */}
        <div className="flex gap-6 text-sm">
          {footerNavItems.map(({ name, to }) => (
            <Link
              key={name}
              to={to}
              smooth={true}
              duration={600}
              offset={-80} // adjust if needed for sticky nav
              className="cursor-pointer px-3 py-1 rounded-md transition-colors duration-200 hover:text-secondary"
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Right - Social Icons */}
        <div className="flex gap-4 text-lg">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition"
              aria-label={link.url}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center text-xs text-gray-400 mt-6">
        © {new Date().getFullYear()} Naeem Islam. All rights reserved.
      </div>
    </footer>
  );
}
