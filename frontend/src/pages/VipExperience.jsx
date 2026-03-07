import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Heart, Wind, Droplets, Hand } from "lucide-react";

const BOOKING_URL = "https://klean-barbershop-booking.setmore.com/book";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const vipFeatures = [
  {
    icon: Droplets,
    title: "Serviettes chaudes",
    description: "Serviettes chaudes pour ouvrir les pores et préparer la peau au rasage"
  },
  {
    icon: Sparkles,
    title: "Produits de qualité",
    description: "Utilisation exclusive de produits haut de gamme pour le soin"
  },
  {
    icon: Heart,
    title: "Soins relaxants",
    description: "Moments de détente avec huiles essentielles et ambiance apaisante"
  },
  {
    icon: Hand,
    title: "Attention personnalisée",
    description: "Service sur-mesure adapté à vos besoins et préférences"
  },
  {
    icon: Wind,
    title: "Ambiance premium",
    description: "Cadre luxueux et atmosphère relaxante pour une expérience unique"
  }
];

const VipExperience = () => {
  return (
    <div data-testid="vip-page" className="pt-24">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3998415/pexels-photo-3998415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/90 to-obsidian/70" />
        
        <div className="section-container relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="max-w-2xl"
          >
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-4 block">
              Service exclusif
            </span>
            <h1 className="font-syne font-bold text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tighter mb-6">
              L'expérience<br />
              <span className="gold-gradient-text">KLEAN</span>
            </h1>
            <p className="text-neutral-300 text-lg leading-relaxed">
              Chez KLEAN, une coupe de cheveux devient un véritable moment de détente. 
              Découvrez notre service premium pour une expérience de grooming inoubliable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section-spacing bg-charcoal">
        <div className="section-container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-4 block">
              Nos prestations VIP
            </span>
            <h2 className="font-syne font-bold text-3xl md:text-4xl text-white uppercase tracking-tight">
              Ce qui nous distingue
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vipFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="service-card"
              >
                <feature.icon className="w-10 h-10 text-gold-500 mb-6" />
                <h3 className="font-syne font-semibold text-xl text-white uppercase tracking-wide mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Package */}
      <section className="section-spacing bg-obsidian">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-4 block">
                Forfait premium
              </span>
              <h2 className="font-syne font-bold text-3xl md:text-4xl text-white uppercase tracking-tight mb-6">
                Expérience<br />
                <span className="gold-gradient-text">KLEAN Exclusive</span>
              </h2>
              
              <div className="flex items-baseline gap-4 mb-8">
                <span className="font-syne font-bold text-5xl text-gold-400">250€</span>
                <span className="text-neutral-500 uppercase tracking-wider">/ 3 heures</span>
              </div>

              <p className="text-neutral-400 leading-relaxed mb-8">
                Une expérience premium incluant tous nos services dans un cadre luxueux. 
                Profitez de 3 heures entièrement dédiées à votre bien-être et votre style.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Consultation personnalisée",
                  "Coupe et coiffage complets",
                  "Rasage traditionnel et soin barbe",
                  "Serviettes chaudes relaxantes",
                  "Massage crânien aux huiles essentielles",
                  "Finitions et styling",
                  "Boisson premium offerte"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-2 h-2 bg-gold-500" />
                    <span className="text-neutral-300">{item}</span>
                  </motion.div>
                ))}
              </div>

              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="vip-book-btn"
                className="btn-primary inline-flex items-center gap-2"
              >
                Réserver l'expérience
                <ArrowRight size={18} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[3/4] bg-charcoal overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2775272/pexels-photo-2775272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Expérience VIP KLEAN"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 border border-gold-500/30" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold-500/10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ambiance */}
      <section className="section-spacing bg-charcoal">
        <div className="section-container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-4 block">
              Notre cadre
            </span>
            <h2 className="font-syne font-bold text-3xl md:text-4xl text-white uppercase tracking-tight mb-6">
              Un salon d'exception
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              Le salon KLEAN a été pensé dans les moindres détails pour vous offrir 
              un moment d'évasion. Design contemporain, ambiance feutrée et équipements 
              haut de gamme pour une expérience unique.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "https://images.pexels.com/photos/3993307/pexels-photo-3993307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              "https://images.pexels.com/photos/16372646/pexels-photo-16372646.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              "https://images.pexels.com/photos/2775272/pexels-photo-2775272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              "https://images.pexels.com/photos/3998415/pexels-photo-3998415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            ].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="aspect-square overflow-hidden gallery-item"
              >
                <img
                  src={img}
                  alt={`Salon KLEAN ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
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
              Prêt à vivre<br />
              <span className="gold-gradient-text">l'expérience KLEAN ?</span>
            </h2>
            <p className="text-neutral-400 mb-10 max-w-xl mx-auto">
              Réservez votre créneau et offrez-vous un moment de détente et de style.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="vip-cta-book-btn"
              className="btn-primary inline-flex items-center gap-2"
            >
              Réserver maintenant
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default VipExperience;
