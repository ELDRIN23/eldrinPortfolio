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

  // Modern subtle slide-up animation for input lines
  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <>
      <style>{`
        /* REFINED DARK THEME GRID BACKGROUND */
        .bg-grid {
          background-color: #0b0b0b;
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>

      <div
        id="ContactForm"
        className="min-h-screen bg-grid flex flex-col items-center justify-center 
                   py-12 px-4 sm:px-6 md:px-12 gap-8 font-sans overflow-x-hidden"
      >
        {/* Header Section */}
        <div className="text-center space-y-3">
          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Get In <span className="text-purple-500">Touch</span>
          </motion.h2>

          <motion.p
            className="text-gray-400 max-w-md sm:max-w-xl text-base sm:text-lg font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            Always open to new projects or a friendly chat. I’ll get back to you as soon as possible.
          </motion.p>
        </div>

        {/* Contact Card Layout Container */}
        <motion.div
          className="w-full max-w-lg bg-[#232323] p-6 sm:p-10 rounded-3xl shadow-2xl border border-zinc-800 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
       

          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.div variants={inputVariants}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl bg-[#18181b] text-white placeholder-gray-500 border border-zinc-700 
                           focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-20 outline-none transition-all font-light"
                required
              />
            </motion.div>

            <motion.div variants={inputVariants}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl bg-[#18181b] text-white placeholder-gray-500 border border-zinc-700 
                           focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-20 outline-none transition-all font-light"
                required
              />
            </motion.div>

            <motion.div variants={inputVariants}>
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl bg-[#18181b] text-white placeholder-gray-500 border border-zinc-700 
                           focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-20 outline-none transition-all font-light"
              />
            </motion.div>

            <motion.div variants={inputVariants}>
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl bg-[#18181b] text-white placeholder-gray-500 border border-zinc-700 
                           focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-20 outline-none resize-none h-36 transition-all font-light"
                required
              />
            </motion.div>

            {/* Premium Purple Button Block */}
            <motion.div variants={inputVariants} className="mt-2">
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full px-6 py-3.5 font-bold text-xs uppercase tracking-wider rounded-xl bg-purple-600 text-white hover:bg-purple-700 transition-colors shadow-lg disabled:opacity-50"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </motion.div>
          </motion.form>

          {/* Response Messaging Hooks */}
          {status === "loading" && (
            <motion.p
              className="text-purple-400 mt-5 font-medium text-center text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Sending your message...
            </motion.p>
          )}
          {status === "success" && (
            <motion.p
              className="text-green-400 mt-5 font-medium text-center text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Message sent successfully 🎉
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              className="text-red-400 mt-5 font-medium text-center text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Something went wrong. Try again.
            </motion.p>
          )}
        </motion.div>
      </div>
    </>
  );
}

export default ContactForm;