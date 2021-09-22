function firstValue(array) {
    return array[array.length - 1]
}


console.log(firstValue([2, 3, 4, 5, 6]))
    // Ska returnera 6
console.log(firstValue([7, 2, 1, 12, 32]))
    //Ska returnera 32
console.log(firstValue(["a", "b", "c", "d", "e"]))
    //Ska returnera "e"
console.log(firstValue([{ name: "John" }, { name: "Jane" }, { name: "Chris" }]))
    // SKa returnera {name: "Chris"}