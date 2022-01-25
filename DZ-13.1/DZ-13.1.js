// Напишите функцию function invert(data) { ...}, которая принимает принимает на вход массив или строку и отдает на выходе их перевернутыми. 
// После этого попытайтесь улучшить задачу, чтобы проход по данным осуществлялся с начала и конца навстречу, это ускорит выполнение в два раза.

"use strict"

// Исходное значение data
// let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let data = ("Переворачиваем текст");

console.log(`Исходное содержимое data: ${data}`);

// Проверка data является массивом или строкой. Если строка, то первое действие, если массив, то второе
let invert = (Array.isArray(data) == false) ?
	(`data является строкой, получаем перевёрнутую строку: ${(data.split("").reverse().join(""))}`) :
	(`data является массивом, получаем перевёрнутый массив: ${(data.reverse())}`);

console.log(invert);

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