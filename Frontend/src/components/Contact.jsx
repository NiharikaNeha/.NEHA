// src/components/Contact.jsx
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-8 bg-gray-900">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white mb-10"
        >
          Contact
        </motion.h2>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Left – Information */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-gray-300"
          >
            <p>Feel free to reach out for job opportunities, collaborations, or project inquiries.</p>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-indigo-500" />
              <span>nehaniharikaswain07@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhone className="text-indigo-500" />
              <span>+91 8260261009</span>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a href="https://linkedin.com" target="_blank" className="text-white text-xl hover:text-indigo-400">
                <FaLinkedin />
              </a>
              <a href="https://github.com" target="_blank" className="text-white text-xl hover:text-indigo-400">
                <FaGithub />
              </a>
            </div>
          </motion.div>

          {/* Right – Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white focus:border-indigo-500 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white focus:border-indigo-500 outline-none"
            />

            <textarea
              rows="4"
              placeholder="Message"
              className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white focus:border-indigo-500 outline-none"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
