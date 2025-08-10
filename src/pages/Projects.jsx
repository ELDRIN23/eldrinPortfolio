import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LockClosedIcon } from "@heroicons/react/24/solid";

export default function Projects() {
  const [todoLiveClicked, setTodoLiveClicked] = useState(false);

  const toggleTodoLive = () => setTodoLiveClicked((prev) => !prev);

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 flex flex-col items-center justify-center space-y-16">
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-gradient bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h1>

      <motion.div
        className="w-full max-w-6xl grid gap-10 md:grid-cols-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        {/* Food Delivery Website */}
        <motion.div
          className="bg-gradient-to-tr from-indigo-900 to-purple-900 rounded-2xl overflow-hidden shadow-xl border border-indigo-700 hover:scale-[1.03] transition-transform duration-300 cursor-pointer relative"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px #8b5cf6" }}
        >
          <img
            src="/foodDelivery.png"
            alt="Food Delivery Website"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-indigo-300 mb-3 tracking-wide">
              Food Delivery Website
            </h2>
            <p className="text-gray-300 mb-5 leading-relaxed">
              A MERN stack web app with JWT authentication, payment gateway integration, and fully responsive design.
            </p>
            <a
              href="https://food-delivery-frontend-omega.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-pink-500 text-white rounded-lg font-medium shadow-lg
                         hover:bg-pink-600 transition-colors duration-300"
            >
              View Live
            </a>
          </div>
        </motion.div>

        {/* Todo App */}
        <motion.div
          className="bg-gradient-to-tr from-indigo-900 to-purple-900 rounded-2xl overflow-hidden shadow-xl border border-indigo-700 hover:scale-[1.03] transition-transform duration-300 cursor-pointer relative"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px #8b5cf6" }}
        >
          <img
            src="/eldrinTodo.png"
            alt="Todo App"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-indigo-300 mb-3 tracking-wide">
              Todo App
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Task management tool built with React, Vite, and MongoDB supporting full CRUD operations with powerfull features.
            </p>

            <button
              onClick={toggleTodoLive}
              className="inline-block px-6 py-2 bg-pink-500 text-white rounded-lg font-medium shadow-lg
                         hover:bg-pink-600 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-pink-400/50"
            >
              View Live
            </button>

            <AnimatePresence>
              {todoLiveClicked && (
                <motion.p
                  key="coming-soon"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="mt-4 text-pink-400 font-semibold text-lg tracking-wide select-none"
                >
                  Coming Soon
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Hackathon Projects */}
        <motion.div
          className="bg-gradient-to-tr from-indigo-900 to-purple-900 rounded-2xl overflow-hidden shadow-xl border border-indigo-700 hover:scale-[1.03] transition-transform duration-300 cursor-pointer relative"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px #8b5cf6" }}
        >
          <img
            src="/novathon2.png"
            alt="Hackathon Projects"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-indigo-300 mb-3 tracking-wide">
              Hackathon Projects
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Collaborative projects created during hackathons focusing on innovation and problem-solving.
              using LLMWare, ollama & pinecone and frontend react with multer
            </p>
          </div>
        </motion.div>

        {/* Course Selling Website - Locked */}
        <motion.div
          className="bg-gradient-to-tr from-indigo-900 to-purple-900 rounded-2xl overflow-hidden shadow-xl border border-indigo-700 relative cursor-not-allowed"
          initial={{ opacity: 0.7 }}
          whileHover={{ scale: 1.02, opacity: 0.9, boxShadow: "0 0 15px #8b5cf6" }}
        >
          <img
            src="https://via.placeholder.com/400x200"
            alt="Course Selling Website"
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10 pointer-events-none">
            <LockClosedIcon className="w-16 h-16 text-purple-500 opacity-70 animate-pulse" />
          </div>
          <div className="p-6 relative z-20">
            <h2 className="text-2xl font-semibold text-indigo-300 mb-3 tracking-wide">
              Course Selling Website
            </h2>
            <p className="text-gray-500">
              A platform for selling online courses with secure payments and user dashboard. under professional Development <br></br>(Coming soon)
            </p>
          </div>
        </motion.div>

        {/* Locked Project 1 */}
        <motion.div
          className="bg-gradient-to-tr from-indigo-900 to-purple-900 rounded-2xl overflow-hidden shadow-xl border border-indigo-700 relative cursor-not-allowed"
          initial={{ opacity: 0.7 }}
          whileHover={{ scale: 1.02, opacity: 0.9, boxShadow: "0 0 15px #8b5cf6" }}
        >
          <img
            src="https://via.placeholder.com/400x200"
            alt="Locked Project 1"
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10 pointer-events-none">
            <LockClosedIcon className="w-16 h-16 text-purple-500 opacity-70 animate-pulse" />
          </div>
          <div className="p-6 relative z-20">
            <h2 className="text-2xl font-semibold text-indigo-300 mb-3 tracking-wide">
              Project Locked 1
            </h2>
            <p className="text-gray-500">
              Details coming soon.
            </p>
          </div>
        </motion.div>

        {/* Locked Project 2 */}
        <motion.div
          className="bg-gradient-to-tr from-indigo-900 to-purple-900 rounded-2xl overflow-hidden shadow-xl border border-indigo-700 relative cursor-not-allowed"
          initial={{ opacity: 0.7 }}
          whileHover={{ scale: 1.02, opacity: 0.9, boxShadow: "0 0 15px #8b5cf6" }}
        >
          <img
            src="https://via.placeholder.com/400x200"
            alt="Locked Project 2"
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10 pointer-events-none">
            <LockClosedIcon className="w-16 h-16 text-purple-500 opacity-70 animate-pulse" />
          </div>
          <div className="p-6 relative z-20">
            <h2 className="text-2xl font-semibold text-indigo-300 mb-3 tracking-wide">
              Project Locked 2
            </h2>
            <p className="text-gray-500">
              Details coming soon.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
