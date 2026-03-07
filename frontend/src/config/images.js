// ============================================================
// CONFIGURATION DES IMAGES - KLEAN BARBERSHOP
// ============================================================
// 
// Pour remplacer les images placeholder par vos vraies photos :
// 1. Uploadez vos images (Cloudinary, Imgur, ou hébergeur)
// 2. Remplacez les URLs ci-dessous par vos URLs
// 3. Les changements seront automatiquement appliqués sur tout le site
//
// Formats recommandés :
// - Format : JPG ou WebP
// - Taille : 1200x800px minimum pour la galerie
// - Poids : < 500Ko par image pour une bonne performance
//
// ============================================================

// ==================== IMAGES HERO & SECTIONS ====================

export const heroImages = {
  // Image principale du hero (page d'accueil)
  // Taille recommandée : 1920x1080px ou plus
  main: "https://images.unsplash.com/photo-1503951914875-452162b7f300?q=80&w=2070&auto=format&fit=crop",
  
  // Image de fond pour les CTA
  ctaBackground: "https://images.pexels.com/photos/2775272/pexels-photo-2775272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
};

export const sectionImages = {
  // Section "À propos" - Image barbier au travail
  aboutBarbier: "https://images.pexels.com/photos/2775272/pexels-photo-2775272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  
  // Section "Pourquoi nous choisir" - Intérieur salon
  whyUsInterior: "https://images.pexels.com/photos/3993307/pexels-photo-3993307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  
  // Section "Expérience VIP" - Image premium
  vipExperience: "https://images.pexels.com/photos/3998415/pexels-photo-3998415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  
  // Section "Expérience VIP" - Image détail
  vipDetail: "https://images.pexels.com/photos/2775272/pexels-photo-2775272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
};

// ==================== IMAGES AMBIANCE (Grille 4 images) ====================

export const ambianceImages = [
  {
    id: "ambiance-1",
    src: "https://images.pexels.com/photos/3998415/pexels-photo-3998415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Intérieur salon KLEAN - Fauteuils barbier",
    size: "large" // Grande image (2x2)
  },
  {
    id: "ambiance-2",
    src: "https://images.pexels.com/photos/3993307/pexels-photo-3993307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Ambiance salon - Décoration",
    size: "normal"
  },
  {
    id: "ambiance-3",
    src: "https://images.pexels.com/photos/16372646/pexels-photo-16372646.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Détail équipement barbier",
    size: "normal"
  },
  {
    id: "ambiance-4",
    src: "https://images.pexels.com/photos/2775272/pexels-photo-2775272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Barbier au travail",
    size: "wide" // Image large (2x1)
  }
];

// ==================== GALERIE PORTFOLIO ====================
// 
// Catégories disponibles :
// - coupes : Coupes et dégradés
// - barbe : Soins et rasage barbe  
// - tresses : Tresses et braids
// - locks : Locks et dreadlocks
// - interieur : Intérieur du salon
// - ambiance : Ambiance et détails
//
// Tailles disponibles :
// - normal : 1x1 (carré standard)
// - large : 2x2 (grande image mise en avant)
// - tall : 1x2 (image verticale)
// - wide : 2x1 (image horizontale)

export const galleryImages = [
  // ===== COUPES & DÉGRADÉS =====
  {
    id: 1,
    src: "https://images.pexels.com/photos/2775272/pexels-photo-2775272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    category: "coupes",
    alt: "Dégradé précis - Coupe homme",
    size: "large",
    featured: true
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1503951914875-452162b7f300?q=80&w=2070&auto=format&fit=crop",
    category: "coupes",
    alt: "Coupe moderne homme",
    size: "normal"
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/2775272/pexels-photo-2775272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    category: "coupes",
    alt: "Dégradé américain",
    size: "normal"
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/2775272/pexels-photo-2775272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    category: "coupes",
    alt: "Coupe classique soignée",
    size: "normal"
  },

  // ===== BARBE =====
  {
    id: 5,
    src: "https://images.pexels.com/photos/3998415/pexels-photo-3998415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    category: "barbe",
    alt: "Soin de barbe premium",
    size: "large",
    featured: true
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/3998415/pexels-photo-3998415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    category: "barbe",
    alt: "Rasage traditionnel",
    size: "normal"
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/3998415/pexels-photo-3998415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    category: "barbe",
    alt: "Taille de barbe",
    size: "normal"
  },

  // ===== TRESSES / BRAIDS =====
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1521146764736-56c929d59c83?q=80&w=1887&auto=format&fit=crop",
    category: "tresses",
    alt: "Tresses africaines",
    size: "tall",
    featured: true
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1521146764736-56c929d59c83?q=80&w=1887&auto=format&fit=crop",
    category: "tresses",
    alt: "Braids homme",
    size: "normal"
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1521146764736-56c929d59c83?q=80&w=1887&auto=format&fit=crop",
    category: "tresses",
    alt: "Cornrows",
    size: "normal"
  },

  // ===== LOCKS =====
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    category: "locks",
    alt: "Locks entretenues",
    size: "tall",
    featured: true
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    category: "locks",
    alt: "Starter locks",
    size: "normal"
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    category: "locks",
    alt: "Retwist locks",
    size: "normal"
  },

  // ===== INTÉRIEUR DU SALON =====
  {
    id: 14,
    src: "https://images.pexels.com/photos/3993307/pexels-photo-3993307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    category: "interieur",
    alt: "Vue intérieure salon KLEAN",
    size: "large",
    featured: true
  },
  {
    id: 15,
    src: "https://images.pexels.com/photos/16372646/pexels-photo-16372646.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    category: "interieur",
    alt: "Fauteuil barbier premium",
    size: "normal"
  },
  {
    id: 16,
    src: "https://images.pexels.com/photos/3993307/pexels-photo-3993307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    category: "interieur",
    alt: "Espace d'accueil",
    size: "normal"
  },

  // ===== AMBIANCE =====
  {
    id: 17,
    src: "https://images.pexels.com/photos/3998415/pexels-photo-3998415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    category: "ambiance",
    alt: "Ambiance premium KLEAN",
    size: "wide",
    featured: true
  },
  {
    id: 18,
    src: "https://images.pexels.com/photos/16372646/pexels-photo-16372646.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    category: "ambiance",
    alt: "Détails déco salon",
    size: "normal"
  },
  {
    id: 19,
    src: "https://images.pexels.com/photos/3993307/pexels-photo-3993307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    category: "ambiance",
    alt: "Éclairage ambiance",
    size: "normal"
  },
  {
    id: 20,
    src: "https://images.pexels.com/photos/3998415/pexels-photo-3998415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    category: "ambiance",
    alt: "Style KLEAN",
    size: "normal"
  }
];

// ==================== CATÉGORIES DE LA GALERIE ====================

export const galleryCategories = [
  { id: "all", label: "Tout", count: galleryImages.length },
  { id: "coupes", label: "Coupes & Dégradés", count: galleryImages.filter(i => i.category === "coupes").length },
  { id: "barbe", label: "Barbe", count: galleryImages.filter(i => i.category === "barbe").length },
  { id: "tresses", label: "Tresses & Braids", count: galleryImages.filter(i => i.category === "tresses").length },
  { id: "locks", label: "Locks", count: galleryImages.filter(i => i.category === "locks").length },
  { id: "interieur", label: "Intérieur du salon", count: galleryImages.filter(i => i.category === "interieur").length },
  { id: "ambiance", label: "Ambiance", count: galleryImages.filter(i => i.category === "ambiance").length }
];

// ==================== FONCTION UTILITAIRE ====================

// Récupérer les images par catégorie
export const getImagesByCategory = (category) => {
  if (category === "all") return galleryImages;
  return galleryImages.filter(img => img.category === category);
};

// Récupérer les images mises en avant
export const getFeaturedImages = () => {
  return galleryImages.filter(img => img.featured);
};

export default {
  heroImages,
  sectionImages,
  ambianceImages,
  galleryImages,
  galleryCategories,
  getImagesByCategory,
  getFeaturedImages
};
