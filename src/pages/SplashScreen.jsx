import { useEffect } from "react";
import { motion } from "framer-motion";
import { EncryptedText } from "../components/ui/encrypted-text";

export default function SplashScreen() {
  useEffect(() => {
    const trackVisitor = async () => {
      try {
        const ipRes = await fetch("https://api.ipify.org?format=json");
        const ipData = await ipRes.json();

        const locRes = await fetch(`https://ipapi.co/${ipData.ip}/json/`);
        const locData = await locRes.json();

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

        await fetch(
          "https://script.google.com/macros/s/AKfycbxXY55w_3nLIVieyLXOCnwcbZt4sh7UULP8V70paO7kbODiBa_yCK7dB0PnX2OnfILm/exec",
          {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(visitorData),
          }
        );
      } catch (err) {
        console.error("Visitor tracking failed", err);
      }
    };

    trackVisitor();
  }, []);

  return (
    <>
      <style>{`
        /* SAME GRID BG AS ALL PAGES */
        .bg-grid {
          background-color: #0a0a0c;
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 32px 32px;
        }
      `}</style>

      <div className="min-h-screen bg-grid flex flex-col items-center justify-center text-gray-300 p-8">

        {/* Infinity loader */}
        <motion.span
          className="loading loading-infinity loading-xl text-purple-500 mb-6"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8],
            textShadow: [
              "0 0 8px rgba(139, 92, 246, 0.7)",
              "0 0 16px rgba(139, 92, 246, 1)",
              "0 0 8px rgba(139, 92, 246, 0.7)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.span>

    {/* Centered Text Only */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 2, ease: "easeOut" }}
  className="text-center max-w-4xl"
>
  <div className="flex flex-col items-center gap-4">
    <EncryptedText
      text="Eldrin Johnson"
      className="text-6xl font-extrabold text-purple-500 drop-shadow-lg"
      revealDelayMs={70}
      flipDelayMs={20}
      encryptedClassName="text-purple-400"
      revealedClassName="text-purple-500"
    />

    <EncryptedText
      text="Full Stack Developer & Cybersecurity Enthusiast"
      className="text-xl italic text-center"
      revealDelayMs={35}
      flipDelayMs={15}
      encryptedClassName="text-gray-500"
      revealedClassName="text-gray-300"
    />
  </div>
</motion.div>
      </div>
    </>
  );
}