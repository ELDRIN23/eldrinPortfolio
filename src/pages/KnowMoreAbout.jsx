import { Link } from "react-router-dom";

export default function KnowMore() {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-tr from-[#0f111a] via-[#1c1f2a] to-[#0f111a] text-gray-300 flex flex-col items-center justify-center space-y-12">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-cyan-400 drop-shadow-md">
        Know More About Me
      </h1>
      <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-center text-gray-400">
        👋 Hi! Sign up to learn more about me, explore my innovative ideas, and
        become a startup partner. Let’s build something amazing together.
      </p>

      <div className="flex flex-col sm:flex-row gap-8 w-full max-w-md justify-center">
        <Link
          to="/signup"
          className="relative inline-block px-16 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400
                     font-semibold rounded-lg tracking-wide
                     hover:bg-cyan-400 hover:text-[#0f111a] transition
                     duration-300 ease-in-out shadow-md
                     focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
        >
          Signup
        </Link>

        <Link
          to="/login"
          className="relative inline-block px-16 py-4 bg-cyan-400 text-[#0f111a]
                     font-semibold rounded-lg tracking-wide
                     hover:bg-transparent hover:text-cyan-400 border-2 border-cyan-400
                     transition duration-300 ease-in-out shadow-md
                     focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
        >
          Login
        </Link>
      </div>

      {/* Download CV Section */}
      <div className="mt-10 flex flex-col items-center gap-4">
        <p className="text-gray-400 text-center max-w-sm">
          Or you can download my CV to know more about my experience and skills.
        </p>
        <a
          href="/eldrinUpdatedaCv.pdf" // make sure this file is in your public folder
          download
          className="inline-block px-12 py-4 bg-yellow-400 text-[#0f111a] font-bold rounded-lg
                     hover:bg-yellow-500 transition duration-300 ease-in-out shadow-lg
                     focus:outline-none focus:ring-4 focus:ring-yellow-400/50"
        >
          Download My CV
        </a>
      </div>
    </div>
  );
}
