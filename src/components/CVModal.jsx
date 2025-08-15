import { useState, useEffect, useRef } from "react";

export default function CVModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(5);
  const autoCloseTimer = useRef(null);
  const countdownInterval = useRef(null);

  useEffect(() => {
    // Show modal after 10 seconds
    const openTimer = setTimeout(() => {
      setIsOpen(true);
      setSecondsLeft(5);
    }, 40000);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(autoCloseTimer.current);
      clearInterval(countdownInterval.current);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Start countdown interval to update secondsLeft every second
      countdownInterval.current = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);

      // Auto close after 5 seconds
      autoCloseTimer.current = setTimeout(() => {
        setIsOpen(false);
        clearInterval(countdownInterval.current);
      }, 5000);
    } else {
      clearTimeout(autoCloseTimer.current);
      clearInterval(countdownInterval.current);
      setSecondsLeft(5); // reset timer for next open
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        onClick={() => setIsOpen(false)}
      >
        {/* Modal box */}
        <div
          className="relative bg-gradient-to-tr from-purple-900 via-pink-900 to-red-900 rounded-2xl p-8 max-w-md w-full shadow-[0_0_40px_rgba(255,0,255,0.8)] ring-1 ring-pink-400/60"
          onClick={(e) => e.stopPropagation()}
          style={{
            animation: "modalFadeScale 0.5s ease forwards",
            border: "3px solid",
            borderImageSlice: 1,
            borderImageSource: "linear-gradient(135deg, #ff00ff, #ff0077, #ff00ff)",
            boxShadow: "0 0 30px #ff00ff, 0 0 50px #ff0077, 0 0 70px #ff00ff",
          }}
        >
          {/* Sparkle particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
            {[...Array(20)].map((_, i) => (
              <span
                key={i}
                className="block absolute bg-pink-400 rounded-full opacity-70 animate-sparkle"
                style={{
                  width: "6px",
                  height: "6px",
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${(Math.random() * 3).toFixed(2)}s`,
                }}
              />
            ))}
          </div>

          <h2 className="text-3xl font-extrabold text-white mb-4 drop-shadow-lg text-center">
            View my CV
          </h2>
          <p className="text-pink-200 mb-6 font-semibold drop-shadow-md text-center leading-relaxed">
            You can download my CV by clicking the button below.
          </p>

          {/* Countdown timer */}
          <p className="text-center text-pink-300 mb-6 font-semibold">
            Closing in: <span className="font-bold">{secondsLeft.toString().padStart(2, '0')}</span> seconds
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="/eldrinUpdatedaCv.pdf"
              download
              className="flex-1 text-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600
              text-white font-semibold shadow-lg transition transform hover:scale-105 hover:shadow-pink-700 active:scale-95"
            >
              Download
            </a>

            <button
              onClick={() => setIsOpen(false)}
              className="flex-1 px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold shadow-md
              transition transform hover:scale-105 active:scale-95"
            >
              Don’t show again!
            </button>
          </div>

          {/* Close (X) button */}
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close modal"
            className="absolute top-4 right-4 text-pink-300 hover:text-white text-3xl font-bold transition"
          >
            &times;
          </button>
        </div>
      </div>

      <style>{`
        @keyframes modalFadeScale {
          0% {
            opacity: 0;
            transform: scale(0.85);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes sparkle {
          0%, 100% {
            opacity: 0.7;
            transform: translateY(0) scale(1);
          }
          50% {
            opacity: 1;
            transform: translateY(-6px) scale(1.2);
          }
        }
        .animate-sparkle {
          animation: sparkle 3s ease-in-out infinite;
          filter: drop-shadow(0 0 5px #ff7fff);
        }
      `}</style>
    </>
  );
}
