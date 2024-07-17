// Task 1: Write a function to check if a number is even or odd and log the result to the console
function evenORodd(number) {
    number % 2 === 0 ? console.log(`${number} is even`) : console.log(`${number} is odd`)
}
evenORodd(5)

// Task 2: Write a function to calculate the square of a number and return the result.
function squareNumber(number) {
    console.log(`Square of ${number}=${number * number}`)
}
squareNumber(2)

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const maxNumber = function (a, b) {
    if (a > b) {
        return a
    }
    return b
}
console.log("Maximum number is: ", maxNumber(4, 5))

// Task 4: Write a function expression to concatenate two strings and return the result.
const concatenateString = function (str1, str2) {
    return str1 + str2
}
console.log(concatenateString("Hello ", "World"))

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const sum = (a, b) => {
    return a + b
}
console.log(sum(2,3))

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const checkChar = (str, char) => {
    if (str.indexOf(char) != -1) {
        return true;
    }
    return false;
}
console.log(checkChar("Hellow", "e"))

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
const product = (a, b = 5) => {
    return a*b;
}
console.log(product(4))

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
const greet = (name,age=18)=>{
    return `Hello ${name}, your age is ${age}`
}
console.log(greet("XYZ"))
// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
const callback = ()=>{
    console.log(`I am a callback function`,)
}
const higherFunction = (callback, number)=>{
    while (number>0) {
        callback()
        number--;
    }
}
higherFunction(callback,3)
// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
const add = (value)=>{
    return value+value;
}

const multiply = (add,value)=>{
    return add(value)*value;
}
const nextHigherOrder = (add, multiply, value)=>{
    return multiply(add,value);
}
console.log(nextHigherOrder(add,multiply,5))