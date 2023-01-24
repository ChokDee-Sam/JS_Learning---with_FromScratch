const target = document.getElementById("target");
let array = ["développeur", "photographe", "créatif"];
let wordIndex = 0;
let letterIndex = 0;

const createLetter = () => { // variable avec fonction anonyme
    const letter = document.createElement("span"); // création d'un Span
    target.appendChild(letter); // localisation de cette span

    // ce span, à l'endroit précis, va afficher les elements du tableau array[0][0]
    letter.textContent = array[wordIndex][letterIndex];

    setTimeout(() => {
        // création d'un interval
        letter.remove(); // supression
    }, 2800);
};

// création d'une fonction de boucle
const loop = () => {
    // avec un interval entre chaque futur condition
    setTimeout(() => {
        // si on a terminé les 3 contenus du tableaux, on remet à zero et on loop
        if (wordIndex >= array.length) {
            wordIndex = 0;
            letterIndex = 0;
            loop();

            // Sinon si
        } else if (letterIndex < array[wordIndex].length) {
            createLetter(); // crée une lettre
            letterIndex++; // ajoute +1 à l'index lettre
            loop();

            // Sinon, s'il n'y a plus de lettres dans le mot, alors tu avances d'un mot
        } else {
            wordIndex++; // ajoute +1 l'index mot
            letterIndex = 0; // reinitialise à zéro l'index lettre
            setTimeout(() => {
                loop();
            }, 2800);
        }
    }, 60);
};

loop();
