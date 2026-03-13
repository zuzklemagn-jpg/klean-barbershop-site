import { Link } from "react-router-dom";
import { MapPin, Phone, Instagram, Clock, ArrowRight } from "lucide-react";
import { KLEAN_IMAGES } from "../config/images";

const BOOKING_URL = "https://www.planity.com/klean-barbershop-braids-locks-91250-tigery";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer data-testid="footer" className="bg-charcoal border-t border-white/5">
      {/* Main Footer */}
      <div className="section-container py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-4 mb-8">
              <img 
                src={KLEAN_IMAGES.logo}
                alt="KLEAN Barbershop Logo"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <span className="font-syne font-bold text-2xl tracking-wider text-white">
                  KLEAN
                </span>
                <span className="block text-[9px] tracking-[0.3em] text-neutral-600 uppercase">
                  Barbershop • Braids • Locks
                </span>
              </div>
            </Link>
            
            <p className="text-neutral-500 text-sm leading-loose mb-8">
              L'expérience barbier premium à Tigery. Coupes précises, barbe soignée, 
              tresses et locks dans un cadre élégant.
            </p>
            
            <a
              href="https://instagram.com/klean.barbershop_braids"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-instagram"
              className="inline-flex items-center gap-3 text-gold-400 hover:text-gold-300 transition-colors group"
            >
              <Instagram size={20} />
              <span className="text-sm group-hover:underline">@klean.barbershop_braids</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-syne font-semibold text-white uppercase tracking-[0.2em] text-sm mb-8">
              Navigation
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Accueil", path: "/" },
                { name: "Prestations & Tarifs", path: "/prestations" },
                { name: "Expérience VIP", path: "/experience-vip" },
                { name: "Galerie", path: "/galerie" },
                { name: "Avis clients", path: "/avis" },
                { name: "FAQ", path: "/faq" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-neutral-500 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-syne font-semibold text-white uppercase tracking-[0.2em] text-sm mb-8 flex items-center gap-3">
              <Clock size={16} className="text-gold-500" />
              Horaires
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { day: "Lundi", hours: "13h – 20h" },
                { day: "Mardi", hours: "10h – 20h" },
                { day: "Mercredi", hours: "10h – 20h" },
                { day: "Jeudi", hours: "10h – 20h" },
                { day: "Vendredi", hours: "10h – 21h" },
                { day: "Samedi", hours: "10h – 21h" },
                { day: "Dimanche", hours: "13h – 19h" },
              ].map((item) => (
                <li key={item.day} className="flex justify-between text-neutral-500">
                  <span>{item.day}</span>
                  <span className="text-neutral-400">{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-syne font-semibold text-white uppercase tracking-[0.2em] text-sm mb-8">
              Contact
            </h4>
            
            <div className="space-y-6">
              <a
                href="https://maps.google.com/?q=11+Place+du+Plessis+Saucourt+91250+Tigery+France"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-address"
                className="flex items-start gap-4 text-neutral-500 hover:text-gold-400 transition-colors group"
              >
                <MapPin size={18} className="text-gold-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">
                  11 Place du Plessis Saucourt<br />
                  91250 Tigery, France
                </span>
              </a>
              
              <a
                href="tel:+33699393917"
                data-testid="footer-phone"
                className="flex items-center gap-4 text-neutral-500 hover:text-gold-400 transition-colors"
              >
                <Phone size={18} className="text-gold-500" />
                <span className="text-sm">+33 6 99 39 39 17</span>
              </a>
              
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-book-btn"
                className="btn-book flex items-center justify-center gap-3 w-full mt-8 text-sm"
              >
                <span>Réserver</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="section-container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-600 text-xs tracking-wider">
              © {currentYear} KLEAN Barbershop. Tous droits réservés.
            </p>
            <p className="text-neutral-700 text-xs tracking-wider">
              Barbier premium à Tigery, Essonne
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
