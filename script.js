" use strict";
// let x = 5; alert(x++)?
let x = 5; alert(x++);

// [] + false - null + true?
// - пустой массив превращается в пустую строку
console.log([] + false - null + true); //NaN
console.log(typeof([] + false)); //string ~ "false"
console.log([] + false - null); //NaN

// let y = 1; let x = y = 2; alert(x);?
let y = 1; let x1 = y = 2; alert(x1); //2

// [] + 1 + 2?
console.log([] + 1 + 2);//"12"

// alert("1"[0])?
alert("1"[0]); //"1" - обращение к строке по индексу
alert("1"[2]); //undefined

// 2 && 1 && null && 0 && undefined?
// И (&&) запинается на лжи - в проверке доходим до null и останавливаемся
console.log(2 && 1); //1
console.log(1 && null); //null
console.log(null && 0); //null
console.log(0 && undefined); //0
console.log(null && undefined); //null
console.log(1 && 0); //0
console.log(2 && 1 && null && 0 && undefined); //2, 1, null - остановились

// !!(a && b) и (a && b)
console.log(!!(1 && 2) === (1 && 2)); //false (!! - return boolean)

// alert(null || 2 && 3 || 4)
// ИЛИ (&&) запинается на правде
alert(null || 2 && 3 || 4); //3 (смотреть таблицу приоритетов)
// у && выше приоритет чем у ||

// a = [1, 2, 3]; b = [1, 2, 3]; a == b?
const a = [1, 2, 3]; 
const b = [1, 2, 3]; 
console.log(a == b); //false

// alert( +"infinity");?
alert( +"infinity"); //NaN
alert( +"Infinity"); //Infinity

// "Ёжик" > "яблоко"?
console.log("Ёжик" > "Яблоко"); //false

// 0 || "" || 2 || undefined || true || false?
console.log(0 || "" || 2 || undefined || true || false); //2
// 0 в логическом контексте - false
// "" в логическом контексте - false
// 2 в логическом контексте - true (запинается на правде)
// дальше код не пойдёт
