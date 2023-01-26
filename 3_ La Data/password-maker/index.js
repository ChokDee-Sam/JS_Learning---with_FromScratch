// // ------------------------------------------------------------
//      Ma solution
//      Celle du formateur est top, sans le tableaux 'resultat' /.join()
// // ------------------------------------------------------------

// // On met nos contenus selon les 4 labels différents

// const dataLowercase = "qwertyuiopasdfghjklzxcvbnm";
// const dataUppercase = dataLowercase.toUpperCase();
// const dataNumbers = "0123456789";
// const dataSymbols = `!@#$%^&*()_+{}[];:'"\|<>`;

// // ------------------------------------------------------------

// // On définie nos elements

// const rangeValue = document.getElementById("password-length");
// let affichage = document.getElementById("password-output");
// let resultat = [];

// // ------------------------------------------------------------

// // On crée notre fonction

// function generatePassword() {
//     let data = []; // Tableau vide qui recevra les éléments à afficher

//     // -----------

//     // Envoi le contenu de labels dans le tableau vide
//     if (lowercase.checked) data.push(...dataLowercase);
//     if (uppercase.checked) data.push(...dataUppercase);
//     if (numbers.checked) data.push(...dataNumbers);
//     if (symbols.checked) data.push(...dataSymbols);

//     // Message si aucun label selectionné
//     if (data.length === 0) {
//         alert("Veuillez selectionnez des critères");
//         return; // stop la fonction
//     }

//     // -----------

//     // Boucle autant de fois la valeur du Range
//     for (let i = 0; i < rangeValue.value; i++) {
//         // Chaque tour de boucle envoie le resultat dans un autre tableau
//         resultat.push(data[Math.floor(Math.random() * data.length)]);
//     }

//     // -----------

//     // Affichage des resultats dans la console
//     console.log(resultat);
//     console.log(`Le mot de passe est : ${resultat.join("")}`);

//     // -----------

//     // Affiche le resultat dans la zone d'affichage HTML
//     affichage.value = resultat.join("");
//     //textContent et innerHTML ne fonctionne pas avec les input et output
//     resultat = []; // remise à zéro du tableau des résultat dans la console

//     // -----------

//     // Copie automatiquement le mot de passe généré
//     affichage.select("copy");

//     // -----------

//     // Message dans le bouton
//     generateButton.textContent = "Copié";

//     // -----------

//     // Message qui arrive 2 secondes plus tard

//     setTimeout(() => {
//         generateButton.textContent = "Générer un autre mot de passe";
//     }, 2000);
// }

// // ------------------------------------------------------------

// // Appel de notre fonction au click
// generateButton.addEventListener("click", generatePassword);

// // ------------------------------------------------------------

// ------------------------------------------------------------
// ------------------------------------------------------------
// ------------------------------------------------------------
// ------------------------------------------------------------

// ------------------------------------------------------------
// VERSION DU FORMATEUR (MEILLEURE)
// ------------------------------------------------------------

// On met nos contenus selon les 4 labels différents

const dataLowercase = "qwertyuiopasdfghjklzxcvbnm";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = `!@#$%^&*()_+{}[];:'"\|<>`;

// ------------------------------------------------------------

// On définie nos elements

const rangeValue = document.getElementById("password-length");
let affichage = document.getElementById("password-output");
let resultat = '';

//
// ------------------------------------------------------------

// On crée notre fonction

function generatePassword() {
    let data = []; // Tableau vide qui recevra les éléments à afficher

    // -----------

    // Envoi le contenu de labels dans le tableau vide
    if (lowercase.checked) data.push(...dataLowercase);
    if (uppercase.checked) data.push(...dataUppercase);
    if (numbers.checked) data.push(...dataNumbers);
    if (symbols.checked) data.push(...dataSymbols);

    // Message si aucun label selectionné
    if (data.length === 0) {
        alert("Veuillez selectionnez des critères");
        return; // stop la fonction
    }

    // -----------

    // Boucle autant de fois la valeur du Range
    for (let i = 0; i < rangeValue.value; i++) {
        // Chaque tour de boucle s'ajoute dans la variable resultat
        resultat += data[Math.floor(Math.random() * data.length)];
    }

    // -----------

    // Affichage des resultats dans la console
    console.log(resultat);
    console.log(`Le mot de passe est : ${resultat}`);

    // -----------

    // Affiche le resultat dans la zone d'affichage HTML
    affichage.value = resultat;
    //textContent et innerHTML ne fonctionne pas avec les input et output
    resultat = ''; // remise à zéro en supprimant les resultats à l'intérieur

    // -----------

    // Copie automatiquement le mot de passe généré
    affichage.select("copy");

    // -----------

    // Message dans le bouton
    generateButton.textContent = "Copié";

    // -----------

    // Message qui arrive 2 secondes plus tard

    setTimeout(() => {
        generateButton.textContent = "Générer un autre mot de passe";
    }, 2000);
}

// ------------------------------------------------------------

// Appel de notre fonction au click
generateButton.addEventListener("click", generatePassword);
