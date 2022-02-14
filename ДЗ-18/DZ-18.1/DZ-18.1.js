// Переделайте функцию cleanRoomsStepByStep из прошлого задания на async/await. 
// Теперь если одна из комнат оказалась слишком грязной, уборку всю прекратить.

"use strict";

async function cleanRoom(timer) {
	return new Promise((resolve, reject) => {
		if (timer < 0 || timer > 10) {
			reject("Здесь слишком грязно уборку всех комнат прекращаем!");
		} else {
			setTimeout(() => resolve(timer), (timer * 1000));
		};
	});
};

async function cleanRoomsStepByStep(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) {

	try {
		const result_1 = await cleanRoom(dirtyLevel_1);
		console.log(`Уборка первой комнаты проведена успешно за ${result_1} секунд`);

		const result_2 = await cleanRoom(dirtyLevel_2);
		console.log(`Уборка первой комнаты проведена успешно за ${result_2} секунд`);

		const result_3 = await cleanRoom(dirtyLevel_3);
		console.log(`Уборка первой комнаты проведена успешно за ${result_3} секунд`);
	}
	catch (err) {
		console.error(err);
	};
};

const timer_room_1 = Math.floor(Math.random() * 20);
const timer_room_2 = Math.floor(Math.random() * 20);
const timer_room_3 = Math.floor(Math.random() * 20);

cleanRoomsStepByStep(timer_room_1, timer_room_2, timer_room_3);
