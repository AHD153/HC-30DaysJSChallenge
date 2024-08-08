// Task 1: Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.
const string = "This is a string to be stored"
localStorage.setItem('myString', string)
const retrievedString = localStorage.getItem('myString')
console.log(retrievedString)

// Task 2: Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
const object = {
    name: "xyz",
    age: 17
}
localStorage.setItem('myObject', JSON.stringify(object))
const retrievedObject = localStorage.getItem('myObject')
console.log(JSON.parse(retrievedObject))

// Task 3: Create a simple form that saves user input(e.g., name and email) to localStorage when submitted. Retrieve and display the saved data on page load.
const submitLocally = document.querySelector('button')
submitLocally.addEventListener('click', (e) => {
    e.preventDefault()
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    localStorage.setItem("name", name)
    localStorage.setItem("email", email)
    const display = document.createElement('p')
    display.textContent = `Your name is ${localStorage.getItem("name")} and your email address is ${localStorage.getItem("email")}`

    document.body.appendChild(display)
})

// Task 4: Write a script to remove an item from localStorage. Log the localStorage content before and after removal.
const logLocalStorageDisplay = () => {
    console.log("Current localStorage content:");
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        console.log(`${key}: ${value}`);
    }
    console.log("\n")
}

logLocalStorageDisplay()

const key = "myString"
const itemToRemove = localStorage.removeItem(key)

logLocalStorageDisplay()

// Task 5: Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.
const city = "Bvn"
sessionStorage.setItem("city", city)
const retrievedCity = sessionStorage.getItem("city")
console.log(retrievedCity)

// Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
const sessionObject = {
    city: "Bhavnagar",
    pincode: 364001
}
sessionStorage.setItem("address", JSON.stringify(sessionObject))
const display = sessionStorage.getItem("address")
console.log(JSON.parse(display))

// Task 7: Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load.
const submitSession = document.querySelector('button')
submitSession.addEventListener('click', (e) => {
    e.preventDefault()
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    sessionStorage.setItem("name", name)
    sessionStorage.setItem("email", email)
    const display = document.createElement('p')
    display.textContent = `Your name is ${sessionStorage.getItem("name")} and your email address is ${sessionStorage.getItem("email")}`

    document.body.appendChild(display)
})

// Task 8: Write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal.
const logSessionStorage = () => {
    console.log("Current sessionStorage content:");
    for (let i = 0; i < sessionStorage.length; i++) {
        let key = sessionStorage.key(i);
        let value = sessionStorage.getItem(key);
        console.log(`${key}: ${value}`);
    }
    console.log("\n");
}

logSessionStorage();

const sessionStorageKey = 'city';
sessionStorage.removeItem(sessionStorageKey);
logSessionStorage();

// Task 9: Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage. Retrieve and log the values from storage mechanisms.
const saveInput = (key, value) => {
    localStorage.setItem(key,value)
    sessionStorage.setItem(key,value)
}
const getDataFromStorages = (key)=>{
    console.log("This is data form Local storage")
    console.log(localStorage.getItem(key))
    console.log("This is data form Session storage")
    console.log(sessionStorage.getItem(key))
}

saveInput("dayIndex",1)
saveInput("dayName","Monday")

getDataFromStorages("dayIndex")
getDataFromStorages("dayName")

// Task 10: Write a function that clears all data from both localStorage and sessionStorage. Verify that both storages are empty.
const clearStorages = ()=>{
    localStorage.clear()
    console.log(`Local Storage after clear:`,localStorage)
    sessionStorage.clear()
    console.log(`Session Storage after clear:`,sessionStorage)
}
clearStorages()