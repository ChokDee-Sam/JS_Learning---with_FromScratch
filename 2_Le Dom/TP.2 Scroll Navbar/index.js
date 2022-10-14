// Créer un événément au scroll

// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)

// ------------------------------------------------------
// ------------------------------------------------------

// On crée une Variable avant notre event
// il contiendra par la suite (apres event) notre scroll Y
// et il deviendra ancien car il sera toujours comparé au nouveau scrollY
// On le met à zéro pour être certain qu'il sera inférieur au tout premier scroll Y qui va arriver dès le debut l'Event
let lastScroll = 0;

// De base, la navbar est forcement à zero, donc visible

window.addEventListener("scroll", () => {
    // À partir de notre premier scroll,
    // le scrollY est forcément supérieur au lastScroll de 0
    // De ce fait, ce premier if ne fonctionnera pas au depart
    // il fonctionnera sur un retour de scroll (vers le haut, par la suite)
    if (window.scrollY < lastScroll) {
        navbar.style.top = "0px";
        // Du fait que le premier scroll soit forcément supérieur à 0
        // Ce sera le comportement initial au premier scroll
    } else {
        navbar.style.top = "-60px";
    }
    // On met à jour notre variable
    // En mettant à l'intérieur les coordonnées du scrollY
    lastScroll = window.scrollY;
    // De ce fait, ces données sernt comparées au prochain scrollY en event
});
