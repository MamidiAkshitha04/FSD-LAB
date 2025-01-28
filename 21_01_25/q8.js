// Write a function that returns a promise, and the promise should
// be rejected with an error if it takes longer than a specified timeout duration 

function timeoutPromise(duration, timeout) {
    return new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => {
            reject(new Error('Timeout error'));
            
        },timeout);

        setTimeout(()=>{
            clearTimeout(timeoutId);
            resolve("Operation Completed!");
        },duration);
        
    });
}

timeoutPromise(5000, 3000).then((res)=>{
    console.log(res);
}).catch((error)=>{
    console.error(error.message);
})

timeoutPromise(2000,4000).then((res)=>{
    console.log(res);
}).catch((error)=>{
    console.error(error.message);
})