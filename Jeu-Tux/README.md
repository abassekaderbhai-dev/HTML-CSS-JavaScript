# Jeu Tux

Un mini-jeu de réflexes développé en HTML, CSS et JavaScript vanilla. Le joueur déplace Tux, la mascotte de Linux, dans une zone de jeu et doit le faire toucher par des projections lancées à la souris.

---

## Structure du projet

```
.
├── index.html   # Structure de la page
├── jeu.css      # Mise en page et animations
└── jeu.js       # Logique du jeu
```

---

## Règles du jeu

- **Déplacer Tux** — touches directionnelles `←` `→` `↑` `↓`
- **Lancer un splat** — cliquer dans la zone de jeu
- Tux **touché** → **+10 points**
- Splat **raté** → **-5 points**

Le splat apparaît agrandi puis glisse vers la position du clic. La collision est vérifiée à l'arrivée du projectile ; il faut donc anticiper !

---

## Améliorations prévues

- Ajouter un compte à rebours pour limiter la durée d'une partie
- Afficher un message de fin avec le score final
- Faire un tableau avec la sauvegarde des joueurs et leurs scores grâce au répertoire `Liste_joueurs`

---

## Lancer le jeu

Ouvrir `index.html` dans un navigateur.
