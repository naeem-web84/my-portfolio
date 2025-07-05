import React from 'react';
import headerImg from '../../assets/image/FB_IMG_1637937956758.jpg';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import toast from 'react-hot-toast';

function Hero() {
  const handleSendResume = () => {
    toast.success("Resume downloaded");
  }

  return (
    <section
      className="py-16 px-4"
      style={{
        backgroundColor: "#FFFFFF", // white background
        color: "#000000",           // black text
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-6">

        {/* Left Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h4 className="text-xl font-bold" style={{ color: "#000000" }}>
            Naeem Islam
          </h4>
          <h1
            className="text-4xl md:text-5xl font-extrabold leading-tight"
            style={{ color: "#000000" }}
          >
            Full-Stack MERN Developer
          </h1>
          <p
            className="text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
            style={{ color: "#000000" }}
          >
            I specialize in crafting immersive user experiences using modern frontend technologies. I focus on clean UIs, responsive design, and smooth interactions.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start gap-4">
            {[
              {
                href: "https://github.com/naeem-web84",
                icon: <FaGithub size={18} />,
              },
              {
                href: "https://www.linkedin.com/in/naeem-islam-dv474/",
                icon: <FaLinkedinIn size={18} />,
              },
            ].map(({ href, icon }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-black transition"
                style={{
                  color: "#000000",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = "#000000";
                  e.currentTarget.style.color = "#FFFFFF";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#000000";
                }}
              >
                {icon}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button
              onClick={handleSendResume}
               className="px-4 py-2 rounded transition border cursor-pointer"
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
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 bg-green-400 rounded-full animate-pulse"></span>
              <span style={{ color: "#000000" }} className="text-sm">
                Available now
              </span>
            </div>
          </div>
        </div>

        {/* Right Image Content with angled shape */}
        <div className="flex-1 flex justify-center relative">
          <div className="w-[260px] sm:w-[300px] md:w-[360px] relative overflow-hidden">
            <div
              className="rounded-[2rem] transform rotate-[3deg] shadow-lg"
              style={{ backgroundColor: "#64DA91" }}  // keep a subtle light background behind image
            >
              <img
                src={headerImg}
                alt="Naeem Islam"
                className="rounded-[2rem] -rotate-[3deg] scale-[0.98] object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
