const target = document.getElementById("target");

// créaton de tableau
let array = ["développeur", "photographe", "créatif"];
let wordIndex = 0;
let letterIndex = 0;

// On va créer une fonction permettant de faire apparaitre des lettres
const createLetter = () => {
    // on defini que letter est la création d'un span  dans notre html
    const letter = document.createElement("span");
    // letter (donc le span) devient l'enfant de notre variable target
    // et cette variable target, est le h3 id=target
    target.appendChild(letter);

    // On injecte une lettre dans ce span (letter)
    // Cette lettre sera issue du tableau
    // et sera choisie selon 2 variables
    letter.textContent = array[wordIndex][letterIndex];

    setTimeout(() => {
        letter.remove()
    }, 2800);
};

// On va créer une fonction de boucle permettant de créer des lettres à la suite
// Pour ainsi créer un mot
const loop = () => {
    // On va déterminer un timeOut
    setTimeout(() => {
        //
        if (wordIndex >= array.length) {
            wordIndex = 0;
            letterIndex = 0;
            loop();
        }

        // Si la lettre du mot est inférieure à la longueur totale de ce mot
        else if (letterIndex < array[wordIndex].length) {
            // alors on appelle notre précédente fonction  qui va créer un span
            // dans lequel il y aura une lettre
            createLetter();
            // et on va appeller la lettre suivante
            letterIndex++;
            // puis on demande une boucle
            // qui rentrera encore dans le if uniquement si le mot est incomplet
            loop();
        } else {
            wordIndex++;
            letterIndex = 0;
            setTimeout(() => {
                loop();
            }, 2800);
        }
    }, 60);
};
// Et donc on appelle notre fonction
loop();
