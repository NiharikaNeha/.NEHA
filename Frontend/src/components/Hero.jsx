// src/components/Hero.jsx
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-8 pt-28 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-4xl mx-auto text-center">

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white"
        >
          Hi, I'm <span className="text-indigo-500">Neha</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-4 text-gray-300 text-lg md:text-xl"
        >
          Frontend Developer • UI/UX Enthusiast  
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-10 flex justify-center"
        >
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-xl border border-gray-700 shadow-xl bg-gray-800 
                          hover:-translate-y-2 hover:rotate-2 transition-all duration-300">
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
