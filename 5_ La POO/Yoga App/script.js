// --------------------------------------------------------------
// --------------------------------------------------------------

const main = document.querySelector("main");
console.log(main);

// --------------------------------------------------------------
// --------------------------------------------------------------
// C'est la base des exercices, avec laquelle on choisira
// l'ordre des exercices, les exercices à supprimer, et les minutes à modifier

let exerciceArray = [
    { pic: 0, min: 1 },
    { pic: 1, min: 1 },
    { pic: 2, min: 1 },
    { pic: 3, min: 1 },
    { pic: 4, min: 1 },
    { pic: 5, min: 1 },
    { pic: 6, min: 1 },
    { pic: 7, min: 1 },
    { pic: 8, min: 1 },
    { pic: 9, min: 1 },
];

// --------------------------------------------------------------
// --------------------------------------------------------------
// On instanciera cette Classe par la suite

class Exercice {}

// --------------------------------------------------------------
// --------------------------------------------------------------
// Contient toutes les fonctions utiles au projet
// La logique pour créer nos Pages (nos vues), grace au contenu des différentes propriétés
// Cette fonction sera dans 3 méthodes différentes

const utils = {
    pageContent: function (title, content, btn) {
        document.querySelector("h1").innerHTML = title;
        main.innerHTML = content;
        document.querySelector(".btn-container").innerHTML = btn;
    },
};

// --------------------------------------------------------------
// --------------------------------------------------------------
// Dans une variable, on crée un Objet, qui aura 3 Fonctions (donc 3 Méthodes)
// Chaque Méthode appellera la même Fonction à extérieure, mais avec des propriétés différentes

// Ces propriétés différentes constitueront des affichages de contenus différents
// De ce fait, ces 3 Méthodes injecteront des contenus afin de réaliser 3 Vues (dans 1 seule page)

// Pour résumer, ces Méthodes créeront donc 3 affichages différents dans la même page internet

//
const page = {
    lobby: function () {
        let mapArray = exerciceArray
            .map(
                (
                    exo // on ne met pas d'accolade apres fleche, pour éviter le Return du .map
                ) =>
                    `
        <li>
            <div class="card-header">
                <input
                    type="number"
                    id="${exo.pic}"
                    min="1"
                    max="10"
                    value="${exo.min}"
                />
                <span>min</span>
            </div>
            <img src="img/${exo.pic}.png" alt="image d'une position de yoga">
        </li>
            `
            )
            .join("");

        utils.pageContent(
            "Paramétrage <i id='reboot' class='fas fa-undo'></i>",
            `<ul>${mapArray}</ul>`, // on ajoute le UL ici car on en veut 1 seul, et pas plusieurs du .map
            "<button id='start'>Commencer<i class='far fa-play-circle'></i></button>"
        );
    },

    routine: function () {
        utils.pageContent("Routine", "Exercice avec chrono", null); // mettre null pour ne pas avoir de 'Undefined'
    },

    finish: function () {
        utils.pageContent(
            "C'est terminé !",
            "<button id='start'>Recommencer</button>",
            "<button id='reboot' class='btn-reboot'>Réinitialiser <i class='fas fa-times-circle'></i></button>"
        );
    },
};

page.lobby();
