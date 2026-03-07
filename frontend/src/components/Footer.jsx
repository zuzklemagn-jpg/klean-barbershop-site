import { Link } from "react-router-dom";
import { Scissors, MapPin, Phone, Instagram, Clock } from "lucide-react";

const BOOKING_URL = "https://klean-barbershop-booking.setmore.com/book";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer data-testid="footer" className="bg-charcoal border-t border-white/5">
      <div className="section-container section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gold-500 flex items-center justify-center">
                <Scissors className="w-6 h-6 text-black" />
              </div>
              <div>
                <span className="font-syne font-bold text-xl tracking-wider text-white">
                  KLEAN
                </span>
                <span className="block text-xs tracking-[0.2em] text-neutral-500 uppercase">
                  Barbershop • Braids • Locks
                </span>
              </div>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              L'expérience barbier premium à Tigery. Coupes précises, barbe soignée, 
              tresses et locks dans un cadre élégant.
            </p>
            <a
              href="https://instagram.com/klean.barbershop_braids"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-instagram"
              className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors"
            >
              <Instagram size={20} />
              <span className="text-sm">@klean.barbershop_braids</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-syne font-semibold text-white uppercase tracking-wider mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
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
                    className="text-neutral-400 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-syne font-semibold text-white uppercase tracking-wider mb-6 flex items-center gap-2">
              <Clock size={18} className="text-gold-500" />
              Horaires
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { day: "Lundi", hours: "13h – 20h" },
                { day: "Mardi", hours: "10h – 20h" },
                { day: "Mercredi", hours: "10h – 20h" },
                { day: "Jeudi", hours: "10h – 20h" },
                { day: "Vendredi", hours: "10h – 21h" },
                { day: "Samedi", hours: "10h – 21h" },
                { day: "Dimanche", hours: "13h – 19h" },
              ].map((item) => (
                <li key={item.day} className="flex justify-between text-neutral-400">
                  <span>{item.day}</span>
                  <span className="text-white">{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-syne font-semibold text-white uppercase tracking-wider mb-6">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="https://maps.google.com/?q=11+Place+du+Plessis+Saucourt+91250+Tigery+France"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-address"
                className="flex items-start gap-3 text-neutral-400 hover:text-gold-400 transition-colors"
              >
                <MapPin size={20} className="text-gold-500 flex-shrink-0 mt-1" />
                <span className="text-sm">
                  11 Place du Plessis Saucourt<br />
                  91250 Tigery, France
                </span>
              </a>
              <a
                href="tel:+33699393917"
                data-testid="footer-phone"
                className="flex items-center gap-3 text-neutral-400 hover:text-gold-400 transition-colors"
              >
                <Phone size={20} className="text-gold-500" />
                <span className="text-sm">+33 6 99 39 39 17</span>
              </a>
              
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-book-btn"
                className="btn-primary inline-block text-center w-full mt-6 text-sm"
              >
                Réserver maintenant
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500 text-xs">
              © {currentYear} KLEAN Barbershop. Tous droits réservés.
            </p>
            <p className="text-neutral-600 text-xs">
              Barbier premium à Tigery, Essonne
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
