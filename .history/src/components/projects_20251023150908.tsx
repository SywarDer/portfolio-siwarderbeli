import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Solar Panel Cleaning Robot – Control & Monitoring System",
    description: "",
    technologies: [
      "Ionic React",
      "TypeScript",
      "Tailwind CSS",
      "Spring Boot",
      "MySQL",
      "InfluxDB",
      "MQTT",
      "Three.js",
      "Deep Learning",
      "Apache Airflow",
      "WebRTC",
      "Websocket",
      "Flask",
      "FastAPI",
    ],
    demo: "https://vimeo.com/1120574127?fl=ip&fe=ec",
  },
  {
    title: "Administrative Dashboard for Digital Comic Books Platform",
    description: "",
    technologies: ["React", "Redux", "MUI", "Firebase"],
    demo: "https://vimeo.com/1129620880?share=copy&fl=sv&fe=ci",
  },
  {
    title: "Academic Curriculum Tracker",
    description: "",
    technologies: ["React", "Spring Boot", "Tailwind", "AntDesign", "MySQL"],
    demo: "https://vimeo.com/1129622190?share=copy",
  },
  {
    title: "Chat System with Real-Time Communication",
    description: "",
    technologies: ["MERN Stack", "Socket.io", "Tailwind"],
    demo: "https://vimeo.com/1129625399?share=copy&fl=sv&fe=ci",
  },
  {
    title: "Guessing Game",
    description: "",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    demo: "https://vimeo.com/1129626979?share=copy&fl=sv&fe=ci",
  },
];

function Projects() {
  return (
    <section className="flex flex-col items-center px-6 py-8 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-100 min-h-screen max-w-5xl mx-auto">
      <h2 className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-white">
        My Projects
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-6xl">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group relative bg-gradient-to-br from-gray-800/70 to-gray-900/80 border border-gray-700/50 
                       rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 
                       hover:shadow-[0_0_20px_4px_rgba(56,189,248,0.2)]"
          >
            <h3 className="text-xl font-semibold mb-3 text-center group-hover:text-blue-400 transition">
              {project.title}
            </h3>

            <div className="flex flex-wrap gap-2 mb-6 justify-center">
              {project.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-900/30 rounded-full border border-blue-700/30"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-950
                         text-white rounded-full shadow-md hover:shadow-lg hover:scale-105 
                         transition-all duration-300 font-semibold"
            >
              Demo <FaExternalLinkAlt className="text-sm" />
            </a>

            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 blur-xl transition pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
