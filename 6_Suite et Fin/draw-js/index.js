//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------

const canvas = document.getElementById("art");
const context = canvas.getContext("2d");

//--------------------------------------------------------------------------------------
// Fonction : Obtenir la valeur réelle du curseur de la souris en retirant la "marge" du canvas
//--------------------------------------------------------------------------------------

function getMousePosition(e) {
    // Méthode pour obtenir les dimensions du canvas
    const rect = canvas.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
    };
}

//--------------------------------------------------------------------------------------
// Fonction : Obtenir la position issue de la fonction précédente, puis dessiner
//--------------------------------------------------------------------------------------

function mouseMove(e) {
    const mousePosition = getMousePosition(e);
    context.lineTo(mousePosition.x, mousePosition.y);
    context.stroke();
    context.strokeStyle = "salmon";
    context.lineWidth = 8;
}

//--------------------------------------------------------------------------------------
// Let's GO !!
//--------------------------------------------------------------------------------------

canvas.addEventListener("mousedown", (e) => {
    e.preventDefault();
    // const mousePosition = getMousePosition(e); // Pourquoi ??
    context.beginPath();
    // context.moveTo(mousePosition.x, mousePosition.y); // Pourquoi ??

    canvas.addEventListener("mousemove", mouseMove);
    canvas.addEventListener("mouseup", ()=> {
        canvas.removeEventListener('mousemove', mouseMove)
    });

});

//--------------------------------------------------------------------------------------
// Reset le canvas
//--------------------------------------------------------------------------------------

reset.addEventListener('click', ()=> {
    context.clearRect(0,0, canvas.width, canvas.height)
})