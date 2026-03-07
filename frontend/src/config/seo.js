// SEO Configuration for KLEAN Barbershop
// Optimized for local search: barbier Tigery, barbershop Essonne, coiffeur homme

export const seoConfig = {
  siteName: "KLEAN Barbershop",
  siteUrl: "https://klean-barbershop.fr",
  defaultImage: "https://images.pexels.com/photos/2775272/pexels-photo-2775272.jpeg",
  
  pages: {
    home: {
      title: "KLEAN Barbershop Tigery | Barbier Premium & Coiffeur Homme Essonne",
      description: "Barbier premium à Tigery (91). Coupes modernes, dégradés précis, tresses, locks et soins barbe. Salon haut de gamme dans l'Essonne. Réservez votre rendez-vous.",
      keywords: "barbier Tigery, barbershop Tigery, coiffeur homme Tigery, barbier Essonne, dégradé Tigery, coiffure homme 91250"
    },
    services: {
      title: "Tarifs & Prestations | KLEAN Barbershop Tigery - Coupes, Barbe, Tresses",
      description: "Découvrez nos tarifs : coupes dès 20€, rasage barbe, tresses et locks. Barbier professionnel à Tigery (91). Prix transparents, service premium.",
      keywords: "tarif barbier Tigery, prix coupe homme Essonne, coiffeur pas cher Tigery, rasage barbe 91"
    },
    vip: {
      title: "Expérience VIP | Barbier Luxe Tigery - KLEAN Barbershop",
      description: "Offrez-vous l'expérience KLEAN Exclusive : 3h de soins premium avec coupe, barbe, massage et serviettes chaudes. Barbier haut de gamme à Tigery.",
      keywords: "barbier luxe Tigery, experience VIP barbershop, soin premium homme Essonne"
    },
    gallery: {
      title: "Galerie | Coupes & Réalisations - KLEAN Barbershop Tigery",
      description: "Découvrez nos réalisations : dégradés, coupes modernes, tresses africaines et locks. Portfolio du meilleur barbier de Tigery et l'Essonne.",
      keywords: "photos coupe homme Tigery, dégradé barbier Essonne, tresses africaines 91, locks Tigery"
    },
    about: {
      title: "À Propos | KLEAN Barbershop - Votre Barbier à Tigery (91)",
      description: "KLEAN Barbershop, votre barbier premium à Tigery depuis 2021. Expertise en coupes modernes, coiffures afro et soins barbe dans l'Essonne.",
      keywords: "barbier Tigery présentation, salon coiffure homme Essonne, barbershop 91250"
    },
    reviews: {
      title: "Avis Clients | KLEAN Barbershop Tigery - Note 5/5 ⭐",
      description: "Découvrez les avis de nos clients satisfaits. KLEAN Barbershop : le barbier le mieux noté de Tigery et l'Essonne. +200 clients conquis.",
      keywords: "avis barbier Tigery, meilleur barbershop Essonne, témoignages coiffeur homme 91"
    },
    faq: {
      title: "FAQ | Questions Fréquentes - KLEAN Barbershop Tigery",
      description: "Toutes les réponses à vos questions sur KLEAN Barbershop : tarifs, horaires, prestations tresses et locks, réservation à Tigery (91).",
      keywords: "FAQ barbier Tigery, questions barbershop Essonne, horaires coiffeur Tigery"
    },
    contact: {
      title: "Contact & Réservation | KLEAN Barbershop - 11 Place du Plessis Saucourt Tigery",
      description: "Réservez chez KLEAN Barbershop : 11 Place du Plessis Saucourt, 91250 Tigery. Tél: 06 99 39 39 17. Ouvert 7j/7. Barbier premium Essonne.",
      keywords: "adresse barbier Tigery, contact barbershop Essonne, réservation coiffeur homme 91250, horaires KLEAN"
    }
  },
  
  // Schema.org LocalBusiness markup
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "BarberShop",
    "name": "KLEAN Barbershop",
    "image": "https://images.pexels.com/photos/2775272/pexels-photo-2775272.jpeg",
    "url": "https://klean-barbershop.fr",
    "telephone": "+33699393917",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "11 Place du Plessis Saucourt",
      "addressLocality": "Tigery",
      "postalCode": "91250",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.6418,
      "longitude": 2.5165
    },
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday", "opens": "13:00", "closes": "20:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Tuesday", "opens": "10:00", "closes": "20:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Wednesday", "opens": "10:00", "closes": "20:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Thursday", "opens": "10:00", "closes": "20:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "10:00", "closes": "21:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "10:00", "closes": "21:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "13:00", "closes": "19:00" }
    ],
    "priceRange": "€€",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "200"
    }
  }
};

export default seoConfig;
