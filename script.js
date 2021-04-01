" use strict";

// To String

// 1)
console.log(typeof(String(null))); //string - outdated way
console.log(String(null)); //null
console.log(typeof(String(4))); //string
console.log(String(4)); //4

// 2)
console.log(typeof(5 + '')); //string
console.log(typeof(null + '')); //string

const num = 5;
console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

// To Number

// 1)
console.log(typeof(Number('4'))); //number - outdated way

// 2)
console.log(typeof(+'5')); //number

// 3)
console.log(typeof(parseInt("15px", 10))); //number
console.log(typeof(parseInt("15px"))); //number


let answ = +prompt("Hello", ""); //превращаем строковый тип данных в число

// To boolean

// 0, '', null, undefined, NaN;

// 1)
let switcher = null;
if (switcher) {
    console.log('Working...'); //
}

switcher = 1;
if (switcher) {
    console.log('Working...'); //Working...
}

// 2)
console.log(typeof(Boolean('4'))); //boolean

// 3)
console.log(typeof(!!'4')); //boolean
