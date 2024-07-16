// Task 1: Write a program to pring numbers from 1 to 10 using a for loop.
const printNumbers = (start, n) => {
    for (let i = start; i <= n; i++) {
        console.log(i)
    }
}
printNumbers(1, 10)

// Task 2: Write a program to print the multipication table of 5 using a loop.
const multipicationTable = (num) => {
    for (let i = 1; i < 11; i++) {
        console.log(`${num} * ${i} = ${num * i}`)
    }
}
multipicationTable(5)

// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop
const sumOfNumbers = (num) => {
    let i = 1
    let sum = 0
    while (i < num + 1) {
        sum += i
        i++
    }
    console.log(sum)
}
sumOfNumbers(10)

// Task 4: Write a program to print numbers from 10 to 1 using a while loop
const printNumbersRange = (start, n) => {
    while (start >= n) {
        console.log(start)
        start--
    }
}
printNumbersRange(10, 1)

// Task 5: Write a program to print numbers from 1 to 5 using a do while loop
const printUsingDoWhile = (start, end) => {
    do {
        console.log(start)
        start++
    } while (start <= end)
}
printUsingDoWhile(1, 5)

// Task 6: Write a program to calculate the factorial of a number using a do while loop
const printFactorial = (number) => {
    let fact = 1
    do {
        fact *= number
        number--
    } while (number > 1)
    console.log(fact)
}
printFactorial(5)

// Task 7: Write a program to print a pattern using nested for loops.
const printPattern = (rows) => {
    for (let i = 0; i < rows; i++) {
        let str = ""
        for (let j = 0; j < i + 1; j++) {
            str += "* "
        }
        console.log(str)
    }
}
printPattern(5)

// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
const skipNumber = (start, end, num) => {
    for (let i = start; i <= end; i++) {
        if (i == num && num <= end && num >= start) {
            continue
        }
        else {
            console.log(i)
        }
    }
}
skipNumber(1, 10, 5)

// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using break statement.
const breakLoop = (start, end, num) => {
    for (let i = start; i <= end; i++) {
        if (i == num && num <= end && num >= start) {
            break
        }
        else {
            console.log(i)
        }
    }
}
breakLoop(1,10,7)