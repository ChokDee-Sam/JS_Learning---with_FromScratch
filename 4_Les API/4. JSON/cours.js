// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------

// La méthode .json()
// Elle s'auto-résout toute seule en renvoyant le Body de la requête
// C'est pour ça que 'promesse'
fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);

        // stringify()      convertit en JSON
        let settings = JSON.stringify(data);
        console.log(settings);

        // parse()          convertit le JSON en OBJET JAVASCRIPT
        console.log(JSON.parse(settings));
    });
