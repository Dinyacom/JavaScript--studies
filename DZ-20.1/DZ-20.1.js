//Изучите https://jsonplaceholder.typicode.com/ напишите для  тренировки 
//GET, POST, PUT, PATCH и DELETE зпроса для одного типа ресурсов. Например 
//отправляя обычный GET запрос, вы получите массив данных. Подставьте идентификатор 
//ресурса в адресную строку (например число 2) и получите только вторую запись. 
//Обновите ее частично, изменив любое поле. И сделайте запрос на удаление этой записи.

"use strict";

const broadcast_GET = async () => {
	try {
		const albumsArr = await fetch('https://jsonplaceholder.typicode.com/users/');
		if (albumsArr.ok) {
			console.log("Запрос GET прошёл успешно", albumsArr);

			const albumsArr_All = await albumsArr.json();
			console.log("Полученый результат всей ссылки", albumsArr_All);
			
			let albumsArr_All_sorting = [];
			albumsArr_All_sorting = albumsArr_All.filter((sorting) => {
				if (sorting.id === 2 ) {
					console.log("Результат GET запроса где id равно 2:", sorting);
					}
			})
			} else {
			console.log("Запрос не прошел", albumsArr)
		}
	} catch (err) {
		console.error("Error!!!", err)
	}
}
broadcast_GET();

const broadcast_POST = async () => {
  try {
    const albumsArr = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: "POST",
		body: JSON.stringify({
				name: "Alex_POST Poopkin",
				email: "Poopkin_POST@gmail.com",
      }),
      headers: {
        'Content-type' : 'application/json; charset=UTF-8',
      },
    });
    if (albumsArr.ok) {
      const albumsArr_POST = await albumsArr.json();
      console.log("Результат POST запроса" ,albumsArr_POST);
    }  
  } catch (err) {
		console.error("Error!!!", err)
  }
}
broadcast_POST();

const broadcast_PUT = async () => {
  try {
    const albumsArr = await fetch('https://jsonplaceholder.typicode.com/users/2', {
      method: "PUT",
		body: JSON.stringify({
				name: "Alex_PUT Poopkin",
				email: "Poopkin_PUT@gmail.com",
      }),
      headers: {
        'Content-type' : 'application/json; charset=UTF-8',
      },
    });
    if (albumsArr.ok) {
      const albumsArr_PUT = await albumsArr.json();
      console.log("Результат PUT запроса" ,albumsArr_PUT);
    }  
  } catch (err) {
		console.error("Error!!!", err)
  }
}
broadcast_PUT();

const broadcast_PATCH = async () => {
  try {
    const albumsArr = await fetch('https://jsonplaceholder.typicode.com/users/2', {
      method: "PATCH",
		body: JSON.stringify({
				name: "Alex_PATCH Poopkin",
				email: "Poopkin_PATCH@gmail.com",
      }),
      headers: {
        'Content-type' : 'application/json; charset=UTF-8',
      },
    });
    if (albumsArr.ok) {
      const albumsArr_PATCH = await albumsArr.json();
      console.log("Результат PATCH запроса" ,albumsArr_PATCH);
    }  
  } catch (err) {
		console.error("Error!!!", err)
  }
}
broadcast_PATCH();

const broadcast_DELETE  = async () => {
  try {
    const albumsArr = await fetch('https://jsonplaceholder.typicode.com/users/2', {
      method: "DELETE",
    });
    if (albumsArr.ok) {
      const albumsArr_DELETE  = await albumsArr.json();
      console.log("Результат DELETE запроса" ,albumsArr_DELETE );
    }  
  } catch (err) {
		console.error("Error!!!", err)
  }
}
broadcast_DELETE ();