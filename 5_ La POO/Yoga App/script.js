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
    // -------------------------- Contenu des Vues --------------------------
    pageContent: function (title, content, btn) {
        document.querySelector("h1").innerHTML = title;
        main.innerHTML = content;
        document.querySelector(".btn-container").innerHTML = btn;
    },

    // -------------------------- Gestion des minutes --------------------------
    handleEventMinutes: function () {
        document.querySelectorAll('input[type="number"]').forEach((element) => {
            element.addEventListener("input", (e) => {
                exerciceArray.map((exo) => {
                    // console.log('test')
                    if (exo.pic == e.target.id) {
                        exo.min = parseInt(e.target.value);
                        console.log(exerciceArray);
                    }
                });
            });
        });
    },

    // -------------------------- Gestion de l'ordre des exercices --------------------------
    handleEventArrow: function () {
        document.querySelectorAll(".arrow").forEach((arrow) => {
            arrow.addEventListener("click", (e) => {
                let position = 0;

                exerciceArray.map((exo) => {
                    if (exo.pic == e.target.dataset.pic && position !== 0) {

                        //interverti les valeurs
                        // La position de base 0 passe en -1, et la -1 passe en 0
                        [exerciceArray[position], exerciceArray[position - 1]] =
                            [
                                exerciceArray[position - 1],
                                exerciceArray[position],
                            ];

                        // On rappelle la Méthode pour refresh l'affichage
                        page.lobby();
                        
                    } else {
                        position++;
                    }
                });
            });
        });
    },
};

console.log();

// --------------------------------------------------------------
// --------------------------------------------------------------
// Dans une variable, on crée un Objet, qui aura 3 Fonctions (donc 3 Méthodes)
// Chaque Méthode appellera la même Fonction à extérieure, mais avec des propriétés différentes

// Ces propriétés différentes constitueront des affichages de contenus différents
// De ce fait, ces 3 Méthodes injecteront des contenus afin de réaliser 3 Vues (dans 1 seule page)

// Pour résumer, ces Méthodes créeront donc 3 affichages différents dans la même page internet

//
const page = {
    // -------------------------- Première Vue --------------------------
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
            <i class="fas fa-arrow-alt-circle-left arrow" data-pic=${exo.pic}></i>
            <i class="fas fa-times-circle deleteBtn" data-pic=${exo.pic}></i>

        </li>
            `
            )
            .join("");

        utils.pageContent(
            "Paramétrage <i id='reboot' class='fas fa-undo'></i>",
            `<ul>${mapArray}</ul>`, // on ajoute le UL ici car on en veut 1 seul, et pas plusieurs du .map
            "<button id='start'>Commencer<i class='far fa-play-circle'></i></button>"
        );

        utils.handleEventMinutes();
        utils.handleEventArrow();
    },

    // -------------------------- Deuxième Vue --------------------------
    routine: function () {
        utils.pageContent("Routine", "Exercice avec chrono", null); // mettre null pour ne pas avoir de 'Undefined'
    },

    // -------------------------- Troisième Vue --------------------------
    finish: function () {
        utils.pageContent(
            "C'est terminé !",
            "<button id='start'>Recommencer</button>",
            "<button id='reboot' class='btn-reboot'>Réinitialiser <i class='fas fa-times-circle'></i></button>"
        );
    },
};

page.lobby();
