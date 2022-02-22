// Отправьте GET запрос на https://jsonplaceholder.typicode.com/albums получите ответ, 
// проверьте статус код, что он успешный и запишите в переменную albumsArr, только те 
// элементы из массива, которые имеют userId равное 1 или 4.

"use strict";

const broadcast_GET = async () => {
	try {
		const albumsArr = await fetch('https://jsonplaceholder.typicode.com/albums');
		if (albumsArr.ok) {
			console.log("Запрос прошёл успешно", albumsArr);

			const albumsArr_All = await albumsArr.json();
			console.log("Полученый результат всей ссылки", albumsArr_All);

			let albumsArr_All_sorting = [];
			albumsArr_All_sorting = albumsArr_All.filter((sorting) => {
				if (sorting.userId === 1 || sorting.userId === 4) {
					console.log("Результат где userId равно 1 или 4:", sorting)
				}
			})

		} else {
			console.log("Запрос не прошел", albumsArr)
		}
	} catch (err) {
		console.error("Error!!!", err)
	}
}
broadcast_GET()
