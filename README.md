# Le Sportif Gourmand

Un site web moderne dédié à la nutrition sportive et à l'alimentation saine, construit avec React, TypeScript et Tailwind CSS.

🌐 **Site web**: [https://www.lesportifgourmand.com](https://www.lesportifgourmand.com)

## Prérequis

- Node.js (v22 ou supérieur recommandé)
- npm ou yarn

## Installation

1. Cloner le repository :
```
git clone https://github.com/Le-Sportif-Gourmand/website-netlify.git
cd website-netlify
```

Installer les dépendances :

```
npm install
```

Démarrer le serveur de développement :

```
npm run dev
```

L'application sera accessible sur `http://localhost:8080` (le port peut varier selon votre environnement local).

## Stack Technique

- Framework: React 18
- Langage: TypeScript
- Build Tool: Vite
- Styling: Tailwind CSS
- UI Components: shadcn-ui

**Scripts Disponibles**

- `npm run dev` - Démarrer le serveur de développement

- `npm run build` - Build de production

- `npm run preview` - Prévisualiser le build de production localement

- `npm run lint` - Exécuter ESLint

## Structure du Projet

```
├── src/
│   ├── components/     # Composants UI réutilisables
│   ├── pages/          # Composants de pages
│   ├── lib/            # Fonctions utilitaires et configurations
│   └── App.tsx         # Composant principal de l'application
├── public/             # Assets statiques
└── package.json        # Dépendances du projet
```

## Développement

### Standards de Code

Ce projet utilise ESLint et TypeScript pour assurer la qualité du code. Veuillez vous assurer que votre code passe tous les contrôles avant de commiter.

### Contribution

1. Créer une branche de fonctionnalité depuis main
2. Effectuer vos modifications
3. Tester minutieusement en local avant de push sur la main (chaque push sur la branche main coute des credits netlify)

### Déploiement

**Le site est automatiquement déployé sur Netlify à chaque push sur la branche principale.**

Les builds de production sont générés automatiquement et déployés sur https://www.lesportifgourmand.com.

### License

Copyright © 2025 Le Sportif Gourmand. Tous droits réservés.

Ce code source est propriétaire et confidentiel. Toute reproduction, distribution, ou utilisation non autorisée de ce code est strictement interdite sans l'autorisation écrite préalable de Le Sportif Gourmand.

### Contact

Pour toute question ou demande, veuillez nous contacter à : contact@sportifgourmand.com