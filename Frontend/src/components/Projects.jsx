import { motion } from "framer-motion";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-semibold mb-10"
      >
        Projects
      </motion.h2>

      <div className="grid sm:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{
              rotateY: 8,
              scale: 1.02,
            }}
            className="bg-gray-900 border border-gray-700 p-6 rounded-xl shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-400 mb-3">{p.description}</p>

            <div className="flex gap-2 flex-wrap mb-3">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-gray-800 text-gray-300 rounded-md text-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a className="text-blue-400" href={p.github}>
                GitHub
              </a>
              <a className="text-blue-400" href={p.demo}>
                Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
