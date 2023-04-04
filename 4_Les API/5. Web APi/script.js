// --------------------------------------------------------
// --------------------------------------------------------
//                      LOCAL STORAGE
// --------------------------------------------------------
// --------------------------------------------------------

// Création de data locale
localStorage.Exemple = "Je stock la Data Locale ici";

// Affichage dans la console
console.log(localStorage.Exemple);

// Affichage dans le body html
document.body.textContent = localStorage.Exemple;

// Suppression de la Data
// localStorage.removeItem('dataExemple')

// -------------------------------------------------------
// Console Dev > Application > Stockage local > Adresse
// On peut passer UNIQUEMENT des chaînes de caractères
// À moins de convertir
// // ----------------------------------------------------

const obj = {
    name: "Denis",
    age: 22,
};

// Converti l'objet en JSON, donc lisible
localStorage.user = JSON.stringify(obj);
console.log(localStorage.user);
// Converti le JSON en JS Objet (dans la console)
console.log(JSON.parse(localStorage.user));

// --------------------------------------------------------
// --------------------------------------------------------
//                    SESSION STORAGE
// Existe uniquement le temps de la session (fermer la page)
// --------------------------------------------------------
// --------------------------------------------------------

sessionStorage.dataTruc = "55px";
sessionStorage.clear(); // Pour supprimer

// --------------------------------------------------------
// --------------------------------------------------------
//                      COOKIES
// Sont envoyés quelque part
// Nécessite une propriété / valeur
// --------------------------------------------------------
// --------------------------------------------------------

// Sans date d'expiration, il s'arrêtera à la session
document.cookie = "name=Sam";

// Bonne pratique
document.cookie = "pseudo=SamSam;path=/; max-age=45000; secure; samesite";

// Avec expires
document.cookie =
    "pseudo=SamSam;path=/; expires=Thu, 31 Dec 2099 23:59:59; secure; samesite";
