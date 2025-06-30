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
    <section id="projects" className="py-20 px-4 md:px-10 bg-primary text-primary-content font-urbanist">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-16" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Projects</h2>
        <p className="text-accent text-lg max-w-2xl mx-auto leading-relaxed">
          A few recent projects I’ve built — focused on clean code, modern UI, and smooth interactions.
        </p>
      </div>

      {/* Project List */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <ProjectCard key={i} index={i} project={project} onDetailClick={setDetailProject} />
        ))}
      </div>

      {/* Detail Modal */}
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
              <div className="flex flex-wrap gap-3 text-3xl">
                {detailProject.frontend.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
            </div>
            {detailProject.backend.length > 0 && (
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-white text-xl">Backend Technologies:</h4>
                <div className="flex flex-wrap gap-3 text-3xl">
                  {detailProject.backend.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
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
                  Live Site <FiExternalLink />
                </a>
              )}
              <button
                onClick={() => setGithubModalProject(detailProject)}
                className="border border-secondary text-secondary px-6 py-3 rounded hover:bg-secondary hover:text-black transition flex items-center gap-2 text-lg"
              >
                GitHub <SiGithub />
              </button>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-white text-xl">Challenges Faced:</h4>
              <p className="text-accent text-lg">{detailProject.challenges}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-white text-xl">Potential Improvements & Future Plans:</h4>
              <p className="text-accent text-lg">{detailProject.improvements}</p>
            </div>

            <button
              onClick={() => setDetailProject(null)}
              className="mt-8 border border-secondary text-secondary px-4 py-2 rounded hover:bg-secondary hover:text-black transition w-full text-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* GitHub Modal */}
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
