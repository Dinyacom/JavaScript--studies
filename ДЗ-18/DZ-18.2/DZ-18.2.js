// Задание со звездочкой. А теперь измените предыдущее задание так, что если одна из комнат 
// оказалась грязной, уборку продолжить, но в другой комнате.


"use strict";

async function cleanRoom(timer) {
	return new Promise((resolve, reject) => {
		if (timer < 0 || timer > 10) {
			reject("слишком грязно уборку в этой комнате прекращаем!");
		} else {
			setTimeout(() => resolve(timer), (timer * 1000));
		};
	});
};

async function cleanRoomsStepByStep(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) {

	try {
		const result_1 = await cleanRoom(dirtyLevel_1);
		console.log(`Уборка 1 комнаты проведена успешно за ${result_1} секунд`);
	}
	catch (err) {
		console.error(`В 1 комнате`, err);
	};

	try {
		const result_2 = await cleanRoom(dirtyLevel_2);
		console.log(`Уборка 2 комнаты проведена успешно за ${result_2} секунд`);
	}
	catch (err) {
		console.error(`Во 2 комнате`, err);
	};

	try {
		const result_3 = await cleanRoom(dirtyLevel_3);
		console.log(`Уборка 3 комнаты проведена успешно за ${result_3} секунд`);
	}
	catch (err) {
		console.error(`В 3 комнате`, err);
	};
}

const timer_room_1 = Math.floor(Math.random() * 20);
const timer_room_2 = Math.floor(Math.random() * 20);
const timer_room_3 = Math.floor(Math.random() * 20);

cleanRoomsStepByStep(timer_room_1, timer_room_2, timer_room_3);

