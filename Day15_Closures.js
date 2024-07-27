// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

const outerFunction = (a) => {
    const innerFunction = (b = 2) => {
        return a * b;
    }
    return innerFunction(2)
}

console.log(outerFunction(3))

// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
const createCounter = () => {
    let counter = 0;
    const increaseCounter = () => {
        counter++;
    }
    const getCounterValue = () => {
        return counter
    }

    return {
        increaseCounter,
        getCounterValue
    }
}
const counter = createCounter()
counter.increaseCounter()
counter.increaseCounter()
console.log(counter.getCounterValue())

// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
const generateUniqueID = () => {
    let ID = 0;
    const incrementID = () => {
        ID++;
        return ID;
    }

    return incrementID;
}
const uniqueID = generateUniqueID();
console.log(uniqueID())
console.log(uniqueID())

// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
const captureUser = (name) => {
    const greet = () => {
        return `Hello ${name}`
    }
    return greet();
}
console.log(captureUser("Jatan"))

// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure function logs the correct index.
const arrayOfFunctions = (length) => {
    const array = []
    for (let i = 0; i < length; i++) {
        array.push(() => {
            console.log(i)
        })
    }
    return array;
}

const arrayFunction = arrayOfFunctions(5)
arrayFunction[0]()
arrayFunction[1]()
arrayFunction[2]()
arrayFunction[3]()
arrayFunction[4]()

// Task 6: Use closure to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
const list = () => {
    const items = []

    const addList = (item) => {
        items.push(item)
    }

    const removeItem = (item) => {
        const index = items.indexOf(item)
        if (index != -1) {
            items.splice(index, 1)
        }
    }

    const display = () => {
        console.log(items)
    }

    return {
        addList,
        removeItem,
        display
    }
}
const myList = list();
myList.addList("apple")
myList.addList("banana")
myList.addList("chikoo")
myList.addList("Dragon")
myList.display()
myList.removeItem("banana")
myList.display()

// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
// AND
// Task 8: Create a memoized version of a function that calculates the factorial of a number.
function memoize(fn) {
    const cache = {}

    return function (...args) {
        const key = JSON.stringify(args)
        if (key in cache) {
            return cache[key]
        } else {
            const result = fn(...args)

            cache[key] = result
            return result
        }
    };
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

const memoizedFactorial = memoize(factorial)

console.log(memoizedFactorial(5))
console.log(memoizedFactorial(5))