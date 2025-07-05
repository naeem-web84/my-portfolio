import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import Logo from "../../components/Logo";

const footerNavItems = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

const socialLinks = [
  {
    icon: <FaGithub />,
    url: "https://github.com/naeem-web84",
  },
  {
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/naeem-islam-dv474/",
  },
  {
    icon: <FaEnvelope />,
    url: "mailto:naeemislam.hasan74@gmail.com",
  },
];

export default function Footer() {
  const [activeLink, setActiveLink] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 90;
      let current = "hero";
      for (const item of footerNavItems) {
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

  return (
    <footer
      className="py-10 border-t w-full"
      style={{
        backgroundColor: "var(--color-light-bg)",
        color: "var(--color-dark-primary)",
        borderColor: "rgba(38, 49, 63, 0.2)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-wrap sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
        {/* Left - Logo */}
        <div className="flex items-center gap-2 justify-center sm:justify-start w-full sm:w-auto">
          <Logo />
        </div>

        {/* Center - Nav Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          {footerNavItems.map(({ name, to }) => (
            <Link
              key={name}
              to={to}
              smooth={true}
              duration={600}
              offset={-80}
              className={`cursor-pointer px-3 py-1 transition duration-200 rounded-md font-medium ${
                activeLink === to
                  ? "text-[var(--color-dark-primary)] border-b-2 border-[var(--color-dark-primary)]"
                  : "hover:text-[var(--color-dark-primary)]"
              }`}
              onClick={() => setActiveLink(to)}
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Right - Social Icons */}
        <div className="flex gap-4 text-lg justify-center sm:justify-end w-full sm:w-auto">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.url}
              className="transition-colors"
              style={{ color: "var(--color-dark-primary)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-dark-primary)")
              }
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom copyright */}
      <div
        className="text-center text-xs mt-6"
        style={{ color: "rgba(38, 49, 63, 0.6)" }}
      >
        © {new Date().getFullYear()} Naeem Islam. All rights reserved.
      </div>
    </footer>
  );
}
