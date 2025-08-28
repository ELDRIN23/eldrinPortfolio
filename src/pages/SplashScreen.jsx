import { useEffect } from "react";
import { motion } from "framer-motion";

export default function SplashScreen() {
  useEffect(() => {
    const trackVisitor = async () => {
      try {
        // ✅ Get IP
        const ipRes = await fetch("https://api.ipify.org?format=json");
        const ipData = await ipRes.json();

        // ✅ Get location from ipapi
        const locRes = await fetch(`https://ipapi.co/${ipData.ip}/json/`);
        const locData = await locRes.json();

        // ✅ Collect device + visitor info
        const visitorData = {
          type: "visitor",
          ip: ipData.ip,
          city: locData.city,
          region: locData.region,
          country: locData.country_name,
          isp: locData.org,
          browser: navigator.userAgent,
          os: navigator.platform,
          language: navigator.language,
          screen: `${window.screen.width}x${window.screen.height}`,
          timestamp: new Date().toISOString(),
        };

        // ✅ Send to Google Sheet
        await fetch(
          "https://script.google.com/macros/s/AKfycbxXY55w_3nLIVieyLXOCnwcbZt4sh7UULP8V70paO7kbODiBa_yCK7dB0PnX2OnfILm/exec",
          {
            method: "POST",
            mode: "no-cors", // bypass CORS
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(visitorData),
          }
        );

        // console.log("Visitor tracked ✅", visitorData);
      } catch (err) {
        console.error("Visitor tracking failed", err);
      }
    };

    trackVisitor();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0f111a] via-[#1c1f2a] to-[#0f111a] flex flex-col items-center justify-center text-gray-300 p-8">
      {/* Infinity loader */}
      <motion.span
        className="loading loading-infinity loading-xl text-cyan-400 mb-6"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.8, 1, 0.8],
          textShadow: [
            "0 0 8px rgba(14, 165, 233, 0.7)",
            "0 0 16px rgba(14, 165, 233, 1)",
            "0 0 8px rgba(14, 165, 233, 0.7)",
          ],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.span>

      {/* Profile image */}
      <div className="relative w-44 h-44 rounded-full flex items-center justify-center mb-8">
        <img
          src="/myself.jpg"
          alt="Eldrin Johnson"
          className="w-40 h-40 rounded-full object-cover border-4 border-cyan-500"
        />
      </div>

      {/* Animated text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
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
