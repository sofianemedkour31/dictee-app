# Génération des icônes pour l'application

Pour que l'application soit installable comme PWA, il faut créer les icônes PNG à partir du fichier SVG.

## Option 1 : En ligne (plus simple)

1. Allez sur https://realfavicongenerator.net/ ou https://favicon.io/favicon-converter/
2. Uploadez le fichier `icon.svg`
3. Téléchargez les icônes générées
4. Renommez-les en :
   - `icon-192.png` (192x192)
   - `icon-512.png` (512x512)
5. Placez-les à la racine du projet

## Option 2 : Avec ImageMagick (ligne de commande)

Si vous avez ImageMagick installé :

```bash
# Installer ImageMagick si nécessaire
# Sur macOS : brew install imagemagick
# Sur Ubuntu : sudo apt-get install imagemagick

# Générer les icônes
convert icon.svg -resize 192x192 icon-192.png
convert icon.svg -resize 512x512 icon-512.png
```

## Option 3 : Avec Inkscape

1. Ouvrez `icon.svg` dans Inkscape
2. Fichier → Exporter en PNG
3. Définissez les dimensions (192x192, puis 512x512)
4. Sauvegardez comme `icon-192.png` et `icon-512.png`

## Option 4 : Icônes temporaires

Pour tester rapidement, vous pouvez créer des icônes simples avec n'importe quel outil de dessin, en respectant les tailles 192x192 et 512x512 pixels.

## Vérification

Une fois les icônes en place, votre structure de fichiers devrait être :

```
dictee-leitner/
├── index.html
├── style.css
├── script.js
├── manifest.json
├── icon.svg
├── icon-192.png
├── icon-512.png
├── README.md
└── .gitignore
```

L'application sera alors complètement installable sur mobile !
