// Task 1: Create a promise that resolves with a message after a 2-seconds timeout and log the message to the console.
const resolve = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(
            console.log("Promise resolved")
        )
    },2000)
})

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch()
const reject = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject(
            "Promise rejected"
        )
    },2000)
}).catch((error)=> console.log(error))

// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
const fetchData = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { message: `Fetched data from ${url}` }
            resolve(
                data
            )
        }, 2000)
    })
}
fetchData(url1)
    .then((data) => {
        console.log(`Data received: `, data.message);
        return fetchData(url2)
    })
    .then((data) => console.log(`Data received: `, data.message))
    .catch((error) => console.log(error))

// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
const asyncFunctionResolved = async () => {
    const message = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Async function awaited")
        }, 2000)
    })

    console.log(message)
}
asyncFunctionResolved()

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
const asyncFunctionRejected = async () => {
    try {
        const message = await new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Async function promise rejected")
            }, 2000)
        })

        console.log(message)
    } catch (error) {
        console.log(`error: ${error}`)
    }
}
asyncFunctionRejected()

// Task 6: Use the fetch API to get data from a public api and log the response data to the console using promises.
(async () => {
    const { default: fetch } = await import('node-fetch');

    const fetchData = (url) => {
        const fetched = fetch(url)
        fetched
            .then(data => console.log(data.url))
            .catch(error => console.log(error))
    }
    const apiUrl = "https://http.cat/400";
    fetchData(apiUrl);
})();

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
(async () => {
    const { default: fetch } = await import('node-fetch');

    const fetchData = async (url) => {
        const fetched = await fetch(url)
        console.log(fetched.url)
    }
    const apiUrl = "https://http.cat/404";
    fetchData(apiUrl);
})();

// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Value from promise 1"), 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Value from promise 2"), 2000);
});
const promise3 = 3
// const promises = [promise1, promise2, promise3];
// Promise.all(promises) OR
Promise.all([promise1, promise2, promise3])
    .then((values) => {
        console.log("Values:", values);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

// Task 9: Use Promise.race to log the value of the first promise that resolves amoung multiple promises.
const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Value from promise 1"), 1000);
});

const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Value from promise 2"), 2000);
});
const promises = [promise4, promise5];
Promise.race(promises)
    .then((values) => {
        console.log("Values:", values);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
