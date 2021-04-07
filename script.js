" use strict";

//DOM - Document Object Model

//getElementById - получить элемент по айдишнику
const box = document.getElementById('box');
console.log(box);

//getElementsByTagName - получаем псевдомассив, даже если есть всего один элем.
const buttons = document.getElementsByTagName('button'); 
console.log(buttons);
console.log(buttons[1]);//получаем 2-ю кнопку
const buttons1 = document.getElementsByTagName('button')[1];//получ. 2-ю кнопку
//что бы сделать кокие то действия, нужно обращаться непосредственно к элементу 
//массива, и даже если он там один
console.log(buttons[0]);

//getElementsByClassName - получить элемент по имени класса
const circles = document.getElementsByClassName('circle'); //назв. класса
console.log(circles);

const hearts = document.querySelectorAll('.heart');
//querySelectorAll(css selector) - *, div, #id, .class, [name = "value"], :visited
console.log(hearts);
hearts.forEach(item => {
    console.log(item);
});

//querySelector - получить 1-й элемент
const oneHeart = document.querySelector('.heart');
console.log(oneHeart);
