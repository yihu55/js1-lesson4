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

library.forEach(
    (book) => {

        if (book.readingStatus) {
            console.log(`${book.author},${book.title} har du läst`)
        } else {
            console.log(`${book.author},${book.title} har du inte läst`)
        }
    })