//Получаем первый инпут
let oneInput = document.querySelector('.form__input--one');
//Получаем второй инпут
let twoInput = document.querySelector('.form__input--two');
//Получаем инпут для выбора математической операции
let select = document.querySelector('.form__select');
//Получаем поле для ответа
let answerText = document.querySelector('.form__answer');
//Получаем кнопку для отправки формы
let btn = document.querySelector('.form__btn');


//Переменные для записи значений с инпутов
let oneNumber;
let twoNumber;


btn.addEventListener('click', ()=>{
    //Преобразуем значение в число и записываем в переменную
    oneNumber = +oneInput.value;
    twoNumber = +twoInput.value;

    //Убираю десятую часть через Math.trunc
    if(select.value == '+') {
        //передаем ответ на html страницу
        answerText.innerHTML = 'Ответ: ' + Math.trunc(oneNumber + twoNumber);
    } else if(select.value == '-') {
        //передаем ответ на html страницу
        answerText.innerHTML = 'Ответ: ' + Math.trunc(oneNumber - twoNumber);
    } else if(select.value == '*') {
        //передаем ответ на html страницу
        answerText.innerHTML = 'Ответ: ' + Math.trunc(oneNumber * twoNumber);
    }else if(select.value == '/') {
        //передаем ответ на html страницу
        answerText.innerHTML = 'Ответ: ' + Math.trunc(oneNumber / twoNumber);
    }
});








/////////////////////////////////////////////////////////////////////

//Второй вариант, менее удобный.
//Тут я сделал проверку на число, в том случае если по какой-то причине инпут может принимать не только цифровые значения но и строковые
//Так же тут для примера использовал массивы.
//Сам код получился более громостким и менее читаем. Надеюсь для примера подойдет)

////////////////////////////////////////////////////////////////////



//ДЛЯ ПОЛНОЦЕННОЙ РАБОТЫ НУЖНО ПОМЕНЯТЬ В ИНПУТЕ АТРИБУТ TYPE="TEXT" НА TYPE="NUMBER"



// //Получаем инпуты для ввода
// let inputs = document.querySelectorAll('.form__input');
// //Получаем кнопку
// let btn = document.querySelector('.form__btn');
// //Получаем инпут для выбора математической операции
// let select = document.querySelector('.form__select');
// let arr = [];
// //Получаем поле для ответа
// let answerText = document.querySelector('.form__answer');
// //Получаем поле для вывода ошибки
// let errorText = document.querySelector('.error-value');
//
// btn.addEventListener('click', ()=> {
//     //Обнуляем массив
//     arr = [];
//     //Перебираем инпуты
//     inputs.forEach(currentInputs => {
//         //Проверяем значение на пустоту и передаем данные в массив
//         if(currentInputs.value != '') {
//             arr.push(currentInputs.value);
//         } else {
//             return
//         }
//     });
//
//
//
//     //Проверяем какую математическую операцию выбрал пользователь
//     if(select.value == '+') {
//         if (!isNaN(arr[0]) && !isNaN(arr[1])) {
//             //Отображаем параграф с ответом
//             answerText.classList.remove('none-text');
//             //Изменяем параграф с ответом
//             answerText.innerHTML = 'Ответ: ' + Math.trunc(parseInt(arr[0]) + parseInt(arr[1]));
//             //Если всё удачно то убираем класс для отображения ошибки
//             errorText.classList.remove('error-block')
//         } else {
//             //Если ошибка отображаем надпист
//             errorText.classList.add('error-block');
//             //Убираем параграф с ответом
//             answerText.classList.add('none-text')
//         }
//     } else if (select.value == '-') {
//         if (!isNaN(arr[0]) && !isNaN(arr[1])) {
//             answerText.classList.remove('none-text');
//             answerText.innerHTML = 'Ответ: ' + Math.trunc(parseInt(arr[0]) - parseInt(arr[1]));
//             errorText.classList.remove('error-block')
//         } else {
//             errorText.classList.add('error-block');
//             answerText.classList.add('none-text')
//         }
//     } else if(select.value == '*') {
//         if (!isNaN(arr[0]) && !isNaN(arr[1])) {
//             answerText.classList.remove('none-text');
//             answerText.innerHTML = 'Ответ: ' + Math.trunc(parseInt(arr[0]) * parseInt(arr[1]));
//             errorText.classList.remove('error-block')
//         } else {
//             errorText.classList.add('error-block');
//             answerText.classList.add('none-text')
//         }
//     } else if (select.value == '/') {
//         if (!isNaN(arr[0]) && !isNaN(arr[1])) {
//             answerText.classList.remove('none-text');
//             answerText.innerHTML = 'Ответ: ' + Math.trunc(parseInt(arr[0]) / parseInt(arr[1]));
//             errorText.classList.remove('error-block')
//         } else {
//             errorText.classList.add('error-block');
//             answerText.classList.add('none-text')
//         }
//     }
//
//
// });






//Спасибо за внимание :)