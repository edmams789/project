"use strict";

const str = "Test";
console.log(str.length); //4
console.log(str[2]); //s
console.log(str.toUpperCase()); //TEST
console.log(str.toLowerCase()); //test
console.log(str); //Test

const arr = [1, 2, 3];
console.log(arr.length); //3

const fruit = "Some fruit";
console.log(fruit.indexOf("fruit")); //5
console.log(fruit.indexOf("q")); //-1

const logg = "Hello world!";
console.log(logg.slice(6, 11)); //world
console.log(logg.slice(6)); //world!
console.log(logg.slice(-5, -1)); //orld
console.log(logg.slice(-6, -1).toUpperCase()); //WORLD
console.log(logg.substring(6, 11)); //world
console.log(logg.substr(6, 5)); //world

const num = 12.2;
console.log(Math.round(num)); //12

const test = "12.2px";
console.log(parseInt(test)); //12
console.log(parseFloat(test)); //12.2