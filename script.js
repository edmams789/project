" use strict";

//DOM - Document Object Model

const box = document.getElementById('box'),
      buttons = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');

// console.dir(box);
//inline стили перебивают все остальные
box.style.background = 'blue';
box.style.width = '500px';

buttons[1].style.borderRadius = '100%'; //делаем кнопку овальной
circles[0].style.backgroundColor = 'red';

//css text
box.style.cssText = 'background-color: blue; width: 500px';
// box.style.cssText = `background-color: blue; width: ${num}`;

for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue';
}

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');

div.classList.add('black');

//Современные методы для работой со страницей

document.body.append(div); //в тег body в конец добавляем div

wrapper.append('div'); //вставляет в конец
wrapper.prepend('div'); //вставляет в начало

wrapper.appendChild(div); //устаревший метод

hearts[0].before(div);
hearts[0].after(div);

wrapper.insertBefore(div, hearts[0]); //div вставить перед hearts[0]

circles[0].remove();
wrapper.removeChild(hearts[1]); //устаревший метод

hearts[0].replaceWith(circles[0]); //замена 1-е hearts на 1-е circles
wrapper.replaceChild(circles[0], hearts[0]); //устаревший метод

// div.innerHTML = "Hello World!";
// div.innerHTML = "<h1>Hello World</h1>";
div.textContent = "Hello";

//beforebegin - вставить данные HTML непосредственно перед элементом
div.insertAdjacentHTML("beforebegin", '<h2>Hello</h2>'); 
//afterbegin - вставить данные HTML в начало элемента
div.insertAdjacentHTML("afterbegin", '<h2>Hello</h2>'); 
//beforeend - вставить данные HTML в конец элемента
div.insertAdjacentHTML("beforeend", '<h2>Hello</h2>');
//afterend - вставить данные HTML непосредственно после элемента
div.insertAdjacentHTML("afterend", '<h2>Hello</h2>');




