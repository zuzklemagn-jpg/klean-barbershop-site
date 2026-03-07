import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Clock, Instagram, ExternalLink } from "lucide-react";
import SEOHead from "../components/SEOHead";
import BookButton, { BOOKING_URL } from "../components/BookButton";
import { trackPageView } from "../utils/analytics";
import { sectionImages, KLEAN_IMAGES } from "../config/images";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
};

const hours = [
  { day: "Lundi", hours: "13h – 20h" },
  { day: "Mardi", hours: "10h – 20h" },
  { day: "Mercredi", hours: "10h – 20h" },
  { day: "Jeudi", hours: "10h – 20h" },
  { day: "Vendredi", hours: "10h – 21h" },
  { day: "Samedi", hours: "10h – 21h" },
  { day: "Dimanche", hours: "13h – 19h" }
];

const Contact = () => {
  useEffect(() => {
    trackPageView("contact");
  }, []);

  return (
    <div data-testid="contact-page" className="pt-24 bg-obsidian">
      <SEOHead page="contact" />
      
      {/* Hero */}
      <section className="section-spacing">
        <div className="section-container">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <span className="premium-label mb-6 block">Nous trouver</span>
            
            <h1 className="font-syne font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white uppercase tracking-tighter mb-4">
              Contact &
            </h1>
            <p className="font-elegant text-3xl md:text-4xl text-gold-400 italic mb-8">
              Réservation
            </p>
            
            <div className="gold-divider mb-8" />
            
            <p className="text-neutral-400 text-lg leading-relaxed">
              Venez nous rendre visite à Tigery ou réservez directement en ligne. 
              Notre équipe vous accueille dans un cadre premium.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info + Map */}
      <section className="section-spacing bg-charcoal">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-12">
                {/* Address */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gold-500/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-gold-500" />
                    </div>
                    <h3 className="font-syne font-semibold text-xl text-white uppercase tracking-wide">
                      Adresse
                    </h3>
                  </div>
                  <a
                    href="https://maps.google.com/?q=11+Place+du+Plessis+Saucourt+91250+Tigery+France"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="contact-address-link"
                    className="text-neutral-400 hover:text-gold-400 transition-colors leading-loose text-lg"
                  >
                    11 Place du Plessis Saucourt<br />
                    91250 Tigery, France
                  </a>
                </div>

                {/* Phone */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gold-500/10 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-gold-500" />
                    </div>
                    <h3 className="font-syne font-semibold text-xl text-white uppercase tracking-wide">
                      Téléphone
                    </h3>
                  </div>
                  <a
                    href="tel:+33699393917"
                    data-testid="contact-phone-link"
                    className="text-neutral-400 hover:text-gold-400 transition-colors text-xl"
                  >
                    +33 6 99 39 39 17
                  </a>
                </div>

                {/* Instagram */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gold-500/10 flex items-center justify-center">
                      <Instagram className="w-6 h-6 text-gold-500" />
                    </div>
                    <h3 className="font-syne font-semibold text-xl text-white uppercase tracking-wide">
                      Instagram
                    </h3>
                  </div>
                  <a
                    href="https://instagram.com/klean.barbershop_braids"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="contact-instagram-link"
                    className="text-neutral-400 hover:text-gold-400 transition-colors inline-flex items-center gap-2"
                  >
                    @klean.barbershop_braids
                    <ExternalLink size={16} />
                  </a>
                </div>

                {/* Hours */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gold-500/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-gold-500" />
                    </div>
                    <h3 className="font-syne font-semibold text-xl text-white uppercase tracking-wide">
                      Horaires
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {hours.map((item) => (
                      <li key={item.day} className="flex justify-between text-neutral-500 border-b border-white/5 pb-3">
                        <span>{item.day}</span>
                        <span className="text-neutral-300">{item.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="contact-book-btn"
                    className="btn-book inline-flex items-center justify-center gap-3"
                  >
                    <span>Réserver en ligne</span>
                    <ArrowRight size={18} />
                  </a>
                  <a
                    href="tel:+33699393917"
                    data-testid="contact-call-btn"
                    className="btn-secondary inline-flex items-center justify-center"
                  >
                    <span>Appeler</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square lg:aspect-auto lg:h-full min-h-[500px] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2634.8977!2d2.5165!3d48.6418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5e5c5c5c5c5c5%3A0x0!2s11%20Place%20du%20Plessis%20Saucourt%2C%2091250%20Tigery!5e0!3m2!1sfr!2sfr!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation KLEAN Barbershop"
                  className="map-dark-filter"
                  data-testid="contact-map"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 border-l-2 border-b-2 border-gold-500/30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="section-spacing bg-obsidian">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Phone,
                title: "Appelez-nous",
                desc: "Pour toute question ou réservation",
                action: "tel:+33699393917",
                label: "+33 6 99 39 39 17"
              },
              {
                icon: Instagram,
                title: "Suivez-nous",
                desc: "Découvrez nos dernières réalisations",
                action: "https://instagram.com/klean.barbershop_braids",
                label: "@klean.barbershop_braids",
                external: true
              },
              {
                icon: MapPin,
                title: "Venez nous voir",
                desc: "Tigery, facilement accessible",
                action: "https://maps.google.com/?q=11+Place+du+Plessis+Saucourt+91250+Tigery+France",
                label: "Itinéraire",
                external: true
              }
            ].map((item, index) => (
              <motion.a
                key={item.title}
                href={item.action}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="service-card text-center py-12 group"
              >
                <div className="w-14 h-14 mx-auto mb-6 bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                  <item.icon className="w-7 h-7 text-gold-500" />
                </div>
                <h3 className="font-syne font-semibold text-xl text-white uppercase tracking-wide mb-2">
                  {item.title}
                </h3>
                <p className="text-neutral-600 text-sm mb-4">{item.desc}</p>
                <span className="text-gold-400 text-sm inline-flex items-center gap-2">
                  {item.label}
                  {item.external && <ExternalLink size={14} />}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-spacing bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img 
            src={KLEAN_IMAGES.interieur}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-syne font-bold text-3xl sm:text-4xl text-white uppercase tracking-tight mb-4">
              Prêt pour une
            </h2>
            <p className="font-elegant text-2xl md:text-3xl text-gold-400 italic mb-10">
              transformation ?
            </p>
            <BookButton source="contact-cta">
              Réserver mon rendez-vous
            </BookButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
