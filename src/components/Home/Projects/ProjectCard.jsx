import React from "react";
import {
  SiReact, SiTailwindcss, SiDaisyui, SiJavascript,
  SiHtml5, SiCss3, SiNodedotjs, SiExpress,
  SiMongodb, SiJsonwebtokens, SiFirebase
} from "react-icons/si";

// Icon definitions
const techIcons = {
  react: <SiReact className="text-cyan-400" />,
  tailwind: <SiTailwindcss className="text-teal-400" />,
  daisyui: <SiDaisyui className="text-green-400" />,
  javascript: <SiJavascript className="text-yellow-400" />,
  html: <SiHtml5 className="text-orange-500" />,
  css: <SiCss3 className="text-blue-500" />,
  node: <SiNodedotjs className="text-lime-500" />,
  express: <SiExpress className="text-gray-500" />,
  mongodb: <SiMongodb className="text-green-500" />,
  jwt: <SiJsonwebtokens className="text-red-400" />,
  firebase: <SiFirebase className="text-yellow-500" />
};

function ProjectCard({ project, onDetailClick, index }) {
  return (
    <div
      data-aos="zoom-in"
      data-aos-delay={index * 100}
      className="bg-white border border-black rounded-xl transition duration-300 hover:shadow-xl hover:scale-[1.015] overflow-hidden w-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Side Image */}
        <div className="bg-gray-100 p-2 flex items-center justify-center">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full max-h-[350px] object-contain rounded-lg"
          />
        </div>

        {/* Right Side Content */}
        <div className="flex flex-col justify-center gap-4 p-6 text-black">
          <h3 className="text-2xl font-semibold">{project.name}</h3>
          <p className="text-base text-gray-700">{project.description}</p>

          <div className="grid sm:grid-cols-2 gap-4">
            {project.frontend?.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-black mb-1">Frontend</h4>
                <div className="flex flex-wrap gap-2 items-center text-xl">
                  {project.frontend.map((tech, i) => (
                    <span key={i}>{techIcons[tech]}</span>
                  ))}
                </div>
              </div>
            )}
            {project.backend?.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-black mb-1">Backend</h4>
                <div className="flex flex-wrap gap-2 items-center text-xl">
                  {project.backend.map((tech, i) => (
                    <span key={i}>{techIcons[tech]}</span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* View Details Button */}
          <div>
            <button
              onClick={() => onDetailClick(project)}
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
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
