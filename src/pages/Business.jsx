import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Business() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          max-w-3xl
          w-full
          bg-[#131316]
          border
          border-white/10
          rounded-[32px]
          p-10
          text-center
          shadow-2xl
        "
      >
        <div className="mb-6">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 text-sm font-semibold border border-purple-500/20">
            Under Development
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Professional Business
          <span className="block text-purple-500">
            Solutions
          </span>
        </h1>

        <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto">
          We are currently building a premium business platform
          focused on delivering professional digital solutions,
          web experiences, and innovative services.
        </p>

        <p className="mt-4 text-gray-500">
          Stay tuned for exciting updates.
        </p>

        <div className="mt-10">
          <Link
            to="/"
            className="
              inline-flex
              items-center
              gap-2
              bg-white
              text-black
              font-semibold
              px-6
              py-3
              rounded-xl
              hover:bg-gray-100
              transition-all
            "
          >
            <ArrowLeft size={18} />
            Back to Portfolio
          </Link>
        </div>

        {/*
        FUTURE BUSINESS WEBSITE BUTTON

        Replace YOUR_BUSINESS_URL with your future website.

        <a
          href="https://YOUR_BUSINESS_URL.com"
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-4
            inline-flex
            items-center
            justify-center
            bg-purple-600
            text-white
            px-6
            py-3
            rounded-xl
            hover:bg-purple-700
            transition-all
          "
        >
          Visit Business Website
        </a>
        */}
      </motion.div>
    </div>
  );
}