import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Navbar() {
  const location = useLocation();

  // ✅ Scroll-based parallax
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 200], [0, -25]); // slight upward shift on scroll
  const opacityParallax = useTransform(scrollY, [0, 200], [1, 0.85]); // fades a bit while scrolling

  const links = [
    { path: "/", label: "Home" },
    { path: "#project", label: "Projects" },
    { path: "#about", label: "About" },
    { path: "#contact", label: "Connect" },
    { path: "#ContactForm", label: "Contact" },
  ];

  return (
    <motion.nav
      className="w-full flex justify-center
                 mt-25 lg:mt-12 mb-4 lg:mb-12 px-2"  // mobile: more top spacing
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      style={{ y: yParallax, opacity: opacityParallax }}
    >
      <div className="bg-[#141313] rounded-2xl px-2 sm:px-6 md:px-10 py-3 sm:py-3 md:py-4 shadow-md w-full max-w-4xl">
        <ul className="flex justify-between md:justify-center items-center gap-2 sm:gap-6 md:gap-10">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.path} className="flex-1 md:flex-none text-center">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.path}
                    className={`block font-semibold uppercase transition-colors duration-300
                      text-[11px] xs:text-xs sm:text-sm md:text-base lg:text-lg
                      tracking-wide
                      px-2 sm:px-3 md:px-4 py-2
                      ${isActive 
                        ? "text-cyan-400" 
                        : "text-gray-400 hover:text-white"
                      }`}
                    style={
                      isActive
                        ? { textShadow: "0 0 8px rgba(34, 211, 238, 0.7)" }
                        : {}
                    }
                  >
                    {link.label}
                  </a>
                </motion.div>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.nav>
  );
}
