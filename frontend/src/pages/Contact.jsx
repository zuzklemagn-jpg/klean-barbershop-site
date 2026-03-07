import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Clock, Instagram, ExternalLink } from "lucide-react";

const BOOKING_URL = "https://klean-barbershop-booking.setmore.com/book";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
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
  return (
    <div data-testid="contact-page" className="pt-24">
      {/* Hero */}
      <section className="section-spacing bg-obsidian">
        <div className="section-container">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-4 block">
              Nous trouver
            </span>
            <h1 className="font-syne font-bold text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tighter mb-6">
              Contact & <span className="gold-gradient-text">Réservation</span>
            </h1>
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
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="space-y-10">
                {/* Address */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-gold-500" />
                    <h3 className="font-syne font-semibold text-xl text-white uppercase tracking-wide">
                      Adresse
                    </h3>
                  </div>
                  <a
                    href="https://maps.google.com/?q=11+Place+du+Plessis+Saucourt+91250+Tigery+France"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="contact-address-link"
                    className="text-neutral-400 hover:text-gold-400 transition-colors leading-relaxed block"
                  >
                    11 Place du Plessis Saucourt<br />
                    91250 Tigery, France
                  </a>
                </div>

                {/* Phone */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Phone className="w-6 h-6 text-gold-500" />
                    <h3 className="font-syne font-semibold text-xl text-white uppercase tracking-wide">
                      Téléphone
                    </h3>
                  </div>
                  <a
                    href="tel:+33699393917"
                    data-testid="contact-phone-link"
                    className="text-neutral-400 hover:text-gold-400 transition-colors text-lg"
                  >
                    +33 6 99 39 39 17
                  </a>
                </div>

                {/* Instagram */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Instagram className="w-6 h-6 text-gold-500" />
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
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-gold-500" />
                    <h3 className="font-syne font-semibold text-xl text-white uppercase tracking-wide">
                      Horaires
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {hours.map((item) => (
                      <li 
                        key={item.day} 
                        className="flex justify-between text-neutral-400 border-b border-white/5 pb-2"
                      >
                        <span>{item.day}</span>
                        <span className="text-white">{item.hours}</span>
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
                    className="btn-primary inline-flex items-center justify-center gap-2"
                  >
                    Réserver en ligne
                    <ArrowRight size={18} />
                  </a>
                  <a
                    href="tel:+33699393917"
                    data-testid="contact-call-btn"
                    className="btn-secondary inline-flex items-center justify-center"
                  >
                    Appeler
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square lg:aspect-auto lg:h-full min-h-[400px] bg-surface overflow-hidden">
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
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-gold-500/30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="section-spacing bg-obsidian">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                title: "Appelez-nous",
                desc: "Pour toute question ou réservation par téléphone",
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="service-card text-center group"
              >
                <item.icon className="w-10 h-10 text-gold-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-syne font-semibold text-xl text-white uppercase tracking-wide mb-2">
                  {item.title}
                </h3>
                <p className="text-neutral-500 text-sm mb-4">{item.desc}</p>
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
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/2775272/pexels-photo-2775272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-syne font-bold text-3xl md:text-4xl text-white uppercase tracking-tight mb-6">
              Prêt pour une<br />
              <span className="gold-gradient-text">transformation ?</span>
            </h2>
            <p className="text-neutral-400 mb-10 max-w-xl mx-auto">
              Réservez votre créneau et vivez l'expérience KLEAN Barbershop.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-cta-book-btn"
              className="btn-primary inline-flex items-center gap-2"
            >
              Réserver mon rendez-vous
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
