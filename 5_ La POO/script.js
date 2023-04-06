// -------------------------------------------------------------------
// -------------------------------------------------------------------
// LA POO
// (éviter les fonction arrow pour éviter les 'pertes' de scopes)
// -------------------------------------------------------------------
// -------------------------------------------------------------------
//
//
// -------------------------------------------------------------------
// Les Objets
// -------------------------------------------------------------------

// Objet de base
const obj = {
    nom: "Sam",
    ville: "Chiang Mai",
};

// Ajouter un paramètre d'objet
obj.age = 29;

//  Modifier
obj.pseudo = "SamSam";

// Supprimer
delete obj.pseudo;
// console.log(obj)

// Checker si propriété existe
console.log("ville" in obj);
console.log("pseudo" in obj);

// -------------------------------------------------------------------
// Boucles pour parcourir un Objet
// -------------------------------------------------------------------

// Parcourir l'Objet
for (const abc in obj) {
    console.log(abc); // affiche le nom chaque propriété
}

// Parcourir l'objet avec une syntaxe permettant la concaténation [ ]
for (const abc in obj) {
    console.log(abc + " : " + obj[abc]); // affiche les valeurs de chaque propriété
}

// -------------------------------------------------------------------
// Quelques Méthodes utiles
// -------------------------------------------------------------------

// Obtenir les clés
const obtenirLesClefs = Object.keys(obj);
console.log(obtenirLesClefs);

// Obtenir les valeurs
const obtenirLesValeurs = Object.values(obj);
console.log(obtenirLesValeurs);

// Décompose l'objet avec chaque propriété/valeur dans un tableau
const nestedArray = Object.entries(obj);
console.log(nestedArray);

// Fusionner objects
// S'il y a 2 mêmes propriétés, c'est la dernière qui écrase
const obj2 = {
    taille: "grand",
};
const fusionner = Object.assign({}, obj, obj2);
console.log(fusionner);

// Empêcher les modifications ou ajout
const newObj = Object.freeze(obj);
newObj.nom = "SamSam"; // cette modification ne fonctionnera pas
newObj.hobby = "Moto"; // cet ajout ne fonctionnera pas
console.log(newObj);

const newObj2 = Object.seal(obj2);
newObj2.taille = "Très grand"; // modification OK
newObj2.hobby = "Moto"; // cet ajout ne fonctionnera pas
console.log(newObj2);

// -------------------------------------------------------------------
// -------------------------------------------------------------------
// Construire des Objets
// -------------------------------------------------------------------
// -------------------------------------------------------------------

// -------------------------------------------------------------------
// Fonction Constructeur
// -------------------------------------------------------------------

function User(nom, ville) {
    this.name = nom;
    this.city = ville;

    this.getCity = function () {
        console.log(`${this.name} habite à ${this.city}`);
    };
}

const user1 = new User("Sam", "Chiang Mai");
const user2 = new User("Sam", "Bangkok");

user1.getCity();
user2.getCity();

// -------------------------------------------------------------------
// Factory Function
// -------------------------------------------------------------------

function otherUsers(nom, ville) {
    return {
        name: nom,
        city: ville,
    };
}

const user3 = otherUsers("Sam", "Rayong");
console.log(user3);

// -------------------------------------------------------------------
// Les Classes
// -------------------------------------------------------------------

class Utilisateur {
    constructor(pseudo, ville) {
        this.name = pseudo;
        this.city = ville;
    }
    sayMyName = function () {
        console.log(`Bonjour, je suis ${this.name}.`);
    };
}

const user4 = new Utilisateur("Sam", "Phayao");
user4.sayMyName();

// -------------------
// Ajout de Prototype
// -------------------

Utilisateur.prototype.sayCity = function () {
    console.log(`J'habite à ${this.city}`);
};

console.log(user4);
user4.sayCity();

// ----------------------------
// Ajout multiple de Prototype
// ----------------------------

Object.assign(Utilisateur.prototype, {
    method1() {
        // Ma méthode
    },
    method2() {
        // Ma méthode
    },
});

console.log(user4);

// -------------------------------------------------------------------
// L'Héritage
// -------------------------------------------------------------------

class Animal {
    constructor(nom, age) {
        this.name = nom;
        this.age = age;
    }
    saySomething(texte) {
        console.log(this.name + " dit : " + texte);
      }
}

const chien = new Animal('Coco', 5)
console.log(chien)
chien.saySomething('wouf')

// -------------------------------------

class Dog extends Animal {
    aboiement() {
        console.log('Wouf Wouf !')
    }
}

const coco = new Dog('Coco', 5)
console.log(coco)

// -------------------------------------

Object.assign(Dog.prototype, {
    method1() {
        // Ma méthode
    },
    method2() {
        // Ma méthode
    },
});

// -------------------------------------
