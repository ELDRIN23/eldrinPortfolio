import { House, Folder, Wrench, SquarePen, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("#home");
  const [isManualScroll, setIsManualScroll] = useState(false);

  const scrollToSection = (id) => {
    const element = document.querySelector(id);

    if (!element) return;

    setIsManualScroll(true);
    setActiveSection(id);

    const navbarOffset = 120;

    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: elementPosition - navbarOffset,
      behavior: "smooth",
    });

    setTimeout(() => {
      setIsManualScroll(false);
    }, 800);
  };

  useEffect(() => {
    const sections = [
      "#home",
      "#about",
      "#project",
      "#ContactForm",
      "#contact",
    ];

    const handleScroll = () => {
      if (isManualScroll) return;

      const scrollPosition = window.scrollY + 80;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.querySelector(sections[i]);

        if (
          section &&
          scrollPosition >= section.offsetTop - 50
        ) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isManualScroll]);

 const links = [
  {
    href: "#home",
    icon: House,
  },
  {
    href: "#about",
    icon: Wrench,
  },
  {
    href: "#project",
    icon: Folder,
  },
  {
    href: "#contact",
    icon: Mail,
  },
  {
    href: "#ContactForm",
    icon: SquarePen,
  },
];

  return (
    <motion.nav
      className="sticky top-7 z-[9999] w-full flex justify-center px-4 pb-2"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div
        className="
          w-full
          max-w-md
          md:max-w-lg
          rounded-[22px]
          bg-[#1a1a1a]/95
          backdrop-blur-xl
          border
          border-white/5
          shadow-[0_20px_60px_rgba(0,0,0,0.45)]
          px-3
          py-2
        "
      >
        <ul className="flex items-center justify-between">
          {links.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href;

            return (
              <li key={index}>
                <motion.button
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{
                    scale: 1.08,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className={`
                    w-10
                    h-10
                    md:w-11
                    md:h-11
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "bg-gradient-to-br from-[#a855f7] to-[#7c3aed] text-white shadow-[0_0_20px_rgba(168,85,247,0.45)]"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }
                  `}
                >
                  <Icon size={20} strokeWidth={2.2} />
                </motion.button>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.nav>
  );
}