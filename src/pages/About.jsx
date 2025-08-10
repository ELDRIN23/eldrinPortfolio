// src/pages/About.jsx
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-base-200 py-8 px-4 sm:py-12 sm:px-6 flex items-center justify-center">
      <motion.div
        className="w-full max-w-4xl mx-auto bg-base-100 shadow-xl rounded-xl p-6 sm:p-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl font-bold text-primary mb-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          About Me
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg leading-relaxed mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Hi, I’m <span className="font-semibold">Eldrin Johnson</span>, a passionate
          and curious mind currently in my final year of <strong>BCA</strong>.
          My expertise lies in <strong>Full Stack Web Development</strong>, with a
          particular love for crafting powerful backends using <strong>Node.js</strong>.
        </motion.p>

        <motion.p
          className="text-base sm:text-lg leading-relaxed mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Beyond coding, I’m deeply excited about building something of my own — 
          whether in tech or non-tech industries. I have an entrepreneurial spirit, 
          eager to explore innovative solutions and bring impactful ideas to life.
        </motion.p>

        <motion.p
          className="text-base sm:text-lg leading-relaxed mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          I’m also a cybersecurity enthusiast, constantly learning to protect digital spaces.  
          Tools like <strong>Burp Suite</strong> help me understand and secure web applications against vulnerabilities.
        </motion.p>

        <motion.p
          className="text-base sm:text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          I’m always learning, always experimenting, and always ready for the next challenge. 
          The journey of creating, iterating, and solving problems is what drives me every day.
        </motion.p>

        {/* Hashtag Signature */}
        <motion.div
          className="mt-8 text-right text-primary font-semibold italic text-base sm:text-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          #thebestthingsnevercomeeasy
        </motion.div>
      </motion.div>
    </div>
  );
}
