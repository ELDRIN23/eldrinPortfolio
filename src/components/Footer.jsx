import { Linkedin, Instagram, Facebook, Github } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <footer className="footer footer-center p-4 bg-black text-white border-t relative">
      <aside>
        <p className="font-medium">
          © {new Date().getFullYear()} MyPortfolio — All rights reserved
        </p>

        <p className="text-sm italic text-gray-400 mt-1">
          #thebestthingsnevercomeeasy
        </p>

        <div className="flex gap-4 mt-2 items-center">
          <a href="https://www.linkedin.com/in/eldrin-johnson" target="_blank"><Linkedin size={20} /></a>
          <a href="https://www.instagram.com/_e_ldrin/" target="_blank"><Instagram size={20} /></a>
          <a href="https://github.com/ELDRIN23" target="_blank"><Github size={20} /></a>
          <a href="https://www.facebook.com/share/1BnK8tbZ1t/" target="_blank"><Facebook size={20} /></a>
        </div>
      </aside>

      {/* Exclamation Button */}
      <div className="absolute bottom-3 right-3">
        <button
          onClick={() => setOpen(true)}
          className="w-6 h-6 flex items-center justify-center rounded-full bg-cyan-500 text-white text-xs font-bold hover:bg-cyan-600 transition"
        >
          !
        </button>
      </div>

      {/* MODAL INSIDE UI (slightly shifted up) */}
      {open && (
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 
                        w-[88%] max-w-[300px] bg-black/80 backdrop-blur-md
                        text-white rounded-2xl shadow-xl px-6 py-6 border border-gray-700">
          <h3 className="font-bold text-lg mb-3 text-center text-cyan-400">🔧 Built With</h3>

          <ul className="list-disc list-inside space-y-1 text-sm text-gray-300 text-center">
            <li>React + Vite</li>
            <li>Tailwind CSS</li>
            <li>DaisyUI</li>
            <li>Framer Motion</li>
            <li>Lucide Icons</li>
          </ul>

          <div className="flex justify-center mt-5">
            <button
              onClick={() => setOpen(false)}
              className="btn btn-sm rounded-md bg-cyan-500 text-black font-medium hover:bg-cyan-400 transition px-6"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
