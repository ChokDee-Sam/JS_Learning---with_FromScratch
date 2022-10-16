// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus

// Ranger la sidebar si on click sur le contenu principal

// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// Aide
// Priorités en CSS : id > classe > baliseHtml

// -----------------------------------------------------

const sidebar = document.getElementById("side-bar");
const content = document.querySelector(".content");
const UL = document.querySelector("ul");

btn.addEventListener("click", () => {
    sidebar.classList.toggle("switch");
});

content.addEventListener("click", () => {
    sidebar.classList.remove("switch");
});

UL.addEventListener("click", () => {
    sidebar.classList.toggle("switch");
});




const essai = document.querySelector('h1')
console.log(essai)

essai.addEventListener('click', ()=> {
    essai.style.color = 'red'
})



let data = [
    {
        pseudo: "Denis",
        age: 33,
        technos: ["Javascript", "React", "Node"],
        admin: false,
    },
    {
        pseudo: "Samia",
        age: 24,
        technos: ["CSS", "React", "Node"],
        admin: false,
    },
    {
        pseudo: "Nikola",
        age: 42,
        technos: ["PHP", "React", "Node"],
        admin: false,
    },
];
console.log(data[2].pseudo[2]);

// dans la Variable data, qui contient un tableau, qui lui même contient des objets
// on va nommer chaque élément individuellement : user
for (const user of data) {
    document.body.innerHTML += `<li>${user.pseudo}</li>`;
}
