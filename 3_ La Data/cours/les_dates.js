// -------------------------------------
// LES DATES
// -------------------------------------

// -----------
// Date classique
// -----------

let date = new Date();
console.log(`--- date = new Date() ---`);
console.log(date);

// -----------
// Timestamp
// -----------

let timestamp = Date.parse(date);
console.log(`--- timestamp = Date.parse(date) ---`);
console.log(timestamp);

// -----------
// IsoString
// -----------

let iso = date.toISOString();
console.log(`--- iso = date.toISOTOSTRING ---`);
console.log(iso);

// DateString
console.log(`--- date.toDateString ---`);
console.log(date.toDateString());

// ToLocateDateString
console.log(`--- ToLocateDateString ---`);
console.log(date.toLocaleDateString("fr-FR"));

// -----------
// En Variable  // pas pratique, car on doit tout réécrire
// -----------

let newDateVariable = date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
});

// -----------
// En Fonction  //pratique, car on doit juste changer l'argument
// -----------

const dateParser = function dateParser(chaine) {
    let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    });
    return newDate;
};

console.log(`--- Function dateParser()`);
console.log(dateParser(date));
console.log(dateParser(iso));
console.log(dateParser(timestamp));

// -----------
// -------------------------------------
// LE DESTRUCTURING (permet d'écrire plus court)
// -------------------------------------
// -----------

// Création d'un objet contenant un  tableau
let moreData = {
    destVar: ["Element 1", "Element 2"],
};
// -----------

// Création d'une Const en destructuring :
const { destVar } = moreData;

// C'est la même chose qu'écrire :
const destVar2 = moreData.destVar;

// Exemple
console.log(moreData.destVar);
console.log(destVar);

// -----------

let arrayExemple = [10, 20, 30];
console.log(arrayExemple[0]);
console.log(arrayExemple[1]);
console.log(arrayExemple[2]);

// On déstructure individuellement le contenu d'un tableau dans une variable
let [x, y, z] = arrayExemple;
console.log(x);
console.log(y);
console.log(z);

// -----------

// Exemple en mixant une date + le destructuring

console.log(iso);
const dateDestructuring = (chaine) => {
    // La chaine se coupe au T et qu'on garde uniquement la premiere partie
    let newDate = chaine.split("T")[0];
    console.log(newDate);

    newDate = newDate.split("-"); // on 'découpe' en plusieurs elements de tableau
    console.log(newDate);

    let [y, m, d] = newDate; // on crée une variable pour chaque element de tableau
    console.log(d, m, y);

    let newDateFR = [d, m, y]; // on crée une variable contenant un tableau de var dans le bon ordre
    return newDateFR.join(" / "); // et on les join
};
console.log(dateDestructuring(iso)); // appel de fonction avec iso en argument

// -----------
// -------------------------------------
// LES DATASETS
// -------------------------------------
// -----------

//On peut récupérer la data qu'on a mis dans notre HTML

const h3js = document.getElementById("javascript");
console.log(h3js.dataset);
console.log(h3js.dataset.lang);

const h3 = document.querySelectorAll("h3");
h3.forEach((language) => console.log(language.dataset.lang));
