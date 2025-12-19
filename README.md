# Pays du Monde

Une application React interactive pour explorer et découvrir des informations détaillées sur tous les pays du monde.

## Description

Cette application utilise l'API [REST Countries](https://restcountries.com/) pour afficher des informations complètes sur les pays de chaque continent. L'interface permet de filtrer les pays par région et d'afficher des détails tels que la capitale, la population, la superficie, les langues, les monnaies et bien plus encore.

## Fonctionnalités

- Affichage de tous les pays du monde avec leurs drapeaux
- Filtrage par continent (Europe, Afrique, Amériques, Asie, Océanie)
- Informations détaillées pour chaque pays :
  - Drapeau officiel
  - Nom officiel et nom natif
  - Capitale
  - Région et sous-région
  - Population
  - Superficie
  - Langues officielles
  - Monnaies
  - Fuseaux horaires
  - Code pays (ISO)
- Interface responsive et moderne
- Tri alphabétique des pays en français
- Compteur du nombre de pays affichés

## Technologies utilisées

- React 18.2.0
- Axios pour les requêtes API
- REST Countries API v3.1
- CSS personnalisé

## Installation

1. Clonez le dépôt :
```bash
git clone <url-du-repo>
cd pays
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez l'application en mode développement :
```bash
npm start
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000).

## Scripts disponibles

### `npm start`

Lance l'application en mode développement.\
Ouvrez [http://localhost:3000](http://localhost:3000) pour la voir dans votre navigateur.

La page se rechargera automatiquement lors de modifications.\
Les erreurs de lint s'afficheront dans la console.

### `npm test`

Lance le test runner en mode interactif.

### `npm run build`

Construit l'application pour la production dans le dossier `build`.\
L'application est optimisée pour les meilleures performances.

Les fichiers sont minifiés et les noms incluent des hashes.\
Votre application est prête à être déployée.

## Structure du projet

```
pays/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Card.js        # Composant carte pour afficher les détails d'un pays
│   │   └── Country.js     # Composant principal pour la gestion des pays
│   ├── App.js             # Composant racine
│   ├── App.css            # Styles de l'application
│   └── index.js           # Point d'entrée
└── package.json
```

## API utilisée

L'application utilise l'API REST Countries v3.1 :
- Endpoint principal : `https://restcountries.com/v3.1/region/{region}`
- Documentation : [https://restcountries.com](https://restcountries.com)

## Auteur

Projet créé avec Create React App
