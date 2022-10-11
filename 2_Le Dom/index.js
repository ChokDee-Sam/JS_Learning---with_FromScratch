// ***************
// SELECTEURS
// ***************

// selectionner
// document.querySelector("p");

// selectionner + changer un style
// document.querySelector("p").style.color = "red";

// Créer une Variable qui selectionne automatiquement
// const reponse = document.querySelector("p");

// Utiliser cette variable qui selectionne pour changer
// reponse.style.visibility = "visible";

// ***************
// CLICK EVENT
// ***************

// création d'une fonction de bonne réponse dans Console + visible
function bonneReponseFunction() {
    console.log("Bonne réponse");
    document.querySelector("p ").style.visibility = "visible";
    document.querySelector("#btn-3").style.backgroundColor = "white";
    document.querySelector("#btn-3").style.boxShadow = "-1px 1px 20px 12px rgb(255 255 255 / 26%)";
    document.querySelector("#btn-3").style.color = "teal";
    document.querySelector("#btn-3").style.padding = "10px 30px";
    document.querySelector("#btn-3").style.transform = "scale(1.60) rotate(-10deg)  translate(-90px, -40px)";
    document.querySelector("#btn-1").style.transform = "scale(.90)translate(0px, 50px)";
    document.querySelector("#btn-1").style.opacity = "0";
    document.querySelector("#btn-2").style.transform = "scale(.90)translate(0px, 50px)";
    document.querySelector("#btn-2").style.opacity = "0";

}

// Créer une variable qui selectionne la zone .click-event
const bonneReponse = document.querySelector("#btn-3");

// Variable à l'evenement du click qui déclenche une fonction flechée
bonneReponse.addEventListener("click", () => {
    console.log("Hey Hey Hey !!");
});

// Variable à l'evenement du click qui declenche une fonction créée en amont
bonneReponse.addEventListener("click", bonneReponseFunction);
