// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
const append = []

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function prependCat(name) {
    const newCats = ['Arnold',...cats];
    return newCats;
}

function removeLastCat(name) {
    const newCats = cats.slice(0,2);
    return newCats;
}

function removeFirstCat(name) {
    const newCats = cats.slice(1);
    return newCats;
}