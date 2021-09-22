const getVolume = (length = 0, width = 0, height = 0) => length * width * height


console.log(getVolume(2, 3, 4))
    // Ska returnera 24
console.log(getVolume(2))
    // Ska returnera 0