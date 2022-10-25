// -----------------------------------------------
// Rappel des types de données
// -----------------------------------------------

let string = "chaine de car";
let number = 10;
let boolean = true;
let maVariable;
// undefined (si on ne précise rien)
// console.log(typeof maVariable);

// -----------------------------------------------
// Tableaux
// -----------------------------------------------

let array = ["Bordeaux", "Toulouse", "Nantes"];
// console.log(array);

// selectionne le mot
// console.log(array[0]);

// selectionne la lettre dans le mot
// console.log(array[0][7]);

let array2 = ["Bordeau", 24, true, [1, 2], { nom: "Denis" }];
console.log(array2);
// pour rentrer dans un objet, on utilise un point
console.log(array2[4].nom);

let objet = {
    // index : valeur
    pseudo: "Denis",
    age: 33,
    technos: ["Javascript", "React", "Node"],
    admin: false,
};
console.log(objet.age);
console.log(objet.technos);
console.log(objet.technos[0][0]);

// Ajouter un index:valeur dans un objet (note: un =)
objet.sexe = "Homme";
// si l'index existe deja, l'ancienne valeur est remplacée (écrasée)

// Une Variable qui contient un tableau
// le tableau contient 4 objets, et chaque objets contient 4 index:valeurs

let data = [
    {
        pseudo: "Denis",
        age: 33,
        technos: ["Javascript", "React", "Node"],
        admin: false,
    },
    {
        pseudo: "Samia",
        age: 24,
        technos: ["CSS", "React", "Node"],
        admin: false,
    },
    {
        pseudo: "Nikola",
        age: 42,
        technos: ["PHP", "React", "Node"],
        admin: false,
    },
];
console.log(data[1].pseudo);
console.log(data[1].pseudo[0]);

// On ne stoque pas d'objets dans un objets, mais dans un tableau
// Donc un tableau abrite des objets
// Stocker un objet dans un objet serait bizarre, et moins accessible

// -----------------------------------------------
// Les structures de controle
// -----------------------------------------------

// ------
// If
// ------

if (data[0].age > data[1].age) {
    console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
}

// Sinon 1 seule suffit
// utiliser des accolades s'il y a plusieurs ligne,
if (data[0].age > data[1].age) console.log(data[0].pseudo + " est plus agé");

// La même en TERNAIRE
// valeur à tester  ? si vrai : si faux
data[0].age > data[1].age
    ? console.log(data[0].pseudo + " est plus agé")
    : console.log("ok");

// ------
// While
// ------
let w = 0;
// console.log(w);
while (w < 3) {
    w++;
    console.log("La valeur de w est de : " + w);
}

// ---------
// Do While
// (une action avant de tester la boucle)
// FAIS AVANT de TESTER
// ---------
let d = 0;

do {
    d++;
    console.log(d);
} while (d < 5);

// ------
// For
// ------

// // dans la Variable data, qui contient un tableau, qui lui même contient des objets
// // on va nommer chaque OBJET individuellement : user
for (const user of data) {
    // On va voir la "longueur" du tableau
    // C'est à dire le nombre d'objets à l'intérieur, qui sera le nombre de boucle
    console.log(data.length);
    // Ça va créer une boucle autant de fois qu'il y a d'objets dans data (donc 3)

    document.body.innerHTML += `<li>${user.pseudo} a ${user.age} ans </li>`;
    // Et on indique qu'à chaque passage de boucle, on souhaite injecter du html
    // Un <li> contenant le pseudo de chaque objets

    // les backtick permettent de ne pas écrire la concatenation avec des +
    // += se rajoute au contenu, afin de ne pas écraser la valeur précédente
}

// ---
// AUTRE BOUCLE FOR
// ---
console.log(`la profondeur du tableau est de ${data.length} objets`);
// data.length est pour connaitre le nombre d'objets

// On déclare une valeur
// On déclaire la Condition d'avant arrêt
// On déclare l'action à réaliser pour chaque tour de boucle
for (i = 0; i < data.length; i++) {
    // console.log(i);
    // affiche le nombre de i à chaque boucle (pas d'interêt)

    // console.log(data)
    // affiche les 3 même objets à chaque tour de boucle (pas d'interêt)

    console.log(data[i]);
    // affiche la data de chaque objets, donc un objet par boucle

    console.log(data[i].technos);
    // Affiche les technos contenu dans un objet à chaque tour

    document.body.innerHTML += "<h2>" + data[i].pseudo + "</h2>";
    // Ajoute du HTML H2 à chaque tour de boucle
    // Chaque boucle écris un LI avec le pseudo inclus dans un objet
}

// ------
// SWITCH
// ------

document.body.addEventListener("click", (e) => {
    // permet de savoir sur quoi on clic
    // console.log(e.target);
    console.log(e.target.id);

    // ------
    // SWITCH debut
    // ------
    switch (e.target.id) {
        case "javascript":
            document.body.style.background = "yellow";
            break;
        case "php":
            document.body.style.background = "violet";
            break;
        case "python":
            document.body.style.background = "blue";
            break;
        default:
            null;
    }
});
