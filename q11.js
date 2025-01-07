// Question 11:
// How can you swap two variables using array destructuring? Write an example that swaps
// the values of two variables, a and b, without using a temporary variable.

let a = 5;
let b = 6;

// console.log(`a:${a}, b:${b}`)

[a, b] = [b, a]
console.log(`a:${a}, b:${b}`)

