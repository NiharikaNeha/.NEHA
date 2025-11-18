import { motion } from "framer-motion";

const Skills = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Git"];

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-semibold mb-6"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {skills.map((s) => (
          <motion.div
            key={s}
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="bg-gray-900 border border-gray-700 py-3 rounded-xl text-center"
          >
            {s}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
