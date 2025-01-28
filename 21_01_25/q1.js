// Write a function greet that takes a name and a callback function.
// The function should return a greeting message by calling the callback with
// the message.
function callback(name){
    return `Hello, ${name}!`;
}
function greet(name,callback){
    return callback(name);
}

console.log(greet("Sathwi",callback))