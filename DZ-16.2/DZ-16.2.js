// Напишите функцию уборки комнаты cleanRoom(dirtyLevel) { ... }, которая принимает на 
// вход числовой показатель загрязнения комнаты (от 0 до 10). В зависимости от этого числа 
// опеределяется сколько времени надо потратить на уборку, это время равно значению 
// dirtyLevel * 1000 в мс. Данная функция возвращает успешно выполненный промис спустя 
// указанное время dirtyLevel * 1000. Для обработки успешной уборки в then используйте 
// console.log(`Уборка проведена успешно за ${result} секунд`); где result это аргумент resolve.

"use strict";

function cleanRoom(dirtyLevel) {
	if (dirtyLevel < 0 || dirtyLevel > 10) {
		console.log("Вы ввели не верное значение, нужно вводить от 0 до 10");
	}
	else {
		return new Promise(function (resolve) {
			setTimeout(() =>
				resolve(dirtyLevel), dirtyLevel * 1000)
		}
		)
			.then(result =>
				console.log(`Уборка проведена успешно за ${result} секунд`));
	}
}
cleanRoom(2)