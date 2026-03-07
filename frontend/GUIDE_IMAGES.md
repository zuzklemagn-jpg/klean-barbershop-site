# Guide de remplacement des images - KLEAN Barbershop

## 📁 Fichier de configuration

Toutes les images du site sont centralisées dans un seul fichier :
```
/app/frontend/src/config/images.js
```

## 🖼️ Comment remplacer vos images

### Étape 1 : Préparez vos photos
- **Format recommandé** : JPG ou WebP
- **Taille minimale** : 1200x800 pixels
- **Poids optimal** : < 500 Ko par image

### Étape 2 : Hébergez vos images
Uploadez vos photos sur un service d'hébergement :
- **Cloudinary** (recommandé) : https://cloudinary.com
- **Imgur** : https://imgur.com
- **ImgBB** : https://imgbb.com

### Étape 3 : Modifiez le fichier images.js

Ouvrez `/app/frontend/src/config/images.js` et remplacez les URLs.

---

## 📂 Structure des images

### 1. Images Hero & Sections

```javascript
export const heroImages = {
  // Image principale page d'accueil (1920x1080px)
  main: "VOTRE_URL_ICI",
  
  // Image de fond pour les CTA
  ctaBackground: "VOTRE_URL_ICI",
};

export const sectionImages = {
  // Section À propos - Barbier au travail
  aboutBarbier: "VOTRE_URL_ICI",
  
  // Section Pourquoi nous - Intérieur salon
  whyUsInterior: "VOTRE_URL_ICI",
  
  // Section VIP
  vipExperience: "VOTRE_URL_ICI",
  vipDetail: "VOTRE_URL_ICI",
};
```

### 2. Images Ambiance (grille 4 images page accueil)

```javascript
export const ambianceImages = [
  {
    id: "ambiance-1",
    src: "VOTRE_URL_ICI",        // Grande image 2x2
    alt: "Description image",
    size: "large"
  },
  // ... 3 autres images
];
```

### 3. Galerie Portfolio

```javascript
export const galleryImages = [
  {
    id: 1,
    src: "VOTRE_URL_ICI",
    category: "coupes",           // catégorie
    alt: "Description image",
    size: "large",                // taille dans la grille
    featured: true                // badge "À la une"
  },
  // ... autres images
];
```

---

## 🏷️ Catégories disponibles

| Catégorie    | ID          | Description                |
|--------------|-------------|----------------------------|
| Coupes       | `coupes`    | Coupes et dégradés         |
| Barbe        | `barbe`     | Soins et rasage barbe      |
| Tresses      | `tresses`   | Tresses et braids          |
| Locks        | `locks`     | Locks et dreadlocks        |
| Intérieur    | `interieur` | Intérieur du salon         |
| Ambiance     | `ambiance`  | Ambiance et détails        |

---

## 📐 Tailles d'images dans la galerie

| Taille   | Affichage | Utilisation                |
|----------|-----------|----------------------------|
| `normal` | 1x1       | Image standard carrée      |
| `large`  | 2x2       | Image mise en avant        |
| `tall`   | 1x2       | Image verticale (portrait) |
| `wide`   | 2x1       | Image horizontale          |

---

## ✅ Exemple complet

Pour ajouter une nouvelle coupe :

```javascript
{
  id: 21,                    // ID unique
  src: "https://votre-hebergeur.com/coupe-degrade-01.jpg",
  category: "coupes",
  alt: "Dégradé bas fondu - Client satisfait",
  size: "normal",
  featured: false
}
```

---

## 🔄 Après modification

Les changements sont automatiques grâce au hot reload.
Si les images ne se mettent pas à jour :
1. Sauvegardez le fichier
2. Rafraîchissez la page (F5)

---

## 📞 Besoin d'aide ?

Pour toute question sur l'ajout de vos images, n'hésitez pas à demander !
