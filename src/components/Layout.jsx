import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GithubModal from "./CVModal";

export default function Layout() {
  const location = useLocation();

  const hideNavbar = location.pathname === "/business";

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ scrollBehavior: "smooth" }}
    >
      {!hideNavbar && <Navbar />}

      <main className="flex-1 px-4 pb-6 mt-4 lg:mt-8">
        <Outlet />
      </main>

      <Footer />
      <GithubModal />
    </div>
  );
}