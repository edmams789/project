/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
//получить все картинки внутри класса .promo__adv
const adv = document.querySelectorAll('.promo__adv img'),//получить все картинки
      poster = document.querySelector('.promo__bg'),  
      genre = poster.querySelector('.promo__genre');

//удалить все эти картинки
adv.forEach(item => {
    item.remove();
});
// adv.forEach(function (item) {
//     item.remove();
// });

genre.textContent = 'драма';

poster.style.backgroundImage = 'url("img/bg.jpg")';


