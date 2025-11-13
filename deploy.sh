#!/bin/bash

# Script de déploiement automatique
# Usage: ./deploy.sh "Message de commit"

COMMIT_MESSAGE=${1:-"Mise à jour automatique"}

echo "🚀 Déploiement en cours..."

# Ajouter tous les fichiers
echo "📦 Ajout des fichiers..."
git add .

# Commit
echo "💾 Création du commit..."
git commit -m "$COMMIT_MESSAGE"

# Push vers GitHub
echo "📤 Push vers GitHub..."
git push origin master

# Déploiement sur Vercel
echo "🌐 Déploiement sur Vercel..."
vercel --prod --yes

echo "✅ Déploiement terminé !"
echo "🔗 Votre site est disponible sur Vercel"

