// Write a function delayedMessage(message, delay) that prints the
// message after the specified delay using setTimeout. Use a callback for when
// the message has been printed.

function delayedMessage(message, delay) {
    setTimeout(()=>{
        console.log(message);
        callback();
    },delay);
}

function callback(){
    console.log("Message printed");
}

function print(message){
    console.log(message);
}

delayedMessage("Hello, Akshitha!",3000,callback)