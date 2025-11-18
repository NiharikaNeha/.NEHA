import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce UI",
    description: "A clean e-commerce interface built with React & Tailwind.",
    link: "https://your-project-link.com",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing skills and projects.",
    link: "https://your-portfolio.com",
  },
  {
    title: "Food Ordering App",
    description: "A responsive food ordering UI with modern animations.",
    link: "https://your-foodapp.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-8 bg-black">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white mb-10"
        >
          Projects
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotateX: 4, rotateY: -4 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-5 rounded-xl bg-gray-900 border border-gray-700 shadow-lg"
            >
              {/* Project Title */}
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mt-2">
                {project.description}
              </p>

              {/* Button */}
              <a
                href={project.link}
                target="_blank"
                className="inline-block mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm transition"
              >
                View Project
              </a>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;
