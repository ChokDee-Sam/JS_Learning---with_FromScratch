// ---------------------------------------------
// ---------------------------------------------
// XML HTTP REQUEST
// ---------------------------------------------
// ---------------------------------------------

function reqListener() {
    console.log(this.responseText);
    // renvoie le texte reçu d'un serveur suite à l'envoi d'une requête.
}

let req = new XMLHttpRequest();
req.onload = reqListener;
req.open("get", "data.txt", true);
// req.open("get", "https://api.blablagues.net/?rub=blagues", true);
req.send();

// ---------------------------------------------
// ---------------------------------------------
// FETCH
// ---------------------------------------------
// ---------------------------------------------

// fetch("mon lien", "objet d'options")

fetch("data.txt").then((response) => response.text());
// .then((data) => console.log(data));

fetch("data.json").then((res) => console.log(res)); // Fichiers
fetch("data.json")
    .then((res) => res.json())
    .then((data) => console.log(data)); //OBJET JS

// -----------------
// -----------------

fetch("https://api.blablagues.net/?rub=blagues")
    .then((response) => {
        console.log(response);
    })
    .catch((err) => console.log(err));

// ---------------------------------------------
// ---------------------------------------------
// LES OPTIONS DE REQUÊTES
// ---------------------------------------------
// ---------------------------------------------
