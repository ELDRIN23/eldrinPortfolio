// src/pages/About.jsx
import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <>
      <style>{`
        .bg-grid {
          background-color: #0b0b0b;
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>

      <div
        id="about"
        className="min-h-screen bg-grid py-12 px-4 sm:px-6 flex flex-col items-center justify-center font-sans overflow-x-hidden"
      >
        <motion.div
          className="w-full max-w-4xl mx-auto bg-[#232323] shadow-2xl rounded-3xl p-6 sm:p-10 border border-zinc-800 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold text-white mb-8 tracking-tight text-center"
            variants={itemVariants}
          >
            About <span className="text-purple-500">Me</span>
          </motion.h1>

          {/* Content Paragraphs */}
          <div className="space-y-5 text-gray-400 text-base sm:text-lg leading-relaxed font-light">
            <motion.p variants={itemVariants}>
              Hi, I’m{" "}
              <span className="font-semibold text-white">
                Eldrin Johnson
              </span>
              , a {" "}
              <strong className="font-medium text-purple-400">
                BCA Graduate
              </strong>{" "}
              with expertise in{" "}
              <strong className="font-medium text-purple-400">
                Full Stack Web Development
              </strong>
              . I specialize in building scalable applications with a primary
              focus on{" "}
              <strong className="font-medium text-purple-400">
                Node.js
              </strong>
              .
            </motion.p>

            <motion.p variants={itemVariants}>
              My skills include{" "}
              <strong className="font-medium text-zinc-200">
                JavaScript, React, Node.js, Express, MongoDB, SQL, and REST APIs
              </strong>
              . I’ve also explored the landscape of{" "}
              <strong>cybersecurity</strong> using infrastructure auditing tools
              like{" "}
              <strong className="font-medium text-zinc-200">
                Burp Suite
              </strong>
              .
            </motion.p>

            <motion.p variants={itemVariants}>
              Alongside technical architecture, I bring{" "}
              <strong className="font-medium text-purple-400">
                problem-solving, adaptability, and teamwork
              </strong>
              . My ultimate roadmap goal is to contribute to impactful software
              projects within global engineering squads at leading{" "}
              <strong className="font-medium text-purple-400">
                multinational companies
              </strong>
              .
            </motion.p>

            <motion.p variants={itemVariants}>
              I am highly eager to apply my practical engineering knowledge,
              learn continuously, and collaborate with innovative product teams
              to deploy production-ready, real-world solutions.
            </motion.p>
          </div>

          {/* CV Action Block Area */}
          <motion.div
            className="mt-12 pt-8 border-t border-zinc-800 flex flex-col items-center gap-5"
            variants={itemVariants}
          >
            <p className="text-gray-400 text-sm sm:text-base text-center max-w-md font-light">
              View my full credentials to explore more about my academic
              curriculum, skills, and code experience.
            </p>

            <a
              href="https://eldrinjohnson.my.canva.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 bg-purple-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md hover:bg-purple-700 transition-colors duration-300 text-center"
            >
              View My CV
            </a>
          </motion.div>

          {/* Signature/Hashtag Block */}
          <motion.div
            className="mt-12 text-right text-purple-500 font-mono text-sm sm:text-base tracking-tight select-none opacity-80"
            variants={itemVariants}
          >
            #thebestthingsnevercomeeasy
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}