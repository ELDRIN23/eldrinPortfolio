"use client";

// import { motion } from "framer-motion";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import ContactForm from "./ConnectMe";
// import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Linkedin, Instagram, Github, Facebook } from "lucide-react";

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
          background-color: #0a0a0c;
        }

        .bg-grid-dark {
          background-color: #0a0a0c;
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 32px 32px;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }
      `}</style>

      <section
        id="home"
        className="min-h-screen w-full bg-grid-dark text-white px-4 pt-4 pb-24 relative"
      >
        {/* STICKY BOTTOM-RIGHT CORNER NAVIGATION */}
        <div className="fixed bottom-6 right-6 z-[99999] flex flex-col gap-3">
          <Link
            to="/business"
            className="bg-[#8b5cf6] text-white font-bold py-2.5 px-7 rounded-xl text-sm hover:bg-[#7c3aed] transition-colors shadow-lg text-center"
          >
            View Business
          </Link>

          <a
            href="#ContactForm"
            className="bg-white text-black font-bold py-2.5 px-5 rounded-xl text-sm hover:bg-gray-100 transition-colors shadow-lg text-center"
          >
            Contact
          </a>

          <div className="bg-white text-black font-bold py-2.5 px-5 rounded-xl text-sm text-center shadow-lg">
            Made with ❤️
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8 items-start">
          {/* LEFT PANEL */}
          <aside className="lg:sticky lg:top-16 w-full flex justify-center z-10">
            <motion.div
              className="w-full max-w-md bg-[#131316] border border-white/[0.06] rounded-[32px] p-6 shadow-2xl flex flex-col items-center relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* PHOTO */}
              <div className="w-full aspect-square rounded-[24px] overflow-hidden bg-[#1c1c21] relative group shadow-inner mb-6">
                <img
                  src="/myself.jpg"
                  alt="Eldrin Johnson"
                  className="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131316]/70 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* INFO */}
              <div className="text-center space-y-2 w-full">
                <h1 className="text-3xl font-bold tracking-tight text-white">
                  Eldrin Johnson
                </h1>
                <p className="text-sm font-medium text-gray-400">
                  Full Stack Developer & Cybersecurity Enthusiast
                </p>
                <p className="text-xs text-gray-500 font-medium tracking-wide">
                  kerala, India
                </p>
              </div>

              {/* SOCIAL */}
              <div className="flex items-center justify-center gap-5 my-6 text-gray-400">
                <a
                  href="https://www.linkedin.com/in/eldrin-johnson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#8b5cf6] transition-all duration-300 hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>

                <a
                  href="https://www.instagram.com/_e_ldrin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#8b5cf6] transition-all duration-300 hover:scale-110"
                >
                  <Instagram size={20} />
                </a>

                <a
                  href="https://github.com/ELDRIN23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#8b5cf6] transition-all duration-300 hover:scale-110"
                >
                  <Github size={20} />
                </a>

                <a
                  href="https://www.facebook.com/share/1BnK8tbZ1t/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#8b5cf6] transition-all duration-300 hover:scale-110"
                >
                  <Facebook size={20} />
                </a>
              </div>

              <motion.a
                href="#ContactForm"
                className="w-full text-center bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] hover:from-[#9065f7] hover:to-[#8247f0] text-white font-semibold py-3 px-6 rounded-xl border border-white/10 transition-all duration-300 text-sm mb-6 block tracking-wide"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                Let's Talk
              </motion.a>

              {/* CERTIFICATION */}
              <motion.div
                className="w-full mb-6 p-4 rounded-2xl bg-[#1a1a1f] border border-white/[0.06]"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-sm text-gray-300 leading-relaxed mb-4 text-center">
                  I'm a Certified Developer from
                  <span className="text-purple-400 font-semibold">
                    {" "}
                    Illinois Institute of Technology, Chicago, USA
                  </span>
                  .
                </p>

                <motion.a
                  href="https://www.credly.com/badges/c4cca72e-6446-45e3-a62f-35f994c61b11/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
      w-full
      flex
      items-center
      justify-center
      gap-2
      py-3
      rounded-xl
      bg-gradient-to-r
      from-[#8b5cf6]
      to-[#7c3aed]
      text-white
      font-semibold
      text-sm
      shadow-lg
    "
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Verify Certification
                </motion.a>
              </motion.div>

              {/* EXPERTISE - MOBILE ONLY */}
              <div className="w-full border-t border-white/[0.06] pt-5 lg:hidden block">
                <h3 className="text-xs font-bold text-gray-400 tracking-wider uppercase mb-3 text-left pl-1">
                  My Expertise
                </h3>
                <div className="flex flex-wrap gap-2 justify-start max-h-36 overflow-y-auto pr-1 custom-scrollbar">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-medium px-2.5 py-1.5 bg-[#1a1a1f] border border-white/[0.04] text-gray-300 rounded-lg flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]" />{" "}
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </aside>

          {/* MAIN CONTENT */}
          <main className="w-full space-y-12 lg:pl-4">
            <motion.div
              className="hidden lg:block w-full bg-[#131316] border border-white/[0.06] rounded-[32px] p-8 shadow-2xl relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-lg font-bold text-white tracking-wide mb-6">
                Technical{" "}
                <span className="text-purple-500">Expertise & Stack</span>
              </h3>
              <div className="flex flex-wrap gap-2.5 justify-start">
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{
                      scale: 1.05,
                      borderColor: "rgba(139, 92, 246, 0.4)",
                    }}
                    className="text-xs font-medium px-3.5 py-2 bg-[#1a1a1f] border border-white/[0.05] text-gray-300 rounded-xl flex items-center gap-2 transition-colors cursor-default"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#8b5cf6]" />{" "}
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            <About />
            <Projects />
            <Contact />
            <ContactForm />
          </main>
        </div>
      </section>
    </>
  );
}


