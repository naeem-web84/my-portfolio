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
    description: "A platform where people can meet, talk, add and share their experiences.",
    image: actImg,
    frontend: [
      <SiReact className="text-cyan-400" key="react" />,
      <SiTailwindcss className="text-teal-400" key="tailwind" />,
      <SiDaisyui className="text-green-400" key="daisyui" />,
      <SiJavascript className="text-yellow-400" key="js" />,
    ],
    backend: [
      <SiNodedotjs className="text-lime-500" key="node" />,
      <SiExpress className="text-gray-300" key="express" />,
      <SiMongodb className="text-green-500" key="mongodb" />,
      <SiJsonwebtokens className="text-red-400" key="jwt" />,
    ],
    links: {
      client: "https://github.com/naeem-web84/a11-actforbd-EJP",
      server: "https://github.com/naeem-web84/a11-actforbd-server-EJP",
    },
    live: "https://actforbd.web.app/",
    challenges:
      "Handling both the frontend and backend was tough. It is a larger application; to make it look good and smooth, I had to work hard and smart.",
    improvements:
      "Add dashboards and enhance accessibility for wider user reach. Make it more comfortable for users.",
  },
  {
    name: "Hobby Hub - EJP",
    description: "Marketplace for hobby products with dashboard and Stripe integration.",
    image: hobby,
    frontend: [
      <SiReact className="text-cyan-400" key="react" />,
      <SiTailwindcss className="text-teal-400" key="tailwind" />,
      <SiHtml5 className="text-orange-500" key="html" />,
    ],
    backend: [
      <SiNodedotjs className="text-lime-500" key="node" />,
      <SiExpress className="text-gray-300" key="express" />,
      <SiMongodb className="text-green-500" key="mongodb" />,
      <SiJsonwebtokens className="text-red-400" key="jwt" />,
    ],
    links: {
      client: "https://github.com/naeem-web84/hobby-hub-client-EJP",
      server: "https://github.com/naeem-web84/hobby-hub-server-EJP",
    },
    live: "https://hobby-hub-app-bb214.web.app/",
    challenges: "Maintaining responsiveness and at the same time making a good UI was challenging.",
    improvements:
      "Plan to build a mobile app version and add personalized recommendations for users.",
  },
  {
    name: "FrostBox",
    description: "Cloud storage app with Firebase integration and secure auth.",
    image: frost,
    frontend: [
      <SiReact className="text-cyan-400" key="react" />,
      <SiTailwindcss className="text-teal-400" key="tailwind" />,
      <SiFirebase className="text-yellow-500" key="firebase" />,
    ],
    backend: [],
    links: {
      client: "https://github.com/naeem-web84/frostBox-new",
    },
    live: "https://frost-box-a9-ab4d6.web.app/",
    challenges:
      "Ensuring secure file upload and download while managing user authentication effectively.",
    improvements: "Add offline support and improve sharing capabilities with permission controls.",
  },
];

function Projects() {
  const [detailProject, setDetailProject] = useState(null);
  const [githubModalProject, setGithubModalProject] = useState(null);

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

            {/* Only View Details Button */}
            <div className="mt-auto pt-6">
              <button
                onClick={() => setDetailProject(project)}
                className="border border-secondary text-secondary px-4 py-2 rounded hover:bg-secondary hover:text-black transition w-full"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Project Details */}
      {detailProject && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 overflow-auto p-6">
          <div className="bg-primary text-primary-content p-8 rounded-xl w-full max-w-4xl border border-secondary max-h-[90vh] overflow-y-auto shadow-lg">
            <h3 className="text-4xl font-bold mb-6 text-secondary">{detailProject.name}</h3>
            <img
              src={detailProject.image}
              alt={detailProject.name}
              className="rounded-lg mb-6 object-cover max-h-72 w-full"
            />
            <p className="mb-6 text-accent text-lg">{detailProject.description}</p>

            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-white text-xl">Frontend Technologies:</h4>
              <div className="flex flex-wrap gap-3 text-3xl">{detailProject.frontend}</div>
            </div>
            {detailProject.backend.length > 0 && (
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-white text-xl">Backend Technologies:</h4>
                <div className="flex flex-wrap gap-3 text-3xl">{detailProject.backend}</div>
              </div>
            )}

            {/* Live & GitHub Buttons */}
            <div className="mb-8 flex gap-6 justify-center">
              {detailProject.live && (
                <a
                  href={detailProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-secondary text-secondary px-6 py-3 rounded hover:bg-secondary hover:text-black transition flex items-center gap-2 text-lg"
                >
                  Live Site <FiExternalLink className="inline" />
                </a>
              )}
              <button
                onClick={() => setGithubModalProject(detailProject)}
                className="border border-secondary text-secondary px-6 py-3 rounded hover:bg-secondary hover:text-black transition flex items-center gap-2 text-lg"
              >
                GitHub <SiGithub />
              </button>
            </div>

            {/* Challenges */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-white text-xl">Challenges Faced:</h4>
              <p className="text-accent text-lg">{detailProject.challenges}</p>
            </div>

            {/* Improvements */}
            <div>
              <h4 className="font-semibold mb-3 text-white text-xl">
                Potential Improvements & Future Plans:
              </h4>
              <p className="text-accent text-lg">{detailProject.improvements}</p>
            </div>

            <button
              onClick={() => setDetailProject(null)}
              className="mt-8  border border-secondary text-secondary px-4 py-2 rounded hover:bg-secondary hover:text-black transition w-full text-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Modal for GitHub Links */}
      {githubModalProject && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-primary text-primary-content p-6 rounded-xl w-11/12 max-w-md text-center border border-secondary">
            <h3 className="text-2xl font-semibold mb-6 text-secondary">Repository Links</h3>
            <div className="space-y-4 text-lg">
              <p>
                <span className="font-semibold">Client:</span>{" "}
                <a
                  href={githubModalProject.links.client}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline break-words"
                >
                  {githubModalProject.links.client}
                </a>
              </p>
              {githubModalProject.links.server && (
                <p>
                  <span className="font-semibold">Server:</span>{" "}
                  <a
                    href={githubModalProject.links.server}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline break-words"
                  >
                    {githubModalProject.links.server}
                  </a>
                </p>
              )}
            </div>
            <button
              onClick={() => setGithubModalProject(null)}
              className="mt-6 border border-secondary text-secondary px-4 py-2 rounded hover:bg-secondary hover:text-black transition w-full"
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
