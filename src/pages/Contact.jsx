import { Linkedin, Instagram, Github, Mail } from "lucide-react";

const GoogleDevIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14l4-4 4 4" />
  </svg>
);

export default function Contact() {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/eldrin-johnson",
      Icon: Linkedin,
      label: "LinkedIn",
      status: "Super Active",
      gradientId: "linkedinGradient",
      colors: ["#0077B5", "#00C6FF"],
    },
    {
      href: "https://github.com/ELDRIN23",
      Icon: Github,
      label: "GitHub",
      status: "Active",
      gradientId: "githubGradient",
      colors: ["#333", "#6e5494"],
    },
    {
      href: "https://www.instagram.com/_e_ldrin/",
      Icon: Instagram,
      label: "Instagram",
      status: "Active",
      gradientId: "instagramGradient",
      colors: ["#f09433", "#e6683c", "#dc2743", "#cc2366", "#bc1888"],
    },
    {
      href: "https://g.dev/Eldrin",
      Icon: GoogleDevIcon,
      label: "Google Developers",
      status: "Occasionally Active",
      gradientId: "googleDevGradient",
      colors: ["#4285F4", "#34A853", "#FBBC05", "#EA4335"],
    },
  ];

  const statusColors = {
    "Super Active": "text-green-600 group-hover:text-green-700",
    Active: "text-blue-600 group-hover:text-blue-700",
    "Sometimes Active": "text-purple-600 group-hover:text-purple-700",
    "Occasionally Active": "text-yellow-600 group-hover:text-yellow-700",
    Inactive: "text-gray-500 group-hover:text-gray-600",
  };

  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center p-6 sm:p-8 md:p-12 relative">
      {/* Hire Me Button (Top Center) */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2">
        <a
          href="https://mail.google.com/mail/?view=cm&to=eldrinjohnson77@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-7 py-4 
               bg-blue-600 text-white text-lg font-bold 
               rounded-full shadow-xl hover:bg-blue-700 
               transition-transform hover:scale-105"
        >
          <Mail className="w-6 h-6" />
          Hire Me
        </a>
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-primary drop-shadow-lg animate-pulse text-center">
        Get in Touch!
      </h1>

      <p className="max-w-lg sm:max-w-xl md:max-w-2xl text-center mb-10 text-base sm:text-lg font-semibold text-base-content/80">
        I’d love to connect with you! Reach out on any of the platforms below
        and follow me to stay updated.
      </p>

      {/* Social Icons + Labels */}
      <div className="flex gap-8 sm:gap-12 flex-wrap justify-center relative z-10">
        {/* SVG gradients */}
        <svg style={{ position: "absolute", width: 0, height: 0 }}>
          <defs>
            {socialLinks.map(({ gradientId, colors }) => (
              <linearGradient
                key={gradientId}
                id={gradientId}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                {colors.map((color, i) => (
                  <stop
                    key={color}
                    offset={`${(i / (colors.length - 1)) * 100}%`}
                    stopColor={color}
                  >
                    <animate
                      attributeName="stop-color"
                      values={`${color};${
                        colors[(i + 1) % colors.length]
                      };${color}`}
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </stop>
                ))}
              </linearGradient>
            ))}
          </defs>
        </svg>

        {socialLinks.map(({ href, Icon, label, gradientId, status }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex flex-col items-center gap-2 group"
          >
            <div
              className={`transform rounded-full bg-white p-4 sm:p-5 shadow-lg cursor-pointer
                transition duration-500 ease-in-out
                hover:scale-110 hover:-translate-y-1
                hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.9)]
                hover:animate-hoverPulse
                flex items-center justify-center
                w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24
                rotate-slow`}
            >
              <Icon
                size={24}
                className="sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16"
                stroke={`url(#${gradientId})`}
                strokeWidth={1.8}
              />
            </div>
            {/* Label + Status */}
            <div className="text-center">
              <p className="text-sm font-semibold">{label}</p>
              <p className={`text-xs ${statusColors[status]}`}>{status}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes rotateSlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .rotate-slow {
          animation: rotateSlow 20s linear infinite;
        }
        @keyframes hoverPulse {
          0%, 100% {
            filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.7));
            transform: scale(1) translateY(0);
          }
          50% {
            filter: drop-shadow(0 0 20px rgba(255, 255, 255, 1));
            transform: scale(1.1) translateY(-4px);
          }
        }
        .animate-hoverPulse {
          animation: hoverPulse 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
