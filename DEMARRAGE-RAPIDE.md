# 🚀 GUIDE DE DÉMARRAGE RAPIDE

## 📦 Contenu du package

Votre application de dictée CE2 est prête à être déployée sur GitHub !

**Fichiers inclus :**
- `index.html` - Page principale de l'application
- `style.css` - Feuille de styles complète
- `script.js` - Logique de l'application (système Leitner, gestion utilisateurs, etc.)
- `manifest.json` - Configuration PWA pour installation mobile
- `icon.svg` - Icône vectorielle de l'application
- `.gitignore` - Fichiers à ignorer par Git
- `README.md` - Documentation complète
- `ICONES.md` - Instructions pour générer les icônes PNG

## ⚡ Déploiement en 5 minutes

### 1️⃣ Créer un compte GitHub (si nécessaire)
Allez sur https://github.com et créez un compte gratuit.

### 2️⃣ Créer un nouveau dépôt
1. Cliquez sur le bouton **"New"** (nouveau dépôt)
2. Nom du dépôt : `dictee-leitner` (ou autre nom de votre choix)
3. Description : "Application de révision de mots de dictée CE2"
4. Laissez en **Public**
5. Cochez **"Add a README file"**
6. Cliquez sur **"Create repository"**

### 3️⃣ Ajouter les fichiers
1. Cliquez sur **"uploading an existing file"**
2. Glissez-déposez tous les fichiers de l'application :
   - index.html
   - style.css
   - script.js
   - manifest.json
   - icon.svg
   - .gitignore
3. Ajoutez un message de commit : "Application initiale"
4. Cliquez sur **"Commit changes"**

### 4️⃣ Activer GitHub Pages
1. Allez dans **Settings** (paramètres du dépôt)
2. Dans le menu de gauche, cliquez sur **Pages**
3. Sous "Branch", sélectionnez **main**
4. Laissez **/ (root)** comme dossier
5. Cliquez sur **Save**

### 5️⃣ Accéder à l'application
Après quelques minutes, votre application sera disponible à :
```
https://VOTRE-NOM-UTILISATEUR.github.io/dictee-leitner/
```

**C'est tout ! 🎉** L'application est maintenant en ligne !

## 📱 Installation sur mobile

Les élèves peuvent installer l'application sur leur appareil :

### iPhone/iPad
1. Ouvrir l'application dans Safari
2. Appuyer sur le bouton Partager (carré avec flèche)
3. Défiler et choisir "Sur l'écran d'accueil"
4. Appuyer sur "Ajouter"

### Android
1. Ouvrir l'application dans Chrome
2. Appuyer sur le menu (⋮)
3. Choisir "Ajouter à l'écran d'accueil"
4. Appuyer sur "Ajouter"

## 👨‍🏫 Accès enseignant

**Depuis la page d'accueil :**
- Cliquer sur "Espace enseignant"
- Entrer le mot de passe : `Legouve59`

**Vous pouvez :**
- Modifier les titres des dictées
- Personnaliser les listes de mots
- Télécharger une version HTML personnalisée

## 🎯 Fonctionnement du système Leitner

**Boîte 1** (rouge) → Tous les jours  
**Boîte 2** (turquoise) → Mardi, Jeudi, Samedi  
**Boîte 3** (vert) → Mercredi, Dimanche  

- Mot réussi ✅ → Monte d'une boîte
- Mot raté ❌ → Retourne en boîte 1
- Un mot = une révision par jour maximum

## 📊 Données

Les données sont sauvegardées localement dans le navigateur de chaque élève.  
⚠️ Ne pas vider le cache du navigateur sans avoir exporté les données.

## 🔧 Personnalisation avancée

Pour modifier les couleurs, polices ou comportements :
1. Éditez `style.css` pour les styles
2. Éditez `script.js` pour la logique
3. Committez les changements sur GitHub
4. Les modifications seront automatiquement déployées

## ❓ Besoin d'aide ?

Consultez le fichier `README.md` pour la documentation complète.

---

**Bon apprentissage à vos élèves ! 📖✏️**
