import { motion } from "framer-motion";

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind css",
  "Burp suite",
  "CRUD",
  "Python",
  "SQL",
  "Git & GitHub",
];

export default function Home() {
  return (
    <section id="home" className="min-h-[80vh] px-6 sm:px-12 max-w-7xl mx-auto">
      {/* Heading on mobile only */}
      <motion.div
        className="text-center mb-8 lg:hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold">
          Hi, I’m <span className="text-primary">Eldrin Johnson</span>
        </h1>
      </motion.div>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10">
        {/* Left side content */}
        <motion.div
          className="flex-1 max-w-xl flex flex-col items-center lg:items-start text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Desktop heading + subtitle only */}
          <div className="hidden lg:block mb-8">
            <h1 className="text-6xl font-bold">
              Hi, I’m <span className="text-primary">Eldrin Johnson</span>
            </h1>
            <h2 className="text-3xl mt-3 text-secondary font-semibold">
              I’m a Full Stack Developer & Cybersecurity Enthusiast
            </h2>
          </div>

          {/* About text */}
          <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-md">
            I specialize in developing high-quality web applications using
            modern technologies. I excel at transforming complex challenges into
            elegant, user-friendly solutions. Additionally, I’m a cybersecurity
            enthusiast committed to ensuring secure and resilient digital
            environments.
          </p>

          {/* Certified text + button only visible on desktop */}
          <div className="hidden lg:block max-w-md">
            <p className="text-white font-semibold mb-8">
              I’m a Certified developer from Illinois Institute of Technology,
              Chicago, USA.
            </p>

            <CertificationButton />
          </div>
        </motion.div>

        {/* Right side: Profile + Skills + Cert text & button on mobile */}
        <div className="flex-1 flex flex-col items-center max-w-md w-full">
          {/* Profile Pic */}
          <motion.div
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary shadow-md mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px 3px rgba(59, 130, 246, 0.8)",
            }}
          >
            <img
              src="/myself.jpg"
              alt="eldrin"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Mobile subtitle below profile picture */}
          <div className="lg:hidden text-center mb-6">
            <h2 className="text-2xl sm:text-3xl text-secondary font-semibold max-w-xs sm:max-w-full mx-auto leading-snug">
              I’m a Full Stack Developer & Cybersecurity Enthusiast
            </h2>
          </div>

          {/* Skills */}
          <motion.div
            className="w-full bg-base-300 rounded-lg p-5 shadow-md text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-primary text-lg sm:text-xl font-bold mb-4">
              My Skills
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-white font-semibold text-xs sm:text-sm">
              {skills.map((skill) => (
                <motion.li
                  key={skill}
                  className="bg-primary/90 rounded-md py-2 cursor-pointer select-none transition-colors duration-300 ease-in-out"
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0 0 12px 4px rgba(59, 130, 246, 0.9)",
                    backgroundColor: "rgba(59, 130, 246, 0.15)",
                    color: "#3b82f6",
                    transition: { duration: 0.35, ease: "easeInOut" },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Certified text + button on mobile only */}
          <div className="mt-8 lg:hidden max-w-md text-center">
            <p className="text-white font-semibold mb-6">
              I’m a Certified developer from Illinois Institute of Technology,
              Chicago, USA.
            </p>

            <CertificationButton />
          </div>
        </div>
      </div>
    </section>
  );
}

function CertificationButton() {
  return (
    <motion.a
      href="https://www.credly.com/badges/c4cca72e-6446-45e3-a62f-35f994c61b11/public_url"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-5 px-10 sm:px-14 py-4 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900
                 text-white font-semibold rounded-lg shadow-md cursor-pointer select-none relative overflow-hidden"
      style={{ borderRadius: "10px" }}
      whileHover={{
        scale: 1.07,
        boxShadow: "0 0 25px 10px rgba(59, 130, 246, 0.9)",
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute top-0 left-[-100%] w-24 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
        style={{ filter: "blur(8px)" }}
        animate={{ x: ["-100%", "150%"] }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
      />
      <motion.img
        src="/OIP.jpg"
        alt="University Logo"
        className="object-contain rounded-md shadow-md relative z-10"
        style={{ width: 50, height: 50 }}
        whileHover={{
          scale: 1.1,
          filter:
            "brightness(1.3) drop-shadow(0 0 10px rgba(59, 130, 246, 0.9))",
          transition: { duration: 0.4 },
        }}
        whileTap={{ scale: 0.9 }}
      />
      <motion.span
        className="text-lg sm:text-xl font-semibold relative z-10"
        style={{ textShadow: "0 0 10px rgba(59, 130, 246, 0.9)" }}
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
  );
}
