# Jeu Tux

**Un jeu de réflexes en HTML, CSS et JavaScript, en solo ou à deux.**

Au départ, c'était un petit exercice réalisé en cours pour apprendre à manipuler JavaScript et à rendre une page interactive. J'ai ensuite repris le jeu de mon côté et l'ai fait évoluer bien au-delà de la version de départ.

J'ai ajouté un adversaire automatique, le choix de la durée, les scores des deux joueurs et l'annonce du gagnant. J'ai aussi retravaillé l'interface et les effets des taches. En solo, les tirs arrivent en rafale et apparaissent peu avant l'impact pour rendre les esquives plus difficiles.

## Comment jouer

Choisis un mode, une durée de **15, 30, 45 ou 60 secondes**, puis clique sur **Commencer**.

- **Tux (joueur 1)** se déplace avec les flèches du clavier pour éviter les taches.
- **Le tireur (joueur 2)** clique dans la zone de jeu pour viser Tux. En solo, l'adversaire automatique prend ce rôle.

| Action | Points |
| --- | --- |
| Le tireur touche Tux | +15 pour le tireur |
| Tux esquive une tache | +2 pour Tux |

Aucun point n'est retiré. À la fin du temps, le plus grand score gagne. Les scores peuvent aussi être à égalité. Clique sur **Recommencer** pour lancer une nouvelle partie.

## Ce que j'ai appris

Ce projet m'a permis de mieux comprendre comment relier JavaScript aux éléments d'une page : réagir au clavier et à la souris, déplacer des images et mettre à jour les scores. J'ai aussi appris à gérer un chronomètre, à détecter les contacts entre deux éléments et à coordonner les animations avec les actions du jeu.

## Essayer le jeu

**Sur ordinateur :** [télécharge le dépôt en ZIP](https://github.com/abassekaderbhai-dev/HTML-CSS-JavaScript/archive/refs/heads/main.zip), décompresse-le et ouvre `Jeu-Tux/index.html` dans ton navigateur. Garde tous les fichiers du dossier ensemble. Aucune installation supplémentaire n'est nécessaire ; un clavier est requis pour déplacer Tux.

**En ligne :** retrouve aussi le jeu sur [mon portfolio](https://abassekaderbhai-dev.github.io/), dans la partie **Jeu Tux**. La version du portfolio peut différer de celle de ce dossier.
