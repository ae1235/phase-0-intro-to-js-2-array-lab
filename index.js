// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
    return;
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
    return;
}

function destructivelyRemoveLastCat() {
    cats.splice(-1);
    return;
}

function destructivelyRemoveFirstCat() {
    cats.splice(0, 1);
    return;
}

function appendCat() {
    const newCats = [...cats, "Broom"];
    return newCats;
}

function prependCat() {
    const newCatsB = ["Arnold", ...cats];
    return newCatsB;
}

function removeLastCat() {
    const newCatsC = [...cats];
    newCatsC.splice(-1);
    return newCatsC;
}

function removeFirstCat() {
    const newCatsD = [...cats];
    newCatsD.splice(0, 1);
    return newCatsD;
} 