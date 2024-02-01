# Ikstagram - Utilisation de l'API Unsplash avec JavaScript et React

![ikstagram Logo](./public/favicon.ico) 

@ikstagram est une application web simple qui imite le style d'Instagram en affichant des images aléatoires de l'API Unsplash. Ce projet a été créé pour explorer l'intégration de l'API Unsplash avec JavaScript et React, et il peut être utilisé comme base pour développer des fonctionnalités plus avancées.

## Fonctionnalités

- **Affichage d'images aléatoires :** L'application récupère des images aléatoires à partir de l'API Unsplash et les affiche sous forme de grille, similaire à Instagram.
- **Rechargement d'Images :** Les utilisateurs peuvent recharger les images à tout moment en cliquant sur le bouton "magic?".
- **Mise en Page Réactive :** La mise en page est réactive et s'adapte automatiquement à la taille de l'écran de l'utilisateur grâce à Bootstrap.

## Structure du Projet

- **`src/App.js` :** C'est le composant principal de l'application où tout commence. Il affiche le titre, le nom d'utilisateur et le composant `PhotoGallery`.
- **`src/components/PhotoGallery.js` :** C'est le cœur de l'application. Il utilise l'API Unsplash pour charger et afficher les images aléatoires dans un carrousel.
- **`src/api/unsplash.js` :** Un fichier utilitaire qui contient la configuration de l'API Unsplash et des fonctions pour effectuer des requêtes.
- **`src/PhotoGallery.css` :** Le fichier CSS personnalisé qui définit le style de la galerie de photos.

## Configuration du projet

1. **Clonage du Projet :** Clonez ce dépôt sur votre machine locale en utilisant la commande `git clone https://github.com/ikramagic/ikstagram.git`.

2. **Installation des dépendances :** Installez les dépendances en utilisant `npm install`.

3. **Obtention de la Clé d'API Unsplash :** Pour utiliser l'API Unsplash, vous devez créer un compte développeur sur [Unsplash Developer](https://unsplash.com/developers) et obtenir une clé d'API.

4. **Configuration de la clé API :** Créez un fichier `.env` à la racine du projet et ajoutez votre clé d'API comme suit :

```ruby
REACT_APP_UNSPLASH_API_KEY=VOTRE_CLÉ_API_UNSPLASH_ICI
```

5. **Démarrage de l'Application :** Démarrez l'application avec `npm start`. Vous pouvez maintenant visualiser l'application dans votre navigateur en ouvrant [http://localhost:3000](http://localhost:3000).

## Personnalisation

L'application Ikstagram est un point de départ pour explorer davantage l'utilisation de l'API Unsplash et de React. Voici quelques idées pour personnaliser davantage l'application :

- **Recherche d'Images :** Ajoutez une fonction de recherche pour permettre aux utilisateurs de rechercher des images spécifiques par mots-clés.
- **Affichage d'Utilisateur :** Intégrez l'API Unsplash Users pour afficher les détails de l'utilisateur associé à chaque image.
- **Pagination :** Mettez en place une pagination pour afficher plus d'images à la fois.
- **Styles Personnalisés :** Personnalisez le style de l'application en modifiant le fichier CSS `PhotoGallery.css`.

## Explication du Code

Le code source de l'application est bien commenté pour faciliter la compréhension. Voici quelques points clés à noter :

- L'utilisation de React Hooks, notamment `useState` et `useEffect`, pour gérer l'état de l'application.
- L'intégration de l'API Unsplash en utilisant des requêtes HTTP pour obtenir des images aléatoires.
- La mise en page réactive grâce à Bootstrap et les classes CSS personnalisées définies dans `PhotoGallery.css`.
- L'utilisation d'un composant de carrousel pour afficher les images de manière interactive.

## Contribution

Les contributions sont les bienvenues ! Si vous avez des idées d'amélioration, de nouvelles fonctionnalités ou des correctifs à apporter à ce projet, n'hésitez pas à soumettre des pull requests.

## Auteur

[Ajoutez Votre Nom](votre-lien-de-profil-github) <!-- Remplacez par votre nom et le lien vers votre profil GitHub -->

## Licence

Ce projet est sous licence [MIT](LICENSE.md).
