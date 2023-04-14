// -------------------------------------------------------
// CANVAS
// -------------------------------------------------------

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function draw() {
    // Premier élément visuel
    ctx.fillStyle = "rgb(200,0,0";
    ctx.fillRect(10, 10, 50, 50); // axe x, axe y, largeur, hauteur

    // Deuxième élément visuel
    ctx.fillStyle = "rgb(0,100,200, 0.5";
    ctx.fillRect(30, 30, 100, 100); // axe x, axe y, largeur, hauteur

    // Efface la zone définie
    ctx.clearRect(50, 50, 50, 50);

    // Dessine uniquement le contour
    ctx.strokeRect(75, 75, 50, 50);

    // Dessine une forme géométrique
    ctx.fillStyle = "rgb(200,100,200, 0.5";
    ctx.beginPath();
    ctx.moveTo(180, 150);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 175);
    ctx.fill();
    
    setTimeout(() => {
        
    }, 2000);
}

window.addEventListener('load', draw)