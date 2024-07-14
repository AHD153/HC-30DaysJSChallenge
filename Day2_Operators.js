// Task 1: Write a program to add two numbers and log result to the console
const add =(a,b)=>{
    return a+b;
}
console.log(add(2,3));
// Task 2: Write a program to sub two numbers and log result to the console
const sub =(a,b)=>{
    return a-b;
}
console.log(sub(5,2));
// Task 3: Write a program to multipy two numbers and log result to the console
const multipy =(a,b)=>{
    return a*b;
}
console.log(multipy(5,2));
// Task 4: Write a program to divide two numbers and log result to the console
const divide =(a,b)=>{
    return a/b;
}
console.log(divide(4,2));
// Task 5: Write a program to remainder two numbers and log result to the console
const remainder =(a,b)=>{
    return a%b;
}
console.log(remainder(5,2));

// Task 6: Use the += aperator to add a number to a variable and log result to the console.
const plusequals = (a,b)=>{
    return a += b;
}
console.log(plusequals(2,6));

// Task 7: Use the -= aperator to add a number to a variable and log result to the console.
const minusequals = (a,b)=>{
    return a -= b;
}
console.log(minusequals(6,3));

// Task 8: Write a program to compare two numbers using >  and < and log the result to the console
const compare = (a,b)=>{
    if (a>b) {
        console.log(`${a} is greater than ${b}`)
    }else if(a<b){
        console.log(`${a} is less than ${b}`)
    }
}
compare(3,4)

// Task 9: Write a program to compare two numbers using >=  and <= and log the result to the console
const compareEquals = (a,b)=>{
    if (a>=b) {
        console.log(`${a} is greater than or equal to ${b}`)
    }else if(a<=b){
        console.log(`${a} is less than or equal to ${b}`)
    }
}
compareEquals(3,4)

// Task 10: Write a program to compare two numbers using >=  and <= and log the result to the console
const compareNum = (a,b)=>{
    console.log(a==b)
    console.log(a===b)
}
compareNum(3,4)

// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console
const checkAnd = (a,b) =>{
    if (a>b && a>0) {
        console.log(`${a} is greater than ${b} and a is positive number`)
    }
}
checkAnd(6,2)

// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console
const checkOr = (a,b)=>{
    if (a===b || a>b) {
        console.log(`${a} is greater or equals to  ${b}`)
    }
}
checkOr(6,2)

// Task 13: Write a program that uses the ! operator to combine two conditions and log the result to the console
const not = (a)=>{
    return !a
}
console.log(not(true))

// Task 14: Write a program that uses the ternary operator to combine two conditions and log the result to the console
const ternary = (a,b) =>{
    return a===b?"a is equal to b": "a is not equal to b"
}
console.log(ternary(5,5))