// Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let flag = 0
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
                flag = 1
            }
        }
        if (!flag) {
            break
        }
    }
    return arr
}
const arr1 = [2, 6, 1, 9, 4]
const arr2 = [45, 23, 3, 5346, 5, 356, 243, 35]
console.log(bubbleSort(arr1))
console.log(bubbleSort(arr2))

// Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
const selectionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let min_index = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min_index]) {
                min_index = j
            }
        }
        if (min_index != i) {
            [arr[min_index], arr[i]] = [arr[i], arr[min_index]]
        }
    }
    return arr
}
const arr3 = [64, 25, 12, 22, 11]
console.log(selectionSort(arr3))

// Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.
const partition = (arr, low, high) => {
    let pivot = arr[high]
    let i = low - 1

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
    return i + 1
}
const quickSort = (arr, low, high) => {
    if (low >= high) {
        return
    }
    let partitionIndex = partition(arr, low, high)

    quickSort(arr, low, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1, high)

    return arr
}
const arr4 = [10, 80, 30, 90, 40]
console.log(quickSort(arr4, 0, arr4.length - 1))

// Task 4: Implement the linear serach algorithm to find a target value in an array. Log the index of the target value.
const linearSearch = (arr, target) => {
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target)
            index = i
    }
    return index
}

console.log(linearSearch(arr4, 30))

// Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.
const binarySearch = (arr, target, low, high) => {
    let mid = Math.floor((low + high) / 2)
    if (low > high) {
        return -1
    }
    if (arr[mid] === target) {
        return mid
    }
    if (arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, high)
    }
    else {
        return binarySearch(arr, target, low, mid - 1)
    }
}

console.log(binarySearch(arr4, 80, 0, arr4.length - 1))

// Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.
const occurrencesOfCharInString = (str) => {
    const result = new Map()
    for (let i = 0; i < str.length; i++) {
        const ch = str.charAt(i)
        if (!result.get(ch)) {
            result.set(ch, 1)
        }
        else {
            result.set(ch, result.get(ch) + 1)
        }
    }
    return result
}
const string = "abcdabcdea"
console.log(occurrencesOfCharInString(string))

// Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.
const longestSubstring = (str) => {
    const charIndexMap = {}
    let left = 0
    let maxLength = 0

    for (let right = 0; right < str.length; right++) {
        const char = str[right];

        if (charIndexMap[char] !== undefined && charIndexMap[char] >= left) {
            left = charIndexMap[char] + 1;
        }

        charIndexMap[char] = right;

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}
console.log(longestSubstring(string))

// Task 8: Write a function to rotate an array by k positions. Log the rotated array.
const rotateArrayByK = (arr, k) => {
    const n = arr.length;
    k = k % n;

    reverse(arr, 0, n - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, n - 1);

    return arr
}

const reverse = (arr, start, end) => {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}
const arr5 = [1, 2, 3, 4, 5]
console.log(rotateArrayByK(arr5, 7))

// Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.
const mergeTwoSortedArrays = (arr1, arr2) => {
    const result = []
    let i = 0, j = 0, k = 0
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result[k++] = arr1[i++]
        }
        else {
            result[k++] = arr2[j++]
        }
    }
    while (i < arr1.length)
        result[k++] = arr1[i++]
    while (j < arr2.length) {
        result[k++] = arr2[j++]
    }

    return result
}

const arr6 = [1, 3, 4, 5]
const arr7 = [2, 4, 6, 8]
console.log(mergeTwoSortedArrays(arr6, arr7))

// Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.
const solveFibonacciSequenceUsingDP = (n) => {
    let series = [0, 1]

    for (let i = 2; i < n; i++) {
        series[i] = series[i - 1] + series[i - 2]
    }

    return series
}
console.log(solveFibonacciSequenceUsingDP(5))

// Task 11: Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.
const knapSackUsingDP = (W, wt, val, n) => {
    const k = Array(n + 1).fill(0).map(() => Array(W + 1).fill(0));
    for (let i = 0; i <= n; i++) {
        for (let w = 0; w <= W; w++) {
            if (i == 0 || w == 0) {
                k[i][w] = 0
            }
            else if (wt[i - 1] <= w) {
                k[i][w] = Math.max(val[i - 1] + k[i - 1][w - wt[i - 1]], k[i - 1][w])
            }
            else {
                k[i][w] = k[i - 1][w]
            }
        }
    }

    return k[n][W]
}
let profit = [60, 100, 120];
let weight = [10, 20, 30];
let W = 50;
let n = profit.length;
console.log(knapSackUsingDP(W,weight,profit,n))