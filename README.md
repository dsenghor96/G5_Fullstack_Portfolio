# Portfolio G4 Fullstack — Vite + Tailwind CSS v4

Migration du projet HTML/CSS vers **Tailwind CSS v4**.

## Structure du projet

```
/
├── public/
│   └── img/               ← images (logo, projets)
├── src/
│   └── input.css          ← @import "tailwindcss" + @theme
├── html-pages/
│   ├── ajouter-projet.html
│   ├── contact.html
│   ├── lister-projet.html
│   └── listes-projets/
│       ├── projet1.html
│       ├── projet2.html
│       └── projet3.html
├── index.html
├── tailwind.config.js
└── package.json
```

## Installation

```bash
npm install
```

## Démarrer le serveur de développement

```bash
npm run dev
```

## Build pour la production

```bash
npm run build
```

## Ce qui a changé (CSS → Tailwind v4)

### Fini les fichiers CSS séparés !

Les anciens fichiers `style.css`, `form.css`, `lister-projet.css`, etc.
sont remplacés par un seul `src/input.css` avec `@import "tailwindcss"`.
