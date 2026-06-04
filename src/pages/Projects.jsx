import { useState } from "react";
import { motion } from "framer-motion";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import { MacbookScroll } from "../components/ui/macbook-scroll";

export default function Projects() {
  const [todoLiveClicked, setTodoLiveClicked] = useState(false);
  const toggleTodoLive = () => setTodoLiveClicked((prev) => !prev);

  // Modern container variant to stagger sequential card items smoothly
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Smooth sequence delays
      },
    },
  };

  // Modern upward float animation variant
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }, // Custom cubic-bezier for premium feel
    },
  };

  const projects = [
    {
      title: "Food Delivery Website",
      desc: "A MERN stack web app with JWT authentication, payment gateway integration, and fully responsive design.",
      img: "/foodDelivery.png",
      live: "https://foodie88.vercel.app/",
    },
    {
      title: "surplus food website",
      desc: "build in MERN, with admin, user, resturant owner panels.",
      img: "/surplus.png",
      live: "https://eldrin23.github.io/entri/",
    },
    {
      title: "Todo App",
      desc: "Task management tool built with React, Vite, and MongoDB supporting full CRUD operations with powerful features.",
      img: "/eldrinTodo.png",
      live: "https://eldrintodo.vercel.app/",
    },
    {
      title: "Midnight23",
      desc: "My favourite music collections named midnight23 built using React, styled with TailwindCSS and DaisyUI.",
      img: "/musicapp.png",
      live: "https://midnight23.vercel.app/",
    },
    {
      title: "Novathon Projects",
      desc: "Collaborative projects created during hackathons focusing on innovation and problem-solving. Using LLMWare, Ollama & Pinecone and React frontend.",
      img: "/novathon2.jpg",
      more: "https://eldrinjohnson.my.canva.site/novathon",
    },
    {
      title: "THE BIG HACK",

      desc: "hackathon project with ai detection with deepfake v2 model using blockchain",
      img: "/bigHack.jpg",
      more: "https://eldrinjohnson.my.canva.site/the-big-hack",
    },
    {
      title: "Portfolio Web",
      desc: "My portfolio website built using React, styled with TailwindCSS and DaisyUI, using React Router and Framer Motion animations.",
      img: "/portfolio.png",
      live: "https://eldrin.is-a.dev/",
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
  ];

  return (
    <>
      <style>{`
        .bg-grid {
          background-color: #0b0b0b;
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>

      {/* macbook scroll animation */}
      <div className="relative z-0">
        <MacbookScroll
          src="/certificate.jpg"
          title={
            <span>
              #thebestthingsnevercomeeasy<br></br>
            </span>
          }
        />
      </div>
      <div
        id="project"
        className="relative z-50 min-h-screen p-8 bg-grid text-gray-100 flex flex-col items-center justify-center space-y-16 font-sans overflow-x-hidden"
      >
        {/* Main Heading Scroll Animation */}
        <div className="text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-white tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            My <span className="text-purple-500">Projects</span>
          </motion.h1>
        </div>

        {/* Project Cards Grid with Motion Container Wrapper */}
        <motion.div
          className="w-full max-w-6xl grid gap-10 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Triggers smoothly when entry begins
        >
          {projects.map((proj, i) => {
            return (
              <motion.div
                key={i}
                className={`bg-[#232323] rounded-3xl overflow-hidden shadow-2xl transition-all flex flex-col relative ${
                  proj.locked
                    ? "opacity-60 cursor-not-allowed"
                    : "cursor-pointer"
                }`}
                variants={cardVariants}
                whileHover={
                  proj.locked
                    ? { scale: 1 }
                    : {
                        scale: 1.04,
                        boxShadow: "0 15px 35px rgba(168, 85, 247, 0.25)",
                        transition: { duration: 0.3, ease: "easeOut" },
                      }
                }
              >
                {/* Image Container Area */}
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />

                  {/* Visual assets layered matching style themes */}
                  {/* <span className="absolute top-3 left-4 text-white font-bold text-lg drop-shadow-md select-none">✦</span>
                  <span className="absolute bottom-3 right-4 text-white text-xs opacity-75 drop-shadow-md select-none">©2026</span> */}
                </div>

                {/* Secure Lock Layer overlay */}
                {proj.locked && (
                  <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center z-30 rounded-3xl">
                    <LockClosedIcon className="w-14 h-14 text-purple-500 animate-pulse" />
                  </div>
                )}

                {/* Description Text Layer info block */}
                <div className="p-6 flex flex-col flex-grow justify-between relative z-20">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-500 mb-2 tracking-wide">
                      {proj.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed font-light">
                      {proj.desc}
                    </p>
                  </div>

                  {/* Actions Link elements layout handles */}
                  {!proj.locked && (proj.live || proj.more) && (
                    <div className="flex flex-wrap gap-3 mt-6">
                      {proj.live && (
                        <a
                          href={proj.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors duration-300 shadow-md"
                        >
                          View Live
                        </a>
                      )}

                      {proj.more && (
                        <a
                          href={proj.more}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors duration-300"
                        >
                          Know More
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
}
