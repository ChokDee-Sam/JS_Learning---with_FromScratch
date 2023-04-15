//-------------------------------------------------------------------------------------

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const img = new Image();
img.src = "./media/flappy-bird-set.png";

//-------------------------------------------------------------------------------------

// Settings : Static

let gamePlaying = false; // affiche ou non l'écran d'accueil
const gravity = 0.5;
const speed = 6.2;
const size = [51, 36]; // largeur, Hauteur
const jump = -11.5;
const cTenth = canvas.width / 10; //  pour placer l'oiseau à 1 /10ème du Canvas

// Settings : Pipes

const pipeWidth = 78;
const pipeGap = 270;
const pipeLoc = () =>
    Math.random() * (canvas.height - (pipeGap + pipeWidth) - pipeWidth) +
    pipeWidth;

// Settings : Dynamic
let index = 0,
    bestScore = 0,
    currentScore = 0,
    pipes = [], // les poteaux
    flight,
    flyHeight; // position de l'oiseau (en hauteur)

//

const setup = () => {
    currentScore = 0;
    flight = jump;
    // set initial flyHeight (middle of screen - size of the bird)
    flyHeight = canvas.height / 2 - size[1] / 2;

    // setup first 3 pipes
    pipes = Array(3)
        .fill()
        .map((a, i) => [canvas.width + i * (pipeGap + pipeWidth), pipeLoc()]);
    console.log("heu");
};
//-------------------------------------------------------------------------------------

//

const render = () => {
    index++;

    // Permet de choisir spécifiquement la zone de pixels souhaitée (dans un fichier)
    // Et ensuite, choisir la destination de ces pixels (dans notre contexte de Canvas)
    // https://developer.mozilla.org/fr/docs/Web/API/CanvasRenderingContext2D/drawImage
    // void ctx.drawImage(image, sx, sy, sLargeur, sHauteur, dx, dy, dLargeur, dHauteur);

    // -----------
    // Background
    // -----------

    //Première image
    ctx.drawImage(
        img,
        0,
        0,
        canvas.width,
        canvas.height,
        -((index * (speed / 2)) % canvas.width) + canvas.width,
        0,
        canvas.width,
        canvas.height
    );

    // Deuxième image
    ctx.drawImage(
        img,
        0,
        0,
        canvas.width, // -5 pour un meilleur rendu
        canvas.height,
        -((index * (speed / 2)) % canvas.width),
        0,
        canvas.width,
        canvas.height
    );

    // ----------------------
    // Animation de l'oiseau
    // ----------------------

    if (gamePlaying) {
        ctx.drawImage(
            img,
            432,
            Math.floor((index % 9) / 3) * size[1],
            ...size,
            cTenth,
            flyHeight,
            ...size
        );

        flight += gravity;
        flyHeight = Math.min(flyHeight + flight, canvas.height - size[1]);
    } else {
        ctx.drawImage(
            img,
            432,
            Math.floor((index % 9) / 3) * size[1],
            ...size,
            canvas.width / 2 - size[0] / 2,
            flyHeight,
            ...size
        );
        flyHeight = canvas.height / 2 - size[1] / 2; // pour bien centrer

        // -------
        // Textes
        // -------

        ctx.fillText(`Meilleur score : ${bestScore}`, 55, 245); // axe x, axe y
        ctx.fillText("Cliquez pour jouer", 48, 535);
        ctx.font = "bold 30px courier";
    }

    // -----------
    // Les Tuyaux
    // -----------

    if (gamePlaying) {
        pipes.map((pipe) => {
            pipe[0] -= speed;

            // --------------
            // Tuyaux du Haut
            // --------------

            ctx.drawImage(
                img,
                432,
                588 - pipe[1],
                pipeWidth,
                pipe[1],
                pipe[0],
                0,
                pipeWidth,
                pipe[1]
            );

            // --------------
            // Tuyaux du Bas
            // --------------
            ctx.drawImage(
                img,
                432 + pipeWidth,
                108,
                pipeWidth,
                canvas.height - pipe[1] + pipeGap,
                pipe[0],
                pipe[1] + pipeGap,
                pipeWidth,
                canvas.height - pipe[1] + pipeGap
            );
        });
    }

    // ----------------------
    // ----------------------

    window.requestAnimationFrame(render);
};
// ----------------------
// ----------------------

setup();
img.onload = render;
document.addEventListener("click", () => (gamePlaying = true));
window.onclick = () => (flight = jump);
