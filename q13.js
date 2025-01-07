// Question 13:
// Given the following code, use array and object destructuring to extract the first
// element of the array and the name and age from the object:
// const data = [{name: "John", age: 30 }, { name: ‘Jane’, age: 25 }];
const data = [{name: "John", age: 30 }, { name: "Jane", age: 25 }];
const [obj1] = data
const {name,age} = obj1

console.log("First Element:",obj1)
console.log(`name${name}, Age:${age}`)