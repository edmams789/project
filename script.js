"use strict";

let num = 20;

function showFirstMassege(text) {
    console.log(text);
    console.log(num);
    num = 10;
    console.log(num);
    // let num = 15;
}
showFirstMassege("Hello World!");
console.log(num);

function calc(a, b) {
    return (a + b);
} //function declaration -> ; не ставиться
console.log(calc(3, 4));

function ret() {
    let num = 50;
    return num;
}
const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log("Hello");
}; //function expretion -> ;
logger();

const calcul = (a, b) => { 
    console.log('1');
    return a + b;
};
let other = calcul(3, 4);
console.log(other);