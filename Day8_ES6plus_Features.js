// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
const templateLiterals = (name, age) => {
    console.log(`My name is ${name} and I am ${age} years old`)
}
templateLiterals("XYZ", 20)

// Task 2: Create a multi-line string using template literals and log it to the console.
const multiLineLiterals = (name, age) => {
    const string = `My name is ${name},
My age is ${age}`
    console.log(string)
}
multiLineLiterals("XYZ", 18)

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const [first,second] = [1,2,3,4]
console.log(first, second)

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const object = {
    title: "The Book",
    author: "XYZ"
}
const {title,author} = object
console.log(`The title of the book is ${title} and author is ${author}`)

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const existingArray = [1,2,3]
const newArray = [...existingArray, 4,5]
console.log(newArray)

// Task 6: Use the rest operator in a function to accept an arbitarty number of arguments, sum them, and return the result.
const sum = (...args)=>{
    let sum = 0
    for (const arg of args) {
        sum += arg
    }
    return sum
}
console.log(sum(1,2,3,4))

// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
const defaultParameters = (a, b=1)=>{
    return a*b
}
console.log(defaultParameters(2))
console.log(defaultParameters(2,4))

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
let property1 = "Property 1"
let property2 = 2
let functionName = ()=>{
    console.log("Hello")
}

const objectEnhancement = {property1,property2,functionName}

console.log(objectEnhancement)

// Task 9: Create an object with computed property names based on variables and log the object to the console.
const createPerson = (name,age)=>{
    return{
        name,
        age,
        [`is${name}Adult`]: age>=18
    }
}
const person = createPerson("XYZ", 25)
console.log(person)