import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const LandingLayout = () => {
  return (
    <main className="bg-gray-900 overflow-hidden">
      <Navbar />
      <main>
      <Outlet />
        </main>
      <Footer />
    </main>
  );
};

export default LandingLayout;
