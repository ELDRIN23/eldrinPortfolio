import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const [activeSection, setActiveSection] = useState(""); // NEW: track active section
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const location = useLocation();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setShowHint(false);
  };

  const closeDropdown = () => setIsOpen(false);

  // NEW: Track scroll to highlight links
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Smooth scroll to section (mobile only)
  const scrollToSection = (id) => {
    if (window.innerWidth < 1024 && location.pathname === "/") {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        closeDropdown();
      }
    }
  };

  const goldLinkClasses = (id) =>
    `block px-4 py-3 font-semibold rounded-lg relative overflow-hidden 
     transition-all duration-300 ease-in-out 
     hover:text-black hover:scale-105 
     hover:shadow-[0_0_15px_4px_rgba(255,215,0,0.85)] 
     before:absolute before:inset-0 before:bg-gradient-to-r before:from-yellow-300/30 before:via-yellow-400/40 before:to-yellow-300/30 
     before:opacity-0 before:blur-md before:transform before:-translate-x-full before:transition-transform before:duration-500 
     hover:before:translate-x-0 hover:before:opacity-100 
     ${activeSection === id ? "text-yellow-300 scale-105" : "text-yellow-400"}`;

  const premiumButton =
    "btn relative bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 text-primary-content " +
    "font-bold border-none rounded-lg px-5 py-3 overflow-hidden transition-transform duration-300 ease-in-out " +
    "shadow-[0_0_15px_3px_rgba(255,215,0,0.6)] hover:scale-110 hover:brightness-110 hover:shadow-[0_0_25px_6px_rgba(255,215,0,0.9)] " +
    "before:absolute before:top-0 before:left-0 before:w-full before:h-full " +
    "before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent " +
    "before:opacity-0 before:blur-sm before:transform before:-translate-x-full before:transition-all before:duration-700 hover:before:translate-x-full hover:before:opacity-100";

  return (
    <div className="navbar bg-primary text-primary-content px-6 relative">
      {/* Logo */}
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          MyPortfolio
        </Link>
      </div>

      {/* Desktop menu */}
      <ul className="menu menu-horizontal px-1 hidden lg:flex items-center gap-4">
        <li>
          <Link to="/" className={goldLinkClasses("home")}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={goldLinkClasses("about")}>
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className={goldLinkClasses("projects")}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className={goldLinkClasses("contact")}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/ContactForm" className={goldLinkClasses("contact")}>
            Connect
          </Link>
        </li>
        {/* <li>
          <Link to="/know-more" className={premiumButton}>
            Know More About Me
          </Link>
        </li> */}
      </ul>

      {/* Mobile menu toggle */}
      <div className="fixed top-4 right-4 flex items-center gap-3 z-[10000] lg:hidden">
        {showHint && !isOpen && (
          <div className="flex items-center gap-1 animate-bounce">
            <span className="text-yellow-300 text-lg font-bold drop-shadow-[0_0_5px_rgba(255,215,0,0.9)] whitespace-nowrap">
              View More
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-yellow-300 drop-shadow-[0_0_6px_rgba(255,215,0,0.8)]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        )}

        <button
          ref={buttonRef}
          onClick={toggleDropdown}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="btn btn-ghost btn-circle w-12 h-12 flex items-center justify-center
            transition-transform duration-300 ease-in-out
            hover:scale-110
            focus:outline-none
            relative
            before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-purple-400 before:via-pink-500 before:to-red-500
            before:opacity-60 before:blur-lg before:animate-flicker"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 relative z-10"
          >
            <line
              className={`transition-transform duration-500 ease-in-out origin-center ${
                isOpen ? "translate-y-6 rotate-45" : "translate-y-0 rotate-0"
              }`}
              x1="3"
              y1="6"
              x2="21"
              y2="6"
            />
            <line
              className={`transition-opacity duration-300 ease-in-out ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
              x1="3"
              y1="12"
              x2="21"
              y2="12"
            />
            <line
              className={`transition-transform duration-500 ease-in-out origin-center ${
                isOpen ? "-translate-y-6 -rotate-45" : "translate-y-0 rotate-0"
              }`}
              x1="3"
              y1="18"
              x2="21"
              y2="18"
            />
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <ul
          ref={menuRef}
          className="fixed top-20 right-4 flex flex-col gap-3 p-4 shadow-2xl bg-primary rounded-xl w-56
      border border-purple-600 backdrop-blur-md bg-opacity-80
      transition-all duration-500 ease-in-out animate-slideDown z-[9998]"
        >
          {[
            { id: "home", label: "Home", path: "/" },
            { id: "about", label: "About", path: "/about" },
            { id: "projects", label: "Projects", path: "/projects" },
            { id: "contact", label: "Contact", path: "/contact" },
            { id: "ContactForm", label: "connect", path: "/ContactForm" },
          ].map((item) => {
            const isHomeSection = location.pathname === "/" && !item.premium;
            const handleClick = () => {
              if (isHomeSection) {
                scrollToSection(item.id); // scroll smoothly
              }
              closeDropdown(); // always close the dropdown
            };

            return (
              <li key={item.id}>
                <Link
                  to={item.path}
                  onClick={handleClick}
                  className={
                    item.premium ? premiumButton : goldLinkClasses(item.id)
                  }
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}

      <style>{`
        @keyframes flicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 0.6; }
          20%, 22%, 24%, 55% { opacity: 1; }
        }
        .animate-flicker { animation: flicker 3s infinite; }

        @keyframes slideDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slideDown {
          animation: slideDown 0.4s ease forwards;
        }
      `}</style>
    </div>
  );
}
