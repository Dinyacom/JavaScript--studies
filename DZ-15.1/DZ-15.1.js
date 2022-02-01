// Создайте функцию getDateAgo(date, days), возвращающую дату, которая было days дней назад 
// от даты date. Первый аргумент это дату в формате строки "MM-DD-YYYY", второй аргумент 
// количество дней в виде  числа. Возвращать строку в формате 

// "MM-DD-YYYY". Предусмотреть возможность того, что месяц в возращаемом значении может 
// быть другой.

"use strict";

let date = new Date("08-22-2022");
console.log("Зананая дата в секундах");
console.log(date.getTime());
// console.log(setTime.date);

let days = new Date();
console.log("Текущая дата в секундах");
console.log(days.getTime());

function getDateAgo(date, days) {
	return (date.getTime() - days.getTime())
}

let new_day = (getDateAgo(date, days))
console.log("возвращающую дату, которая была days дней назад от даты date в секундах");
console.log(new_day)


let date2 = new Date(new_day);
console.log("возвращающую дату, которая была days дней назад от даты date");
console.log(date2);
