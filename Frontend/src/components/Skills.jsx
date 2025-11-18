// src/components/Skills.jsx
import { motion } from "framer-motion";

const skillsList = [
  "React.js",
  "JavaScript",
  "Tailwind CSS",
  "HTML / CSS",
  "Framer Motion",
  "Git & GitHub",
  "REST APIs",
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-8 bg-gray-900">
      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white mb-10"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

          {skillsList.map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ scale: 1.07, rotateX: 5, rotateY: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-4 rounded-lg bg-gray-800 border border-gray-700 text-white text-center shadow-md"
            >
              {skill}
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;
