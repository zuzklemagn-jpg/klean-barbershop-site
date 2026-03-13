import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { KLEAN_IMAGES } from "../config/images";

const BOOKING_URL = "https://www.planity.com/klean-barbershop-braids-locks-91250-tigery";

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
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        data-testid="main-navigation"
        className={`fixed top-0 w-full z-40 transition-all duration-700 ${
          isScrolled
            ? "bg-obsidian/95 backdrop-blur-xl border-b border-white/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              data-testid="logo-link"
              className="flex items-center gap-4 group"
            >
              <img 
                src={KLEAN_IMAGES.logo}
                alt="KLEAN Barbershop Logo"
                className={`rounded-full object-cover transition-all duration-500 ${isScrolled ? 'w-10 h-10' : 'w-12 h-12'}`}
              />
              <div className="hidden sm:block">
                <span className="font-syne font-bold text-xl tracking-wider text-white group-hover:text-gold-400 transition-colors duration-300">
                  KLEAN
                </span>
                <span className="block text-[9px] tracking-[0.35em] text-neutral-600 uppercase">
                  Barbershop
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  data-testid={`nav-link-${link.path.replace("/", "") || "home"}`}
                  className={`nav-link ${
                    location.pathname === link.path ? "text-gold-400 after:w-full" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-6">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="nav-book-btn"
                className="hidden md:block bg-gold-500 text-black font-semibold text-[11px] uppercase tracking-[0.2em] px-6 py-3 hover:bg-white transition-all duration-500"
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
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            data-testid="mobile-menu"
            className="fixed inset-0 z-30 bg-obsidian lg:hidden"
          >
            <div className="h-full flex flex-col justify-center section-container">
              <nav className="space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                  >
                    <Link
                      to={link.path}
                      data-testid={`mobile-nav-link-${link.path.replace("/", "") || "home"}`}
                      className={`block py-3 text-3xl font-syne font-semibold tracking-wide transition-colors duration-300 ${
                        location.pathname === link.path
                          ? "text-gold-400"
                          : "text-white/60 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-12 pt-12 border-t border-white/10"
              >
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="mobile-book-btn"
                  className="btn-book block text-center"
                >
                  Réserver un rendez-vous
                </a>
                
                <div className="mt-8 text-center">
                  <a href="tel:+33699393917" className="text-neutral-500 hover:text-gold-400 transition-colors text-sm">
                    +33 6 99 39 39 17
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
