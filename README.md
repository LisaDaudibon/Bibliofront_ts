# Projet Bibliophilea
### Projet final pour The Hacking Project

## Découpage du projet
Le front a été créé avec Vite et utilise React et Javascript. Le back a été créé en utilisant Rails. <br>
<br>
Lien du front du site en production : https://biblofront.vercel.app/ <br>
Lien du back du site en production : https://bibloback.fly.dev/<br>
Lien du Github pour le back : https://github.com/LisaDaudibon/Bibloback<br>
<br>
Vous vous trouvez dans le front. 

## Description
Bienvenue sur notre plateforme dédiée aux passionnés de livres ! Que vous soyez un lecteur avide à la recherche de nouvelles découvertes ou un bibliophile désireux d'explorer une vaste bibliothèque virtuelle, vous êtes au bon endroit.

Notre site offre une base de données exhaustive regroupant une multitude de titres provenant de divers genres et époques. Que vous soyez fan de romans contemporains, de classiques intemporels, de thrillers palpitants ou de science-fiction captivante, vous trouverez assurément des ouvrages qui sauront éveiller votre intérêt.

L'inscription sur notre plateforme est simple et rapide. Une fois membre, vous pourrez créer votre propre liste de lecture personnalisée, enregistrant ainsi les livres qui vous intéressent le plus. Cette fonctionnalité vous permettra de garder une trace de vos livres préférés, de vos prochaines lectures ou de partager vos recommandations avec d'autres passionnés de lecture.

Rejoignez notre communauté de lecteurs passionnés dès aujourd'hui ! Venez découvrir, partager et discuter de vos livres préférés avec des personnes partageant les mêmes intérêts. Notre plateforme est un lieu d'échange et de convivialité où la passion pour la lecture est célébrée.

Ne perdez plus de temps à chercher votre prochaine lecture. Rejoignez-nous et plongez dans un univers infini de connaissances, d'aventures et d'émotions littéraires.

## Membres du groupe
- Lisa Daudibon ([@LisaDaudibon](https://github.com/LisaDaudibon))
- Karine Da Silva ([@KarineDHoshi](https://github.com/KarineDHoshi))

## Cahier des charges
- Users stories, disponible sur [Trello](https://trello.com/b/Z6enKCr3/bibliophilea)
- Design du site, disponible sur [Figma](https://www.figma.com/file/uRhLGqQICvoBwltWtevLgU/Bibliophilea---UX?type=design&node-id=23%3A74&mode=design&t=BE6TTDzn20AP1KKx-1)
- Parcours utilisateur, disponible sur [Lucid](https://lucid.app/lucidchart/c5b84471-91be-49ba-a42b-9e3b5f00db26/edit?invitationId=inv_df78d465-6c57-4837-98a1-e723a0ec80b7)
- Base de données, disponible sur [Lucid](https://lucid.app/lucidchart/be1afbe0-d56f-4f66-a56b-4dc367683c0e/edit?viewport_loc=-2352%2C-911%2C4096%2C1724%2C0_0&invitationId=inv_fd6ddcef-7bf7-40d4-ba60-c3853a03e6b7)

## Versions, gems et API utilisées
React 18.2.0, Jotai 2.2.1, React-router-dom 6.13.0. <br>
Pour récupérer les livres, nous avons utilisé l'API de google : [Google Book API](https://www.google.com/books/jsapi.js)

## Lancement du programme en local
Télécharger ou cloner le dossier en local. Lancer les commandes suivantes dans votre terminal : 
- `cd biblofront`
- `npm install`
- Renommer le fichier `.env` en `.env.development`
- Rajouter vos clés pour l'API google Books dans ce fichier renommé
- `npm run dev`

## Diagramme ER base de données et user flow
Ci-dessous un diagramme entité-relation de la base de données utilisée et un diagramme du parcours utilisateur :

<img src=/public/Bibliophilea.png width="700">
<img src=/public/UserFlow_Bibliophilea.png width="700">