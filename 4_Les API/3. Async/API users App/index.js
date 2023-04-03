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
};
userDisplay();
