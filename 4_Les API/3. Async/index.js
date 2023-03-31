// --------------------------------------------------
// --------------------------------------------------

setTimeout(() => {
    console.log("test");
}, 2000);

// --------------------------------------------------
// --------------------------------------------------
// PROMISE
// --------------------------------------------------
// --------------------------------------------------

fetch("#").then((result) => console.log(result));

// --------------------------------------------------
// --------------------------------------------------
// ASYNC / AWAIT
// Permet d'attendre
// --------------------------------------------------
// --------------------------------------------------

function one() {
    fetch("#");
    fonctionBidule();
}

// On prévient avec 'async' qu'il y aura de l'async
async function two() {
    // await = on attend l'exécution totale avant la suite
    await fetch("#");
    fonctionBidule();
}

// Dans une fonction Arrow, on écrit async après le =
