// Task 1: Create an object representing a book with properties like title, author, and year and log the object to the console.
const book = {
    title: "The Book",
    author: "XYZ",
    year: 2024
}
console.log(book)

// Task 2: Access and log the title and author properties of the book object.
console.log(`Title of the book is ${book.title}`)
console.log(`Author of the book is ${book.author}`)

// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
book.method = function () {
    let string = `Title of the book is ${this.title} and author is ${this.author}`
    return string
}
console.log(book.method())

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

book.updateYear = function (year) {
    this.year = year
}
book.updateYear(2025)
console.log(book)

// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
function Book(title, author) {
    this.title = title;
    this.author = author;
}

const book1 = new Book("The Lord of the Rings", "J.R.R. Tolkien");
const book2 = new Book("Pride and Prejudice", "Jane Austen");
const book3 = new Book("The Hitchhiker's Guide to the Galaxy", "Douglas Adams");

const library = {
    name: "Central Library",
    books: [book1, book2, book3]
}

console.log(library)

// Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
book.getInfo = function () {
    let string = `Title of the book is ${this.title} and year is ${this.year}`
    return string
}
console.log(book.getInfo())

// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
for (const key in book) {
    console.log(`${key}:${book[key]}`)
}

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log(Object.keys(book))
console.log(Object.values(book))