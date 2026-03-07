import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, Quote } from "lucide-react";
import SEOHead from "../components/SEOHead";
import BookButton from "../components/BookButton";
import { trackPageView } from "../utils/analytics";

const BOOKING_URL = "https://klean-barbershop-booking.setmore.com/book";

const reviews = [
  { id: 1, text: "Dégradé parfait et coupe très propre. Super accueil et salon magnifique. Je ne vais plus ailleurs !", author: "Maxime D.", rating: 5, service: "Coupe + Dégradé" },
  { id: 2, text: "Très professionnel. Un des meilleurs barbers du secteur. Le salon est vraiment classe.", author: "Karim B.", rating: 5, service: "Coupe classique" },
  { id: 3, text: "Excellent travail sur la barbe et la coupe. Je recommande vivement !", author: "Thomas L.", rating: 5, service: "Coupe + Barbe" },
  { id: 4, text: "Mes tresses sont parfaites, exactement ce que je voulais. Merci pour la patience et le professionnalisme.", author: "Aminata S.", rating: 5, service: "Tresses" },
  { id: 5, text: "Première visite et je suis conquis. Ambiance top, travail soigné, je reviendrai c'est sûr.", author: "Julien M.", rating: 5, service: "Coupe + Dégradé" },
  { id: 6, text: "Le rasage traditionnel est une vraie expérience. Serviettes chaudes, huiles, massage... On se sent comme un roi.", author: "Stéphane R.", rating: 5, service: "Rasage traditionnel" },
  { id: 7, text: "Super salon ! L'équipe est sympa et le résultat toujours au top. Ça fait 6 mois que j'y vais.", author: "Mohamed A.", rating: 5, service: "Coupe classique" },
  { id: 8, text: "Enfin un barbier qui comprend les cheveux afro. Mes locks sont parfaitement entretenues.", author: "Fabrice K.", rating: 5, service: "Locks" },
  { id: 9, text: "Rapport qualité-prix excellent. Le salon est beau, l'équipe pro. Que demander de plus ?", author: "Antoine P.", rating: 5, service: "Coupe aux ciseaux" }
];

const Reviews = () => {
  useEffect(() => {
    trackPageView("reviews");
  }, []);

  return (
    <div data-testid="reviews-page" className="pt-24 bg-obsidian">
      <SEOHead page="reviews" />
      
      {/* Hero */}
      <section className="section-spacing">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="premium-label mb-6 block">Témoignages</span>
            
            <h1 className="font-syne font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white uppercase tracking-tighter mb-4">
              Avis <span className="gold-gradient-text">clients</span>
            </h1>
            
            <div className="gold-divider mb-8" />
            
            <p className="text-neutral-400 text-lg leading-relaxed">
              Découvrez ce que nos clients pensent de leur expérience chez KLEAN. 
              Leur satisfaction est notre plus belle récompense.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-charcoal/50 border-y border-white/5">
        <div className="section-container py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "5.0", label: "Note moyenne" },
              { value: "200+", label: "Clients satisfaits" },
              { value: "100%", label: "Recommandent" },
              { value: "3 ans", label: "D'expérience" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="font-syne font-bold text-4xl md:text-5xl text-gold-400 block mb-2">
                  {stat.value}
                </span>
                <span className="text-neutral-600 text-xs uppercase tracking-[0.2em]">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-spacing">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.1, duration: 0.6 }}
                className="glass-card p-10 relative"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-gold-500/10" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-gold-500 text-gold-500" />
                  ))}
                </div>
                
                <p className="text-neutral-300 mb-8 leading-relaxed">
                  "{review.text}"
                </p>
                
                <div className="pt-6 border-t border-white/5">
                  <span className="text-white font-medium block">{review.author}</span>
                  <span className="text-neutral-600 text-sm">{review.service}</span>
                </div>
              </motion.div>
            ))}
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
              Rejoignez nos clients satisfaits
            </h2>
            <p className="font-elegant text-xl text-gold-400 italic mb-10">
              Vivez l'expérience KLEAN
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="reviews-book-btn"
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

export default Reviews;
