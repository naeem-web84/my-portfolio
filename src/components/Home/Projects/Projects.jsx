import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import actImg from "../../../assets/image/actforbd.png";
import hobby from "../../../assets/image/hobbyHub.png";
import frost from "../../../assets/image/frostbox.png";

import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiDaisyui,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiJsonwebtokens,
  SiGithub,
} from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    name: "ActForBD - EJP",
    description: "NGO donation platform for managing users, causes, and transactions.",
    image: actImg,
    frontend: [
      <SiReact className="text-cyan-400" />,
      <SiTailwindcss className="text-teal-400" />,
      <SiDaisyui className="text-green-400" />,
      <SiJavascript className="text-yellow-400" />,
    ],
    backend: [
      <SiNodedotjs className="text-lime-500" />,
      <SiExpress className="text-gray-300" />,
      <SiMongodb className="text-green-500" />,
      <SiJsonwebtokens className="text-red-400" />,
    ],
    links: {
      client: "https://github.com/naeem-web84/a11-actforbd-EJP",
      server: "https://github.com/naeem-web84/a11-actforbd-server-EJP",
    },
    live: "https://actforbd.web.app/",
  },
  {
    name: "Hobby Hub - EJP",
    description: "Marketplace for hobby products with dashboard and Stripe integration.",
    image: hobby,
    frontend: [
      <SiReact className="text-cyan-400" />,
      <SiTailwindcss className="text-teal-400" />,
      <SiHtml5 className="text-orange-500" />,
    ],
    backend: [
      <SiNodedotjs className="text-lime-500" />,
      <SiExpress className="text-gray-300" />,
      <SiMongodb className="text-green-500" />,
      <SiJsonwebtokens className="text-red-400" />,
    ],
    links: {
      client: "https://github.com/naeem-web84/hobby-hub-client-EJP",
      server: "https://github.com/naeem-web84/hobby-hub-server-EJP",
    },
    live: "https://hobby-hub-app-bb214.web.app/",
  },
  {
    name: "FrostBox",
    description: "Cloud storage app with Firebase integration and secure auth.",
    image: frost,
    frontend: [
      <SiReact className="text-cyan-400" />,
      <SiTailwindcss className="text-teal-400" />,
      <SiFirebase className="text-yellow-500" />,
    ],
    backend: [],
    links: {
      client: "https://github.com/naeem-web84/frostBox-new",
    },
    live: "https://frost-box-a9-ab4d6.web.app/",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section className="py-20 px-4 md:px-10 bg-primary text-primary-content font-urbanist">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto text-center mb-16" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Projects</h2>
        <p className="text-accent text-lg max-w-2xl mx-auto leading-relaxed">
          A few recent projects I’ve built — focused on clean code, modern UI, and smooth interactions.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className="flex flex-col justify-between bg-white/5 border border-secondary backdrop-blur-sm p-5 rounded-xl transition duration-500 hover:shadow-lg hover:scale-[1.015] h-full"
          >
            <img
              src={project.image}
              alt={project.name}
              className="rounded-lg bg-black mb-4 w-full max-h-60 object-cover transition-transform duration-300 hover:scale-105"
            />
            <h3 className="text-2xl text-white font-semibold mb-2">{project.name}</h3>
            <p className="text-accent mb-4 text-sm">{project.description}</p>

            {/* Tech stack */}
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              {project.frontend.length > 0 && (
                <div className="w-full">
                  <h4 className="text-sm text-white mb-1 font-medium">Frontend</h4>
                  <div className="flex gap-2 flex-wrap items-center">{project.frontend}</div>
                </div>
              )}
              {project.backend.length > 0 && (
                <div className="w-full">
                  <h4 className="text-sm text-white mb-1 font-medium">Backend</h4>
                  <div className="flex gap-2 flex-wrap items-center">{project.backend}</div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-auto pt-6">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 btn border border-secondary bg-black text-white hover:bg-secondary hover:text-black hover:border-white transition"
              >
                <FiExternalLink className="mr-2" /> View Site
              </a>
              <button
                onClick={() => setSelectedProject(project)}
                className="flex-1 btn border border-secondary bg-black text-white hover:bg-secondary hover:text-black hover:border-white transition"
              >
                <SiGithub className="mr-2" /> GitHub
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for GitHub Links */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-primary text-primary-content p-6 rounded-xl w-11/12 max-w-md text-center border border-secondary">
            <h3 className="text-xl font-semibold mb-4 text-secondary">Repository Links</h3>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-semibold">Client:</span>{" "}
                <a
                  href={selectedProject.links.client}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline break-words"
                >
                  {selectedProject.links.client}
                </a>
              </p>
              {selectedProject.links.server && (
                <p>
                  <span className="font-semibold">Server:</span>{" "}
                  <a
                    href={selectedProject.links.server}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline break-words"
                  >
                    {selectedProject.links.server}
                  </a>
                </p>
              )}
            </div>
            <button
              onClick={() => setSelectedProject(null)}
              className="mt-6 btn border border-secondary bg-black text-white hover:bg-secondary hover:text-black hover:border-white transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
