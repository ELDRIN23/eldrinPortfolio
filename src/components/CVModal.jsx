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
    className="absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    role="dialog"
    aria-modal="true"
    aria-label="GitHub modal"
    onClick={handleManualClose}
    style={{
      pointerEvents: "auto",
    }}
  >
    <div
      ref={modalRef}
      onClick={(e) => e.stopPropagation()}
      className="bg-white rounded-xl shadow-xl p-5 w-[90%] max-w-[300px] text-center"
    >
      <div className="flex items-start justify-between">
        <h2 className="text-lg font-bold text-gray-800">
          ⭐ Enjoying my projects?
        </h2>
        <button
          onClick={handleManualClose}
          aria-label="Close"
          className="ml-2 p-1 rounded-full hover:bg-gray-100"
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
        rel="noopener noreferrer"
        onClick={handleManualClose}
        className="mt-4 inline-flex items-center justify-center gap-2 w-full py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 text-sm"
      >
        Visit My GitHub
      </a>

      <p className="text-xs text-gray-500 mt-3">
        Closing in <span className="font-semibold">{remainingTime}</span>s
      </p>
    </div>
  </div>
  );
}
