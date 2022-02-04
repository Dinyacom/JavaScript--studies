// Создайте функцию getDateAgo(date, days), возвращающую дату, которая было days дней назад 
// от даты date. Первый аргумент это дату в формате строки "MM-DD-YYYY", второй аргумент 
// количество дней в виде  числа. Возвращать строку в формате 

// "MM-DD-YYYY". Предусмотреть возможность того, что месяц в возращаемом значении может 
// быть другой.

"use strict";

const date = ("8-22-2022");
console.log(`Заданая дата: ${date}`);

const days = 25;
console.log(`Заданый день месяца: ${days}`);

function getDateAgo(date, days) {
	// переводим в секунды date
	const date_time = (new Date(date).getTime());

	// переводим в секунды days = (кол-во дней)*(кол-во часов в 1 дне)*(кол-во минут в 1 часе)*(кол-во секунд в 1 минуте)*(кол-во милисекунд в 1 секунде)
	const days_value = (days * 24 * 60 * 60 * 1000);

	const date_new = new Date(date_time - days_value);

	const new_month = (date_new.getMonth() + 1);
	const new_day = (date_new.getDate());
	const new_year = (date_new.getFullYear());

	const result = (`Новая дата, которая была days дней назад от даты date получилась: ${new_month}-${new_day}-${new_year}`);
	console.log(result);

	return
}
getDateAgo(date, days);
