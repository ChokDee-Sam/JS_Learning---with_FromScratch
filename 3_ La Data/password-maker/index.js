const dataLowercase = "qwertyuiopasdfghjklzxcvbnm";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = `!@#$%^&*()_+{}[];:'"\|<>`;
//
// ------------------------------------------------------------
//
const rangeValue = document.getElementById("password-length");
let affichage = document.getElementById("password-output");
let resultat = [];

//
// ------------------------------------------------------------
//
function generatePassword() {
    let data = [];

    if (lowercase.checked) data.push(...dataLowercase);
    if (uppercase.checked) data.push(...dataUppercase);
    if (numbers.checked) data.push(...dataNumbers);
    if (symbols.checked) data.push(...dataSymbols);

    if (data.length === 0) {
        alert("Veuillez selectionnez des critères");
        return;
    }

    // console.log(data[Math.floor(Math.random() * data.length)]);
    // console.log(data);

    for (let i = 0; i < rangeValue.value; i++) {
        resultat.push(data[Math.floor(Math.random() * data.length)]);
    }
    console.log(resultat);
    console.log(`Le mot de passe est : ${resultat.join("")}`);

    //textContent et innerHTML ne fonctionne pas avec les input et output
    affichage.value = resultat.join("");

    affichage.select("copy");
    alert("Le mot de passe a été copié : " + affichage.value);
    resultat = [];
}

generateButton.addEventListener("click", generatePassword);
