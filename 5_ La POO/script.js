// -------------------------------------------------------------------
// -------------------------------------------------------------------
// LA POO
// (éviter les fonction arrow pour éviter les 'pertes' de scopes)
// -------------------------------------------------------------------
// -------------------------------------------------------------------
//
//
// -------------------------------------------------------------------
// Les Objets
// -------------------------------------------------------------------

// Objet de base
const obj = {
    nom: "Sam",
    ville: "Chiang Mai",
};

// Ajouter un paramètre d'objet
obj.age = 29;

//  Modifier
obj.pseudo = "SamSam";

// Supprimer
delete obj.pseudo;
// console.log(obj)

// Checker si propriété existe
console.log("ville" in obj);
console.log("pseudo" in obj);

// -------------------------------------------------------------------
// Boucles pour parcourir un Objet
// -------------------------------------------------------------------

// Parcourir l'Objet
for (const abc in obj) {
    console.log(abc); // affiche le nom chaque propriété
}

// Parcourir l'objet avec une syntaxe permettant la concaténation [ ]
for (const abc in obj) {
    console.log(abc + " : " + obj[abc]); // affiche les valeurs de chaque propriété
}
