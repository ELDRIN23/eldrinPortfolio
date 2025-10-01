import { motion } from "framer-motion";

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "SQL",
  "Tailwind CSS",
  "Burp Suite",
  "CRUD",
  "Python",
  "API/REST",
  "Docker",
  "Git & GitHub",
  "Java",
  "TypeScript",
];

export default function Home() {
  return (
    <section id="home" className="min-h-[80vh] px-6 sm:px-12 max-w-7xl mx-auto">
      {/* Heading on mobile only */}
      <motion.div
        className="text-center mb-8 lg:hidden"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold">
          Hi, I’m <span className="text-cyan-400">Eldrin Johnson</span>
        </h1>
      </motion.div>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10">
        {/* Left Side */}
        <motion.div className="flex-1 max-w-xl flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
          {/* Desktop heading + subtitle only */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
          >
            <h1 className="text-6xl font-bold">
              Hi, I’m <span className="text-cyan-400">Eldrin Johnson</span>
            </h1>
            <h2 className="text-3xl mt-3 text-gray-300 font-semibold">
              I’m a Full Stack Developer & Cybersecurity Enthusiast
            </h2>
          </motion.div>

          {/* About text */}
          <motion.p
            className="text-base sm:text-lg text-gray-400 max-w-md"
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
          >
            I specialize in developing high-quality web applications using
            modern technologies. I excel at transforming complex challenges into
            elegant, user-friendly solutions. Additionally, I’m a cybersecurity
            enthusiast committed to ensuring secure and resilient digital
            environments.
          </motion.p>

          {/* Certified text + button (desktop only) */}
          <motion.div
            className="hidden lg:block max-w-md"
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
          >
            <p className="text-white font-semibold mb-8">
              I’m a Certified developer from Illinois Institute of Technology,
              Chicago, USA.
            </p>
            <CertificationButton />
          </motion.div>
        </motion.div>

        {/* Right side (Profile + Expertise + Cert in mobile) */}
        <div className="flex-1 flex flex-col items-center max-w-md w-full">
          {/* Profile Pic */}
          <motion.div
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-cyan-400 shadow-md mb-8"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px 3px rgba(34, 211, 238, 0.8)",
            }}
          >
            <img
              src="/myself.jpg"
              alt="eldrin"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Mobile subtitle */}
          <motion.div
            className="lg:hidden text-center mb-6"
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl sm:text-3xl text-gray-300 font-semibold max-w-xs sm:max-w-full mx-auto leading-snug">
              I’m a Full Stack Developer & Cybersecurity Enthusiast
            </h2>
          </motion.div>

          {/* Expertise Section */}
          <motion.div
            className="w-full bg-[#141313] rounded-lg p-5 shadow-md text-center"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-cyan-400 text-lg sm:text-xl font-bold mb-4">
              My Expertise
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-white font-semibold text-xs sm:text-sm">
              {skills.map((skill, i) => (
                <motion.li
                  key={skill}
                  className="bg-[#1c1c1c] rounded-md py-2 cursor-pointer select-none 
                             transition-all duration-150 ease-in-out border border-cyan-400/30"
                  initial={{ x: i % 2 === 0 ? -100 : 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 8,
                    delay: i * 0.02, // very fast stagger
                  }}
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0 0 12px 4px rgba(34, 211, 238, 0.8)",
                    backgroundColor: "rgba(34, 211, 238, 0.1)",
                    color: "#22d3ee",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Certified text + button (mobile only) */}
          <motion.div
            className="mt-8 lg:hidden max-w-md text-center"
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
          >
            <p className="text-white font-semibold mb-6">
              I’m a Certified developer from Illinois Institute of Technology,
              Chicago, USA.
            </p>
            <CertificationButton />
          </motion.div>
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
      className="inline-flex items-center gap-5 px-10 sm:px-14 py-4 
                 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600
                 text-black font-semibold rounded-lg shadow-md cursor-pointer select-none relative overflow-hidden"
      style={{ borderRadius: "10px" }}
      whileHover={{
        scale: 1.07,
        boxShadow: "0 0 25px 10px rgba(34, 211, 238, 0.9)",
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Shine effect */}
      <motion.div
        className="absolute top-0 left-[-100%] w-24 h-full 
                   bg-gradient-to-r from-transparent via-white/40 to-transparent"
        style={{ filter: "blur(8px)" }}
        animate={{ x: ["-100%", "150%"] }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      />
      <motion.img
        src="/OIP.jpg"
        alt="University Logo"
        className="object-contain rounded-md shadow-md relative z-10"
        style={{ width: 50, height: 50 }}
      />
      <motion.span
        className="text-lg sm:text-xl font-semibold relative z-10 text-black"
        style={{ textShadow: "0 0 8px rgba(34, 211, 238, 0.7)" }}
      >
        View My Certification
      </motion.span>
    </motion.a>
  );
}
