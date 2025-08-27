import { useState, useEffect } from "react";
import { Github } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function GithubModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [remainingTime, setRemainingTime] = useState(10); // 10s visible
  const location = useLocation();

  useEffect(() => {
    let openTimer, closeTimer, countdown;

    if (location.pathname === "/projects") {
      // Open after 5s delay
      openTimer = setTimeout(() => {
        setIsOpen(true);
        setRemainingTime(10); // reset countdown

        // countdown every second
        countdown = setInterval(() => {
          setRemainingTime((prev) => {
            if (prev <= 1) {
              clearInterval(countdown);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      }, 5000);

      // Auto close after 15s (5s delay + 10s visible)
      closeTimer = setTimeout(() => {
        setIsOpen(false);
      }, 15000);
    }

    return () => {
      clearTimeout(openTimer);
      clearTimeout(closeTimer);
      clearInterval(countdown);
    };
  }, [location.pathname]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="bg-white rounded-xl shadow-xl p-6 max-w-sm w-[90%] text-center relative animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold text-gray-800 mb-3">
          ⭐ Enjoying my projects?
        </h2>
        <p className="text-gray-600 mb-4">
          Follow me on GitHub — I know you’ll like it, and it would really make my day!
        </p>
        <a
          href="https://github.com/ELDRIN23"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition"
        >
          <Github size={20} />
          Visit My GitHub
        </a>
        <p className="text-sm text-gray-500 mt-4">
          This will close in <span className="font-semibold">{remainingTime}</span>s
        </p>
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold"
          aria-label="Close"
        >
          ×
        </button>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
