total = 10;
phrase = "Le résultat de ";

function addition(x) {
    total += x;
    return phrase + "l'addition est " + total;
}

function soustraction(x) {
    total -= x;
    return phrase + "la soustraction est " + total;
}

function division(x) {
    if (total === 0) {
        total = x;
    } else {
        total /= x;
        return phrase + "la division est " + total;
    }
}

function division(x) {
    total /= x;
    return phrase + "la division est " + total;
}

function multiplication(x) {
    if (total === 0) {
        return (total = x);
    } else {
        total *= x;
        return phrase + "la multiplication est " + total;
    }
}

function reset() {
    total = 0;
    return "Reset, remise totale à " + total;
}
