import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0f111a] via-[#1c1f2a] to-[#0f111a] flex flex-col items-center justify-center p-8 text-gray-300">
      <h1 className="text-5xl font-extrabold mb-6 text-cyan-400 drop-shadow-md">
        Signup Page
      </h1>
      <p className="max-w-xl text-center text-gray-400 italic text-lg mb-8">
        This feature is currently <span className="font-semibold text-yellow-400">under professional development</span>.<br />
        Coming soon — stay tuned!
      </p>

      <button
        disabled
        className="px-20 py-4 border-2 border-cyan-400 rounded-lg text-cyan-400 font-semibold cursor-not-allowed
          select-none focus:outline-none focus:ring-4 focus:ring-cyan-500/50 mb-6"
      >
        Signup (Coming Soon)
      </button>

      <button
        onClick={() => navigate("/")}
        className="px-12 py-3 border-2 border-gray-400 rounded-lg text-gray-400 font-semibold hover:text-white hover:border-white
          transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-gray-500/50"
      >
        Return to Home
      </button>
    </div>
  );
}
