import { useState } from "react";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbz1U-NJpYTR4SE-B9WX4j9zdAVfINBy8QL-TS-BjU8iW0FWGHf-3f2d305fphX6Lpmc/exec",
        {
          method: "POST",
          mode: "no-cors", // 👈 important: avoid CORS blocking
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "message", // backend knows it’s a message
            ...form,
          }),
        }
      );

      // With no-cors, we can't check the actual response
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Form error:", err);
      setStatus("error");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-base-200 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Send me a message</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="textarea textarea-bordered w-full"
          required
        />
        <button type="submit" className="btn btn-primary w-full">
          Send
        </button>
      </form>

      {status === "loading" && (
        <div className="alert alert-info mt-4">Sending your message...</div>
      )}
      {status === "success" && (
        <div className="alert alert-success mt-4">
          Message sent successfully 🎉
        </div>
      )}
      {status === "error" && (
        <div className="alert alert-error mt-4">
          Something went wrong. Try again.
        </div>
      )}
    </div>
  );
}

export default ContactForm;
