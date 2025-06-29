import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiDaisyui,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiStripe,
  SiFirebase,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <SiHtml5 className="text-orange-500" />, color: "text-orange-500" },
  { name: "CSS3", icon: <SiCss3 className="text-blue-600" />, color: "text-blue-600" },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, color: "text-yellow-400" },
  { name: "React", icon: <SiReact className="text-cyan-400" />, color: "text-cyan-400" },
  { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" />, color: "text-teal-400" },
  { name: "DaisyUI", icon: <SiDaisyui className="text-green-400" />, color: "text-green-400" },
  { name: "Node.js", icon: <SiNodedotjs className="text-lime-500" />, color: "text-lime-500" },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" />, color: "text-gray-300" },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, color: "text-green-500" },
  { name: "Stripe", icon: <SiStripe className="text-indigo-400" />, color: "text-indigo-400" },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" />, color: "text-yellow-500" },
];

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 md:px-10 bg-primary text-primary-content font-urbanist">
      <div className="max-w-6xl mx-auto">
        {/* Title + Description */}
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
            My Skills
          </h2>
          <p className="text-accent text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Technologies I use to build modern, scalable, and elegant web experiences.
          </p>
        </div>

        {/* Combined skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="100">
          {skills.map(({ name, icon, color }, i) => (
            <div
              key={i}
              className="group relative flex flex-col items-center justify-center p-4 bg-white/5 border border-white rounded-xl text-white text-xs sm:text-sm transition-transform duration-300 hover:scale-105 overflow-hidden"
            >
              <div className="text-2xl mb-1">{icon}</div>
              <span className={`font-semibold text-sm sm:text-base ${color}`}>{name}</span>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
