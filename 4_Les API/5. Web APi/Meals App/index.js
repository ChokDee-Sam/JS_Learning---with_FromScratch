// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------

// 1 - Définir la localisation du formulaire, de l'input, et des résultats
// 2 - Définir une variable vide, qui contiendra nos futurs résultats Fetch

// - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - -

const form = document.querySelector("form");
const input = document.querySelector("input");
const result = document.getElementById("result");

let meals = [];

// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------

// 3 - Récupérer la value écrite dans l'Input
// 4 - Call la fonction de Fetch, avec la value de l'input en paramètre
// 5 - Stocker le résultat de cette fonction dans une Variable
// 6 - Afficher le contenu de cette variable (dans la console)

// - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - -

input.addEventListener("input", (e) => {
    fetchMeals(e.target.value);
});

async function fetchMeals(search) {
    await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    ) // Avec propriété
        .then((res) => res.json())
        .then((data) => (meals = data.meals));

    console.log(meals);
}

// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------

// 7 - À chaque Submit du Form, ne pas rafraîchir la page
// 8 - Call la fonction qui affichera le contenu de page (résultats du fetch)
// 9 - Cette variable devra afficher une mise en page définie par le CSS

// - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - -

// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------

// 10 - Définir précisément notre fonction d'affichage de contenu

// - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - -

function mealsDisplay() {
    if (meals === null) {
        result.innerHTML = "<h2>Aucun résultat</h2>";
    } else {
        meals.length = 12; // permet de limiter le nombre de résultats affichés

        result.innerHTML = meals
            .map((element) => {
                let ingredientsAndMeasures = [];

                for (let i = 1; i < 21; i++) {
                    if (element[`strIngredient${i}`]) {
                        let ingredient = element[`strIngredient${i}`];
                        let measure = element[`strMeasure${i}`];

                        ingredientsAndMeasures.push(
                            `<li> ${ingredient} --- ${measure}</li>`
                        );
                    }
                }

                return `
    <li class="card">
      <h2>${element.strMeal}</h2>
      <p>${element.strArea}</p>
      <img src=${element.strMealThumb} alt="photo ${element.strMeal}">
      <ul>${ingredientsAndMeasures.join("")}</ul>
    </li>
    `;
            })
            .join("");
    }
}
// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------

form.addEventListener("submit", (e) => {
    e.preventDefault();
    mealsDisplay();
});
