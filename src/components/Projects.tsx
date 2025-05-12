import type { Project } from "../types";

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      imageUrl: "/fizzy-jeli-screenshot.png",
      title: "Fizzy Jeli",
      description:
        "A full-featured online store with user functionality and cart processing.",
      technologies: ["React", "Exrpess", "Tailwind", "MongoDB", "Full-Stack"],
      demoUrl: "#",
      codeUrl: "https://github.com/pagiannis/fizzy-jeli",
    },
    {
      id: 2,
      imageUrl: "/portfolio-screenshot.png",
      title: "Portfolio Website",
      description:
        "A very simple one page frontned project thats shows my work.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Frontend"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      id: 3,
      title: "Vidly",
      imageUrl: "/vidly-screenshot.png",
      description:
        "A backend for a movie-rental application for renting/returning movies.",
      technologies: ["Node", "Express", "MongoDB", "Postman", "Backend"],
      demoUrl: "",
      codeUrl: "https://github.com/pagiannis/Vidly",
    },
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="h-48 bg-blue-100 flex items-center justify-center">
              {project.imageUrl ? (
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-blue-500 text-lg">Project Preview</span>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    className="btn text-white bg-purple-600 hover:bg-purple-700 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    className="btn border border-gray-300 text-sm hover:bg-gray-50"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
