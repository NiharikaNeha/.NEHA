// src/components/About.jsx
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-8 bg-black">
      <div className="max-w-4xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white mb-6"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-gray-300 leading-relaxed text-lg"
        >
          I'm a frontend developer passionate about clean UI, smooth animations,
          and building user-friendly web experiences.  
          I work with React, Tailwind, Framer Motion and love exploring modern UI patterns.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
