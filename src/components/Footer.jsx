import { Linkedin, Instagram, Facebook, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer footer-center p-4 bg-base-200 text-base-content border-t relative">
      <aside>
        <p className="font-medium">
          © {new Date().getFullYear()} MyPortfolio — All rights reserved
        </p>

        {/* Hashtag */}
        <p className="text-sm italic text-gray-500 mt-1">
          #thebestthingsnevercomeeasy
        </p>

        {/* Social Links */}
        <div className="flex gap-4 mt-2 items-center">
          <a
            href="https://www.linkedin.com/in/eldrin-johnson"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://www.instagram.com/_e_ldrin/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://github.com/ELDRIN23"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.facebook.com/share/1BnK8tbZ1t/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>

          {/* Google Developers Profile */}
          <a
            href="https://g.dev/Eldrin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
            aria-label="Google Developers Profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline-block"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 14l4-4 4 4" />
            </svg>
          </a>
        </div>
      </aside>

      {/* Small Exclamation Circle (Bottom Right) */}
      <div className="absolute bottom-3 right-3">
        <label htmlFor="build-modal" className="cursor-pointer">
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-cyan-500 text-white text-xs font-bold hover:bg-cyan-600 transition">
            !
          </div>
        </label>
      </div>

      {/* DaisyUI Modal */}
      <input type="checkbox" id="build-modal" className="modal-toggle" />
      <div className="modal backdrop-blur-lg bg-black/40">
        {" "}
        {/* blur + dim overlay */}
        <div
          className="modal-box bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 
                  text-gray-200 rounded-2xl shadow-xl border border-gray-700"
        >
          <h3 className="font-bold text-lg mb-4 text-cyan-400">
            🔧 Built With
          </h3>

          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            <li>⚡ React + Vite</li>
            <li>🎨 Tailwind CSS</li>
            <li>🌼 DaisyUI</li>
            <li>🎬 Framer Motion</li>
            <li>📦 Lucide-React Icons</li>
          </ul>

          <div className="modal-action">
            <label
              htmlFor="build-modal"
              className="btn btn-sm rounded-md bg-cyan-500 text-black font-medium 
                   hover:bg-cyan-400 transition"
            >
              Close
            </label>
          </div>
        </div>
      </div>
    </footer>
  );
}
