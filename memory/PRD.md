# KLEAN Barbershop - Product Requirements Document

## Informations Générales
- **Projet:** Site web premium pour KLEAN Barbershop
- **Client:** KLEAN Barbershop • Braids • Locks
- **Localisation:** 11 Place du Plessis Saucourt, 91250 Tigery, France
- **Langue:** Français
- **Dernière mise à jour:** 7 Mars 2026

## Description
Site vitrine premium pour un salon de barbier haut de gamme proposant des coupes, dégradés, soins de barbe, tresses et locks. Design luxueux noir (#0A0A0A) et or (#C8A46B) avec une expérience utilisateur fluide.

## Architecture Technique
- **Frontend:** React 18 avec Create React App
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **SEO:** React Helmet Async
- **Galerie:** React Image Lightbox
- **Backend:** N/A (site statique frontend-only)
- **Base de données:** N/A

## Pages Implémentées
1. **Accueil** (`/`) - Hero, intro, services preview, avis Google, ambiance
2. **Prestations** (`/prestations`) - Tarifs détaillés par catégorie
3. **Expérience VIP** (`/experience-vip`) - Services premium et à domicile
4. **Galerie** (`/galerie`) - Portfolio filtrable avec lightbox
5. **À propos** (`/a-propos`) - Histoire et équipe
6. **Avis** (`/avis`) - Témoignages clients
7. **FAQ** (`/faq`) - Questions fréquentes (10 accordéons)
8. **Contact** (`/contact`) - Formulaire, Google Maps, coordonnées

## Fonctionnalités Clés
- [x] Design premium noir et or
- [x] Navigation responsive (desktop/tablette/mobile)
- [x] Menu hamburger mobile avec animations
- [x] Boutons "Réserver" omnipresents (lien Setmore externe)
- [x] Galerie filtrable par catégorie avec lightbox
- [x] Widget Google Reviews (40+ avis)
- [x] Google Maps intégré
- [x] SEO optimisé (méta titres/descriptions)
- [x] Tracking analytics (clics, pages vues)
- [x] Lazy loading des images
- [x] Animations smooth avec Framer Motion

## Intégrations Externes
- **Réservation:** https://klean-barbershop-booking.setmore.com/book
- **Instagram:** @klean.barbershop_braids
- **Téléphone:** +33 6 99 39 39 17
- **Google Maps:** 11 Place du Plessis Saucourt, 91250 Tigery

## Fichiers Clés
- `/app/frontend/src/config/images.js` - Configuration centralisée des images
- `/app/frontend/src/components/Navigation.jsx` - Navigation avec logo
- `/app/frontend/src/components/Footer.jsx` - Footer avec contacts
- `/app/frontend/src/components/SEOHead.jsx` - Composant SEO
- `/app/frontend/src/components/BookButton.jsx` - Bouton de réservation

## Contenu Final Validé
- **Logo:** KleanLogo.jpg (vert avec couronne dorée et "KK")
- **Slogan:** "Wear your crown & Stay Klean"
- **Description hero:** "Salon de coiffure Barbier, Afro & VIP HomeService. Avec & sans rendez-vous"
- **Avis:** 40+ avis Google

## Statut du Projet

### Complété ✅
- [x] Design premium noir et or
- [x] Toutes les 8 pages fonctionnelles
- [x] Logo mis à jour (KleanLogo.jpg)
- [x] Textes hero mis à jour
- [x] "40+ avis" affiché
- [x] Nouvelles images intégrées (taper2.jpg, tondeuses.jpg)
- [x] Bug BOOKING_URL corrigé sur 4 pages
- [x] Responsive design vérifié
- [x] Navigation testée
- [x] Boutons de réservation fonctionnels
- [x] Galerie avec filtres et lightbox
- [x] Google Maps intégré
- [x] Audit complet passé avec succès

### Prêt pour Déploiement ✅
Tous les tests ont passé avec un taux de réussite de 100%.

## URL de Prévisualisation
https://coiffure-premium.preview.emergentagent.com

## Notes de Déploiement
- Site frontend-only, pas de backend requis
- Images hébergées sur customer-assets.emergentagent.com
- Réservation via service externe Setmore
