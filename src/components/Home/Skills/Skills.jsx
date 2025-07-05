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
  { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-600" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React", icon: <SiReact className="text-cyan-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "DaisyUI", icon: <SiDaisyui className="text-green-400" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-lime-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Stripe", icon: <SiStripe className="text-indigo-400" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
];

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <section
      id="skills"
      className="py-20 px-6 sm:px-10 bg-white text-black font-urbanist"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-16">
        {/* Left side - Text */}
        <div
          className="lg:w-1/2"
          data-aos="fade-right"
        >
          <h2 className="text-4xl font-extrabold mb-4 text-[#26313F]">
            My Skills
          </h2>
          <p className="text-lg leading-relaxed max-w-lg">
            I use a wide range of modern technologies to build scalable and elegant web experiences. My stack includes frontend, backend, and deployment tools that help me deliver quality and performance.
            <br /><br />
            From core web standards like HTML5 and CSS3 to modern frameworks like React and Tailwind, plus backend technologies like Node.js, Express, and databases such as MongoDB — I aim to craft seamless, user-friendly digital products.
          </p>
        </div>

        {/* Right side - Icons grid with staggered fade-up */}
        <div
          className="lg:w-1/2 grid grid-cols-3 sm:grid-cols-4 gap-8"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          {skills.map(({ name, icon }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-2 p-4 rounded-lg border border-[#64DA91] hover:shadow-lg transition-shadow cursor-default"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              data-aos-once="true"
            >
              <div className="text-4xl">{icon}</div>
              <span className="text-base font-semibold text-black">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
