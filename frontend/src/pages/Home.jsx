import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Scissors, 
  Award, 
  Users, 
  Sparkles, 
  ChevronRight,
  Star,
  ArrowRight
} from "lucide-react";

const BOOKING_URL = "https://klean-barbershop-booking.setmore.com/book";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const Home = () => {
  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <section 
        data-testid="hero-section"
        className="relative min-h-screen flex items-center justify-center"
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1503951914875-452162b7f300?q=80&w=2070&auto=format&fit=crop')`
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        
        {/* Content */}
        <div className="relative z-10 section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-gold-400 text-xs tracking-[0.4em] uppercase mb-6">
              Barbershop Premium à Tigery
            </span>
            
            <h1 className="font-syne font-bold text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-white uppercase tracking-tighter mb-6">
              <span className="block">L'art du</span>
              <span className="gold-gradient-text">style masculin</span>
            </h1>
            
            <p className="text-neutral-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Coupes précises, barbe soignée, tresses et locks dans un salon élégant et moderne.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-book-btn"
                className="btn-primary inline-flex items-center justify-center gap-2 text-sm"
              >
                Réserver un rendez-vous
                <ArrowRight size={18} />
              </a>
              <Link
                to="/prestations"
                data-testid="hero-services-btn"
                className="btn-secondary inline-flex items-center justify-center gap-2 text-sm"
              >
                Voir les prestations
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border border-white/20 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 bg-gold-500 rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section data-testid="intro-section" className="section-spacing bg-obsidian">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-4 block">
                Bienvenue chez KLEAN
              </span>
              <h2 className="font-syne font-bold text-3xl md:text-4xl lg:text-5xl text-white uppercase tracking-tight mb-6">
                L'expérience barbier<br />
                <span className="gold-gradient-text">premium</span>
              </h2>
              <p className="text-neutral-400 leading-relaxed mb-6">
                KLEAN Barbershop est un salon de barbier premium situé à Tigery, dans l'Essonne. 
                Nous proposons des coupes modernes, des dégradés précis, des soins de barbe 
                ainsi que des coiffures afro comme les tresses, twists et locks.
              </p>
              <p className="text-neutral-400 leading-relaxed mb-8">
                Notre objectif est d'offrir à chaque client une expérience de grooming complète 
                dans un cadre élégant et confortable.
              </p>
              <Link
                to="/a-propos"
                data-testid="intro-about-link"
                className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors uppercase text-sm tracking-wider"
              >
                En savoir plus
                <ChevronRight size={18} />
              </Link>
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
                  alt="Barbier professionnel au travail"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold-500/30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section data-testid="services-preview-section" className="section-spacing bg-charcoal">
        <div className="section-container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-4 block">
              Nos expertises
            </span>
            <h2 className="font-syne font-bold text-3xl md:text-4xl lg:text-5xl text-white uppercase tracking-tight">
              Prestations
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Coupes & Dégradés",
                desc: "Coupes classiques, dégradés précis et styles modernes",
                icon: Scissors,
                price: "À partir de 20€"
              },
              {
                title: "Barbe & Rasage",
                desc: "Rasage traditionnel, taille et soins de la barbe",
                icon: Award,
                price: "À partir de 12€"
              },
              {
                title: "Tresses & Locks",
                desc: "Braids, twists, locks et coiffures afro",
                icon: Sparkles,
                price: "Sur devis"
              },
              {
                title: "Rasage Tête",
                desc: "Tondeuse ou rasoir pour un crâne net",
                icon: Users,
                price: "À partir de 12€"
              },
              {
                title: "Soins Premium",
                desc: "Serviettes chaudes, huiles et massages",
                icon: Star,
                price: "Inclus"
              },
              {
                title: "Expérience Prestige",
                desc: "Service complet VIP de 3 heures",
                icon: Award,
                price: "250€"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="service-card group"
              >
                <service.icon className="w-8 h-8 text-gold-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-syne font-semibold text-xl text-white uppercase tracking-wide mb-2">
                  {service.title}
                </h3>
                <p className="text-neutral-400 text-sm mb-4">{service.desc}</p>
                <span className="text-gold-400 text-sm font-medium">{service.price}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/prestations"
              data-testid="services-view-all-btn"
              className="btn-secondary inline-flex items-center gap-2"
            >
              Voir tous les tarifs
              <ChevronRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section data-testid="why-us-section" className="section-spacing bg-obsidian">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-square bg-charcoal overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3993307/pexels-photo-3993307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Intérieur du salon KLEAN"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -top-6 -left-6 w-32 h-32 border border-gold-500/30" />
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="order-1 lg:order-2"
            >
              <span className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-4 block">
                Notre différence
              </span>
              <h2 className="font-syne font-bold text-3xl md:text-4xl lg:text-5xl text-white uppercase tracking-tight mb-8">
                Pourquoi choisir<br />
                <span className="gold-gradient-text">KLEAN ?</span>
              </h2>

              <div className="space-y-6">
                {[
                  "Dégradés propres et coupes modernes",
                  "Expertise cheveux afro",
                  "Salon élégant et ambiance premium",
                  "Attention aux détails",
                  "Service professionnel",
                  "Réservation simple"
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-2 h-2 bg-gold-500" />
                    <span className="text-neutral-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ambiance Section */}
      <section data-testid="ambiance-section" className="section-spacing bg-charcoal">
        <div className="section-container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-4 block">
              Une expérience unique
            </span>
            <h2 className="font-syne font-bold text-3xl md:text-4xl lg:text-5xl text-white uppercase tracking-tight mb-8">
              L'ambiance KLEAN
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-6">
              Le salon KLEAN a été conçu pour offrir une expérience unique.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              Murs noirs élégants, détails dorés raffinés, éclairage chaleureux et fauteuils 
              de barbier haut de gamme créent une atmosphère moderne et luxueuse. Chaque client 
              profite d'un moment de détente dans un espace calme et stylé.
            </p>
          </motion.div>

          {/* Image grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {[
              "https://images.pexels.com/photos/3998415/pexels-photo-3998415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              "https://images.pexels.com/photos/3993307/pexels-photo-3993307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              "https://images.pexels.com/photos/16372646/pexels-photo-16372646.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              "https://images.pexels.com/photos/2775272/pexels-photo-2775272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            ].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="aspect-square overflow-hidden"
              >
                <img
                  src={img}
                  alt={`Ambiance salon ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section data-testid="testimonials-section" className="section-spacing bg-obsidian">
        <div className="section-container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-4 block">
              Témoignages
            </span>
            <h2 className="font-syne font-bold text-3xl md:text-4xl lg:text-5xl text-white uppercase tracking-tight">
              Avis clients
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Dégradé parfait et coupe très propre. Super accueil et salon magnifique.",
                author: "Maxime D."
              },
              {
                text: "Très professionnel. Un des meilleurs barbers du secteur.",
                author: "Karim B."
              },
              {
                text: "Excellent travail sur la barbe et la coupe. Je recommande.",
                author: "Thomas L."
              }
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <p className="text-neutral-300 mb-6 leading-relaxed">"{review.text}"</p>
                <span className="text-gold-400 text-sm font-medium">{review.author}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/avis"
              data-testid="testimonials-view-all-btn"
              className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors uppercase text-sm tracking-wider"
            >
              Voir tous les avis
              <ChevronRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section data-testid="cta-section" className="section-spacing bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/2775272/pexels-photo-2775272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`
            }}
          />
        </div>
        
        <div className="section-container relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-syne font-bold text-3xl md:text-4xl lg:text-5xl text-white uppercase tracking-tight mb-6">
              Prêt pour une coupe<br />
              <span className="gold-gradient-text">propre et stylée ?</span>
            </h2>
            <p className="text-neutral-400 mb-10">
              Réservez votre créneau et vivez l'expérience KLEAN.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="cta-book-btn"
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

export default Home;
