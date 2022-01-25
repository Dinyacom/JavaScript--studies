// Напишите функцию function invert(data) { ...}, которая принимает принимает на вход массив или строку и отдает на выходе их перевернутыми. 
// После этого попытайтесь улучшить задачу, чтобы проход по данным осуществлялся с начала и конца навстречу, это ускорит выполнение в два раза.

"use strict"

// Исходное значение data
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let data = ("Переворачиваем текст");
console.log(`Исходное содержимое data: ${data}`);

function invert(data) {
	let a = [];

	// Действие по переворачиванию если data массив (работа до половины массива, что ускоряет ппроцес)
	if (Array.isArray(data) == true) {
		for (let i = 0, j = data.length - 1; i < data.length / 2; i++, j--) {
			a[i] = data[j];
			a[j] = data[i];
		}
		console.log(`data является массивом, получаем перевёрнутый массив: ${a}`);
	}

	// Действие по переворачиванию если data строчка (работа до половины строки, что ускоряет ппроцес)
	else {
		(Array.isArray(data) == false)
		for (let i = 0, j = data.length - 1; i < data.length / 2; i++, j--) {
			a[i] = data[j];
			a[j] = data[i];
		}
		console.log(`data является строкой, получаем перевёрнутую строку: ${a.join('')}`);
	}
}

invert(data)

// split -- разбивает строку на символы;
// reverse -- переворачивает массив;
// join -- собирает строку из массива.
// Array.isArray(data) == false - то data строка иначе массив

// Все следующие вызовы вернут true
// Array.isArray([]);
// Array.isArray([undefined]);
// Array.isArray([1]);
// Array.isArray(new Array());
// Array.isArray(Array.prototype);

// вызовы, которые вернут false
// Array.isArray();
// Array.isArray({});
// Array.isArray(1);
// Array.isArray("String");
// Array.isArray(null);
// Array.isArray(undefined);
// Array.isArray(true);
// Array.isArray(false);
// Array.isArray({ __proto__: Array.prototype });