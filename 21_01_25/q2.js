// Create three functions that take a number, multiply it by 2,
// subtract 3, and then add 10. Use callbacks to chain these operations together.

function multiplyby2(num,subtract3){
    num = num*2;
    return subtract3(num,add10);
}

function subtract3(num,add10){
    num = num - 3;
    return add10(num);
}

function add10(num){
    num = num + 10;
    return num;
}

num = 5;

console.log(multiplyby2(num,subtract3));