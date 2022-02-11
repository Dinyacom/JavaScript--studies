// Используйте функцию cleanRoom, написанную в прошлом задании, чтобы можно было осуществить 
// последовательную уборку трех комнат. Для этого создайте цепочку промисов. Только после того 
// как уборка комнаты завершена, пользователь может начать убирать новую. Если одна из комнат 
// оказалась слишком грязной, то пекращаем уборку полностью. 

// Для этого функция cleanRoomsStepByStep(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) { ... } должна принимать три 
// аргумента, каждый из кторых описывает уровень загрязнения каждой комнаты. 

// Функцию cleanRoom из прошлого задания использовать для вспомогательных целей. После вызовы функции используйте 
// then. Если уровень загрязнения одной из комнат больше 10 или меньше 0 уборку не проводить, 
// начинать убирать сразу новую комнату.

"use strict";

function cleanRoom(timer) {
	return new Promise((resolve, reject) => {
		if (timer < 0 || timer > 10) {
			reject("Здесь слишком грязно уборку в этой комнате прекращаем!");
		} else {
			setTimeout(() => resolve(timer), (timer * 1000));
		};
	});
};

function cleanRoomsStepByStep(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) {
	cleanRoom(dirtyLevel_1)

		.then((result) => {
			if (result) {
				console.log(`Уборка первой комнаты проведена успешно за ${result} секунд`);
			}
			return cleanRoom(dirtyLevel_2);
		})
		.catch((err) => {
			console.error(err);
		})

		.then((result) => {
			if (result) {
				console.log(`Уборка второй комнаты проведена успешно за ${result} секунд`);
			}
			return cleanRoom(dirtyLevel_3);
		})
		.catch((err) => {
			console.error(err);
		})

		.then((result) => {
			if (result) {
				console.log(`Уборка третьей комнаты проведена успешно за ${result} секунд`);
			}
		})
		.catch((err) => {
			console.error(err);
		})
}

const timer_room_1 = Math.floor(Math.random() * 20);
const timer_room_2 = Math.floor(Math.random() * 20);
const timer_room_3 = Math.floor(Math.random() * 20);

cleanRoomsStepByStep(timer_room_1, timer_room_2, timer_room_3);
