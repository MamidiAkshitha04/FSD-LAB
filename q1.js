// Question 1:
// Write a function mergeArrays that accepts any number of arrays as arguments and
// merges them into a single array. Use the spread operator to accomplish this.
// Example Input:
// mergeArrays ([1, 2], [3, 4], [5, 6])
// Example Output:
// [1, 2, 3, 4, 5, 6]
function mergeArrays(...arrays) {
    return [...arrays.flat()];
}

let arr1 = [1,2]
let arr2 = [3,4]
let arr3 = [5,6]

console.log(mergeArrays(arr1,arr2,arr3))