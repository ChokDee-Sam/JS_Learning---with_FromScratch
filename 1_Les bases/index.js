// Alert PopUp
// alert("Hey");

// Affichage dans la console
console.log("Welcome");

// let / const / var
const salutation = "Bonjour";
console.log(salutation);

// incrementation ?
total = 2;
let nombre = 4;
total = ++nombre;
console.log(total);

// Comparateur If / Else
x = 20;
y = 5;

if (x < y) {
    console.log("x est inferieur à y");
} else {
    console.log("what");
}

if (x) {
    console.log("x existe");
}

// ternaire
x < y ? console.log("Cool") : console.log("Oh, ok");

// ********************************
// Fonction
// ********************************

// une enchainement classique
function tropCool() {
    console.log("Ça, c'est cool");
    console.log("Et ça, c'est encore mieux");
}
// on l'appelle comme ça
tropCool();

// une variable avec un contenu modifiable (dynamique)
const faireUneTache = (tache) => {
    console.log("Je fais : " + tache);
};
faireUneTache("du sport");
faireUneTache("l'amour");

// Fonction qui s'appelle toute seule
//      Commencer la fontion entre parenthèse
//      Et rajouter double parenthese à la fin
(function joueSeule() {
    console.log("Je me joue toute seule");
})();
// sans nom, elle est anonyme
// idéal pour ne pas la rappeler plus tard

// Fonction flêchée
(() => {
    console.log("Je me joue aussi toute seule");
})();
