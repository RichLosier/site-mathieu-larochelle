# Site Mathieu Larochelle - Conseiller Immobilier International

Site vitrine professionnel pour Mathieu Larochelle, conseiller immobilier international.

## 🚀 Technologies

- Next.js 14
- React 18
- TypeScript
- CSS Modules
- i18next (multilingue FR/EN)

## 📦 Installation

```bash
npm install
```

## 🏃 Développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🚀 Déploiement

### Déploiement automatique (GitHub + Vercel)

Pour déployer automatiquement sur GitHub et Vercel :

```bash
./deploy.sh "Votre message de commit"
```

Ou manuellement :

```bash
# 1. Commit et push vers GitHub
git add .
git commit -m "Votre message"
git push origin master

# 2. Déploiement sur Vercel
vercel --prod
```

**Note** : Le projet est configuré pour se déployer automatiquement sur Vercel à chaque push sur GitHub.

## 🌐 URLs

- **GitHub** : https://github.com/RichLosier/site-mathieu-larochelle
- **Vercel Production** : https://site-mathieu-larochelle-on8ncfuz5-richard-losiers-projects.vercel.app

## 🏗 Structure

- `/components` - Composants réutilisables
- `/pages` - Pages du site
- `/styles` - Styles globaux et variables
- `/public` - Assets statiques (images, icons)
- `/utils` - Utilitaires et helpers

## 🌍 Multilingue

Le site supporte le français (par défaut) et l'anglais. Le switch de langue est disponible dans le header.

## 🎨 Design

Le site utilise un design moderne avec le thème "Sunset" (bleu/orange) inspiré de Sunset Real Estate.

## 📝 Notes

- Chaque modification est automatiquement commitée et poussée sur GitHub
- Le déploiement sur Vercel se fait automatiquement après chaque push
- Utilisez `./deploy.sh` pour un déploiement complet en une commande
