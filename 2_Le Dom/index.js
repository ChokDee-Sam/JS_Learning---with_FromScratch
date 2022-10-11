// *********************************************
// SELECTEURS
// *********************************************

// selectionner
// document.querySelector("p");

// selectionner + changer un style
// document.querySelector("p").style.color = "red";

// Créer une Variable qui selectionne automatiquement
// const reponse = document.querySelector("p");

// Utiliser cette variable qui selectionne pour changer
// reponse.style.visibility = "visible";

// *********************************************
// CLICK EVENT
// *********************************************

// création d'une fonction de bonne réponse dans Console + visible
function bonneReponseFunction() {
    console.log("Bonne réponse");
    // document.querySelector("p").style.visibility = "visible";
    // on peut rajouter du style, mais une class est mieux pour plusieurs style
    document.querySelector("p").classList.toggle("p-visible");

    // on ajoute une class css plutot que d'écrire plusieurs lignes + toggle
    document.querySelector("#btn-1").classList.toggle("mauvaises-reponses");
    document.querySelector("#btn-2").classList.toggle("mauvaises-reponses");
    document.querySelector("#btn-3").classList.toggle("bonne-reponse");
}

// Créer une variable qui selectionne la zone
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");

// Var Définie la zone + Evenement + Fonction flêchée
btn1.addEventListener("click", () => {
    btn1.classList.toggle("faux");
});
btn2.addEventListener("click", () => {
    btn2.classList.toggle("faux");
});

// Var Définie la zone + Evenement + Fonction (préalablement déclarée)
// Où               Quoi       Event         Comment
btn3.addEventListener("click", bonneReponseFunction);

// *********************************************
// MOUSE EVENT
// *********************************************

const mouseMove = document.querySelector(".mouse-move");

// Prend les coordonnées X et Y pour mettre cette info dans style
window.addEventListener("mousemove", (e) => {
    mouseMove.style.left = e.pageX + "px";
    mouseMove.style.top = e.pageY + "px";
});

// Event au click enfoncé
window.addEventListener("mousedown", () => {
    mouseMove.style.transform = "scale(2) translate(-25%, -25%";
    mouseMove.style.borderColor = "white";
});

// Event au click relaché
window.addEventListener("mouseup", () => {
    mouseMove.style.transform = "scale(1) translate(-50%, -50%)";
    mouseMove.style.borderColor = "teal";
});

// Events autres : mouseenter / mouseout / mouseover