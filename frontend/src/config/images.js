// ============================================================
// CONFIGURATION DES IMAGES - KLEAN BARBERSHOP
// ============================================================
// 
// Photos officielles du salon KLEAN Barbershop
// Mise à jour : Mars 2026
//
// ============================================================

// ==================== URLS DES IMAGES OFFICIELLES ====================

const KLEAN_IMAGES = {
  // === LOGO ===
  logo: "https://customer-assets.emergentagent.com/job_fce9c548-9710-46e0-a4cc-cb239f3ab916/artifacts/xln7yk79_KleanLogo.jpg",
  
  // === IMAGES PRINCIPALES ===
  
  // Hero - Barbier au travail avec client (tresses)
  prestation2: "https://customer-assets.emergentagent.com/job_barbershop-premium-1/artifacts/4ncrlub3_prestation2.png",
  
  // Rasage barbe - Rasoir traditionnel manche bois
  barbe1: "https://customer-assets.emergentagent.com/job_barbershop-premium-1/artifacts/ifyvw27w_barbe1.png",
  
  // Portrait du barbier avec logo KLEAN
  coiffeur: "https://customer-assets.emergentagent.com/job_barbershop-premium-1/artifacts/kn7fgtyr_coiffeur.png",
  
  // Intérieur du salon - Fauteuils et ring light
  interieur: "https://customer-assets.emergentagent.com/job_barbershop-premium-1/artifacts/mg986bps_interieur.png",
  
  // Contour précis - Hairline tondeuse
  contour: "https://customer-assets.emergentagent.com/job_barbershop-premium-1/artifacts/p1ahpprq_contour.jpg",
  
  // Façade du salon KLEAN avec enseigne
  facade: "https://customer-assets.emergentagent.com/job_barbershop-premium-1/artifacts/wc98jgcu_facade.jpg",
  
  // Dégradé classique - Coupe afro
  degrade1: "https://customer-assets.emergentagent.com/job_barbershop-premium-1/artifacts/zhyaom9z_degrade1.jpg",
  
  // Dégradé espagnol - Coupe texturée
  degradeEspagnol: "https://customer-assets.emergentagent.com/job_barbershop-premium-1/artifacts/4ppi5fg5_degradeespagnol.jpg",
  
  // Tresses / Nattes avec dégradé
  nattes1: "https://customer-assets.emergentagent.com/job_barbershop-premium-1/artifacts/aqf35940_nattes1.jpg",
  
  // Taper fade - Coupe moderne
  taper1: "https://customer-assets.emergentagent.com/job_barbershop-premium-1/artifacts/qom2w6om_taper1.jpg",
  
  // Taper fade 2 - Coupe moderne
  taper2: "https://customer-assets.emergentagent.com/job_fce9c548-9710-46e0-a4cc-cb239f3ab916/artifacts/hajoe9bg_taper2.jpg",
  
  // Tondeuses professionnelles - Outils premium
  tondeuses: "https://customer-assets.emergentagent.com/job_fce9c548-9710-46e0-a4cc-cb239f3ab916/artifacts/xktno822_tondeuses.jpg",
};

// ==================== IMAGES HERO & SECTIONS ====================

export const heroImages = {
  // Image principale du hero (page d'accueil) - Barbier travaillant sur tresses
  main: KLEAN_IMAGES.prestation2,
  
  // Image de fond pour les CTA
  ctaBackground: KLEAN_IMAGES.interieur,
};

export const sectionImages = {
  // Section "À propos" - Portrait du barbier avec logo KLEAN
  aboutBarbier: KLEAN_IMAGES.coiffeur,
  
  // Section "Pourquoi nous choisir" - Intérieur salon élégant
  whyUsInterior: KLEAN_IMAGES.interieur,
  
  // Section "Expérience VIP" - Barbier au travail
  vipExperience: KLEAN_IMAGES.prestation2,
  
  // Section "Expérience VIP" - Rasage barbe premium
  vipDetail: KLEAN_IMAGES.barbe1,
  
  // Page Contact - Façade du salon
  contactFacade: KLEAN_IMAGES.facade,
  
  // Page Contact - Vue intérieure du salon
  contactSalon: KLEAN_IMAGES.interieur,
  
  // Tondeuses professionnelles
  tondeuses: KLEAN_IMAGES.tondeuses,
};

// ==================== IMAGES AMBIANCE (Grille 4 images page accueil) ====================

export const ambianceImages = [
  {
    id: "ambiance-1",
    src: KLEAN_IMAGES.interieur,
    alt: "Intérieur salon KLEAN - Fauteuils premium",
    size: "large" // Grande image 2x2
  },
  {
    id: "ambiance-2",
    src: KLEAN_IMAGES.tondeuses,
    alt: "Tondeuses professionnelles KLEAN",
    size: "normal"
  },
  {
    id: "ambiance-3",
    src: KLEAN_IMAGES.barbe1,
    alt: "Rasage traditionnel - Rasoir manche bois",
    size: "normal"
  },
  {
    id: "ambiance-4",
    src: KLEAN_IMAGES.facade,
    alt: "Façade KLEAN Barbershop Tigery",
    size: "wide" // Image large 2x1
  }
];

// ==================== GALERIE PORTFOLIO ====================

export const galleryImages = [
  // ===== COUPES & DÉGRADÉS =====
  {
    id: 1,
    src: KLEAN_IMAGES.contour,
    category: "coupes",
    alt: "Contour précis - Hairline parfaite",
    size: "large",
    featured: true
  },
  {
    id: 2,
    src: KLEAN_IMAGES.degrade1,
    category: "coupes",
    alt: "Dégradé classique - Style afro",
    size: "normal"
  },
  {
    id: 3,
    src: KLEAN_IMAGES.degradeEspagnol,
    category: "coupes",
    alt: "Dégradé espagnol - Coupe texturée",
    size: "normal"
  },
  {
    id: 4,
    src: KLEAN_IMAGES.taper1,
    category: "coupes",
    alt: "Taper fade - Coupe moderne KLEAN",
    size: "tall"
  },
  {
    id: 5,
    src: KLEAN_IMAGES.taper2,
    category: "coupes",
    alt: "Taper fade - Style clean",
    size: "normal"
  },

  // ===== BARBE =====
  {
    id: 6,
    src: KLEAN_IMAGES.barbe1,
    category: "barbe",
    alt: "Rasage traditionnel - Rasoir manche bois",
    size: "large",
    featured: true
  },

  // ===== TRESSES / BRAIDS =====
  {
    id: 7,
    src: KLEAN_IMAGES.nattes1,
    category: "tresses",
    alt: "Tresses plaquées - Style cornrows",
    size: "large",
    featured: true
  },
  {
    id: 8,
    src: KLEAN_IMAGES.prestation2,
    category: "tresses",
    alt: "Réalisation de tresses - Expertise afro",
    size: "normal"
  },

  // ===== INTÉRIEUR DU SALON =====
  {
    id: 9,
    src: KLEAN_IMAGES.interieur,
    category: "interieur",
    alt: "Salon KLEAN - Vue intérieure premium",
    size: "large",
    featured: true
  },
  {
    id: 10,
    src: KLEAN_IMAGES.facade,
    category: "interieur",
    alt: "Façade KLEAN Barbershop Tigery",
    size: "wide"
  },
  {
    id: 11,
    src: KLEAN_IMAGES.coiffeur,
    category: "interieur",
    alt: "L'équipe KLEAN - Professionnalisme",
    size: "normal"
  },

  // ===== AMBIANCE =====
  {
    id: 12,
    src: KLEAN_IMAGES.tondeuses,
    category: "ambiance",
    alt: "Tondeuses professionnelles - Outils premium",
    size: "large",
    featured: true
  },
  {
    id: 13,
    src: KLEAN_IMAGES.interieur,
    category: "ambiance",
    alt: "Ambiance premium - Fauteuils et éclairage",
    size: "normal"
  },
  {
    id: 14,
    src: KLEAN_IMAGES.barbe1,
    category: "ambiance",
    alt: "L'art du rasage - Détail",
    size: "normal"
  }
];

// ==================== CATÉGORIES DE LA GALERIE ====================

export const galleryCategories = [
  { id: "all", label: "Tout", count: galleryImages.length },
  { id: "coupes", label: "Coupes & Dégradés", count: galleryImages.filter(i => i.category === "coupes").length },
  { id: "barbe", label: "Barbe", count: galleryImages.filter(i => i.category === "barbe").length },
  { id: "tresses", label: "Tresses & Braids", count: galleryImages.filter(i => i.category === "tresses").length },
  { id: "interieur", label: "Intérieur du salon", count: galleryImages.filter(i => i.category === "interieur").length },
  { id: "ambiance", label: "Ambiance", count: galleryImages.filter(i => i.category === "ambiance").length }
];

// ==================== FONCTIONS UTILITAIRES ====================

export const getImagesByCategory = (category) => {
  if (category === "all") return galleryImages;
  return galleryImages.filter(img => img.category === category);
};

export const getFeaturedImages = () => {
  return galleryImages.filter(img => img.featured);
};

// Export des URLs brutes pour utilisation directe
export { KLEAN_IMAGES };

export default {
  heroImages,
  sectionImages,
  ambianceImages,
  galleryImages,
  galleryCategories,
  getImagesByCategory,
  getFeaturedImages,
  KLEAN_IMAGES
};
