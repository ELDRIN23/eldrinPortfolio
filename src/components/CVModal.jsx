import { useState, useEffect, useRef } from "react";
import { Github } from "lucide-react";

export default function GithubModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);
  const timersRef = useRef({ openTimer: null, closeTimer: null, countdown: null, fallbackLoad: null });
  const openedOnceRef = useRef(false);
  const startedRef = useRef(false);
  const modalRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (startedRef.current) return;
    startedRef.current = true;

    function clearAllTimers() {
      clearTimeout(timersRef.current.openTimer);
      clearTimeout(timersRef.current.closeTimer);
      clearInterval(timersRef.current.countdown);
      clearTimeout(timersRef.current.fallbackLoad);
      timersRef.current.openTimer = null;
      timersRef.current.closeTimer = null;
      timersRef.current.countdown = null;
      timersRef.current.fallbackLoad = null;
    }

    function closeModal() {
      clearAllTimers();
      setIsOpen(false);
    }

    function startCountdownAndAutoClose() {
      if (openedOnceRef.current) return;
      openedOnceRef.current = true;

      setIsOpen(true);
      setRemainingTime(15); // 15s visible

      // focus the modal for accessibility after it opens
      setTimeout(() => {
        try { modalRef.current?.focus(); } catch (e) {}
      }, 50);

      clearInterval(timersRef.current.countdown);
      timersRef.current.countdown = setInterval(() => {
        setRemainingTime((prev) => {
          if (prev <= 1) {
            clearInterval(timersRef.current.countdown);
            timersRef.current.countdown = null;
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      // Auto-close after 15 seconds
      timersRef.current.closeTimer = setTimeout(() => {
        closeModal();
      }, 15000);
    }

    function startOpenTimer() {
      if (openedOnceRef.current || timersRef.current.openTimer) return;

      timersRef.current.openTimer = setTimeout(() => {
        startCountdownAndAutoClose();
      }, 40000); // 40 seconds
    }

    if (document.readyState === "complete" || document.readyState === "interactive") {
      startOpenTimer();
    } else {
      function onLoad() {
        startOpenTimer();
        window.removeEventListener("load", onLoad);
      }
      window.addEventListener("load", onLoad);
      timersRef.current.fallbackLoad = setTimeout(() => {
        if (!timersRef.current.openTimer) startOpenTimer();
      }, 1000);
    }

    return () => {
      clearAllTimers();
      try { window.removeEventListener("load", startOpenTimer); } catch (e) {}
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // prevent background scroll when modal is open
  useEffect(() => {
    const prevOverflow = typeof document !== "undefined" ? document.body.style.overflow : "";
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = prevOverflow || "";
    }
    return () => {
      document.body.style.overflow = prevOverflow || "";
    };
  }, [isOpen]);

  function handleManualClose() {
    clearInterval(timersRef.current.countdown);
    clearTimeout(timersRef.current.closeTimer);
    clearTimeout(timersRef.current.openTimer);
    timersRef.current.countdown = null;
    timersRef.current.closeTimer = null;
    timersRef.current.openTimer = null;
    setIsOpen(false);
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="GitHub promotion modal"
      onClick={handleManualClose}
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* modal container: responsive sizes */}
      <div
        ref={modalRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="relative z-50 w-full h-full max-h-[90vh] overflow-auto p-4 sm:p-6 flex items-center justify-center"
        aria-live="polite"
      >
        <div
          className="bg-white rounded-xl shadow-2xl w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto
                      p-5 sm:p-6 md:p-8 text-center transform transition-all"
          style={{
            // subtle responsive padding adjustments if needed
          }}
        >
          {/* header */}
          <div className="flex items-start justify-between">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
              ⭐ Enjoying my projects?
            </h2>
            <button
              onClick={handleManualClose}
              aria-label="Close modal"
              className="ml-4 rounded-full p-2 sm:p-2.5 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              style={{ lineHeight: 0 }}
            >
              <span className="text-2xl sm:text-2xl md:text-3xl text-gray-500">×</span>
            </button>
          </div>

          {/* body */}
          <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-600 mb-4">
            Follow me on GitHub — I know you’ll find something you love!
          </p>

          <a
            href="https://github.com/ELDRIN23"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto py-3 px-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition text-sm sm:text-base"
            onClick={() => {
              // optional: close modal when following link
              handleManualClose();
            }}
          >
            <Github size={18} />
            <span>Visit My GitHub</span>
          </a>

          {/* timer */}
          <p className="text-sm text-gray-500 mt-3">
            Closing in{" "}
            <span className="font-semibold text-gray-800 dark:text-gray-900">{remainingTime}</span>
            s
          </p>

          {/* footer small note (mobile friendly) */}
          <div className="mt-4 text-xs text-gray-400">This popup appears once per session.</div>
        </div>
      </div>

      {/* animations */}
      <style>{`
        @media (max-width: 480px) {
          /* make modal nearly full-screen on very small devices */
          .max-w-sm { max-width: 96% !important; border-radius: 12px; }
          .p-4 { padding: 12px !important; }
        }
        @keyframes modalFadeIn {
          from { opacity: 0; transform: translateY(6px) scale(0.995); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-in {
          animation: modalFadeIn 220ms ease-out forwards;
        }
      `}</style>
    </div>
  );
}
