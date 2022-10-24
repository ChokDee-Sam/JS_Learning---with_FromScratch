counterDisplay = document.querySelector("h3");
let counter = 0;

// Debut de la Function
const bubbleMaker = () => {
    // Création d'une Variable contenant un SPAN
    const bubble = document.createElement("span");

    // Rajout de la class CSS Bubble pour la Var Bubble
    bubble.classList.add("bubble");
    // On obtient une Variable avec des propriétés CSS

    // Placement de Bubble dans le body (en tant qu'enfant)
    document.body.appendChild(bubble);

    //  Création d'une Variable pour définir la taille
    //  On lui donne une taille générée entre 0 et 300px
    const size = Math.random() * 200 + 100 + "px";

    // On ajoute cette taille générée aléatoirement dans Bubble.style
    bubble.style.height = size;
    bubble.style.width = size;

    // On défini le top et le left avec du Math.Random
    bubble.style.top = Math.random() * 100 + 50 + "%";
    bubble.style.left = Math.random() * 100 + "vh";

    // On fait un TERNAIRE
    const plusMinus = Math.random() > 0.5 ? 1 : -1;

    // On va injecter aléatoirement un Left dans l'Animation CSS
    bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");
    // Et enfin, on met tout ça dans une fonction

    // On ajoute un stop après delay pour cette Function
    setTimeout(() => {
        bubble.remove();
    }, 8000);

    // On ajoute un stop au click pour une Variable bubble
    bubble.addEventListener("click", () => {
        bubble.remove();
        counter ++;
        counterDisplay.textContent = counter
    });
    
    if (counter > 3) {
        bubble.remove();
    }
};

// interval de création de la fonction bubbleMaker
setInterval(bubbleMaker, 300);


window.addEventListener('mousemove', (e) => {
    mouse1.style.top = e.pageY + "px";
    mouse1.style.left = e.pageX + "px";
    mouse2.style.top = e.pageY + "px";
    mouse2.style.left = e.pageX + "px";
    mouse3.style.top = e.pageY + "px";
    mouse3.style.left = e.pageX + "px";
})

