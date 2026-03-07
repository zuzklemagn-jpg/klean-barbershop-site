import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Heart, Wind, Droplets, Hand, Crown } from "lucide-react";

const BOOKING_URL = "https://klean-barbershop-booking.setmore.com/book";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
};

const vipFeatures = [
  { icon: Droplets, title: "Serviettes chaudes", description: "Serviettes chaudes pour ouvrir les pores et préparer la peau" },
  { icon: Sparkles, title: "Produits premium", description: "Utilisation exclusive de produits haut de gamme" },
  { icon: Heart, title: "Soins relaxants", description: "Moments de détente avec huiles essentielles" },
  { icon: Hand, title: "Attention personnalisée", description: "Service sur-mesure adapté à vos besoins" },
  { icon: Wind, title: "Ambiance premium", description: "Cadre luxueux et atmosphère relaxante" }
];

const VipExperience = () => {
  return (
    <div data-testid="vip-page" className="pt-24 bg-obsidian">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3998415/pexels-photo-3998415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Expérience VIP"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/95 to-obsidian/70" />
        </div>
        
        <div className="section-container relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <Crown className="w-5 h-5 text-gold-500" />
              <span className="premium-label">Service exclusif</span>
            </div>
            
            <h1 className="font-syne font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white uppercase tracking-tighter mb-4">
              L'expérience
            </h1>
            <p className="font-elegant text-3xl md:text-4xl text-gold-400 italic mb-8">
              KLEAN
            </p>
            
            <div className="gold-divider mb-8" />
            
            <p className="text-neutral-400 text-lg leading-relaxed">
              Chez KLEAN, une coupe de cheveux devient un véritable moment de détente. 
              Découvrez notre service premium pour une expérience inoubliable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section-spacing bg-charcoal">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="premium-label mb-6 block">Nos prestations VIP</span>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight mb-6">
              Ce qui nous distingue
            </h2>
            <div className="gold-divider mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vipFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="service-card text-center py-12"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gold-500/10 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-gold-500" />
                </div>
                <h3 className="font-syne font-semibold text-xl text-white uppercase tracking-wide mb-4">
                  {feature.title}
                </h3>
                <p className="text-neutral-500">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Package */}
      <section className="section-spacing bg-obsidian">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="premium-label mb-6 block">Forfait premium</span>
              
              <h2 className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight mb-6 leading-[1.1]">
                Expérience
                <span className="block gold-gradient-text mt-2">KLEAN Exclusive</span>
              </h2>
              
              <div className="flex items-baseline gap-4 mb-8">
                <span className="font-syne font-bold text-6xl text-gold-400">250€</span>
                <span className="text-neutral-600 uppercase tracking-wider">/ 3 heures</span>
              </div>
              
              <div className="gold-divider mb-8" />

              <p className="text-neutral-400 leading-relaxed mb-10">
                Une expérience premium incluant tous nos services dans un cadre luxueux. 
                3 heures entièrement dédiées à votre bien-être et votre style.
              </p>

              <div className="space-y-4 mb-12">
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
                    transition={{ delay: index * 0.08 }}
                    className="flex items-center gap-5"
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
                className="btn-book inline-flex items-center gap-3"
              >
                <span>Réserver l'expérience</span>
                <ArrowRight size={18} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2775272/pexels-photo-2775272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Expérience VIP KLEAN"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-full h-full border border-gold-500/20 -z-10" />
              <div className="absolute -top-4 -right-4 w-24 h-24 border-r-2 border-t-2 border-gold-500/30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ambiance */}
      <section className="section-spacing bg-charcoal">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <span className="premium-label mb-6 block">Notre cadre</span>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl text-white uppercase tracking-tight mb-6">
              Un salon d'exception
            </h2>
            <div className="gold-divider mx-auto mb-8" />
            <p className="text-neutral-400 leading-loose">
              Design contemporain, ambiance feutrée et équipements haut de gamme 
              pour une expérience unique.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
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
                className="gallery-item aspect-square overflow-hidden"
              >
                <img src={img} alt={`Salon KLEAN ${index + 1}`} className="w-full h-full object-cover" />
              </motion.div>
            ))}
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
          >
            <h2 className="font-syne font-bold text-3xl sm:text-4xl text-white uppercase tracking-tight mb-4">
              Prêt à vivre
            </h2>
            <p className="font-elegant text-2xl md:text-3xl text-gold-400 italic mb-10">
              l'expérience KLEAN ?
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="vip-cta-book-btn"
              className="btn-book inline-flex items-center gap-3"
            >
              <span>Réserver maintenant</span>
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default VipExperience;
