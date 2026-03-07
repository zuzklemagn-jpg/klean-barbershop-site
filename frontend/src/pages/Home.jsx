import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Scissors, 
  Award, 
  Sparkles, 
  ChevronRight,
  Star,
  Clock
} from "lucide-react";
import SEOHead from "../components/SEOHead";
import BookButton from "../components/BookButton";
import GoogleReviewsWidget from "../components/GoogleReviewsWidget";
import { trackPageView } from "../utils/analytics";

const BOOKING_URL = "https://klean-barbershop-booking.setmore.com/book";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const Home = () => {
  // Track page view on mount
  useEffect(() => {
    trackPageView("home");
  }, []);

  return (
    <div data-testid="home-page" className="bg-obsidian">
      <SEOHead page="home" />
      
      {/* ==================== HERO SECTION ==================== */}
      <section 
        data-testid="hero-section"
        className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1503951914875-452162b7f300?q=80&w=2070&auto=format&fit=crop"
            alt="KLEAN Barbershop - Barbier Premium Tigery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
          <div className="absolute inset-0 hero-vignette" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 section-container text-center px-6">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            {/* Premium Label */}
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="premium-label">Barbershop Premium • Tigery (91)</span>
            </motion.div>
            
            {/* Main Title */}
            <motion.h1 
              variants={fadeInUp}
              className="font-syne font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white uppercase tracking-tight mb-4"
            >
              KLEAN
            </motion.h1>
            
            {/* Elegant Subtitle */}
            <motion.p 
              variants={fadeInUp}
              className="font-elegant text-2xl sm:text-3xl md:text-4xl text-gold-400 italic mb-8"
            >
              L'art du grooming moderne
            </motion.p>
            
            {/* Description */}
            <motion.p 
              variants={fadeInUp}
              className="text-neutral-400 text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed"
            >
              Coupes précises, barbe soignée, tresses et locks dans un salon premium à Tigery.
            </motion.p>
            
            {/* CTA Button */}
            <motion.div variants={fadeInUp}>
              <BookButton source="hero">
                Réserver un rendez-vous
              </BookButton>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator hidden md:block">
          <div className="scroll-indicator-line" />
        </div>

        {/* Decorative corners */}
        <div className="absolute bottom-20 left-10 w-20 h-20 border-l border-b border-gold-500/20 hidden lg:block" />
        <div className="absolute top-32 right-10 w-20 h-20 border-r border-t border-gold-500/20 hidden lg:block" />
      </section>

      {/* ==================== INTRO SECTION ==================== */}
      <section data-testid="intro-section" className="section-spacing bg-obsidian relative">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <span className="premium-label mb-6 block">Bienvenue</span>
              
              <h2 className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight mb-8 leading-[1.1]">
                L'expérience barbier
                <span className="block gold-gradient-text mt-2">Premium</span>
              </h2>
              
              <div className="gold-divider mb-8" />
              
              <p className="text-neutral-400 leading-loose mb-6 text-base md:text-lg">
                KLEAN Barbershop est un salon de barbier premium situé à Tigery, dans l'Essonne. 
                Nous proposons des coupes modernes, des dégradés précis, des soins de barbe 
                ainsi que des coiffures afro comme les tresses, twists et locks.
              </p>
              
              <p className="text-neutral-500 leading-loose mb-10">
                Notre objectif est d'offrir à chaque client une expérience de grooming complète 
                dans un cadre élégant et confortable.
              </p>
              
              <Link
                to="/a-propos"
                data-testid="intro-about-link"
                className="group inline-flex items-center gap-3 text-gold-400 hover:text-gold-300 transition-colors"
              >
                <span className="text-sm uppercase tracking-[0.2em]">Découvrir notre histoire</span>
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2775272/pexels-photo-2775272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Barbier professionnel - Coupe homme Tigery"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border border-gold-500/20 -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 border-l border-t border-gold-500/30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES SECTION ==================== */}
      <section data-testid="services-preview-section" className="section-spacing bg-charcoal relative">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        
        <div className="section-container relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="premium-label mb-6 block">Nos expertises</span>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight mb-6">
              Prestations
            </h2>
            <div className="gold-divider mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Coupes & Dégradés",
                desc: "Coupes classiques, dégradés précis et styles modernes réalisés avec expertise",
                icon: Scissors,
                price: "À partir de 20€",
                duration: "40-50 min"
              },
              {
                title: "Barbe & Rasage",
                desc: "Rasage traditionnel, taille et soins de la barbe avec serviettes chaudes",
                icon: Award,
                price: "À partir de 12€",
                duration: "20-60 min"
              },
              {
                title: "Tresses & Locks",
                desc: "Braids, twists, locks et coiffures afro par des experts",
                icon: Sparkles,
                price: "Sur devis",
                duration: "Variable"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="service-card group"
              >
                <div className="flex items-start justify-between mb-6">
                  <service.icon className="w-10 h-10 text-gold-500 group-hover:scale-110 transition-transform duration-500" />
                  <span className="text-gold-400 font-syne font-bold text-xl">{service.price}</span>
                </div>
                
                <h3 className="font-syne font-semibold text-xl text-white uppercase tracking-wide mb-3">
                  {service.title}
                </h3>
                
                <p className="text-neutral-500 text-sm mb-6 leading-relaxed">{service.desc}</p>
                
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="flex items-center gap-2 text-neutral-600 text-sm">
                    <Clock size={14} />
                    <span>{service.duration}</span>
                  </div>
                  <BookButton source={`services-${service.title}`} variant="secondary" size="small" className="!p-0 !border-0">
                    <span className="text-gold-400 text-sm uppercase tracking-wider hover:text-gold-300">Réserver</span>
                  </BookButton>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link
              to="/prestations"
              data-testid="services-view-all-btn"
              className="btn-secondary inline-flex items-center gap-3"
            >
              <span>Voir tous les tarifs</span>
              <ChevronRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ==================== GOOGLE REVIEWS WIDGET ==================== */}
      <GoogleReviewsWidget />

      {/* ==================== WHY US SECTION ==================== */}
      <section data-testid="why-us-section" className="section-spacing bg-obsidian">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3993307/pexels-photo-3993307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Intérieur salon barbier Tigery - KLEAN Barbershop"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -top-6 -left-6 w-full h-full border border-gold-500/20 -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <span className="premium-label mb-6 block">Notre différence</span>
              
              <h2 className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight mb-8 leading-[1.1]">
                Pourquoi choisir
                <span className="block gold-gradient-text mt-2">KLEAN ?</span>
              </h2>
              
              <div className="gold-divider mb-10" />

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
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-5 group"
                  >
                    <div className="w-3 h-3 bg-gold-500 group-hover:scale-125 transition-transform" />
                    <span className="text-neutral-300 group-hover:text-white transition-colors">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== AMBIANCE SECTION ==================== */}
      <section data-testid="ambiance-section" className="section-spacing bg-charcoal">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <span className="premium-label mb-6 block">Une expérience unique</span>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight mb-6">
              L'ambiance KLEAN
            </h2>
            <div className="gold-divider mx-auto mb-10" />
            <p className="text-neutral-400 text-lg leading-loose">
              Murs noirs élégants, détails dorés raffinés, éclairage chaleureux et fauteuils 
              de barbier haut de gamme créent une atmosphère moderne et luxueuse.
            </p>
          </motion.div>

          {/* Premium image grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { src: "https://images.pexels.com/photos/3998415/pexels-photo-3998415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", span: "col-span-2 row-span-2" },
              { src: "https://images.pexels.com/photos/3993307/pexels-photo-3993307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", span: "" },
              { src: "https://images.pexels.com/photos/16372646/pexels-photo-16372646.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", span: "" },
              { src: "https://images.pexels.com/photos/2775272/pexels-photo-2775272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", span: "col-span-2" }
            ].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`gallery-item aspect-square ${img.span} overflow-hidden cursor-pointer`}
              >
                <img
                  src={img.src}
                  alt={`Ambiance salon barbier Tigery ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section data-testid="cta-section" className="section-spacing bg-obsidian relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/2775272/pexels-photo-2775272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/95 to-obsidian" />
        </div>
        
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <span className="premium-label mb-6 block">Prêt ?</span>
            
            <h2 className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight mb-4">
              Prêt pour une coupe
            </h2>
            <p className="font-elegant text-2xl md:text-3xl text-gold-400 italic mb-10">
              propre et stylée ?
            </p>
            
            <BookButton source="cta-home">
              Réserver mon rendez-vous
            </BookButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
