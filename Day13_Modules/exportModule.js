// Task1 : Create a module that exports a function to add two numbers. Import and use this module in another script.
const add = (a,b)=>a+b

// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
const user = {
    name: "Jatan",
    age: 22,
    greet: function(){
        console.log(`Hello ${this.name}`)
    }
}

// Task 3: Create a module that exports multiple functions using named exports.Imports and use these functions in another script.
const muliply = (a,b)=>a*b
const sub = (a,b)=>a-b

// Task 4: Create a module that exports a single function using default export import and use this function in another script
const defaultFunction=()=>{
    return `I am a default export function`
}

// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
const PIE = 3.14
const DATABASE = "user"

export default defaultFunction

export {add, user, muliply, sub, PIE, DATABASE}