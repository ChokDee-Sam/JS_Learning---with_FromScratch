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
// si l'index existe deja, l'ancienne valeur est remplacée

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
console.log(data[2].pseudo[2]);

// On ne stoque pas d'objets dans un objets, mais dans un tableau
// Et un tableau abrite des objets

// -----------------------------------------------
// Les structures de controle
// -----------------------------------------------
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
while (w < 10) {
    w++;
    // console.log("La valeur de w est de : " + w);
}

// ---------
// Do While
// (une action avant de tester la boucle)
// ---------
let d = 0;

do {
    d++;
    console.log(d);
} while (d < 5);

// ------
// For
// ------
//
const essai = document.querySelector("h1");
console.log(essai);

essai.addEventListener("click", () => {
    essai.style.color = "red";
});

// // dans la Variable data, qui contient un tableau, qui lui même contient des objets
// // on va nommer chaque élément individuellement : user
// for (const user of data) {
//     document.body.innerHTML += `<li>${user.pseudo}</li>`;
// }
