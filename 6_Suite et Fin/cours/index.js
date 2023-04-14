// "use strict";

// _______________________________________________________
// CANVAS
// _______________________________________________________

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function draw() {
    // Premier élément visuel
    ctx.fillStyle = "rgb(200,0,0";
    ctx.fillRect(10, 10, 50, 50); // axe x, axe y, largeur, hauteur

    // Deuxième élément visuel
    ctx.fillStyle = "rgb(0,100,200, 0.5";
    ctx.fillRect(30, 30, 100, 100); // axe x, axe y, largeur, hauteur

    // Efface la zone définie
    ctx.clearRect(50, 50, 50, 50);

    // Dessine uniquement le contour
    ctx.strokeRect(75, 75, 50, 50);

    // Dessine une forme géométrique
    ctx.fillStyle = "rgb(200,100,200, 0.5";
    ctx.beginPath();
    ctx.moveTo(180, 150);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 175);
    ctx.fill();

    setTimeout(() => {}, 2000);
}

window.addEventListener("load", draw);

// _______________________________________________________
// TRY AND CATCH
// _______________________________________________________

// ------------------------------------
// La base
// ------------------------------------

try {
    // Test un block de code
    maFonction();
} catch (err) {
    // console.log(err);
}

// ------------------------------------
// Exemple
// ------------------------------------

function isValidJSON(txt) {
    try {
        JSON.parse(txt);
        return true;
    } catch {
        return false;
    }
}

console.log(isValidJSON("OH LALA !!"));

// --------------------------------------
// Finally : s'exécute après Try ou Catch
// --------------------------------------

try {
    // Test un block de code
    // maFonction();
} catch (err) {
    console.log(err);
} finally {
    console.log("On est arrivé au bout !");
}

// --------------------------------------
// Throw : signal une erreur ou une exception
// (alors que 'return' sort de la fonction et retourne une valeur)
// --------------------------------------

function isNumber(num) {
    if (isNaN(num)) {
        throw "Not a number !";
    } else {
        console.log("c'est un nombre");
    }
    // PLEIN DE CODE
}

// exemple
try {
    isNumber("2d");
} catch (err) {
    console.log("Erreur : " + err);
}

// _______________________________________________________
// STRICT MODE
// _______________________________________________________

// Voir ligne 1
// Évite les erreurs, car moins permissive (bonne pratique)

voiture = "Toyota";
// console.log(voiture) // erreur si strict mode
