import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-2"
    >
      <div className="w-9 h-9 rounded-xl bg-indigo-500 flex items-center justify-center text-white font-bold text-lg">
        N
      </div>
      <span className="font-semibold text-lg tracking-wide">Neha</span>
    </motion.div>
  );
};

export default Logo;

