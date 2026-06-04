export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black text-white px-6 py-6">
      <div className="flex flex-col items-start text-left">
        <h3 className="text-lg font-semibold">
          Eldrin Johnson
        </h3>

        <p className="text-sm text-gray-400 mt-1">
          Full Stack Developer & Cybersecurity Enthusiast
        </p>

        <p className="text-sm italic text-gray-500 mt-2">
          #thebestthingsnevercomeeasy
        </p>

        <p className="text-sm text-gray-500 mt-4">
          © {new Date().getFullYear()} Eldrin Johnson. All rights reserved.
        </p>
      </div>
    </footer>
  );
}