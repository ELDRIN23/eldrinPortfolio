import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHint, setShowHint] = useState(true);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  // Hide hint on any screen touch/click
  useEffect(() => {
    const hideHint = () => setShowHint(false);
    window.addEventListener("touchstart", hideHint);
    window.addEventListener("click", hideHint);
    return () => {
      window.removeEventListener("touchstart", hideHint);
      window.removeEventListener("click", hideHint);
    };
  }, []);

  const goldLinkClasses =
    "text-yellow-400 font-semibold hover:text-yellow-300 transition-colors duration-300";

  return (
    <div className="navbar bg-primary text-primary-content px-6 relative">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          MyPortfolio
        </Link>
      </div>
      <div className="flex-none">
        {/* Mobile dropdown */}
        <div className="dropdown dropdown-end lg:hidden relative">
          <button
            onClick={toggleDropdown}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="btn btn-ghost btn-circle relative w-12 h-12 flex items-center justify-center
              transition-transform duration-300 ease-in-out
              hover:scale-110
              focus:outline-none
              before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-purple-400 before:via-pink-500 before:to-red-500
              before:opacity-60 before:blur-lg before:animate-flicker"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
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

          {/* Hint arrow for mobile (inline, luxurious glow) */}
          {showHint && !isOpen && (
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 flex flex-row items-center gap-2 animate-bounce lg:hidden">
              <span className="text-yellow-300 text-sm font-semibold drop-shadow-[0_0_5px_rgba(255,215,0,0.9)] whitespace-nowrap">
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

          {isOpen && (
            <ul
              className="menu menu-compact dropdown-content mt-3 p-4 shadow-2xl bg-primary rounded-box w-56
                origin-top-right
                transition-transform transition-opacity duration-300 ease-in-out
                scale-100 opacity-100
                border border-purple-600
                backdrop-blur-md bg-opacity-70"
              style={{ zIndex: 9999 }}
            >
              <li>
                <Link to="/" onClick={closeDropdown} className={goldLinkClasses}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={closeDropdown} className={goldLinkClasses}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" onClick={closeDropdown} className={goldLinkClasses}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={closeDropdown} className={goldLinkClasses}>
                  Contact
                </Link>
              </li>
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
        </div>

        {/* Desktop horizontal menu */}
        <ul className="menu menu-horizontal px-1 hidden lg:flex items-center gap-4">
          <li>
            <Link to="/" className={goldLinkClasses}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={goldLinkClasses}>
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className={goldLinkClasses}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className={goldLinkClasses}>
              Contact
            </Link>
          </li>
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
      </div>

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
