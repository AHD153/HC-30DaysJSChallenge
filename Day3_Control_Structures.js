// Task 1: Write a program to check if a number is +ve, -ve or zero and log the result in the console
const checkNumber = (num) => {
    if (num === 0) {
        console.log(`${num} is zero`)
    }
    else if (num > 0) {
        console.log(`${num} is positive`)
    }
    else {
        console.log(`${num} is negative`)
    }
}
checkNumber(4)
checkNumber(-5)
checkNumber(0)

// Task 2: Write a program to check if a person is eligible to vote (age>=18) and log the result to the console
const checkEligibility = (age) => {
    if (age >= 18) {
        console.log(`You are eligible for voting as your age is ${age}`)
    }
    else {
        console.log(`You are not eligible as your age: ${age} is less than 18 years`)
    }
}
checkEligibility(17)
checkEligibility(20)

// Task 3: Write a program to find the largest of three numbers using nested if-else statements
const largestNumber = (a, b, c) => {
    if (a > b) {
        if (a > c) {
            console.log(`${a} is the largest number`)
        }
        else {
            console.log(`${c} is the largest number`)
        }
    }
    else {
        b > a
        if (b > c) {
            console.log(`${b} is the largest number`)
        }
        else {
            console.log(`${c} is the largest number`)
        }
    }
}
largestNumber(3, 4, 5)

// Task 4: Write a program that uses a switch case to determine the day of the week based on a number(1-7) and log the day name to the console.
const findDay = (day) => {
    switch (day) {
        case 1: {
            console.log(`Monday`)
            break;
        }
        case 2: {
            console.log(`Tuesday`)
            break;
        }
        case 3: {
            console.log(`Wednesday`)
            break;
        }
        case 4: {
            console.log(`Thurshday`)
            break;
        }
        case 5: {
            console.log(`Friday`)
            break;
        }
        case 6: {
            console.log(`Saturday`)
            break;
        }
        case 7: {
            console.log(`Sunday`)
            break;
        }
        default: {
            console.log(`Please provide number between 1 to 7`)
        }
    }
}
findDay(4)

// Task 5: Write a program that uses a switch case to assign a grade ('A','B','C','D','F') to the console
const getGrade = (marks) => {
    switch (true) {
        case marks > 90: {
            console.log(`A`)
            break;
        }
        case (marks > 80 && marks <= 90): {
            console.log(`B`)
            break;
        }
        case (marks > 70 && marks <= 80): {
            console.log(`C`)
            break;
        }
        case (marks > 50 && marks <= 70): {
            console.log(`D`)
            break;
        }
        case (marks <= 50): {
            console.log(`F`)
            break;
        }
        default: {
            console.log(`Please provide marks between 0 to 100`)
        }
    }
}
getGrade(75)

// Task 6: Write a program that uses the ternary operator to check if anumber is even or odd and log the result to the console
const evenORodd = (number) => {
    number % 2 === 0 ? console.log(`${number} is even`) : console.log(`${number} is odd`)
}
evenORodd(5)

// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
const leapYear = (year) => {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        console.log(`${year} is a leap year`)
    }
    else {
        console.log(`${year} is not a leap year`)
    }
}
leapYear(2024)