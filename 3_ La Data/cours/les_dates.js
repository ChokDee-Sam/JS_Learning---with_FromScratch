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
