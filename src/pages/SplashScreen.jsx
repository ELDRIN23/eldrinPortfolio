import { motion } from "framer-motion";

export default function SplashScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0f111a] via-[#1c1f2a] to-[#0f111a] flex flex-col items-center justify-center text-gray-300 p-8">
      
      <motion.div
        initial={{ opacity: 0, y: -50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="relative w-44 h-44 rounded-full flex items-center justify-center mb-8"
      >
        {/* Glowing ring */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-cyan-500"
          style={{ boxShadow: "0 0 20px 4px rgba(14, 165, 233, 0.7)" }}
          animate={{
            rotate: [0, 360],
            boxShadow: [
              "0 0 20px 4px rgba(14, 165, 233, 0.7)",
              "0 0 40px 8px rgba(14, 165, 233, 1)",
              "0 0 20px 4px rgba(14, 165, 233, 0.7)",
            ],
          }}
          transition={{
            rotate: {
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            },
            boxShadow: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />

        {/* Profile Image */}
        <img
          src="/myself.jpg"
          alt="Eldrin Johnson"
          className="w-40 h-40 rounded-full object-cover relative"
        />
      </motion.div>

      {/* Text content below */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 3, ease: "easeOut" }}
        className="text-center max-w-md"
      >
        <h1 className="text-6xl font-extrabold text-cyan-400 mb-4 drop-shadow-lg">
          Eldrin Johnson
        </h1>
        <p className="text-xl italic mb-8">
          Full Stack Developer & Cybersecurity Enthusiast
        </p>
      </motion.div>
    </div>
  );
}
