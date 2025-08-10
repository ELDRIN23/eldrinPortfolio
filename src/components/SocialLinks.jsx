import { Linkedin, Instagram, Facebook, Github } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-extrabold mb-8 text-primary drop-shadow-lg animate-pulse">
        Get in Touch!
      </h1>

      <p className="max-w-xl text-center mb-12 text-lg font-semibold text-base-content/80">
        I’d love to connect with you! Reach out to me on any of these platforms below.
      </p>

      <div className="flex gap-10">
        {[
          {
            href: "https://www.linkedin.com/in/eldrin-johnson",
            Icon: Linkedin,
            label: "LinkedIn",
            color: "hover:text-blue-600",
          },
          {
            href: "https://www.instagram.com/_e_ldrin/",
            Icon: Instagram,
            label: "Instagram",
            color: "hover:text-pink-500",
          },
          {
            href: "https://www.facebook.com/share/1BnK8tbZ1t/",
            Icon: Facebook,
            label: "Facebook",
            color: "hover:text-blue-700",
          },
          {
            href: "https://github.com/ELDRIN23",
            Icon: Github,
            label: "GitHub",
            color: "hover:text-gray-800",
          },
        ].map(({ href, Icon, label, color }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`transform rounded-full bg-white p-4 shadow-lg cursor-pointer transition 
              duration-500 ease-in-out
              hover:scale-125
              hover:rotate-6
              hover:shadow-xl
              ${color}
              animate-bounce-slow
            `}
            style={{ animationDuration: "3s" }}
          >
            <Icon size={40} />
          </a>
        ))}
      </div>
    </div>
  );
}
