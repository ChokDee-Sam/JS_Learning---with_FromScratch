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
    console.log(userData[0]);
};

// fetchUser()
console.log(userData); // undefined
// ----------------------------------------------------------

const userDisplay = async () => {
    await fetchUser();

    const dateParser = (date) => {
        let newDate = new Date(date).toLocaleDateString("fr-TH", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
        return newDate;
    };

    // Avec .map()
    document.body.innerHTML = userData
        .map(
            (user) =>
                `
                <div class="card">
                <img src=${user.picture.large}
                        alt="photo de ${user.name.first}">
                <h3>${user.name.first} </h3>
                <p>${user.location.city}, ${dateParser(user.dob.date)} </p>

                <em> 
                Membre depuis : ${
                    user.registered.date
                }jours</em>                
                </div>
                `
        )
        .join("");

    // // avec Boucle For
    // for (let i = 0; i < userData.length; i++) {
    //     document.body.innerHTML += `<h3> ${userData[i].location.city}</h3>`;
    // }

    // // avec Boucle For Of
    // for (const element of userData) {
    //     document.body.innerHTML += `<h3> ${element.gender}</h3>`;
    // }

    // // avec Boucle For Each
    // userData.forEach(element => {
    //     document.body.innerHTML += `<h3> ${element.dob.age}</h3>`

    // });
};
userDisplay();
