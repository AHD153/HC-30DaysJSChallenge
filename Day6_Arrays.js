// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
const array = [1, 2, 3, 4, 5]
const printArray = (arr) => {
    arr.forEach(element => {
        console.log(element)
    });
}
printArray(array)

// Task 2: Access the first and last elements of the array and log them to the console.
const firstAndLast = (arr) => {
    console.log(`First element of the array is ${arr[0]}`)
    console.log(`Last element of the array is ${arr[arr.length - 1]}`)
}
firstAndLast(array)

// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
const pushElement = (arr, value) => {
    arr.push(value)
    return arr
}
console.log(pushElement(array, 6))

// Task 4: Use the pop method to remove the last element from the array and log the updated array.
const popElement = (arr) => {
    arr.pop()
    return arr
}
console.log(popElement(array))

// Task 5: Use the shift method to remove the first element from the array and log the updated array.
const shiftElement = (arr) => {
    arr.shift()
    return arr
}
console.log(shiftElement(array))

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
const unshiftElement = (arr, value) => {
    arr.unshift(value)
    return arr
}
console.log(unshiftElement(array, 1))

// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
const mapMethod = (arr) => {
    const newarr = arr.map((value) => value * 2)
    return newarr
}
console.log(mapMethod(array))

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
const filterMethod = (arr) => {
    const newarr = arr.filter((value) => value % 2 == 0)
    return newarr
}
console.log(filterMethod(array))

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
const reduceMethod = (arr) => {
    let initialValue = 0
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
}
console.log(reduceMethod(array))

// Task 10: Use a for loop to iterate over the array and log each element to the console.
const forLoop = (arr) => {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log(element)
    }
}
forLoop(array)

// Use the forEach method to iterate over the array and log each element to the console.
const forEachMethod = (arr) => {
    arr.forEach((value) => console.log(value))
}
forEachMethod(array)

// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
const twoDArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
const print2DArray = (arr) => {
    arr.forEach(element => {
        console.log(element)
    });
}
print2DArray(twoDArr)

// Task 13: Access and log a specific element from the two-dimensional array.
const printElementFrom2DArray = (arr, row, column) => {
    console.log(arr[row-1][column-1])
}
printElementFrom2DArray(twoDArr,2,1)



