// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours


  // création de variable booleen pour que le popUp ne revienne plus
  let playOnce = true;

window.addEventListener("scroll", () => {
    // Permet d'afficher le nombre de scrollY
    console.log(window.scrollY);

    // Pour la reduction de navbar au scroll down
    if (window.scrollY > 0) {
        navbar.style.height = "60px";
        // Pour la restauration de navbar au retour
    } else {
        navbar.style.height = "90px";
    }

    // création de variable qui indique le pourcentage de la page
    // et non le scrollY qui change selon la taille de fenetre
    let realScroll =
        (window.scrollY + window.innerHeight) / document.body.offsetHeight;

    // Pour l'apparition de l'image
    if (realScroll > 0.45) {
        imgImprovise.style.opacity = "1";
        imgImprovise.style.transform = "translateX(0px)";
        // Pour la disparition de l'image
    } else {
        imgImprovise.style.opacity = "0";
        imgImprovise.style.transform = "translateX(-200px)";
    }

    // Pour l'apparition du popup
    if (realScroll > 0.8 && playOnce) {
        popup.style.opacity = "1";
        popup.style.transform = "none";
        playOnce = false;
    }
});

closeBtn.addEventListener("click", () => {
    popup.style.opacity = "0";
    popup.style.transform = "translateX(500px)";

    // autre solution, mais crée une erreur dans la console par la suite
    // popup.remove();
});
