const target = document.getElementById("target");

let mots = ["développeur", "baiseur", "riche"];
let indexMots = 0;
let indexLettres = 0;

function apparition() {
    const lettre = document.createElement("span");
    target.appendChild(lettre);
    lettre.textContent = mots[indexMots][indexLettres];
    setTimeout(() => {
        lettre.remove();
    }, 1800);
}

const loop = () => {
    setTimeout(() => {
        // quand on termine les 3 mots
        if (indexMots >= mots.length) {
            indexMots = 0;
            indexLettres = 0;
            loop();

        // quand on n'a pas terminé un mot
        } else if (indexLettres < mots[indexMots].length) {
            apparition();
            indexLettres++;
            loop();

        // quand on termine un mot
        } else {
            indexMots++;
            indexLettres = 0;
            setTimeout(() => {
                loop();
            }, 1800);
        }
    }, 60);
};

loop();
