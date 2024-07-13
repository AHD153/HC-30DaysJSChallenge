// Feature Request:

const request = (value)=>{
    return (console.log(`Value: ${value} - TypeOf: ${typeof value}`))
}

// Task 1: Declare a variable using var and assign it a number and log the value to the console
var number = 1;
request(number)

// Task 2: Declare a variable using let and assign it a string and log the value to the console
let string = "String"
request(string)

// Task 3: Declare a variable using const and assign it a boolean value and log the value to the console
const boolean = true;
request(boolean)

// Task 4: Declare a variable of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.

const object = {
    message : "Hello",
    status: 200
}

request(object)

const array = ["A", "B", "C"]

request(array)

// Task 5: Declare a variable using let, assign it an initial value, reassign a new value and log both values to the console.

let variable = "Initial value"
request(variable)
variable = "New value"
request(variable)

// Task 6: Try assigning a variable declared with const and observ the error
const error = "Error"
request(error)
// error = "Appear"
// TypeError: Assignment to constant variable.
// request(error)


