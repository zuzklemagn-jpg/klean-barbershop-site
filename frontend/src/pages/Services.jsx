import { motion } from "framer-motion";
import { ArrowRight, Clock, Scissors, Sparkles, Crown } from "lucide-react";

const BOOKING_URL = "https://klean-barbershop-booking.setmore.com/book";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
};

const services = {
  coupes: [
    { name: "Coupe classique", price: "20€", duration: "40 min", desc: "Coupe soignée avec finitions parfaites" },
    { name: "Coupe aux ciseaux", price: "25€", duration: "50 min", desc: "Technique traditionnelle pour un rendu naturel" },
  ],
  rasage: [
    { name: "Rasage tête tondeuse", price: "12€", duration: "20 min", desc: "Crâne net et propre" },
    { name: "Rasage tête", price: "15€", duration: "20 min", desc: "Rasage complet avec finitions" },
    { name: "Rasage tête + barbe", price: "20€", duration: "30 min", desc: "Combiné tête et barbe" },
    { name: "Rasage traditionnel tête + barbe", price: "30€", duration: "60 min", desc: "Expérience complète avec serviettes chaudes" },
  ],
  afro: [
    { name: "Braids / Tresses", price: "Sur devis", duration: "Variable", desc: "Tresses traditionnelles ou modernes" },
    { name: "Twists", price: "Sur devis", duration: "Variable", desc: "Twists deux brins ou trois brins" },
    { name: "Locks", price: "Sur devis", duration: "Variable", desc: "Entretien et création de locks" },
    { name: "Starter Locks", price: "Sur devis", duration: "Variable", desc: "Démarrage de vos locks" },
  ]
};

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="service-price-card group"
  >
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-white font-medium text-lg group-hover:text-gold-400 transition-colors duration-300">
          {service.name}
        </h3>
        <p className="text-neutral-600 text-sm mt-1">{service.desc}</p>
      </div>
      <span className="text-gold-400 font-syne font-bold text-2xl">
        {service.price}
      </span>
    </div>
    
    <div className="flex items-center justify-between pt-4 border-t border-white/5">
      <div className="flex items-center gap-2 text-neutral-600 text-sm">
        <Clock size={14} />
        <span>{service.duration}</span>
      </div>
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gold-500 text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-gold-300"
      >
        Réserver →
      </a>
    </div>
  </motion.div>
);

const Services = () => {
  return (
    <div data-testid="services-page" className="pt-24 bg-obsidian">
      {/* Hero */}
      <section className="section-spacing">
        <div className="section-container">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <span className="premium-label mb-6 block">Tarifs</span>
            
            <h1 className="font-syne font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white uppercase tracking-tighter mb-6">
              Nos <span className="gold-gradient-text">prestations</span>
            </h1>
            
            <div className="gold-divider mb-8" />
            
            <p className="text-neutral-400 text-lg leading-relaxed">
              Découvrez notre gamme complète de services pour un style impeccable. 
              Des coupes précises aux soins de la barbe, en passant par les coiffures afro.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coupes & Rasage */}
      <section data-testid="coupes-section" className="section-spacing bg-charcoal">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Coupes */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 bg-gold-500/10 flex items-center justify-center">
                  <Scissors className="w-7 h-7 text-gold-500" />
                </div>
                <div>
                  <h2 className="font-syne font-bold text-2xl md:text-3xl text-white uppercase tracking-tight">
                    Coupes
                  </h2>
                  <p className="text-neutral-600 text-sm">Précision et style</p>
                </div>
              </div>

              <div className="space-y-4">
                {services.coupes.map((service, index) => (
                  <ServiceCard key={service.name} service={service} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Rasage */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 bg-gold-500/10 flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-gold-500" />
                </div>
                <div>
                  <h2 className="font-syne font-bold text-2xl md:text-3xl text-white uppercase tracking-tight">
                    Rasage
                  </h2>
                  <p className="text-neutral-600 text-sm">Soins et finesse</p>
                </div>
              </div>

              <div className="space-y-4">
                {services.rasage.map((service, index) => (
                  <ServiceCard key={service.name} service={service} index={index} />
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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="premium-label mb-6 block">Expertise afro</span>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight mb-6">
              Tresses & Locks
            </h2>
            <div className="gold-divider mx-auto mb-8" />
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
                className="service-card text-center py-12"
              >
                <h3 className="font-syne font-semibold text-xl text-white uppercase tracking-wide mb-3">
                  {service.name}
                </h3>
                <p className="text-neutral-600 text-sm mb-4">{service.desc}</p>
                <span className="text-gold-400 text-sm font-medium">{service.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Experience */}
      <section data-testid="vip-preview-section" className="section-spacing bg-charcoal relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-500/20 to-transparent" />
        </div>
        
        <div className="section-container relative">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3998415/pexels-photo-3998415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Expérience KLEAN Exclusive"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Price badge */}
              <div className="absolute -bottom-6 -right-6 bg-gold-500 text-black p-8 text-center">
                <span className="font-syne font-bold text-4xl block">250€</span>
                <span className="text-sm uppercase tracking-widest opacity-80">3 heures</span>
              </div>
              
              {/* Decorative corner */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-l-2 border-t-2 border-gold-500/30" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Crown className="w-6 h-6 text-gold-500" />
                <span className="premium-label">Service premium</span>
              </div>
              
              <h2 className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight mb-6 leading-[1.1]">
                Expérience
                <span className="block gold-gradient-text mt-2">KLEAN Exclusive</span>
              </h2>
              
              <div className="gold-divider mb-8" />
              
              <p className="text-neutral-400 leading-relaxed mb-8">
                Une expérience premium incluant coupe complète, soin de la barbe, 
                serviettes chaudes, huiles essentielles et massage du cuir chevelu.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Coupe et coiffage complets",
                  "Rasage et soin de barbe",
                  "Serviettes chaudes relaxantes",
                  "Huiles essentielles premium",
                  "Massage du cuir chevelu",
                  "Boisson offerte"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 text-neutral-300"
                  >
                    <div className="w-2 h-2 bg-gold-500" />
                    {item}
                  </motion.li>
                ))}
              </ul>
              
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="services-vip-book-btn"
                className="btn-book inline-flex items-center gap-3"
              >
                <span>Réserver cette expérience</span>
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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-syne font-bold text-3xl sm:text-4xl text-white uppercase tracking-tight mb-4">
              Une question sur nos tarifs ?
            </h2>
            <p className="font-elegant text-xl text-gold-400 italic mb-10">
              Contactez-nous pour un devis personnalisé
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="services-cta-book-btn"
                className="btn-book inline-flex items-center justify-center gap-3"
              >
                <span>Réserver maintenant</span>
                <ArrowRight size={18} />
              </a>
              <a
                href="tel:+33699393917"
                className="btn-secondary inline-flex items-center justify-center gap-3"
              >
                <span>Appeler le salon</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
