import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaDiscord,
  FaTelegramPlane,
  FaProjectDiagram,
  FaGoogle,
  FaWhatsapp,
  FaSlack,
} from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"],
  });

  const yHeading = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const opacityHeading = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

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
      href: "https://wa.me/9061014912",
      Icon: FaWhatsapp,
      label: "WhatsApp",
      username: "+91 90610 14915",
      description: "Chat with me on WhatsApp",
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
      href: "https://t.me/eldrin",
      Icon: FaTelegramPlane,
      label: "Telegram",
      username: "@eldrin",
      description: "Message me on Telegram",
      status: "Active",
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
      href: "https://join.slack.com/t/portfolio-messages/shared_invite/zt-3eoq2igud-zZ7XzO6CP14fWHICCQ1YRg",
      Icon: FaSlack,
      label: "Slack",
      username: "ELDRIN JOHNSON",
      description: "Chat with me on Slack",
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
      href: "https://tinkerhub.org/@eldrin23",
      Icon: FaProjectDiagram,
      label: "Tinkerhub",
      username: "@eldrin23",
      description: "Explore my Tinkerhub projects",
      status: "Occasionally Active",
    },
    {
      href: "https://x.com/eldrinjohnson23?t=jmnGuzod-7tqydG073bupw&s=08",
      Icon: FaTwitter,
      label: "X",
      username: "@eldrinjohnson23",
      description: "Follow me on X",
      status: "Occasionally Active",
    },
  ];

  const statusColors = {
    "Super Active": "text-green-400",
    Active: "text-purple-400",
    "Occasionally Active": "text-amber-400",
    Inactive: "text-gray-500",
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
        id="contact"
        ref={ref}
        className="min-h-screen bg-grid flex flex-col items-center justify-start py-16 px-4 sm:px-6 md:px-12 gap-8 overflow-hidden font-sans"
      >
        {/* Hire Me Action Trigger Button */}
        <motion.a
          href="mailto:eldrinjohnson77@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-purple-600 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-lg transition-colors mb-4 hover:bg-purple-700"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)" }}
          whileTap={{ scale: 0.98 }}
        >
          <MdMail size={18} />
          Hire Me
        </motion.a>

        {/* Section Heading Row */}
        <div className="text-center space-y-3">
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Connect With <span className="text-purple-500">Me</span>
          </motion.h1>

          {/* Subtext description message layer */}
          <motion.p
            style={{ y: yHeading, opacity: opacityHeading }}
            className="max-w-lg sm:max-w-xl mx-auto text-gray-400 text-base sm:text-lg font-light leading-relaxed"
          >
            I’m open to new projects, opportunities, or collaborations. Reach out through any of the platforms below.
          </motion.p>
        </div>

        {/* Social Grid Container */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl mt-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {socialLinks.map(({ href, Icon, label, username, description, status }) => (
            <motion.div
              key={label}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03, 
                borderColor: "rgba(168, 85, 247, 0.4)",
                boxShadow: "0 10px 25px rgba(168, 85, 247, 0.15)"
              }}
              className="flex flex-col items-stretch p-6 border border-zinc-800 rounded-3xl bg-[#232323] transition-colors relative group"
            >
       

              <div className="flex items-center gap-4 mb-4">
                <div className="p-3.5 rounded-2xl bg-[#18181b] border border-zinc-800 flex items-center justify-center text-purple-500 group-hover:text-white group-hover:bg-purple-600 transition-all duration-300">
                  <Icon size={24} />
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-white text-lg tracking-wide">{label}</p>
                  <p className="text-gray-500 text-xs font-mono">{username}</p>
                </div>
              </div>

              <div className="flex flex-col text-left mb-6 flex-grow justify-between">
                <p className="text-gray-400 text-sm font-light leading-relaxed">{description}</p>
                <p className={`text-xs mt-2 font-semibold tracking-wider uppercase ${statusColors[status]}`}>
                  {status}
                </p>
              </div>

              {/* Redirection Link trigger element */}
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-zinc-800 text-gray-200 hover:text-white hover:bg-purple-600 font-bold text-xs uppercase tracking-wider rounded-xl transition-all text-center"
              >
                View Profile
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}