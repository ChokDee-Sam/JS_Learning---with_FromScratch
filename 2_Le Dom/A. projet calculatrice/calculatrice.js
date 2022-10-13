const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");

console.log(result);

// À partir de la CONST buttons
// pour chaque buttons qui seront desormais unique (button)
buttons.forEach((button) => {
    // à chaque click sur button, on va chercher une information
    button.addEventListener("click", (e) => {
        // qui sera le target.id, en soit, le nombre adéquat
        // et on l'affiche
        // console.log(e.target.id);

        // (remet à zéro à chaque clic = pas bon)
        // result.textContent = (e.target.id)

        // (permet de concatener le resultat)
        // maintenant on injecte ce nombre dans result
        result.textContent += e.target.id;
    });
});

// JS nativement gère EQUAL s'il existe dans notre html
// ET qu'on lui fait une eval
// On lui donne un Event au click
equal.addEventListener("click", () => {
    result.textContent = eval(result.textContent);
});

// JS gere aussi CLEAR, sans avoir besoin de creer une VAR
clear.addEventListener("click", () => {
    result.textContent = "";
});

