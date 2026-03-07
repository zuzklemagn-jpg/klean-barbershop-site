import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Award, Users, Heart, Scissors } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import BookButton, { BOOKING_URL } from "../components/BookButton";
import { trackPageView } from "../utils/analytics";
import { sectionImages, KLEAN_IMAGES } from "../config/images";

const values = [
  { icon: Scissors, title: "Excellence", description: "Chaque coupe est réalisée avec précision et attention aux détails." },
  { icon: Heart, title: "Passion", description: "L'art du barbier est notre vocation depuis des années." },
  { icon: Users, title: "Relation client", description: "Nous prenons le temps de comprendre vos envies." },
  { icon: Award, title: "Qualité", description: "Produits premium et équipements haut de gamme." }
];

const About = () => {
  useEffect(() => {
    trackPageView("about");
  }, []);

  return (
    <div data-testid="about-page" className="pt-24 bg-obsidian">
      <SEOHead page="about" />
      
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={KLEAN_IMAGES.interieur}
            alt="Salon KLEAN Barbershop Tigery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/95 to-obsidian/80" />
        </div>
        
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="premium-label mb-6 block">Notre histoire</span>
            
            <h1 className="font-syne font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white uppercase tracking-tighter mb-4">
              À propos de
            </h1>
            <p className="font-elegant text-3xl md:text-4xl text-gold-400 italic">
              KLEAN
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-spacing">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="premium-label mb-6 block">Qui sommes-nous</span>
              
              <h2 className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight mb-6 leading-[1.1]">
                L'art du barbier
                <span className="block gold-gradient-text mt-2">réinventé</span>
              </h2>
              
              <div className="gold-divider mb-8" />
              
              <div className="space-y-6 text-neutral-400 leading-loose">
                <p>
                  KLEAN Barbershop est né d'une passion pour l'art du grooming masculin. 
                  Situé au cœur de Tigery, dans l'Essonne, notre salon combine savoir-faire 
                  traditionnel et techniques modernes.
                </p>
                <p>
                  Notre mission : offrir à chaque client une expérience unique, bien plus 
                  qu'une simple coupe de cheveux. Un moment de détente dans un cadre élégant.
                </p>
                <p>
                  Spécialisés dans les coupes modernes, les dégradés précis et les coiffures 
                  afro, nous maîtrisons toutes les techniques pour sublimer votre style.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={sectionImages.aboutBarbier}
                  alt="Barbier KLEAN - Portrait professionnel"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border border-gold-500/20 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-spacing bg-charcoal">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="premium-label mb-6 block">Ce qui nous anime</span>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight mb-6">
              Nos valeurs
            </h2>
            <div className="gold-divider mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
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
                <p className="text-neutral-500 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Salon */}
      <section className="section-spacing bg-obsidian">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={KLEAN_IMAGES.interieur}
                    alt="Intérieur salon KLEAN"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden mt-8">
                  <img
                    src={KLEAN_IMAGES.barbe1}
                    alt="Rasage traditionnel"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="premium-label mb-6 block">Notre espace</span>
              
              <h2 className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight mb-6 leading-[1.1]">
                Un cadre
                <span className="block gold-gradient-text mt-2">d'exception</span>
              </h2>
              
              <div className="gold-divider mb-8" />
              
              <div className="space-y-6 text-neutral-400 leading-loose">
                <p>
                  Notre salon a été conçu pour vous offrir un moment unique. 
                  Design épuré, ambiance feutrée et équipements premium.
                </p>
                <p>
                  Murs noirs élégants, touches dorées raffinées, éclairage chaleureux 
                  et fauteuils de barbier haut de gamme.
                </p>
              </div>
              
              <Link
                to="/galerie"
                className="inline-flex items-center gap-3 text-gold-400 hover:text-gold-300 transition-colors mt-8 group"
              >
                <span className="text-sm uppercase tracking-[0.2em]">Voir la galerie</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-charcoal">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-syne font-bold text-3xl sm:text-4xl text-white uppercase tracking-tight mb-4">
              Venez nous rencontrer
            </h2>
            <p className="font-elegant text-xl text-gold-400 italic mb-10">
              Découvrez l'expérience KLEAN
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="about-book-btn"
              className="btn-book inline-flex items-center gap-3"
            >
              <span>Prendre rendez-vous</span>
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
