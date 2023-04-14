// Grâce aux éléments draggable ="true" dans notre HTML, on peut les déplacer
// Et grâce aux data-draggable="target" des UL, on peut les déposer à ces endroits

// On crée une boite vide
let item;

// On stock la donné de ce qu'on souhaite bouger
document.addEventListener("dragstart", (e) => {
    item = e.target;
    console.log(item);
});

// On retire le comportement par défaut
// (remplace le panneau interdit pour y mettre un '+')
document.addEventListener("dragover", (e) => {
    e.preventDefault();
});

// On met un évènement au drop (au relâchement de la souris)
// Et on vérifie que la cible soit la Target souhaitée
document.addEventListener("drop", (e) => {
    if (e.target.getAttribute("data-draggable") == "target") {
        e.preventDefault();
        e.target.appendChild(item);
    }
});

// Permet d'éviter certains bugs
document.addEventListener("dragend", () => {
    item = null;
});
