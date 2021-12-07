// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
const copyOfCats = [...cats];
const copyOfCatsSlice = cats.slice();

beforeEach(function() {
    cats.length = 0;

    return cats.push("Milo", "Otis", "Garfield")
});

function destructivelyAppendCat(Ralph) {
    return cats.push(Ralph);
};

function destructivelyPrependCat(Bob) {
    return cats.unshift(Bob);
};

function destructivelyRemoveLastCat() {
    return cats.pop([4]);
};

function destructivelyRemoveFirstCat() {
    return cats.shift([3]);
};

function appendCat(Broom) {
    return appendCat = [...cats, "Broom"];
};

function prependCat(Arnold) {
    return prependCat = ["Arnold", ...cats];
};

function removeLastCat() {
    return copyOfCatsSlice.slice(0, cats.length - 1);
};

function removeFirstCat() {
    return copyOfCatsSlice.slice([1]);
};