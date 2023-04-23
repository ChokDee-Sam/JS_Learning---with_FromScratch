// -----------------------------------------------
//              Les Méthodes
// -----------------------------------------------

// -----------------------------------------------
// Méthodes STRING
// -----------------------------------------------

let nombreExemple = 50;
let phraseExemple = "Javascript est un langage orienté objet";
console.log(typeof nombreExemple);

// Transforme le Number en String
console.log(eval("1" + 2));

// Transforme le String en Number
console.log(eval(parseInt("1") + 2));

// -----------------------------------------------

// Penser à utiliser le typeof pour savoir la nature
console.log(typeof parseInt("100"));

// Permet de savoir si ce n'est pas un nombre (is NOT a NUMBER)
console.log(isNaN(phraseExemple));

// Permet de connaître la longueur/profondeur
console.log(phraseExemple.length);

// Affiche la lettre à la 38eme position (départ de 0 car array)
console.log(phraseExemple[38]);

// la variable va de 1 à 39
// la LENGTH n'est pas égale à l'index d'un tableau
// subtilité : l'index commence à zéro, et la length à 1
console.log(phraseExemple[phraseExemple.length - 1]);

// Permet de connaître l'index d'un mot, ou d'une lettre dans un element
console.log(phraseExemple.indexOf("orienté"));

// Retourne -1 si inexistant
console.log(phraseExemple.indexOf("x"));

// Permet de couper le contenu d'un element
// le chiffre entre parenthèse indique le nombre de lettre à retirer/couper
let NewPhraseExemple = phraseExemple.slice(2);
console.log(NewPhraseExemple);
// Mettre 2 chiffres permet de tout retirer avant et après
NewPhraseExemple = phraseExemple.slice(2, 20);
console.log(NewPhraseExemple);

// Permet de scinder le contenu en morceau, selon le 'séparateur'
// exemple avec une lettre
console.log(phraseExemple.split("i"));
// exemple avec chaque lettre
console.log(phraseExemple.split(""));
// exemple avec chaque mot
console.log(phraseExemple.split(" "));

// Permet de tout mettre en minuscule
console.log(phraseExemple.toLowerCase());
// Permet de tout mettre en majuscule
console.log(phraseExemple.toUpperCase());

// Permet de remplacer
console.log(phraseExemple.replace("Javascript", "Php"));

// -----------------------------------------------
// Méthodes NUMBER
// -----------------------------------------------

let number = 100.1234;
let numberString = "100.1234 est un chiffre";

// Permet de choisir le nombre de chiffre après la virgule
console.log(number.toFixed(1));
// Permet de transformer un String en Number
console.log(parseInt("43"));
// Permet de voir le premier chiffre dans une variable string
console.log(parseInt(numberString));
// Permet de voir le premier chiffre AVEC VIRGULE dans une variable string
console.log(parseFloat(numberString));

// Permet d'arrondir au plus proche
console.log(Math.round(4.4));
// Permet d'arrondir à l'unité inférieure
console.log(Math.floor(4.9));
// Permet d'arrondir à l'unité supérieure
console.log(Math.ceil(4.9));

// Permet de calculer une puissance
console.log(Math.pow(2, 7));
console.log(2 ** 7);
// Racine carré
console.log(Math.sqrt(25));

// Permet d'afficher PI
console.log(Math.PI);

// Permet d'afficher un nombre aléatoire (à virgule)
// Entre 0 et 1
console.log(Math.random());
// Entre 0 et 50
console.log(Math.random() * 50);

// Entre 0 et 50 SANS VIRGULE
console.log(Math.ceil(Math.random() * 50));
console.log(Math.floor(Math.random() * 50));

// -----------------------------------------------
// Méthodes ARRAY
// -----------------------------------------------

let array1 = ["Javascript", "Php", "Python"];
let array2 = ["Ruby", "Solidity"];

// Fusionne 2 tableaux
let newArray = array1.concat(array2);
console.log(newArray);

// Spread Operator
let newArray2 = [...array1, ...array2];
console.log(newArray2);

// Permet de créer une chaîne de caractère
// issu des elements du tableau
// en choisissant comment les joindre
console.log(array1.join("-"));

// Couper le nombre d'elements de tableau
console.log(newArray2.slice(2));
// Coupe ce qu'il y a en dehors de ces 2 chiffres
// Jusqu'où ça enlève, puis jusqu'où ça garde
console.log(newArray2.slice(2, 4));

// Trouve l'index du mot qu'on recherche
console.log(newArray2.indexOf("Javascript"));

// À chaque tour de boucle, énumère chaque element 1 par 1
array1.forEach((languages) => console.log(languages));

// À chaque tour de boucle, vérifie dans CHAQUE ELEMENT s'il y a un mot/lettre "défini"
console.log(array1.every((truc) => (truc = "p")));
console.log(array1.every((truc) => truc === "p"));
// À chaque tour de boucle, vérifie dans AU MOINS 1 ELEMENT s'il y a un mot/lettre "défini"
console.log(array1.some((truc) => truc === "Php"));

// Retire le premier index d'un tableau
console.log(array1);
let shift = array1.shift();
console.log(array1);

// Retire le dernier index d'un tableau
let pop = array1.pop();
console.log(array1);
console.log(pop);

// Retire les éléments entre un intervale, puis s'ajoute un nouvel element
console.log(newArray);
const bidule = newArray.splice(0, 2, "Three.JS");
console.log(newArray);
console.log(bidule);

// Retire les éléments entre un intervale, puis s'ajoute un nouvel element avec Spread
const cities = ["Bangkok", "Phuket", "Chiang Mai", "Chiang Rai", "Phayao"];
console.log(cities);
const bidule2 = cities.splice(0, 2, ...array2);
console.log(bidule2);
console.log(cities);


// IMPORTANT
// Calculer le nombre total des éléments
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros.reduce((x, y) => x + y));

// Ajouter un element
numeros.push("Coucou", 17);
console.log(numeros);

// FILTER
console.log(numeros.filter((number) => number > 10));

// SORT (trier / classer)
console.log(numeros.sort());
console.log(numeros.sort((a, b) => b - a)); // de B vers A

//  FILTER + SORT
console.log(numeros.filter((number) => number > 5));
console.log(numeros.filter((number) => number > 5).sort());
console.log(numeros.filter((number) => number > 5).sort((a, b) => a - b));
console.log(numeros.filter((number) => number > 5).sort((a, b) => b - a));

// MAP
numeros.map((a) => console.log(a));
numeros.map((a) => (document.body.innerHTML = a));
numeros.map((a) => (document.body.innerHTML += a));
numeros.map((a) => (document.body.innerHTML += `<li> ${a}</li>`));

// innerHTML + map + join
document.body.innerHTML = numeros.map((a) => `<li> ${a} </li>`);
document.body.innerHTML = numeros.map((a) => `<li> ${a} </li>`).join("");

// MAP SUR OBJET
const data = [
    {
        nom: "Robert",
        age: 20,
        ville: "Bangkok",
        admin: false,
    },
    {
        nom: "Adan",
        age: 40,
        ville: "Phetchabun",
        admin: false,
    },
    {
        nom: "Bernard",
        age: 30,
        ville: "Chiang Mai",
        admin: true,
    },
];

// InnerHTML + FILTER + INCLUDES + SORT + MAP + JOIN
document.body.innerHTML += data
    // .filter((truc) => truc.age >= 30)
    .filter((truc) => truc.nom.includes("a")) // filtre

    .sort((a, b) => a.age - b.age) // classe / trie

    .map(   // liste
        (user) =>
            `
    <div class ='nom-De-Classe-CSS'>
        <h2>  ${user.nom} </h2>
        <p> Age : ${user.age} </p>
        <p> Ville : ${user.ville} </p>
        <p> Status : ${user.admin ? "Modérateur" : "Membre"} </p>

    </div>
            `
    )
    .join("");
