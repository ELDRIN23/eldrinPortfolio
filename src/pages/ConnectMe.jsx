import { useState } from "react";
import { motion } from "framer-motion";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbz-10zKPwQXqbWPXKqqzMUZef0Wk-9wg9AF_VprCnW4EzOZU5qzEIOxaIZhBgAX--E/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "message",
            ...form,
          }),
        }
      );

      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("Form error:", err);
      setStatus("error");
    }
  };

  const floatIn = {
    hidden: { opacity: 0, y: -60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <>
      <style>{`
        /* SAME GRID BACKGROUND AS HOME, PROJECTS, ABOUT */
        .bg-grid {
          background-color: #000;
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>

      <div
        id="contact"
        className="min-h-screen bg-grid flex flex-col items-center justify-start 
                   py-6 sm:py-12 px-4 sm:px-6 md:px-12 gap-8"
      >
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-cyan-400 text-center"
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Send me a message
        </motion.h2>

        <motion.p
          className="text-center mb-6 text-gray-300 max-w-lg sm:max-w-xl text-base sm:text-lg"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Always open to new projects or a friendly chat. I’ll get back to you as soon as possible.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.15 }}
        >
          <motion.input
            variants={floatIn}
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#1c1c1c] text-white placeholder-gray-400 border border-gray-500 
                       focus:border-cyan-400 focus:ring focus:ring-cyan-400 focus:ring-opacity-30 outline-none transition-colors"
            required
          />

          <motion.input
            variants={floatIn}
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#1c1c1c] text-white placeholder-gray-400 border border-gray-500 
                       focus:border-cyan-400 focus:ring focus:ring-cyan-400 focus:ring-opacity-30 outline-none transition-colors"
            required
          />

          <motion.input
            variants={floatIn}
            type="text"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#1c1c1c] text-white placeholder-gray-400 border border-gray-500 
                       focus:border-cyan-400 focus:ring focus:ring-cyan-400 focus:ring-opacity-30 outline-none transition-colors"
          />

          <motion.textarea
            variants={floatIn}
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#1c1c1c] text-white placeholder-gray-400 border border-gray-500 
                       focus:border-cyan-400 focus:ring focus:ring-cyan-400 focus:ring-opacity-30 outline-none resize-none h-32 transition-colors"
            required
          />

          <motion.button
            variants={floatIn}
            type="submit"
            className="w-full px-6 py-3 font-bold rounded-full bg-cyan-400 text-black hover:bg-cyan-500 transition-colors shadow-lg"
          >
            Send
          </motion.button>
        </motion.form>

        {status === "loading" && (
          <motion.p
            className="text-cyan-400 mt-4 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Sending your message...
          </motion.p>
        )}
        {status === "success" && (
          <motion.p
            className="text-green-400 mt-4 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Message sent successfully 🎉
          </motion.p>
        )}
        {status === "error" && (
          <motion.p
            className="text-red-400 mt-4 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Something went wrong. Try again.
          </motion.p>
        )}
      </div>
    </>
  );
}

export default ContactForm;
