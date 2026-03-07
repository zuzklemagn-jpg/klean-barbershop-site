import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Scissors } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const BOOKING_URL = "https://klean-barbershop-booking.setmore.com/book";

const navLinks = [
  { name: "Accueil", path: "/" },
  { name: "Prestations", path: "/prestations" },
  { name: "Expérience VIP", path: "/experience-vip" },
  { name: "Galerie", path: "/galerie" },
  { name: "À propos", path: "/a-propos" },
  { name: "Avis", path: "/avis" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav
        data-testid="main-navigation"
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-obsidian/95 backdrop-blur-lg border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link
              to="/"
              data-testid="logo-link"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 bg-gold-500 flex items-center justify-center">
                <Scissors className="w-5 h-5 text-black" />
              </div>
              <div className="hidden sm:block">
                <span className="font-syne font-bold text-lg tracking-wider text-white group-hover:text-gold-400 transition-colors">
                  KLEAN
                </span>
                <span className="block text-[10px] tracking-[0.3em] text-neutral-500 uppercase">
                  Barbershop
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  data-testid={`nav-link-${link.path.replace("/", "") || "home"}`}
                  className={`nav-link ${
                    location.pathname === link.path ? "text-gold-400" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="nav-book-btn"
                className="hidden md:block btn-primary text-xs py-3 px-6"
              >
                Réserver
              </a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                data-testid="mobile-menu-toggle"
                className="lg:hidden p-2 text-white hover:text-gold-400 transition-colors"
                aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            data-testid="mobile-menu"
            className="fixed inset-0 z-30 bg-obsidian pt-24 lg:hidden"
          >
            <div className="section-container py-8">
              <div className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      data-testid={`mobile-nav-link-${link.path.replace("/", "") || "home"}`}
                      className={`block text-2xl font-syne font-semibold tracking-wider ${
                        location.pathname === link.path
                          ? "text-gold-400"
                          : "text-white hover:text-gold-400"
                      } transition-colors`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8"
                >
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="mobile-book-btn"
                    className="btn-primary inline-block text-center w-full"
                  >
                    Réserver un rendez-vous
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
