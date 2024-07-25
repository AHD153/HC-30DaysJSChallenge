
console.log(`Task 1`)
import {add} from './exportModule.js'
console.log(add(2,5))

console.log(`Task 2`)
import {user} from './exportModule.js'
console.log(user.name)
console.log(user.age)
user.greet()

console.log(`Task 3`)
import { muliply, sub } from './exportModule.js'
console.log(muliply(2,4))
console.log(sub(4,2))

console.log(`Task 4`)
import deFunction from './exportModule.js'
console.log(deFunction())

console.log(`Task 5`)
import * as objectModule from './exportModule.js'
console.log(objectModule.PIE)
console.log(objectModule.DATABASE)
console.log(objectModule.add(3,5))

// Task 6: Install a third-party module(e.g., lodash) using npm. Import and use a function from this module in a script.
console.log(`Task 6`)
import lodash from 'lodash'
console.log(`The value is a valid date: ${lodash.isDate(new Date())}`)


// Task 7: Install a third-party module(e.g., axios) using npm. Import and use this module to make network request in a script.
console.log(`Task 7`)
import axios from 'axios'
axios.get("https://jsonplaceholder.typicode.com/todos/1")
.then(response=>console.log(response.data))
.catch(error=>console.log(error))

// Task 8: Use a moduler bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.
