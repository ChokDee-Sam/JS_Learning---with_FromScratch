// --------------------------------------------------
// --------------------------------------------------

// De base, un Fetch est en method GET

// --------------------------------------------------
// --------------------------------------------------

// CRUD = Create (POST), Read (GET), Update (PUT), Delete (DELETE)

// get = apporte-moi des données
// get = incrémente des données
// put = met à jour des données
// delete = supprime des données

// --------------------------------------------------
// --------------------------------------------------

const myHeaders = new Headers();

const init = {
    method: "GET", // = apporte-moi des données
    headers: myHeaders,
    mode: "cors", //gère les permissions
    cache: "default",
};

// fetch("mon lien", "objet d'options")
fetch("data.json", init) // tu vas chercher le fichier
    .then((result) => console.log(result)); // tu l'affiches

// --------------------------------------------------
// --------------------------------------------------

const init2 = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: ({
        pseudo: "Sam",
        message: `HeyHeyHey !!`,
    }),
    mode: "cors",
    credentials: "same-origin",
};

const init3 = {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        pseudo: "Sam",
        message: `HeyHeyHey !!`,
    }),
    mode: "cors",
    credentials: "same-origin",
};

document.querySelector("form").addEventListener("submit", () => {
    fetch("http://localhost:3000/post", init2).then(() => {
        console.log("Data envoyée !");
    });
});
// --------------------------------------------------
// --------------------------------------------------
