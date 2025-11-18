import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center text-center px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Neha</h1>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">
          A passionate developer focused on building modern web experiences.
        </p>

        {/* 3D-like floating card */}
        <motion.div
          initial={{ rotateX: -10 }}
          animate={{ rotateX: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 w-64 h-40 bg-gray-900 border border-gray-700 rounded-xl shadow-xl 
                     transform perspective-1000 hover:rotate-2 hover:-rotate-y-6 transition-all"
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
