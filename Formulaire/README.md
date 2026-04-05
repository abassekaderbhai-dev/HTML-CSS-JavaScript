# Formulaire interactif

Un formulaire d'inscription avec validation en temps réel, développé en HTML et JavaScript vanilla. Les erreurs s'affichent et disparaissent dynamiquement au fil de la saisie, sans rechargement de page.

---

## Structure du projet

```
.
├── index.html       # Structure du formulaire
└── formulaire.js    # Validation en temps réel
```

---

## Champs du formulaire

| Champ | Validation |
|---|---|
| **Nom** | Lettres, espaces et apostrophes uniquement |
| **Login** | Généré automatiquement depuis le nom (minuscules, tirets) |
| **Email** | Doit respecter le format `exemple@domaine.fr` |
| **Mot de passe** | Minimum 6 caractères |
| **Confirmation** | Doit être identique au mot de passe |

---

## Fonctionnement

- Les messages d'erreur apparaissent et disparaissent **à chaque frappe** grâce à une transition CSS sur l'opacité
- Le **login est généré automatiquement** à partir du nom : les majuscules sont converties en minuscules et les caractères spéciaux remplacés par des tirets
- La **confirmation du mot de passe** est vérifiée en temps réel dès que l'un des deux champs est modifié

---

## Lancer le projet

Ouvrir `index.html` dans un navigateur — aucune installation requise.
