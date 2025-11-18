import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-semibold mb-6"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-300 leading-relaxed"
      >
        I am a dedicated developer who enjoys turning ideas into functional,
        user-friendly web applications. I focus on clean UI, scalable
        architecture, and smooth user interaction.
      </motion.p>
    </section>
  );
};

export default About;
