// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)

// window.addEventListener("mousemove", (e) => {
//     mouse1.style.top = e.y + "px";
//     mouse1.style.left = e.x + "px";

//     mouse2.style.top = e.y + "px";
//     mouse2.style.left = e.x + "px";

//     mouse3.style.top = e.y + "px";
//     mouse3.style.left = e.x + "px";
// });

// selectionne plusieurs élements qui ont la classe
const circleS = document.querySelectorAll(".circle");

// On crée toujours le même Event mousemove
window.addEventListener("mousemove", (e) => {
    // On call la variable circleS(donc plusieurs elements)
    // et on dit que pour chaque, on va les nommer mouse
    // je crois que c'est une fonction, à vérifier
    circleS.forEach((mouse) => {
        mouse.style.top = e.pageY + "px";
        mouse.style.left = e.pageX + "px";
    });
});
