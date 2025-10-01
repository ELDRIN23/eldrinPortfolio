import { FaLinkedin, FaInstagram, FaGithub, FaTwitter, FaDiscord, FaTelegramPlane, FaProjectDiagram, FaGoogle } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"],
  });

  const yHeading = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const opacityHeading = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/eldrin-johnson",
      Icon: FaLinkedin,
      label: "LinkedIn",
      username: "@eldrinjohnson",
      description: "Connect with me here",
      status: "Super Active",
    },
    {
      href: "https://github.com/ELDRIN23",
      Icon: FaGithub,
      label: "GitHub",
      username: "@ELDRIN23",
      description: "Checkout my repositories",
      status: "Super Active",
    },
    {
      href: "https://www.instagram.com/_e_ldrin/",
      Icon: FaInstagram,
      label: "Instagram",
      username: "@_e_ldrin",
      description: "Follow me for updates",
      status: "Active",
    },
    {
      href: "https://g.dev/Eldrin",
      Icon: FaGoogle,
      label: "Google Dev",
      username: "@EldrinDev",
      description: "Occasionally active",
      status: "Occasionally Active",
    },
    {
      href: "https://x.com/eldrinjohnson23?t=jmnGuzod-7tqydG073bupw&s=08",
      Icon: FaTwitter,
      label: "X",
      username: "@eldrinjohnson23",
      description: "Follow me on X",
      status: "Super Active",
    },
    {
      href: "https://discord.com/users/eldrinjohnson",
      Icon: FaDiscord,
      label: "Discord",
      username: "@eldrinjohnson",
      description: "Chat with me on Discord",
      status: "Active",
    },
    {
      href: "https://t.me/eldrin",
      Icon: FaTelegramPlane,
      label: "Telegram",
      username: "@eldrin",
      description: "Message me on Telegram",
      status: "Active",
    },
    {
      href: "https://tinkerhub.org/@eldrin23",
      Icon: FaProjectDiagram,
      label: "Tinkerhub",
      username: "@eldrin23",
      description: "Explore my Tinkerhub projects",
      status: "Active",
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
      {/* Hire Me Button */}
      <motion.a
        href="mailto:eldrinjohnson77@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-7 py-4 bg-cyan-400 text-black font-bold rounded-full shadow-lg hover:bg-cyan-500 transition-colors mb-6"
        animate={{ x: [0, -5, 5, -5, 5, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <MdMail size={24} />
        Hire Me
      </motion.a>

      {/* Heading */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-cyan-400 text-center"
        initial={{ opacity: 0, x: 100 }}
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
        I’m open to new projects, opportunities, or collaborations. Reach out through any of the platforms below.
      </motion.p>

      {/* Social Links */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 w-full max-w-4xl">
        {socialLinks.map(({ href, Icon, label, username, description, status }, i) => (
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
              <p className={`text-xs mt-1 font-semibold ${statusColors[status]}`}>{status}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
