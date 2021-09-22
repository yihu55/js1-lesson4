const library = [{
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
];
// let readedBook = []
// let unReadedBook = []

// library.forEach(
//     function getReadStatus(book) {
//         const status = book.readingStatus
//         if (status === true) {
//             return readedBook.push(book)
//         } else if (status === false) {
//             return unReadedBook.push(book)
//         }
//     }
// )
/*library.map(function(book) {
    if (book.readingStatus) {
        return readedBook.push(book)
    } else return unReadedBook.push(book)
})*/

//Skapa två arrayer, 
//en som innehåller alla böcker som har lästs och en som innehåller alla böcker som du inte har läst

const read = library.filter(book => book.readingStatus === true)
const unreaded = library.filter(book => book.readingStatus === false)
console.log(read)
console.log(unreaded)