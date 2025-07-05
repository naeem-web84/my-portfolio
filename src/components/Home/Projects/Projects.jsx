import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiExternalLink } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [detailProject, setDetailProject] = useState(null);
  const [githubModalProject, setGithubModalProject] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });

    fetch("/projects.json")
      .then((res) => res.json())
      .then(setProjects)
      .catch(console.error);
  }, []);

  return (
    <section
      id="projects"
      className="py-20 px-4 md:px-10 bg-white text-black font-urbanist"
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-16" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
          Projects
        </h2>
        <p className="text-[#26313F] text-lg max-w-2xl mx-auto leading-relaxed">
          A few recent projects I’ve built — focused on clean code, modern UI, and smooth interactions.
        </p>
      </div>

      {/* Project List */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            index={i}
            project={project}
            onDetailClick={setDetailProject}
          />
        ))}
      </div>

      {/* Detail Modal */}
      {detailProject && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 overflow-auto p-6">
          <div className="relative bg-white text-black rounded-xl w-full max-w-4xl border border-[#26313F] max-h-[90vh] shadow-xl flex flex-col">
            {/* X Close Icon */}
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={() => setDetailProject(null)}
                className="text-black text-2xl font-bold hover:text-white hover:bg-black rounded-full w-9 h-9 flex items-center justify-center transition cursor-pointer"
                aria-label="Close"
              >
                &times;
              </button>
            </div>

            {/* Scrollable content */}
            <div className="overflow-y-auto p-8" style={{ maxHeight: "90vh" }}>
              <h3 className="text-3xl font-bold mb-6 text-[#26313F]">
                {detailProject.name}
              </h3>
              <img
                src={detailProject.image}
                alt={detailProject.name}
                className="rounded-lg mb-6 object-cover max-h-72 w-full"
              />
              <p className="mb-6 text-lg text-gray-700">{detailProject.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold text-xl mb-2">Frontend Technologies</h4>
                <div className="flex flex-wrap gap-3 text-base">
                  {detailProject.frontend.map((tech, i) => (
                    <span key={i} className="px-3 py-1 border border-black rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {detailProject.backend.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-semibold text-xl mb-2">Backend Technologies</h4>
                  <div className="flex flex-wrap gap-3 text-base">
                    {detailProject.backend.map((tech, i) => (
                      <span key={i} className="px-3 py-1 border border-black rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h4 className="font-semibold text-xl mb-2">Challenges Faced</h4>
                <p className="text-gray-700">{detailProject.challenges}</p>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold text-xl mb-2">Improvements / Future Plans</h4>
                <p className="text-gray-700">{detailProject.improvements}</p>
              </div>

              <div className="flex flex-wrap gap-6 justify-center mb-6">
                {detailProject.live && (
                  <a
                    href={detailProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
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
                    Live Site <FiExternalLink />
                  </a>
                )}
                <button
                  onClick={() => setGithubModalProject(detailProject)}
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
                  GitHub <SiGithub />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* GitHub Modal */}
      {githubModalProject && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative bg-white text-black rounded-xl w-11/12 max-w-md text-center border border-black flex flex-col">
            {/* X Close Icon */}
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={() => setGithubModalProject(null)}
                className="text-black text-2xl font-bold hover:text-white hover:bg-black rounded-full w-9 h-9 flex items-center justify-center transition cursor-pointer"
                aria-label="Close"
              >
                &times;
              </button>
            </div>

            {/* Scrollable content */}
            <div className="overflow-y-auto p-6" style={{ maxHeight: "90vh" }}>
              <h3 className="text-2xl font-semibold mb-6 text-[#26313F]">Repository Links</h3>
              <div className="space-y-4 text-base">
                <p>
                  <span className="font-medium">Client:</span>{" "}
                  <a
                    href={githubModalProject.links.client}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black underline break-words"
                  >
                    {githubModalProject.links.client}
                  </a>
                </p>
                {githubModalProject.links.server && (
                  <p>
                    <span className="font-medium">Server:</span>{" "}
                    <a
                      href={githubModalProject.links.server}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black underline break-words"
                    >
                      {githubModalProject.links.server}
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
