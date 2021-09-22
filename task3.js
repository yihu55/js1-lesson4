function getDayInMonth(month) {
    if (month === "January" || month === "March" || month === "May" ||
        month === "July" || month === "August" || month === "October" ||
        month === "December") {
        return 31
    } else if (month === "April" || month === "June" ||
        month === "September" || month === "November") {
        return 30
    } else if (month === "February") {
        return 29
    }
}

console.log(getDayInMonth("January"))
    // Ska returnera 31
console.log(getDayInMonth("March"))
    // Ska returnera 31
console.log(getDayInMonth("April"))
    // Ska returnera 30
console.log(getDayInMonth("February"))