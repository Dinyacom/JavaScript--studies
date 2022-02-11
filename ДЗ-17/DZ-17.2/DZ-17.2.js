// На основании прошлой функции cleanRoomsStepByStep  сделайте новую функцию cleanRoomsAll, чтобы можно было 
// осуществить параллельную уборку трех комнат. 
// Только после того как уборка всех комнат завершена, пользователь может заявить об окончании уборки. 
// Если одна из комнат оказалась слишком грязной (ровень загрязнения одной из 
// комнат больше 10 или меньше 0 ), то не начинаем ее уборку. Для этого функция 
// cleanRoomsAll (dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) { ... } должна принимать три аргумента, 
// каждый из кторых описывает уровень загрязнения каждой комнаты.

"use strict";

function cleanRoom(timer) {
	return new Promise((resolve, reject) => {
		if (timer < 0 || timer > 10) {
			reject("Здесь слишком грязно уборку в этой комнате прекращаем!");
		} else {
			setTimeout(() => resolve(`Уборка этой комнаты проведена успешно за ${timer} секунд`), timer * 1000);
		};
	});
};

function cleanRoomsAll(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) {
	Promise.allSettled([
		cleanRoom(dirtyLevel_1),
		cleanRoom(dirtyLevel_2),
		cleanRoom(dirtyLevel_3)
	])

		.then((result) => {
			console.log(result);
		})
		.catch((err) => {
			console.error(err);
		})
};

const timer_room_1 = Math.floor(Math.random() * 20);
const timer_room_2 = Math.floor(Math.random() * 20);
const timer_room_3 = Math.floor(Math.random() * 20);

cleanRoomsAll(timer_room_1, timer_room_2, timer_room_3);
