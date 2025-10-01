import { useState } from "react";
import { motion } from "framer-motion";
import { LockClosedIcon } from "@heroicons/react/24/solid";

export default function Projects() {
  const [todoLiveClicked, setTodoLiveClicked] = useState(false);
  const toggleTodoLive = () => setTodoLiveClicked((prev) => !prev);

  // Animation variants
  const cardVariants = {
    left: {
      hidden: { opacity: 0, x: -80 },
      visible: { opacity: 1, x: 0 },
    },
    right: {
      hidden: { opacity: 0, x: 80 },
      visible: { opacity: 1, x: 0 },
    },
  };

  // Card Data
  const projects = [
    {
      title: "Food Delivery Website",
      desc: "A MERN stack web app with JWT authentication, payment gateway integration, and fully responsive design.",
      img: "/foodDelivery.png",
      live: "https://food-delivery-frontend-omega.vercel.app/",
    },
    {
      title: "Todo App",
      desc: "Task management tool built with React, Vite, and MongoDB supporting full CRUD operations with powerful features.",
      img: "/eldrinTodo.png",
      button: true,
    },
    {
      title: "Hackathon Projects",
      desc: "Collaborative projects created during hackathons focusing on innovation and problem-solving. Using LLMWare, Ollama & Pinecone and React frontend.",
      img: "/novathon2.png",
      more: "https://eldrinjohnson.my.canva.site/novathon",
    },
    {
      title: "Portfolio Web",
      desc: "My portfolio website built using React, styled with TailwindCSS and DaisyUI, using React Router and Framer Motion animations.",
      img: "/portfolio.png",
      live: "https://eldrin23.github.io/portfolio/",
    },
    {
      title: "E-commerce Website",
      desc: "A responsive e-commerce website built with HTML, CSS, and Bootstrap with a carousel and product listing.",
      img: "/ecom.png",
      live: "https://eldrin23.github.io/entri/",
    },
    {
      title: "Course Selling Website",
      desc: "A platform for selling online courses with secure payments and user dashboard. Under professional development (Coming soon).",
      img: "https://via.placeholder.com/400x200",
      locked: true,
    },
    {
      title: "Project Locked 1",
      desc: "Details coming soon.",
      img: "https://via.placeholder.com/400x200",
      locked: true,
    },
    {
      title: "Project Locked 2",
      desc: "Details coming soon.",
      img: "https://via.placeholder.com/400x200",
      locked: true,
    },
  ];

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 flex flex-col items-center justify-center space-y-16">
      {/* Heading */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500 bg-clip-text text-transparent drop-shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h1>

      {/* Project Cards */}
      <div className="w-full max-w-6xl grid gap-10 md:grid-cols-3">
        {projects.map((proj, i) => {
          const variant = i % 2 === 0 ? "left" : "right";

          return (
            <motion.div
              key={i}
              className={`bg-gradient-to-tr from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-xl 
                ${proj.locked ? "border-2 border-cyan-600 cursor-not-allowed" : "border border-cyan-700 cursor-pointer"} 
              relative`}
              variants={cardVariants[variant]}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={
                proj.locked
                  ? { scale: 1.02, boxShadow: "0 0 15px #06b6d4" }
                  : { scale: 1.05, boxShadow: "0 0 20px #06b6d4" }
              }
            >
              <img
                src={proj.img}
                alt={proj.title}
                className="w-full h-48 object-cover"
              />

              {/* Locked Overlay */}
              {proj.locked && (
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10 pointer-events-none">
                  <LockClosedIcon className="w-16 h-16 text-cyan-400 opacity-80 animate-pulse" />
                </div>
              )}

              {/* Card Content */}
              <div className="p-6 relative z-20">
                <h2 className="text-2xl font-semibold text-cyan-300 mb-3 tracking-wide">
                  {proj.title}
                </h2>
                <p
                  className={`leading-relaxed ${
                    proj.locked ? "text-gray-500" : "text-gray-300"
                  }`}
                >
                  {proj.desc}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 mt-5">
                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-2 bg-sky-500 text-white rounded-lg font-medium shadow-lg hover:bg-sky-600 transition-colors duration-300"
                    >
                      View Live
                    </a>
                  )}

                  {proj.button && (
                    <>
                      <button
                        onClick={toggleTodoLive}
                        className="px-6 py-2 bg-sky-500 text-white rounded-lg font-medium shadow-lg hover:bg-sky-600 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-sky-400/50"
                      >
                        View Live
                      </button>
                      {todoLiveClicked && (
                        <motion.p
                          key="coming-soon"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.5 }}
                          className="mt-4 text-sky-400 font-semibold text-lg tracking-wide select-none"
                        >
                          Coming Soon
                        </motion.p>
                      )}
                    </>
                  )}

                  {proj.more && (
                    <a
                      href={proj.more}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-2 bg-cyan-500 text-white rounded-lg font-medium shadow-lg hover:bg-cyan-600 transition-colors duration-300"
                    >
                      Know More
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
