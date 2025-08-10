import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CVModal from "./CVModal";  // import the modal here

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar at the top */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>

      {/* Footer at the bottom */}
      <Footer />

      {/* Modal renders here so it overlays everything */}
      <CVModal />
    </div>
  );
}
