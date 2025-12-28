# 📚 J'apprends mes mots de dictée en CE2

Application web de révision de mots de dictée utilisant la méthode de répétition espacée Leitner, conçue pour les élèves de CE2.

## 🌟 Fonctionnalités

- **Système Leitner à 3 boîtes** avec calendrier de révision intelligent
- **Multi-utilisateurs** avec protection par mot de passe
- **75 listes de mots** prédéfinies (25 dictées × 3 niveaux de difficulté)
- **Espace enseignant** pour personnaliser les listes et titres de dictées
- **Synthèse vocale** pour la lecture des mots
- **Clavier virtuel** adapté aux enfants avec caractères accentués français
- **Suivi de progression** détaillé par liste
- **Design responsive** adapté PC, tablette et smartphone
- **Stockage local** - fonctionne 100% hors ligne

## 🚀 Déploiement sur GitHub Pages

### 1. Créer un dépôt GitHub

```bash
# Créer un nouveau dépôt sur GitHub nommé "dictee-leitner"
# Puis cloner le dépôt localement
git clone https://github.com/VOTRE-USERNAME/dictee-leitner.git
cd dictee-leitner
```

### 2. Ajouter les fichiers

Copiez les 3 fichiers de l'application dans le dépôt :
- `index.html`
- `style.css`
- `script.js`

### 3. Pousser sur GitHub

```bash
git add .
git commit -m "Initial commit - Application Dictée Leitner CE2"
git push origin main
```

### 4. Activer GitHub Pages

1. Allez dans les **Settings** de votre dépôt
2. Dans le menu latéral, cliquez sur **Pages**
3. Sous "Source", sélectionnez la branche **main**
4. Sélectionnez le dossier **/ (root)**
5. Cliquez sur **Save**

L'application sera accessible à l'adresse :
```
https://VOTRE-USERNAME.github.io/dictee-leitner/
```

## 📱 Installation comme application mobile (PWA)

Les élèves peuvent installer l'application sur leur appareil mobile :

### Sur iOS (iPhone/iPad)
1. Ouvrir l'application dans Safari
2. Appuyer sur le bouton Partager
3. Sélectionner "Sur l'écran d'accueil"

### Sur Android
1. Ouvrir l'application dans Chrome
2. Appuyer sur le menu (3 points)
3. Sélectionner "Ajouter à l'écran d'accueil"

## 👨‍🏫 Espace enseignant

**Accès** : Depuis la page d'accueil, bouton "Espace enseignant"  
**Mot de passe** : `Legouve59`

### Personnalisation
- Modifier les titres des dictées (ex: "Le roi de la forêt")
- Personnaliser les listes de mots pour chaque niveau (jaune, vert, violet)
- Télécharger un fichier HTML personnalisé à redistribuer aux élèves

## 🎯 Système Leitner

### Calendrier de révision
- **Boîte 1** : Tous les jours (mots à apprendre)
- **Boîte 2** : Mardi, Jeudi, Samedi (mots en cours d'apprentissage)
- **Boîte 3** : Mercredi, Dimanche (mots presque maîtrisés)

### Règles
- Mot réussi → progression vers la boîte supérieure
- Mot raté → retour en boîte 1
- Un mot ne peut être révisé qu'une fois par jour

## 💾 Stockage des données

Toutes les données sont stockées localement dans le navigateur (localStorage) :
- Profils utilisateurs
- Progression par liste
- Mots dans chaque boîte
- Historique de révision

⚠️ **Important** : Les données sont liées au navigateur. Ne pas vider le cache sans sauvegarder.

## 🛠️ Technologies utilisées

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- JavaScript Vanilla (ES6+)
- Web Speech API (synthèse vocale)
- LocalStorage API

## 📄 Licence

Application éducative libre d'utilisation pour l'enseignement.

## 🤝 Contribution

Les enseignants sont invités à personnaliser l'application selon les besoins de leur classe.

---

**Développé pour faciliter l'apprentissage de l'orthographe en CE2** 🎓
