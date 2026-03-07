import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import FloatingBookButton from "./FloatingBookButton";

const Layout = () => {
  return (
    <div className="min-h-screen bg-obsidian">
      {/* Grain overlay for texture */}
      <div className="grain-overlay" aria-hidden="true" />
      
      <Navigation />
      
      <main>
        <Outlet />
      </main>
      
      <Footer />
      
      <FloatingBookButton />
    </div>
  );
};

export default Layout;
