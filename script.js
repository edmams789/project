"use sctrict";
// a = 15;
// console.log(a);

// console.log(1);
// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const obj = {
//     a: 50
// };
// obj.a = 10;
// console.log(obj);

// var name = 'Ivan';

// {
//     let result = 10;
// }

// const obj1 = {
//     name: "Ivan",
//     age: 25,
//     isMarried: false
// };
// console.log(obj1.name);
// console.log(obj1.age);

// let arr = ["Privet", "fruit.jpeg", 7, [], {}, true];
// console.log(arr[1]);

// alert("Hello");

// const result = confirm("Are you here?");
// console.log(result);

// const answer = prompt("Вам есть 18?", "18");
// console.log(answer);
// console.log(typeof(answer));

// const answer = +prompt("Вам есть 18?", "18");
// console.log(typeof(answer + 5));

// const answers = [];
// answers[0] = prompt("Как ваше имя?", "");
// answers[1] = prompt("Как ваша фамилия?", "");
// answers[2] = prompt("Сколько вам лет?", "");
// answers[3] = prompt("А не мал ли ты для этого?", "");
// answers[4] = prompt("А ты уверен?", "");

// document.write(answers); // устаревшая команда

// console.log(typeof(answers));
// console.log(typeof(null));

// const category = "toys";
// // console.log("https://someurl.com/" + category + "/" + 5);
// console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan";
// // console.log(`Hello, ${user}`);
// alert(`Hello, ${user}`);

// alert("Hello");

// console.log('arr' + " - object"); //arr - object
// console.log(4 + "5"); //45
// console.log(4 + +"5"); //9   +"5" - унарный плюс

let incr = 10,
    decr = 10;

// incr++;
// decr--;
// console.log(incr);
// console.log(decr);    

console.log(incr++);
console.log(decr--); 

console.log(5%2);
console.log(2*4 == 8); //true
console.log(2*4 == '8'); //true
console.log(2*4 === '8'); //false
console.log(2+2*2 != '8'); //true
console.log(2+2*2 === '8'); //false
console.log(2+2*2 === 6); //true
console.log(2+2*2 == '6'); //true
console.log(2+2*2 === '6'); //false

const isChecked = true,
        isClose = true;

console.log(isChecked && isClose);