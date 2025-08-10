import { motion } from "framer-motion";

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Burp suite",
  "CRUD",
  "Python",
  "Git & GitHub",
];

export default function Home() {
  return (
    <section className="min-h-[80vh] flex flex-col md:flex-row items-center justify-center px-6 sm:px-12 gap-10">
      {/* Left: Text and button */}
      <motion.div
        className="flex-1 flex flex-col items-center md:items-start text-center md:text-left max-w-xl"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Hi, I’m <span className="text-primary">Eldrin Johnson</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl mb-6">
          I’m a <span className="text-secondary">Full Stack Web Developer</span>
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-6">
          I specialize in developing high-quality web applications using modern
          technologies. I excel at transforming complex challenges into elegant,
          user-friendly solutions. Additionally, I’m a cybersecurity enthusiast
          committed to ensuring secure and resilient digital environments.
        </p>

        <p className="text-white font-semibold mb-8">
          I’m a Certified developer from Illinois Institute of Technology,
          Chicago, USA.
        </p>

        {/* Certification Button */}
        <motion.a
          href="https://www.credly.com/badges/c4cca72e-6446-45e3-a62f-35f994c61b11/public_url"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-5 px-10 sm:px-14 py-4 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900
                     text-white font-semibold rounded-lg shadow-lg cursor-pointer select-none
                     ring-1 ring-blue-600 ring-opacity-60"
          style={{ borderRadius: "10px" }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px 8px rgba(29, 78, 216, 0.8)",
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.img
            src="/OIP.jpg"
            alt="University Logo"
            className="object-contain rounded-md shadow-md"
            style={{ width: 50, height: 50 }}
            whileHover={{
              scale: 1.1,
              filter:
                "brightness(1.3) drop-shadow(0 0 10px rgba(59, 130, 246, 0.7))",
              transition: { duration: 0.4 },
            }}
            whileTap={{ scale: 0.9 }}
          />
          <motion.span
            className="text-lg sm:text-xl font-semibold"
            style={{ textShadow: "0 0 6px rgba(59, 130, 246, 0.8)" }}
            initial={{ opacity: 0.95 }}
            animate={{
              opacity: [0.95, 1, 0.95],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          >
            View My Certification
          </motion.span>
        </motion.a>
      </motion.div>

      {/* Right: Profile Image and Skills */}
      <motion.div
        className="flex-1 flex flex-col items-center max-w-md w-full"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary shadow-lg">
          <img
            src="/myself.jpg"
            alt="eldrin"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mt-8 w-full bg-base-300 rounded-lg p-5 shadow-lg text-center">
          <h3 className="text-primary text-lg sm:text-xl font-bold mb-4">My Skills</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-white font-semibold text-xs sm:text-sm">
            {skills.map((skill) => (
              <motion.li
                key={skill}
                className="bg-primary/80 rounded-md py-2"
                whileHover={{ scale: 1.1, boxShadow: "0 0 10px #2563eb" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
