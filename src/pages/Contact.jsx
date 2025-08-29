import { Linkedin, Instagram, Github, Mail } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Google Dev Icon (closer to the original G logo style)
const GoogleDevIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm0 3c1.66 0 3.14.69 4.22 1.78l-1.42 1.42C14.24 7.24 13.17 7 12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5c1.3 0 2.48-.51 3.36-1.34l1.42 1.42C16.14 17.31 14.66 18 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6z" />
  </svg>
);

export default function Contact() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"],
  });

  // Parallax for heading + text
  const yHeading = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const opacityHeading = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/eldrin-johnson",
      Icon: Linkedin,
      label: "LinkedIn",
      username: "@eldrinjohnson",
      description: "Connect with me here",
      status: "Super Active",
    },
    {
      href: "https://github.com/ELDRIN23",
      Icon: Github,
      label: "GitHub",
      username: "@ELDRIN23",
      description: "Checkout my repositories",
      status: "Super Active",
    },
    {
      href: "https://www.instagram.com/_e_ldrin/",
      Icon: Instagram,
      label: "Instagram",
      username: "@_e_ldrin",
      description: "Follow me for updates",
      status: "Active",
    },
    {
      href: "https://g.dev/Eldrin",
      Icon: GoogleDevIcon,
      label: "Google Dev",
      username: "@EldrinDev",
      description: "Occasionally active",
      status: "Occasionally Active",
    },
  ];

  const statusColors = {
    "Super Active": "text-green-500",
    Active: "text-cyan-400",
    "Occasionally Active": "text-yellow-400",
    Inactive: "text-gray-400",
  };

  return (
    <div
      ref={ref}
      className="min-h-screen bg-[#141313] flex flex-col items-center justify-start py-12 px-4 sm:px-6 md:px-12 gap-8 overflow-hidden"
    >
      {/* Hire Me Button at Top with Shake Animation */}
      <motion.a
        href="https://mail.google.com/mail/?view=cm&to=eldrinjohnson77@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-7 py-4 bg-cyan-400 text-black font-bold rounded-full shadow-lg hover:bg-cyan-500 transition-colors mb-6"
        animate={{ x: [0, -5, 5, -5, 5, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <Mail className="w-6 h-6" />
        Hire Me
      </motion.a>

      {/* Heading */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-cyan-400 text-center"
        initial={{ opacity: 0, x: 100 }} // from right (mobile effect)
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Connect With Me
      </motion.h1>

      {/* Intro */}
      <motion.p
        style={{ y: yHeading, opacity: opacityHeading }}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-lg sm:max-w-xl text-center mb-6 text-gray-300 text-base sm:text-lg"
      >
        I’m open to new projects, opportunities, or collaborations. Reach out
        through any of the platforms below.
      </motion.p>

      {/* Social Links Cards */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 w-full max-w-4xl">
        {socialLinks.map(
          ({ href, Icon, label, username, description, status }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{
                opacity: 0,
                x: i % 2 === 0 ? -100 : 100,
                y: i % 2 === 0 ? -50 : 50,
              }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? -1 : 1 }}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 p-5 border border-gray-500 rounded-xl bg-[#1c1c1c] w-full sm:w-[300px] hover:border-cyan-400 transition-colors shadow-lg"
            >
              <div className="bg-gray-100 p-4 rounded-full flex items-center justify-center w-16 h-16">
                <Icon size={28} className="text-black" />
              </div>
              <div className="flex flex-col text-left">
                <p className="font-bold text-white text-lg">{label}</p>
                <p className="text-gray-400 text-sm">{username}</p>
                <p className="text-gray-300 text-sm">• {description}</p>
                <p
                  className={`text-xs mt-1 font-semibold ${statusColors[status]}`}
                >
                  {status}
                </p>
              </div>
            </motion.a>
          )
        )}
      </div>
    </div>
  );
}
