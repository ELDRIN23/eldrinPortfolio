// src/pages/About.jsx
import { motion } from "framer-motion";

const textVariants = {
  hiddenLeft: { opacity: 0, x: -100 },
  hiddenRight: { opacity: 0, x: 100 },
  hiddenUp: { opacity: 0, y: -50 },
  hiddenDown: { opacity: 0, y: 50 },
  visible: { opacity: 1, x: 0, y: 0 },
};

export default function About() {
  return (
    <div className="min-h-screen bg-[#141313] py-6 sm:py-12 px-4 sm:px-6 flex items-center justify-center">
      <motion.div
        className="w-full max-w-4xl mx-auto bg-[#1c1c1c] shadow-xl rounded-2xl p-6 sm:p-8"
        initial="hiddenUp"
        animate="visible"
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl font-extrabold text-cyan-400 mb-6 text-center"
          variants={textVariants}
          initial="hiddenLeft"
          animate="visible"
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          About Me
        </motion.h1>

        <motion.p
          className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4"
          variants={textVariants}
          initial="hiddenRight"
          animate="visible"
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Hi, I’m <span className="font-semibold">Eldrin Johnson</span>, a
          final-year <strong>BCA student</strong> with expertise in{" "}
          <strong>Full Stack Web Development</strong>. I specialize in building
          scalable applications with a focus on <strong>Node.js</strong>.
        </motion.p>

        <motion.p
          className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4"
          variants={textVariants}
          initial="hiddenLeft"
          animate="visible"
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          My skills include{" "}
          <strong>
            JavaScript, React, Node.js, Express, MongoDB, SQL, and REST APIs
          </strong>
          . I’ve also explored <strong>cybersecurity</strong> using tools like{" "}
          <strong>Burp Suite</strong>.
        </motion.p>

        <motion.p
          className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4"
          variants={textVariants}
          initial="hiddenRight"
          animate="visible"
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Alongside technical expertise, I bring{" "}
          <strong>problem-solving, adaptability, and teamwork</strong>. My goal
          is to contribute to impactful projects at leading{" "}
          <strong>multinational companies</strong>.
        </motion.p>

        <motion.p
          className="text-gray-300 text-base sm:text-lg leading-relaxed"
          variants={textVariants}
          initial="hiddenLeft"
          animate="visible"
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          I am eager to apply my knowledge, learn continuously, and collaborate
          with innovative teams to create real-world solutions.
        </motion.p>

        {/* CV View Section */}
        <motion.div
          className="mt-10 flex flex-col items-center gap-4"
          variants={textVariants}
          initial="hiddenDown"
          animate="visible"
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <p className="text-gray-400 text-center max-w-md">
            View my CV to explore more about my skills, education, and
            experience.
          </p>
          <a
            href="https://eldrinjohnson.my.canva.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 bg-cyan-400 text-black font-semibold text-sm sm:text-base rounded-xl shadow-lg hover:bg-cyan-500 transition-all duration-300 text-center"
          >
            View My CV
          </a>
        </motion.div>

        {/* Hashtag Signature */}
        <motion.div
          className="mt-16 text-right text-primary font-semibold italic text-base sm:text-lg"
          initial={{ opacity: 0, x: 100, y: 50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          #thebestthingsnevercomeeasy
        </motion.div>
      </motion.div>
    </div>
  );
}
