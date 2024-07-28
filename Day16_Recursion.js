// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
const recursiveFactorial = (num) => {
    if (num < 1) {
        return 1
    }
    return num * recursiveFactorial(num - 1)
}
console.log(recursiveFactorial(3))
console.log(recursiveFactorial(4))
console.log(recursiveFactorial(5))

// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.
const nthFibonacciNumber = (n) => {
    if (n === 0) {
        return 0
    }
    if (n === 1) {
        return 1
    }
    return nthFibonacciNumber(n - 1) + nthFibonacciNumber(n - 2)
}

console.log(nthFibonacciNumber(4))
console.log(nthFibonacciNumber(5))
console.log(nthFibonacciNumber(6))

// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.
const sumUsingRecursion = (arr, n) => {
    if (n === 1) {
        return arr[0]
    }
    return arr[n - 1] + sumUsingRecursion(arr, n - 1)
}
console.log(sumUsingRecursion([1, 2, 3, 4], 4))
console.log(sumUsingRecursion([1, 2, 3, 4, 5], 5))
console.log(sumUsingRecursion([1, 2, 3, 4, 5, 6], 6))

// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

const maxElementRecursion = (arr, index = 0) => {
    if (index === arr.length - 1) {
        return arr[index]
    }
    const maxSoFar = maxElementRecursion(arr, index + 1)
    return Math.max(arr[index], maxSoFar)
}
console.log(maxElementRecursion([10, -2, 4, 1, 8]))
console.log(maxElementRecursion([3, 7, 2, 9, 5]))
console.log(maxElementRecursion([5]))

// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
const reverseStringRecursive = (str) => {
    if (str.length <= 1) {
        return str;
    }
    return reverseStringRecursive(str.substring(1)) + str.charAt(0);
}
let str1 = "abcde"
let str2 = "a"
let str3 = "abde"
console.log(reverseStringRecursive(str1))
console.log(reverseStringRecursive(str2))
console.log(reverseStringRecursive(str3))

// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
const isPalindromeRecursive = (str) => {
    if (str.length <= 1) {
        return true;
    }

    if (str[0] !== str[str.length - 1]) {
        return false
    }
    return isPalindromeRecursive(str.substring(1, str.length - 1))
}

const str4 = "racecar";
const str5 = "level";
const str6 = "hello";
console.log(isPalindromeRecursive(str4))
console.log(isPalindromeRecursive(str5))
console.log(isPalindromeRecursive(str6))

// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
const recursiveBinarySearch = (arr, key, left, right) => {
    if (left > right) {
        return -1
    }
    let mid = Math.floor((left + right) / 2);
    if (key === arr[mid]) {
        return mid
    }
    else if (key > arr[mid]) {
        return recursiveBinarySearch(arr, key, mid + 1, right)
    }
    else {
        return recursiveBinarySearch(arr, key, left, mid - 1)
    }
}

const arr1 = [2, 3, 4, 10, 40]
const arr2 = [1, 3, 5, 7, 9]

const target1 = 10
const target2 = 6
const target3 = 1

console.log(recursiveBinarySearch(arr1, target1, 0, arr1.length - 1))
console.log(recursiveBinarySearch(arr2, target2, 0, arr2.length - 1))
console.log(recursiveBinarySearch(arr2, target3, 0, arr2.length - 1))

// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.
const occurrencesUsingRecursion = (arr, target) => {
    if (arr.length === 0) {
        return 0;
    }

    if (arr[0] === target) {
        return 1 + occurrencesUsingRecursion(arr.slice(1), target);
    } else {
        return occurrencesUsingRecursion(arr.slice(1), target);
    }
}
const arr3 = [1, 2, 3, 4, 2, 5, 2]
const arr4 = [5, 5, 5]
const arr5 = []
const arr6 = [1, 2, 3, 4]

const target4 = 2
const target5 = 5
const target6 = 7

console.log(occurrencesUsingRecursion(arr3, target4))
console.log(occurrencesUsingRecursion(arr4, target5))
console.log(occurrencesUsingRecursion(arr5, target4))
console.log(occurrencesUsingRecursion(arr6, target6))

// Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
class Node {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;
    }
}

function inOrderTraversal(root) {
    if (root !== null) {
        inOrderTraversal(root.left);
        console.log(root.data);
        inOrderTraversal(root.right);
    }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

inOrderTraversal(root); // Output: 4 2 5 1 3

// Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.
function maxDepth(node) {
    if (node === null) {
        return 0
    } else {
        let leftDepth = maxDepth(node.left)
        let rightDepth = maxDepth(node.right)

        return Math.max(leftDepth, rightDepth) + 1
    }
}
console.log(maxDepth(root))