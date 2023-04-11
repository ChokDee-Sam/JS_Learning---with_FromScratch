// --------------------------------------------------------------
// --------------------------------------------------------------

const main = document.querySelector("main");
console.log(main);

// --------------------------------------------------------------
// --------------------------------------------------------------
let exerciceArray = [];

// --------------------------------------------------------------
// --------------------------------------------------------------
// C'est la base des à réinjecter si on souhaite faire un reset

let basicArray = [
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

// ------------------------------------------------------------------
// ------------------------------------------------------------------
// Lancer une fonction anonyme au démarrage, pour checker le local Storage

(() => {
    localStorage.exercices
        ? (exerciceArray = JSON.parse(localStorage.exercices)) // passe du JSON au texte JS
        : (exerciceArray = basicArray);
})();

// ------------------------------------------------------------------
// ------------------------------------------------------------------
// Affichera la vue/page Routine, avec un chrono, et un compteur d'exercice

class Exercice {
    constructor() {
        this.index = 0;
        this.minutes = exerciceArray[this.index].min;
        this.seconds = 0;
    }

    updateCountdown() {
        this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;

        setTimeout(() => {
            if (this.minutes === 0 && this.seconds === "00") {
                this.index++;
                this.updateCountdown();
            } else if (this.seconds === "00") {
                this.minutes--;
                this.seconds = 59;
                this.updateCountdown();
            } else {
                this.seconds--;
                this.updateCountdown();
            }
        }, 10);

        return (main.innerHTML = `
        <div class="exercice-container">
            <p>${this.minutes} : ${this.seconds}</p>
            <img src="img/${exerciceArray[this.index].pic}.png">
            <div>${this.index + 1} / ${exerciceArray.length}</div>
        </div>
        
        `);
    }
}

// ------------------------------------------------------------------
// ------------------------------------------------------------------
// Contient toutes les fonctions utiles au projet
// La logique pour créer nos Pages (nos vues), grace au contenu des différentes propriétés
// Cette fonction sera dans 3 méthodes différentes

const utils = {
    // ----------------------------------------------------------------------
    // -------------------------- Contenu des Vues --------------------------
    // ----------------------------------------------------------------------

    pageContent: function (title, content, btn) {
        document.querySelector("h1").innerHTML = title;
        main.innerHTML = content;
        document.querySelector(".btn-container").innerHTML = btn;
    },
    // -------------------------------------------------------------------------
    // -------------------------- Gestion des minutes --------------------------
    // -------------------------------------------------------------------------

    handleEventMinutes: function () {
        document.querySelectorAll('input[type="number"]').forEach((element) => {
            element.addEventListener("input", (e) => {
                exerciceArray.map((exo) => {
                    // console.log('test')
                    if (exo.pic == e.target.id) {
                        exo.min = parseInt(e.target.value);
                        this.store(); // 'this', car on est dans la const 'utils'
                    }
                });
            });
        });
    },

    // --------------------------------------------------------------------------------------
    // -------------------------- Gestion de l'ordre des exercices --------------------------
    // --------------------------------------------------------------------------------------

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
                        this.store(); // 'this', car on est dans la const 'utils'
                    } else {
                        position++;
                    }
                });
            });
        });
    },

    // -----------------------------------------------------------------------------------
    // -------------------------- Supprimer une Card d'exercice --------------------------
    // -----------------------------------------------------------------------------------

    deleteItem: function () {
        document.querySelectorAll(".deleteBtn").forEach((element) => {
            element.addEventListener("click", (e) => {
                let newArr = [];

                // On va passer en revu le contenu de exerciceArray
                // Chaque contenu qui ne correspond pas au dataset de la Card sur laquelle on a cliqué
                // On envoi ce contenu dans un nouvel Array, qui deviendra notre nouvel exerciceArray
                // note perso : pourquoi faire compliquer, plutôt qu'un delete ?

                exerciceArray.map((exo) => {
                    if (exo.pic != e.target.dataset.pic) {
                        newArr.push(exo);
                    }
                });

                exerciceArray = newArr;
                page.lobby();
                this.store(); // 'this', car on est dans la const 'utils'
            });
        });
    },

    // -----------------------------------------------------------------------------------
    // -------------------------- Reboot l'application à sa base --------------------------
    // -----------------------------------------------------------------------------------

    reboot: function () {
        exerciceArray = basicArray;
        page.lobby();
        this.store(); // 'this', car on est dans la const 'utils'
    },

    // -----------------------------------------------------------------------------------
    // -------------------------- Permet de sauvegarder en auto --------------------------
    // -----------------------------------------------------------------------------------

    // Permet à l'utilisateur de conserver sa liste, son ordre, et ses timings
    // On utilise le JSON.stringify()

    store: function () {
        localStorage.exercices = JSON.stringify(exerciceArray);
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
    // ------------------------------------------------------------------
    // -------------------------- Première Vue --------------------------
    // ------------------------------------------------------------------

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
        utils.deleteItem();
        reboot.addEventListener("click", () => utils.reboot());
        start.addEventListener("click", () => this.routine()); // passe à la deuxième Vue/Page
    },

    // ------------------------------------------------------------------
    // -------------------------- Deuxième Vue --------------------------
    // ------------------------------------------------------------------

    routine: function () {
        const exercice = new Exercice();

        utils.pageContent("Routine", exercice.updateCountdown(), null); // mettre null pour ne pas avoir de 'Undefined'
    },

    // ------------------------------------------------------------------
    // -------------------------- Troisième Vue -------------------------
    // ------------------------------------------------------------------

    finish: function () {
        utils.pageContent(
            "C'est terminé !",
            "<button id='start'>Recommencer</button>",
            "<button id='reboot' class='btn-reboot'>Réinitialiser <i class='fas fa-times-circle'></i></button>"
        );
    },
};

page.lobby();
