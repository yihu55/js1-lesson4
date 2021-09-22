const programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: [
        "https://www.devtopics.com/best-programming-jokes/",
        "https://www.hongkiat.com/blog/programming-jokes/",
    ]
};

function getLanguageAtIndex(name, index) {
    if (index < 3 && index > 0) {
        return name.languages[index]
    } else return `${index} existerar inte`
}
console.log(getLanguageAtIndex(programming, 5))