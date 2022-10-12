// --------------------------
// SELECTEURS
// --------------------------

// selectionner
// document.querySelector("p");

// selectionner + changer un style
// document.querySelector("p").style.color = "red";

// Créer une Variable qui selectionne automatiquement
// const reponse = document.querySelector("p");

// Utiliser cette variable qui selectionne pour changer
// reponse.style.visibility = "visible";

// --------------------------
// CLICK EVENT
// --------------------------

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

// --------------------------
// MOUSE EVENT
// --------------------------

// on dit que cette Var sera la selection du bloc mouse-move
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

// --------------------------
// --------------------------
// KEYPRESS EVENT
// --------------------------
// --------------------------

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = (key) => {
    // on lui donne une instruction native
    const audio = new Audio();
    // on lui dit que le nom du mp3 sera une touche + .mp3
    audio.src = key + ".mp3";
    // audio.src =  "z.mp3"; exemple sans touche
    // et on lance une "fonction native" ?
    audio.play();
};

// Dans le DOM, on lance un event de pression de touche
// qui donnera les infos dans la console
document.addEventListener("keypress", (e) => {
    // Key rajoute du textem avec l'information key
    // (contenue dans la liste d'infos de console)
    key.textContent = "Tu appuies sur " + e.key;

    // si la touche écrite est A
    if (e.key === "A") {
        btn3.style.background = "crimson";
    }

    ring(e.key);
});

// --------------------------
// --------------------------
// SCROLL EVENT
// --------------------------
// --------------------------

// on declare la nav
const nav = document.querySelector("nav");

// Event au scroll à la racine window
window.addEventListener("scroll", () => {
    // pour  voir afficher le nombre de pixels
    console.log(window.scrollY);

    // si le nombre de pixels est supérieur à
    if (window.scrollY > 330) {
        nav.style.top = "0px";
        // sinon
    } else {
        nav.style.top = "-50px";
    }
});

// --------------------------
// FORM EVENT
// --------------------------

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");

let pseudo = "";
let language;

inputName.addEventListener("input", (e) => {
    pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
    language = e.target.value;
});

form.addEventListener("submit", (e) => {
    // permet de ne pas recharger la page
    e.preventDefault();

    // le JS gère nativement "checked"
    if (cgv.checked) {
        // on injecte du HTML dans la div qui était vide
        document.querySelector("form > div").innerHTML = `
        <h5>Pseudo : ${pseudo}</h5>
        <h5> Language préféré : ${language} </h5>
        `;
    } else {
        alert("Veuillez accepter les CGV bande de canards");
    }
});

// inputName.addEventListener("click", (e) => {
//     console.log(e);
// });

// --------------------------
// LOAD EVENT
// --------------------------

// Créé un Event après chargement total de la page
window.addEventListener("load", () => {
    console.log("document load");
});

// --------------------------
//

// --------------------------
// FOR EACH
// --------------------------

// Attention : uniquement pour plusieurs elementS
// const boxes = document.getElementsByClassName("box");
// getElementsByClassName cause des problèmes
const boxes = document.querySelectorAll('.box');

// console.log(boxes);

// Ne fonctionne pas car plusieurs éléments = ForEach
// boxes.addEventListener('click', () => {
//     boxes.style.backgroundColor = 'white';
// })


// boxes.forEach((box) => {
//     box.addEventListener("click",
//         (e) => {
//             e.target.style.transform = "scale(0.7)";
//         });
// });
