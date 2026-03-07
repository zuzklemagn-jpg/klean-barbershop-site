import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, ZoomIn } from "lucide-react";
import SEOHead from "../components/SEOHead";
import BookButton from "../components/BookButton";
import { trackPageView } from "../utils/analytics";

const BOOKING_URL = "https://klean-barbershop-booking.setmore.com/book";

const categories = [
  { id: "all", label: "Tout" },
  { id: "coupes", label: "Coupes" },
  { id: "barbes", label: "Barbes" },
  { id: "tresses", label: "Tresses" },
  { id: "locks", label: "Locks" },
  { id: "salon", label: "Le Salon" }
];

const galleryImages = [
  { id: 1, src: "https://images.pexels.com/photos/2775272/pexels-photo-2775272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", category: "coupes", alt: "Coupe dégradé homme", size: "large" },
  { id: 2, src: "https://images.pexels.com/photos/3998415/pexels-photo-3998415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", category: "barbes", alt: "Soin de barbe", size: "normal" },
  { id: 3, src: "https://images.pexels.com/photos/3993307/pexels-photo-3993307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", category: "salon", alt: "Intérieur du salon", size: "normal" },
  { id: 4, src: "https://images.unsplash.com/photo-1521146764736-56c929d59c83?q=80&w=1887&auto=format&fit=crop", category: "tresses", alt: "Coiffure tresses", size: "tall" },
  { id: 5, src: "https://images.pexels.com/photos/16372646/pexels-photo-16372646.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", category: "salon", alt: "Détail fauteuil barbier", size: "normal" },
  { id: 6, src: "https://images.unsplash.com/photo-1503951914875-452162b7f300?q=80&w=2070&auto=format&fit=crop", category: "coupes", alt: "Coupe moderne", size: "large" },
  { id: 7, src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop", category: "locks", alt: "Coiffure locks", size: "tall" },
  { id: 8, src: "https://images.pexels.com/photos/2775272/pexels-photo-2775272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", category: "coupes", alt: "Dégradé précis", size: "normal" },
  { id: 9, src: "https://images.pexels.com/photos/3998415/pexels-photo-3998415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", category: "barbes", alt: "Rasage traditionnel", size: "normal" },
  { id: 10, src: "https://images.pexels.com/photos/3993307/pexels-photo-3993307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", category: "salon", alt: "Ambiance salon", size: "large" },
  { id: 11, src: "https://images.unsplash.com/photo-1521146764736-56c929d59c83?q=80&w=1887&auto=format&fit=crop", category: "tresses", alt: "Style tresses africaines", size: "normal" },
  { id: 12, src: "https://images.pexels.com/photos/16372646/pexels-photo-16372646.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", category: "salon", alt: "Équipement premium", size: "normal" }
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    trackPageView("gallery");
  }, []);

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div data-testid="gallery-page" className="pt-24 bg-obsidian">
      <SEOHead page="gallery" />
      
      {/* Hero */}
      <section className="section-spacing">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="premium-label mb-6 block">Portfolio</span>
            
            <h1 className="font-syne font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white uppercase tracking-tighter mb-6">
              <span className="gold-gradient-text">Galerie</span>
            </h1>
            
            <div className="gold-divider mb-8" />
            
            <p className="text-neutral-400 text-lg leading-relaxed">
              Découvrez nos réalisations : coupes, dégradés, barbes, tresses et locks. 
              Chaque client repart avec un style unique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-charcoal/50 border-y border-white/5 sticky top-20 md:top-24 z-20 backdrop-blur-lg">
        <div className="section-container py-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex gap-3 overflow-x-auto pb-2 -mb-2 scrollbar-hide"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                data-testid={`gallery-filter-${cat.id}`}
                className={`px-6 py-3 text-[11px] uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-500 ${
                  activeCategory === cat.id
                    ? "bg-gold-500 text-black font-semibold"
                    : "bg-transparent text-neutral-500 hover:text-white border border-white/10 hover:border-gold-500/30"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-spacing">
        <div className="section-container">
          <motion.div 
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`gallery-item cursor-pointer relative group ${
                    image.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
                    image.size === 'tall' ? 'row-span-2' : ''
                  }`}
                  style={{ aspectRatio: image.size === 'large' ? '1' : image.size === 'tall' ? '1/2' : '1' }}
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-between p-6">
                    <span className="text-white text-sm uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {image.alt}
                    </span>
                    <ZoomIn className="text-gold-500 w-6 h-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-neutral-600 mt-16 text-sm"
          >
            Photos à titre indicatif • Remplacez par vos propres réalisations
          </motion.p>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/98 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/60 hover:text-gold-400 transition-colors z-10"
              aria-label="Fermer"
            >
              <X size={32} />
            </button>
            
            {/* Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-lg">{selectedImage.alt}</p>
                <span className="text-gold-500 text-sm uppercase tracking-wider">{selectedImage.category}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="section-spacing bg-charcoal">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-syne font-bold text-3xl sm:text-4xl text-white uppercase tracking-tight mb-4">
              Envie du même résultat ?
            </h2>
            <p className="font-elegant text-xl text-gold-400 italic mb-10">
              Prenez rendez-vous et confiez votre style à nos experts
            </p>
            
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="gallery-book-btn"
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

export default Gallery;
