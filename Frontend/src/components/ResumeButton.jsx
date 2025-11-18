import { motion } from "framer-motion";
import { FaFileDownload } from "react-icons/fa";

const ResumeButton = () => {
  return (
    <motion.a
      href="/resume.pdf"
      download
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg flex items-center gap-2 text-sm shadow-md transition"
    >
      <FaFileDownload />
      Resume
    </motion.a>
  );
};

export default ResumeButton;
