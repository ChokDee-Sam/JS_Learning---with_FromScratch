// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------

// ----------------------------------------------------------
// ----------------------------------------------------------

let userData;

const fetchUser = async () => {
    await fetch("https://randomuser.me/api/?results=24")
        .then((res) => res.json())
        .then((data) => (userData = data.results));
    console.log(userData); //affiche correctement le contenu
    console.log(userData.length);
};

// fetchUser()
console.log(userData); // undefined
// ----------------------------------------------------------

const userDisplay = async () => {
    await fetchUser();

    // Avec .map()
    document.body.innerHTML = userData
        .map(
            (user) =>
                `
                <h3>${user.name.first} </h3>
                `
        )
        .join("");

    // avec Boucle For
    for (let i = 0; i < userData.length; i++) {
        document.body.innerHTML += `<h3> ${userData[i].location.city}</h3>`;
    }

    // avec Boucle For Of
    for (const element of userData) {
        document.body.innerHTML += `<h3> ${element.gender}</h3>`;
    }
};
userDisplay();
