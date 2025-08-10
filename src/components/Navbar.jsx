import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setShowHint(false);
  };

  const closeDropdown = () => setIsOpen(false);

  // Close when clicking outside
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

  const goldLinkClasses =
    "text-yellow-400 font-semibold hover:text-yellow-300 transition-colors duration-300";

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
        <li><Link to="/" className={goldLinkClasses}>Home</Link></li>
        <li><Link to="/about" className={goldLinkClasses}>About</Link></li>
        <li><Link to="/projects" className={goldLinkClasses}>Projects</Link></li>
        <li><Link to="/contact" className={goldLinkClasses}>Contact</Link></li>
        <li>
          <Link
            to="/know-more"
            className="btn relative bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600
              text-primary-content font-bold border-none
              shadow-[0_0_15px_3px_rgba(255,215,0,0.6)]
              overflow-hidden transition-transform duration-300
              hover:scale-110 hover:brightness-110
              before:absolute before:top-0 before:left-0 before:w-full before:h-full
              before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent
              before:opacity-0 before:blur-sm before:transform before:-translate-x-full
              before:transition-all before:duration-700 hover:before:translate-x-full hover:before:opacity-100"
          >
            Know More About Me
          </Link>
        </li>
      </ul>

      {/* 3-dot icon (mobile/tablet only) */}
      <div className="fixed top-4 right-4 flex items-center gap-3 z-[10000] lg:hidden">
        {showHint && !isOpen && (
          <div className="flex items-center gap-1 animate-bounce">
            <span className="text-yellow-300 text-lg font-bold drop-shadow-[0_0_5px_rgba(255,215,0,0.9)] whitespace-nowrap">
              View More
            </span>
            <svg xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
              className="w-6 h-6 text-yellow-300 drop-shadow-[0_0_6px_rgba(255,215,0,0.8)]"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        )}

        {/* Menu button */}
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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 relative z-10"
          >
            <line className={`transition-transform duration-500 ease-in-out origin-center ${isOpen ? "translate-y-6 rotate-45" : "translate-y-0 rotate-0"}`} x1="3" y1="6" x2="21" y2="6" />
            <line className={`transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"}`} x1="3" y1="12" x2="21" y2="12" />
            <line className={`transition-transform duration-500 ease-in-out origin-center ${isOpen ? "-translate-y-6 -rotate-45" : "translate-y-0 rotate-0"}`} x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <ul
          ref={menuRef}
          className="fixed top-20 right-4 p-4 shadow-2xl bg-primary rounded-box w-56
            border border-purple-600 backdrop-blur-md bg-opacity-70
            transition-all duration-300 ease-in-out z-[9998]"
        >
          <li><Link to="/" onClick={closeDropdown} className={goldLinkClasses}>Home</Link></li>
          <li><Link to="/about" onClick={closeDropdown} className={goldLinkClasses}>About</Link></li>
          <li><Link to="/projects" onClick={closeDropdown} className={goldLinkClasses}>Projects</Link></li>
          <li><Link to="/contact" onClick={closeDropdown} className={goldLinkClasses}>Contact</Link></li>
          <li>
            <Link
              to="/know-more"
              onClick={closeDropdown}
              className="btn btn-sm relative bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600
                text-primary-content font-bold border-none
                shadow-[0_0_15px_3px_rgba(255,215,0,0.6)]
                overflow-hidden transition-transform duration-300
                hover:scale-110 hover:brightness-110
                before:absolute before:top-0 before:left-0 before:w-full before:h-full
                before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent
                before:opacity-0 before:blur-sm before:transform before:-translate-x-full
                before:transition-all before:duration-700 hover:before:translate-x-full hover:before:opacity-100"
            >
              Know More About Me
            </Link>
          </li>
        </ul>
      )}

      <style>{`
        @keyframes flicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 0.6; }
          20%, 22%, 24%, 55% { opacity: 1; }
        }
        .animate-flicker { animation: flicker 3s infinite; }
      `}</style>
    </div>
  );
}
