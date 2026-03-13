import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, ZoomIn, ChevronLeft, ChevronRight as ChevronRightIcon } from "lucide-react";
import SEOHead from "../components/SEOHead";
import BookButton from "../components/BookButton";
import { trackPageView, trackEvent } from "../utils/analytics";
import { galleryImages, galleryCategories, getImagesByCategory } from "../config/images";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    trackPageView("gallery");
  }, []);

  const filteredImages = getImagesByCategory(activeCategory);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    trackEvent("gallery_filter", { category: categoryId });
  };

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setSelectedIndex(index);
    trackEvent("gallery_image_view", { imageId: image.id, category: image.category });
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const newIndex = direction === "next" 
      ? (selectedIndex + 1) % filteredImages.length
      : (selectedIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") navigateImage("next");
      if (e.key === "ArrowLeft") navigateImage("prev");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedImage, selectedIndex, filteredImages]);

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
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                data-testid={`gallery-filter-${cat.id}`}
                className={`px-5 py-3 text-[11px] uppercase tracking-[0.15em] whitespace-nowrap transition-all duration-500 flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? "bg-gold-500 text-black font-semibold"
                    : "bg-transparent text-neutral-500 hover:text-white border border-white/10 hover:border-gold-500/30"
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] ${activeCategory === cat.id ? "text-black/60" : "text-neutral-600"}`}>
                  ({cat.count})
                </span>
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
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  className={`gallery-item cursor-pointer relative group ${
                    image.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
                    image.size === 'tall' ? 'row-span-2' : 
                    image.size === 'wide' ? 'col-span-2' : ''
                  }`}
                  style={{ aspectRatio: image.size === 'tall' ? '1/2' : image.size === 'wide' ? '2/1' : '1' }}
                  onClick={() => openLightbox(image, index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-start justify-end p-4 md:p-6">
                    <span className="text-white text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {image.alt}
                    </span>
                    <span className="text-gold-500 text-xs uppercase tracking-wider mt-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      {galleryCategories.find(c => c.id === image.category)?.label}
                    </span>
                  </div>

                  {/* Zoom icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="text-gold-500 w-6 h-6" />
                  </div>

                  {/* Featured badge */}
                  {image.featured && (
                    <div className="absolute top-4 left-4 bg-gold-500 text-black text-[10px] uppercase tracking-wider px-2 py-1 font-semibold">
                      À la une
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-neutral-500">Aucune image dans cette catégorie</p>
            </div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 p-6 border border-gold-500/20 bg-gold-500/5"
          >
            <p className="text-center text-neutral-400 text-sm">
              <span className="text-gold-400 font-medium">Note :</span> Wear your Crown & Stay Klean{" "}
              <code className="bg-black/30 px-2 py-1 text-gold-400 text-xs">K L E A N   B A R B E R S H O P</code>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/98 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/60 hover:text-gold-400 transition-colors z-10 p-2"
              aria-label="Fermer"
            >
              <X size={32} />
            </button>

            {/* Navigation arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateImage("prev"); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-gold-400 transition-colors z-10 p-2"
              aria-label="Image précédente"
            >
              <ChevronLeft size={40} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigateImage("next"); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-gold-400 transition-colors z-10 p-2"
              aria-label="Image suivante"
            >
              <ChevronRightIcon size={40} />
            </button>
            
            {/* Image container */}
            <motion.div
              key={selectedImage.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full mx-4 md:mx-8"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <p className="text-white text-lg font-medium">{selectedImage.alt}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-gold-500 text-sm uppercase tracking-wider">
                    {galleryCategories.find(c => c.id === selectedImage.category)?.label}
                  </span>
                  <span className="text-neutral-500 text-sm">
                    {selectedIndex + 1} / {filteredImages.length}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Thumbnail strip */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex gap-2 max-w-2xl overflow-x-auto p-2">
              {filteredImages.slice(0, 8).map((img, idx) => (
                <button
                  key={img.id}
                  onClick={(e) => { e.stopPropagation(); openLightbox(img, idx); }}
                  className={`flex-shrink-0 w-16 h-16 overflow-hidden transition-all duration-300 ${
                    selectedImage.id === img.id 
                      ? "ring-2 ring-gold-500 opacity-100" 
                      : "opacity-40 hover:opacity-70"
                  }`}
                >
                  <img src={img.src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
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
            
            <BookButton source="gallery-cta">
              Réserver maintenant
            </BookButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
