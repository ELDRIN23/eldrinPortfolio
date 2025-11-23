import { useState, useEffect, useRef } from "react";
import { Github } from "lucide-react";

export default function GithubModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);
  const timersRef = useRef({});
  const openedOnceRef = useRef(false);
  const startedRef = useRef(false);
  const modalRef = useRef(null);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    function closeModal() {
      setIsOpen(false);
    }

    function startCountdownAndOpen() {
      if (openedOnceRef.current) return;
      openedOnceRef.current = true;
      setIsOpen(true);
      setRemainingTime(15);

      timersRef.current.countdown = setInterval(() => {
        setRemainingTime((prev) => {
          if (prev <= 1) {
            clearInterval(timersRef.current.countdown);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      timersRef.current.closeTimer = setTimeout(() => {
        closeModal();
      }, 15000);
    }

    timersRef.current.openTimer = setTimeout(() => {
      startCountdownAndOpen();
    }, 40000);

    return () => {
      clearInterval(timersRef.current.countdown);
      clearTimeout(timersRef.current.closeTimer);
      clearTimeout(timersRef.current.openTimer);
    };
  }, []);

  function handleManualClose() {
    clearInterval(timersRef.current.countdown);
    clearTimeout(timersRef.current.closeTimer);
    clearTimeout(timersRef.current.openTimer);
    setIsOpen(false);
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
      aria-modal="true"
      role="dialog"
      onClick={handleManualClose}
    >
      {/* translucent background */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* modal content (clickable) */}
      <div
        ref={modalRef}
        className="relative pointer-events-auto bg-white rounded-xl shadow-2xl p-5 text-center w-[90%] max-w-[330px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <h2 className="text-lg font-bold text-gray-800">
            ⭐ Enjoying my projects?
          </h2>
          <button
            onClick={handleManualClose}
            className="ml-2 rounded-full p-1 hover:bg-gray-100"
          >
            <span className="text-xl text-gray-500">×</span>
          </button>
        </div>

        <p className="mt-3 text-sm text-gray-600">
          Follow me on GitHub — I know you’ll find something you love!
        </p>

        <a
          href="https://github.com/ELDRIN23"
          target="_blank"
          className="inline-flex items-center justify-center gap-2 w-full mt-4 py-3 px-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 text-sm font-semibold"
          onClick={handleManualClose}
        >
          <Github size={18} />
          <span>Visit My GitHub</span>
        </a>

        <p className="text-xs text-gray-500 mt-3">
          Closing in <span className="font-bold text-gray-800">{remainingTime}</span>s
        </p>
      </div>
    </div>
  );
}
