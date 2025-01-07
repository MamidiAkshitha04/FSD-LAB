// You are given multiple objects representing user details and preferences.
// Write a function mergeUserData that merges all the objects into one using the spread
// operator.
// Example Input:
// const userDetails = {name: ‘CVR’, age: 25}
// const userAddress = {address: ‘Mangalpally’, city: ‘Hyderabad’}
// const userPreferences = {theme: ‘Engineering Edu’, language: ‘EN’}
// Example Output:
// {name: ‘CVR’, age: 25, address: ‘Mangalpally’, city: ‘Hyderabad’,
// theme: ‘Engineering Edu’, language: ‘EN’}


function mergeUserData(userDetails,userAddress,userPreferences){
    const user = {...userDetails,...userAddress,...userPreferences};
    return user;
}

const userDetails = {name: "CVR", age: 25}
const userAddress = {address: "Mangalpally", city: "Hyderabad"}
const userPreferences = {theme: "Engineering Edu", language: "EN"}

const user = mergeUserData(userDetails,userAddress,userPreferences);
console.log(user)