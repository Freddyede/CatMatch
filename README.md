# <center><u><i>TP - CatMatch :</i></u></center>

## <u>Objectif :</u>
Développer une application ReactJS interactive et ludique nommée CatMatch.
L'application présentera deux images de chats côte à côte, sélectionnées aléatoirement dans une base de données d'images. Les chats présentés devront être différents l'un de l'autre à chaque tour.
## <u>Fonctionnalités :</u>

- L'utilisateur pourra cliquer sur l'une des deux images de chat présentées. 
- Le chat sélectionné par l'utilisateur gagnera un point. 
- Après chaque sélection, l'application affichera deux nouvelles images de chats différents. 
- L'application conservera un score cumulé pour chaque chat. 
- Une page de score sera disponible, affichant le classement des chats les plus populaires en fonction du nombre de sélections des utilisateurs.

## <u>Contraintes techniques :</u>
- L'application doit être développée en utilisant ReactJS. 
- La base de données d'images de chats peut être hébergée localement ou être issue d'une API externe (un fichier JSON sera fournie)
- L'application doit gérer les cas où deux images identiques seraient sélectionnées par erreur. 
- L'application doit être responsive et fonctionner sur différentes tailles d'écran. 
- Le code doit être propre, commenté et respecter les bonnes pratiques de développement.
## <u>Datas :</u>

```json
{
    "cats": [
        {
            "name": "Chat gris endormi",
            "link": "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
        },
        {
            "name": "Chat noir et blanc",
            "link": "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
        },
        {
            "name": "Chat siamois élégant",
            "link": "https://images.unsplash.com/photo-1550035842-a18f8d898c5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
        },
        {
            "name": "Chat aux yeux verts",
            "link": "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
        }
    ]
}
```