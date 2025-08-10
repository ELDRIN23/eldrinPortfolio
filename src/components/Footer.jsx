import { Linkedin, Instagram, Facebook, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer footer-center p-4 bg-base-200 text-base-content border-t">
      <aside>
        <p className="font-medium">
          © {new Date().getFullYear()} MyPortfolio — All rights reserved
        </p>

        {/* Hashtag */}
        <p className="text-sm italic text-gray-500 mt-1">
          #thebestthingsnevercomeeasy
        </p>

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
            href="https://www.facebook.com/share/1BnK8tbZ1t/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
            aria-label="Facebook"
          >
            <Facebook size={20} />
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
    </footer>
  );
}
