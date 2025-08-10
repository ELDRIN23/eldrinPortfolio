import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0f111a] via-[#1c1f2a] to-[#0f111a] flex flex-col items-center justify-center p-8 text-gray-300">
      <h1 className="text-5xl font-extrabold mb-6 text-cyan-400 drop-shadow-md">
        Login Page
      </h1>
      <p className="max-w-xl text-center text-gray-400 italic text-lg mb-8">
        Don’t have an account?{" "}
        <Link
          to="/signup"
          className="text-yellow-400 hover:text-yellow-300 font-semibold underline transition-colors"
        >
          Signup to continue
        </Link>
      </p>

      {/* Add your login form here */}
      <form className="w-full max-w-md flex flex-col gap-6">
        <input
          type="email"
          placeholder="Email"
          className="px-4 py-3 rounded-lg bg-[#1c1f2a] border border-cyan-600 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <input
          type="password"
          placeholder="Password"
          className="px-4 py-3 rounded-lg bg-[#1c1f2a] border border-cyan-600 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <button
          type="submit"
          className="py-3 bg-cyan-400 text-[#0f111a] font-semibold rounded-lg hover:bg-cyan-500 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
