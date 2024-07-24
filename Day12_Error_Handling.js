// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
const errorThrow = () => {
    const num = 3;
    num = 3 * 4;
    return num
}

try {
    errorThrow()
} catch (error) {
    console.log(`Error: ${error}`)
}

// Task 2: Crate a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
const divide = (numerator, denominator) => {
    if (denominator === 0) {
        throw new Error("Denominator should be greater than zero")
    }
    return numerator / denominator
}

try {
    console.log(divide(4,0))
} catch (error) {
    console.log(error.message)
}

// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
try {
    console.log(`Inside try catch block`)
} catch (error) {
    console.log(error)
}finally{
    console.log(`Inside finally block`)
}

try {
    throw new Error("Error throw")
} catch (error) {
    console.log(error)
}finally{
    console.log(`Inside finally block`)
}

// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
class ApiError extends Error {
    constructor(
        statusCode,
        message,
        errors = [],
        stack = ""
    ) {
        super(message)
        this.statusCode = statusCode
        this.message = message
        this.errors = errors
        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

const customError = () => {
    throw new ApiError(400, "Api Error")
}

try {
    customError()
} catch (error) {
    if (error instanceof ApiError) {
        console.error(`API Error: ${error.message}. Status code: ${error.statusCode}`);
    } else {
        console.error("Unexpected error:", error);
    }
}

// Task 5: Write a function that validates user input(e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using try-catch block.
const validateInput = (string) => {
    if (string.trim() === "") {
        throw new ApiError(404, "Please provide an Input")
    }
    return { message: "String is valid" }
}
try {
    console.log(validateInput("   "))
} catch (error) {
    if (error instanceof ApiError) {
        console.error(`API Error: ${error.message}. Status code: ${error.statusCode}`);
    } else {
        console.error("Unexpected error:", error);
    }
}

// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.
const Random = () => {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
            resolve("Promise resolved!");
        } else {
            reject(new Error("Promise rejected!"));
        }
    })
}
Random()
.then(value => console.log(value))
.catch(error => console.log(error.message))

// Task 7: Use try-catch within an async function to handle error from a promise that randomly resolves or rejects and log the error message.
const RandomAsync = async()=>{
    try {
        const message = await new Promise((resolve, reject) => {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                resolve("Promise resolved!");
            } else {
                reject(new Error("Promise rejected!"));
            }
        })
        console.log(message)
    } catch (error) {
        console.log(error.message)
    }
}
RandomAsync()

// Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.
(async () => {
    const { default: fetch } = await import('node-fetch');

    const fetchData = async (url) => {
        if (!(url === "https://http.cat/400")) {
            throw new Error("Invalid url")
        }
        const fetched = await fetch(url)
        return fetched.url
    }
    const apiUrl = "https://http.cat/404";

    fetchData(apiUrl)
    .then(data=>console.log(data))
    .catch(error=>console.log(error.message))
})();

// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
(async () => {
    const { default: fetch } = await import('node-fetch');

    const fetchData = async (url) => {
        if (!(url === "https://http.cat/400")) {
            throw new Error("Invalid url")
        }
        const fetched = await fetch(url)
        console.log(fetched.url)
    }
    const apiUrl = "https://http.cat/400";

    try {
        await fetchData(apiUrl)
    } catch (error) {
        console.log(error.message)
    }
})();