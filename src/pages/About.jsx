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
          Hi, I’m <span className="font-semibold">Eldrin Johnson</span>, a
          final-year
          <strong> BCA student</strong> with strong expertise in
          <strong> Full Stack Web Development</strong>. I specialize in building
          scalable and efficient applications with a particular focus on
          back-end technologies, especially <strong>Node.js</strong>.
        </motion.p>

        <motion.p
          className="text-base sm:text-lg leading-relaxed mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          My technical skills extend across{" "}
          <strong>
            JavaScript, React, Node.js, Express, MongoDB, SQL, and REST APIs
          </strong>
          . I have also explored <strong>cybersecurity</strong>, using tools
          like <strong>Burp Suite</strong> to strengthen web application
          security and ensure robust systems against vulnerabilities.
        </motion.p>

        <motion.p
          className="text-base sm:text-lg leading-relaxed mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          Along with my technical background, I bring{" "}
          <strong>problem-solving skills, adaptability, and teamwork</strong>
          —qualities that I believe are essential in a dynamic corporate
          environment. My goal is to contribute to impactful projects at a
          leading <strong>multinational company</strong> where I can grow as a
          professional while delivering value to the organization.
        </motion.p>

        <motion.p
          className="text-base sm:text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          I am eager to apply my knowledge, continuously learn, and collaborate
          with innovative teams to build solutions that make a real-world
          impact.
        </motion.p>

        {/* CV Download Section */}
        {/* CV Download Section */}
        <motion.div
          className="mt-10 flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <p className="text-gray-500 text-center max-w-md">
            You can also download my CV to explore more about my skills,
            education, and professional experience.
          </p>
          <a
            href="/eldrinUpdatedaCv.pdf" // keep PDF in public folder
            download
            className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 
               bg-gradient-to-r from-blue-600 to-blue-700 
               text-white font-semibold text-sm sm:text-base 
               rounded-xl shadow-md hover:shadow-lg 
               hover:from-blue-700 hover:to-blue-800 
               transition-all duration-300 text-center"
          >
            Download My CV
          </a>
        </motion.div>

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
