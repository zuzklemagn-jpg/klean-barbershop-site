import { motion } from "framer-motion";
import { ArrowRight, Clock, Scissors, Sparkles } from "lucide-react";

const BOOKING_URL = "https://klean-barbershop-booking.setmore.com/book";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const services = {
  coupes: [
    { name: "Coupe classique", price: "20€", duration: "40 min" },
    { name: "Coupe aux ciseaux", price: "25€", duration: "50 min" },
  ],
  rasage: [
    { name: "Rasage tête tondeuse", price: "12€", duration: "20 min" },
    { name: "Rasage tête", price: "15€", duration: "20 min" },
    { name: "Rasage tête + barbe", price: "20€", duration: "30 min" },
    { name: "Rasage traditionnel tête + barbe", price: "30€", duration: "60 min" },
  ],
  afro: [
    { name: "Braids / Tresses", price: "Sur devis", duration: "Variable" },
    { name: "Twists", price: "Sur devis", duration: "Variable" },
    { name: "Locks", price: "Sur devis", duration: "Variable" },
    { name: "Starter Locks", price: "Sur devis", duration: "Variable" },
  ]
};

const Services = () => {
  return (
    <div data-testid="services-page" className="pt-24">
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
              Tarifs
            </span>
            <h1 className="font-syne font-bold text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tighter mb-6">
              Nos <span className="gold-gradient-text">prestations</span>
            </h1>
            <p className="text-neutral-400 text-lg leading-relaxed">
              Découvrez notre gamme complète de services pour un style impeccable. 
              Des coupes précises aux soins de la barbe, en passant par les coiffures afro.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coupes Section */}
      <section data-testid="coupes-section" className="section-spacing bg-charcoal">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="flex items-center gap-3 mb-8">
                <Scissors className="w-8 h-8 text-gold-500" />
                <h2 className="font-syne font-bold text-2xl md:text-3xl text-white uppercase tracking-tight">
                  Coupes
                </h2>
              </div>

              <div className="space-y-0">
                {services.coupes.map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="price-item py-6 flex justify-between items-center group hover:bg-white/[0.02] px-4 -mx-4 transition-colors"
                  >
                    <div>
                      <h3 className="text-white font-medium text-lg group-hover:text-gold-400 transition-colors">
                        {service.name}
                      </h3>
                      <div className="flex items-center gap-2 text-neutral-500 text-sm mt-1">
                        <Clock size={14} />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                    <span className="text-gold-400 font-syne font-bold text-xl">
                      {service.price}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="flex items-center gap-3 mb-8">
                <Sparkles className="w-8 h-8 text-gold-500" />
                <h2 className="font-syne font-bold text-2xl md:text-3xl text-white uppercase tracking-tight">
                  Rasage
                </h2>
              </div>

              <div className="space-y-0">
                {services.rasage.map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="price-item py-6 flex justify-between items-center group hover:bg-white/[0.02] px-4 -mx-4 transition-colors"
                  >
                    <div>
                      <h3 className="text-white font-medium text-lg group-hover:text-gold-400 transition-colors">
                        {service.name}
                      </h3>
                      <div className="flex items-center gap-2 text-neutral-500 text-sm mt-1">
                        <Clock size={14} />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                    <span className="text-gold-400 font-syne font-bold text-xl">
                      {service.price}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Afro Section */}
      <section data-testid="afro-section" className="section-spacing bg-obsidian">
        <div className="section-container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-4 block">
              Expertise afro
            </span>
            <h2 className="font-syne font-bold text-3xl md:text-4xl text-white uppercase tracking-tight mb-4">
              Tresses & Locks
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Les prix pour les coiffures afro varient selon la longueur et le style souhaité. 
              Contactez le salon pour un devis ou une consultation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.afro.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="service-card text-center"
              >
                <h3 className="font-syne font-semibold text-xl text-white uppercase tracking-wide mb-4">
                  {service.name}
                </h3>
                <span className="text-gold-400 text-sm">{service.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Experience */}
      <section data-testid="vip-preview-section" className="section-spacing bg-charcoal">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-surface overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3998415/pexels-photo-3998415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Expérience KLEAN Exclusive"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold-500 text-black p-6">
                <span className="font-syne font-bold text-3xl block">250€</span>
                <span className="text-sm uppercase tracking-wider">3 heures</span>
              </div>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-4 block">
                Service premium
              </span>
              <h2 className="font-syne font-bold text-3xl md:text-4xl text-white uppercase tracking-tight mb-6">
                Expérience<br />
                <span className="gold-gradient-text">KLEAN Exclusive</span>
              </h2>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Une expérience premium incluant coupe complète, soin de la barbe, 
                serviettes chaudes, huiles essentielles et massage du cuir chevelu.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Coupe et coiffage complets",
                  "Rasage et soin de barbe",
                  "Serviettes chaudes relaxantes",
                  "Huiles essentielles premium",
                  "Massage du cuir chevelu",
                  "Boisson offerte"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-neutral-300">
                    <div className="w-1.5 h-1.5 bg-gold-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="services-vip-book-btn"
                className="btn-primary inline-flex items-center gap-2"
              >
                Réserver cette expérience
                <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-obsidian">
        <div className="section-container text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-syne font-bold text-3xl md:text-4xl text-white uppercase tracking-tight mb-6">
              Une question sur nos tarifs ?
            </h2>
            <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
              Contactez-nous pour un devis personnalisé ou toute information complémentaire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="services-cta-book-btn"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Réserver maintenant
                <ArrowRight size={18} />
              </a>
              <a
                href="tel:+33699393917"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                Appeler le salon
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
