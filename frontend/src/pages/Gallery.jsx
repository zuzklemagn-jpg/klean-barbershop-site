import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

const BOOKING_URL = "https://klean-barbershop-booking.setmore.com/book";

const categories = [
  { id: "all", label: "Tout" },
  { id: "coupes", label: "Coupes & Dégradés" },
  { id: "barbes", label: "Barbes" },
  { id: "tresses", label: "Tresses" },
  { id: "locks", label: "Locks" },
  { id: "salon", label: "Le Salon" }
];

const galleryImages = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/2775272/pexels-photo-2775272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "coupes",
    alt: "Coupe dégradé homme"
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/3998415/pexels-photo-3998415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "barbes",
    alt: "Soin de barbe"
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/3993307/pexels-photo-3993307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "salon",
    alt: "Intérieur du salon"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1521146764736-56c929d59c83?q=80&w=1887&auto=format&fit=crop",
    category: "tresses",
    alt: "Coiffure tresses"
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/16372646/pexels-photo-16372646.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "salon",
    alt: "Détail fauteuil barbier"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1503951914875-452162b7f300?q=80&w=2070&auto=format&fit=crop",
    category: "coupes",
    alt: "Coupe moderne"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    category: "locks",
    alt: "Coiffure locks"
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/2775272/pexels-photo-2775272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "coupes",
    alt: "Dégradé précis"
  },
  {
    id: 9,
    src: "https://images.pexels.com/photos/3998415/pexels-photo-3998415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "barbes",
    alt: "Rasage traditionnel"
  },
  {
    id: 10,
    src: "https://images.pexels.com/photos/3993307/pexels-photo-3993307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "salon",
    alt: "Ambiance salon"
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1521146764736-56c929d59c83?q=80&w=1887&auto=format&fit=crop",
    category: "tresses",
    alt: "Style tresses africaines"
  },
  {
    id: 12,
    src: "https://images.pexels.com/photos/16372646/pexels-photo-16372646.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "salon",
    alt: "Équipement premium"
  }
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div data-testid="gallery-page" className="pt-24">
      {/* Hero */}
      <section className="section-spacing bg-obsidian">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase mb-4 block">
              Notre travail
            </span>
            <h1 className="font-syne font-bold text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tighter mb-6">
              <span className="gold-gradient-text">Galerie</span>
            </h1>
            <p className="text-neutral-400 text-lg leading-relaxed">
              Découvrez nos réalisations : coupes, dégradés, barbes, tresses et locks. 
              Chaque client repart avec un style unique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-charcoal border-y border-white/5 sticky top-20 md:top-24 z-20">
        <div className="section-container py-4">
          <div className="flex gap-2 overflow-x-auto pb-2 -mb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                data-testid={`gallery-filter-${cat.id}`}
                className={`px-6 py-3 text-xs uppercase tracking-[0.15em] whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-gold-500 text-black font-semibold"
                    : "bg-transparent text-neutral-400 hover:text-white border border-white/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-spacing bg-obsidian">
        <div className="section-container">
          <motion.div 
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="gallery-item aspect-square cursor-pointer group relative"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-sm uppercase tracking-wider">
                      Voir
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-neutral-500 mt-12 text-sm"
          >
            Photos à titre indicatif. Remplacez par vos propres réalisations.
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
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white hover:text-gold-400 transition-colors"
              aria-label="Fermer"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="section-spacing bg-charcoal">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-syne font-bold text-3xl md:text-4xl text-white uppercase tracking-tight mb-6">
              Envie du même résultat ?
            </h2>
            <p className="text-neutral-400 mb-10 max-w-xl mx-auto">
              Prenez rendez-vous et confiez votre style à nos experts.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="gallery-book-btn"
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

export default Gallery;
