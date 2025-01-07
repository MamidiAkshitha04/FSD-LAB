// Write a function createProfile that accepts an object with name, age, email, and
// address. Use object destructuring to extract the name and email and return a new
// object containing only the name and email.


function cerateProfile(student){
    const {name, email} = student;

    return {name, email};
}

const student = {
    name: 'John Doe',
    age: 20,
    email:'john@gmail.com',
    address:'2-4 -6, street',
}

console.log(cerateProfile(student))