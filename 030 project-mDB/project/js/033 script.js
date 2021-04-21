/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// Возьмите свой код из предыдущей практики

document.addEventListener('DOMContentLoaded', () => {
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
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(newFilm);
            // movieDB.movies.sort();
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, movieList);
        }

        //очистить форму чтобы из нее все данные исчезли
        // addForm.reset();
        //обращаемся к самому элементу на котором на котором происходит событие
        event.target.reset();

    });      
    //функция для удаления рекламы
    const deleteAvd = (arr) => {
    //удалить все эти картинки
        arr.forEach(item => {
            item.remove();
        });
    };    
    
    // adv.forEach(function (item) {
    //     item.remove();
    // });   

    const makeChanges = () => {
        genre.textContent = 'эротическая драма';
    
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };    

    const sortArr = (arr) => {
        arr.sort();
    };    

    // movieDB.movies.sort();

    function createMovieList(films, parent) {
        parent.innerHTML = "";

        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
            </li>`;
        });
        //удаление просмотренных фильмов
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove(); //удаляем со страницы
                movieDB.movies.splice(i, 1); //удаляем из БД
            //после удаления какого-либо элемента, заново перестраивается список
                // createMovieList(movieDB.movies, movieList);
                createMovieList(films, parent);
            });
        });
    }
    deleteAvd(adv);
    makeChanges();
    // sortArr(movieDB.movies); //перемещаем в createMovieList
    createMovieList(movieDB.movies, movieList);

});