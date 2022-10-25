// -----------------------------------------------
//              Les Méthodes
// -----------------------------------------------

// -----------------------------------------------
// Méthodes STRING
// -----------------------------------------------

let nombreExemple = 50;
let phraseExemple = "Javascript est un langage orienté objet";
console.log(typeof string2);

// ce calcul va devenir une String en concatenant le tout
console.log(eval("1" + 2));
// Cette méthode transforme le String en Number
console.log(eval(parseInt("1") + 2));
// Penser à utiliser le typeof pour savoir la nature
console.log(typeof parseInt("100"));

// Permet de savoir si ce n'est pas un nombre (NOT a NUMBER)
console.log(isNaN(phraseExemple));

// Permet de connaitre la longueur/profondeur
console.log(phraseExemple.length);
// la lenght va de 0 à 38
console.log(phraseExemple[38]);
// la variable va de 1 à 39
// subtilité : il faut donc préciser le -1
console.log(phraseExemple[phraseExemple.length - 1]);

// la LENGHT n'est pas égale à l'index d'un tableau
// la LENGHT commence à 1 dans une variable
// La LENGHT commence à 0 dans un tableau (index)

// Permet de connaitre l'index d'un mot, ou d'une lettre dans un element
console.log(phraseExemple.indexOf("orienté"));
// Retourne -1 si inexistant
console.log(phraseExemple.indexOf("x"));

// Permet de couper le contenu d'un element
// le chiffre entre parenthese indique le nombre de lettre à retirer
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

// -----------------------------------------------
// Méthodes ARRAY
// -----------------------------------------------

let array1 = ["Javascript", "Php", "Python"];
let array2 = ["Ruby", "Solidity"];

let newArray = array1.concat(array2)
console.log(newArray);