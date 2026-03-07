import { motion } from "framer-motion";
import { ArrowRight, Award, Users, Heart, Scissors } from "lucide-react";
import { Link } from "react-router-dom";

const BOOKING_URL = "https://klean-barbershop-booking.setmore.com/book";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const values = [
  {
    icon: Scissors,
    title: "Excellence",
    description: "Chaque coupe est réalisée avec précision et attention aux détails."
  },
  {
    icon: Heart,
    title: "Passion",
    description: "L'art du barbier est notre vocation depuis des années."
  },
  {
    icon: Users,
    title: "Relation client",
    description: "Nous prenons le temps de comprendre vos envies et votre style."
  },
  {
    icon: Award,
    title: "Qualité",
    description: "Produits premium et équipements haut de gamme."
  }
];

const About = () => {
  return (
    <div data-testid="about-page" className="pt-24">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3993307/pexels-photo-3993307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/95 to-obsidian/80" />
        
        <div className="section-container relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="max-w-2xl"
          >
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-4 block">
              Notre histoire
            </span>
            <h1 className="font-syne font-bold text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tighter mb-6">
              À propos de<br />
              <span className="gold-gradient-text">KLEAN</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story */}
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
                Qui sommes-nous
              </span>
              <h2 className="font-syne font-bold text-3xl md:text-4xl text-white uppercase tracking-tight mb-6">
                L'art du barbier<br />
                <span className="gold-gradient-text">réinventé</span>
              </h2>
              <div className="space-y-6 text-neutral-400 leading-relaxed">
                <p>
                  KLEAN Barbershop est né d'une passion pour l'art du grooming masculin. 
                  Situé au cœur de Tigery, dans l'Essonne, notre salon combine savoir-faire 
                  traditionnel et techniques modernes.
                </p>
                <p>
                  Notre mission : offrir à chaque client une expérience unique, bien plus 
                  qu'une simple coupe de cheveux. Un moment de détente dans un cadre élégant, 
                  avec une attention particulière portée à chaque détail.
                </p>
                <p>
                  Spécialisés dans les coupes modernes, les dégradés précis et les coiffures 
                  afro (tresses, twists, locks), nous maîtrisons toutes les techniques pour 
                  sublimer votre style.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] bg-charcoal overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2775272/pexels-photo-2775272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Barbier KLEAN au travail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 border border-gold-500/30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Ce qui nous anime
            </span>
            <h2 className="font-syne font-bold text-3xl md:text-4xl text-white uppercase tracking-tight">
              Nos valeurs
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gold-500/10 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-gold-500" />
                </div>
                <h3 className="font-syne font-semibold text-xl text-white uppercase tracking-wide mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Salon */}
      <section className="section-spacing bg-obsidian">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-charcoal overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3993307/pexels-photo-3993307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Intérieur salon"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square bg-charcoal overflow-hidden mt-8">
                  <img
                    src="https://images.pexels.com/photos/16372646/pexels-photo-16372646.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Détail équipement"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="order-1 lg:order-2"
            >
              <span className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-4 block">
                Notre espace
              </span>
              <h2 className="font-syne font-bold text-3xl md:text-4xl text-white uppercase tracking-tight mb-6">
                Un cadre<br />
                <span className="gold-gradient-text">d'exception</span>
              </h2>
              <div className="space-y-6 text-neutral-400 leading-relaxed">
                <p>
                  Notre salon a été conçu pour vous offrir un moment unique. 
                  Design épuré, ambiance feutrée et équipements premium créent 
                  une atmosphère propice à la détente.
                </p>
                <p>
                  Murs noirs élégants, touches dorées raffinées, éclairage chaleureux 
                  et fauteuils de barbier haut de gamme : chaque détail a été pensé 
                  pour votre confort.
                </p>
              </div>
              <Link
                to="/galerie"
                className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors uppercase text-sm tracking-wider mt-8"
              >
                Voir la galerie
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-charcoal">
        <div className="section-container text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-syne font-bold text-3xl md:text-4xl text-white uppercase tracking-tight mb-6">
              Venez nous rencontrer
            </h2>
            <p className="text-neutral-400 mb-10 max-w-xl mx-auto">
              Découvrez l'expérience KLEAN et confiez votre style à nos experts.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="about-book-btn"
              className="btn-primary inline-flex items-center gap-2"
            >
              Prendre rendez-vous
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
