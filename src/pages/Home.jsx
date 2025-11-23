import { motion } from "framer-motion";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import ContactForm from "./ConnectMe";

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
    <>
      <style>{`
        html, body, #root {
          margin: 0 !important;
          padding: 0 !important;
          height: 100%;
        }

        /* Vertical divider for grid */
        .mobile-skill-grid {
          display: grid;
          grid-template-columns: 1fr 1px 1fr;
          gap: 18px;
          align-items: start;
        }

        .divider {
          background-color: #505050;
          width: 1px;
          height: 100%;
          justify-self: center;
        }

        /* Bullet symbol */
        .bullet::before {
          content: "• ";
          color: cyan;
          font-weight: bold;
        }
      `}</style>

      <section
        id="home"
        className="min-h-screen w-full bg-[#141313] text-white pt-24"
      >
        <motion.div
          className="text-center mb-8 lg:hidden"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold">
            Hi, I’m <span className="text-cyan-400">Eldrin Johnson</span>
          </h1>
        </motion.div>

        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10">
          <motion.div className="flex-1 max-w-xl flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-6xl font-bold">
                Hi, I’m <span className="text-cyan-400">Eldrin Johnson</span>
              </h1>
              <h2 className="text-3xl mt-3 text-gray-300 font-semibold">
                I’m a Full Stack Developer & Cybersecurity Enthusiast
              </h2>
            </motion.div>

            <motion.p
              className="text-base sm:text-lg text-gray-400 w-full px-3 md:px-0 md:max-w-md"
              initial={{ opacity: 0, x: 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              I specialize in developing high-quality web applications using
              modern technologies. I excel at transforming complex challenges
              into elegant, user-friendly solutions. Additionally, I’m a
              cybersecurity enthusiast committed to ensuring secure and
              resilient digital environments.
            </motion.p>

            <motion.div
              className="hidden lg:block max-w-md"
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-white font-semibold mb-8">
                I’m a Certified developer from Illinois Institute of Technology,
                Chicago, USA.
              </p>
              <CertificationButton />
            </motion.div>
          </motion.div>

          <div className="flex-1 flex flex-col items-center max-w-md w-full">
            <motion.div
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-cyan-400 shadow-md mb-8"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/myself.jpg"
                alt="eldrin"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              className="lg:hidden text-center mb-6"
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-2xl sm:text-3xl text-gray-300 font-semibold">
                I’m a Full Stack Developer & Cybersecurity Enthusiast
              </h2>
            </motion.div>

            {/* EXPERTISE SECTION */}
            <motion.div
              className="w-full rounded-lg p-3 sm:p-5 text-center"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-cyan-400 text-lg sm:text-xl font-bold">
                My Expertise
              </h3>

              {/* Shared 2-column grid for all screens */}
              <div className="mobile-skill-grid mt-4 sm:mt-6">
                <ul className="flex flex-col gap-3 text-white font-semibold text-sm sm:text-base">
                  {skills.slice(0, Math.ceil(skills.length / 2)).map((skill, i) => (
                    <motion.li
                      key={skill}
                      className="bullet"
                      initial={{ opacity: 0, x: -80 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.03 }}
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>

                <div className="divider" />

                <ul className="flex flex-col gap-3 text-white font-semibold text-sm sm:text-base">
                  {skills.slice(Math.ceil(skills.length / 2)).map((skill, i) => (
                    <motion.li
                      key={skill}
                      className="bullet"
                      initial={{ opacity: 0, x: 80 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.03 }}
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="mt-6 lg:hidden w-full max-w-md text-center"
              initial={{ opacity: 0, x: 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-white font-semibold mb-3">
                I’m a Certified developer from Illinois Institute of Technology,
                Chicago, USA.
              </p>
              <CertificationButton mobile />
            </motion.div>
          </div>
        </div>

        <Projects />
        <About />
        <Contact />
        <ContactForm />
      </section>
    </>
  );
}

function CertificationButton({ mobile }) {
  return (
    <motion.a
      href="https://www.credly.com/badges/c4cca72e-6446-45e3-a62f-35f994c61b11/public_url"
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-flex items-center gap-3
        ${mobile ? "px-6 py-3" : "px-10 py-4"}
        bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600
        text-black font-semibold rounded-lg shadow-md relative overflow-hidden
      `}
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.img
        src="/OIP.jpg"
        alt="University Logo"
        className="rounded-md shadow-md relative z-10"
        style={{ width: mobile ? 35 : 50, height: mobile ? 35 : 50 }}
      />
      <motion.span className={`relative z-10 ${mobile ? "text-base" : "text-xl"}`}>
        View My Certification
      </motion.span>
    </motion.a>
  );
}
