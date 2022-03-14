// 1 этап
// Дана строка: 
// ' [
//       {"car": "BMW", "model": "5-series e39"}, 
//       {"car": "Honda", "model":  "Civic (5G)"},
//       {"car": "Nissan", "model": "Silvia (S14)"},
//       {"car": "Volkswagen", "model": "Golf MK 3"}
// ] '
// Сделайте массив из этой строки, создайте на основании этого массива два 
// других массива, которые состоят из немецких и японских автомобилей. Массивы 
// преобразуйте в строки.  Результат записать в переменные germanCarsString и 
// japanCarsString. Чтобы понять какие машины немецкие, а какие японские используйте 
// два массива c названиями авто germanCars = ["BMW", "Volkswagen"] и 
// japanCars = ["Honda", "Nissan"].

//-----------
// 2 этап
// На основании предыдущего задания с автомобилями сохраните строки germanCarsString и 
// japanCarsString в localStorage. И создайте два списки с автомобилями. Данные из списка 
// должны загружаться из localStorage  при загрузке страницы.

// ---------
"use strict";

const string_with_cars = (' [ {"car": "BMW", "model": "5-series e39"}, {"car": "Honda", "model":  "Civic (5G)"}, {"car": "Nissan", "model": "Silvia (S14)"}, {"car": "Volkswagen", "model": "Golf MK 3"}] ');

let array_from_string_with_cars = JSON.parse(string_with_cars)
console.log("Массив из всех авто:", array_from_string_with_cars)

let array_from_german = [];
let germanCars = ["BMW", "Volkswagen"];
array_from_german = array_from_string_with_cars.filter((a) =>
	germanCars.includes(a.car)
);
let germanCarsString = JSON.stringify(array_from_german);
console.log("Немецкие авто:", germanCarsString);


let array_from_japan = [];
let japanCars = ["Honda", "Nissan"];
array_from_japan = array_from_string_with_cars.filter((a) =>
	japanCars.includes(a.car)
);
let japanCarsString = JSON.stringify(array_from_japan);
console.log("Японские авто:", japanCarsString);

// 2 этап
localStorage.setItem("germanCars", germanCarsString);
localStorage.setItem("japanCars", japanCarsString);

const germanList = document.createElement("ul");
document.body.prepend(germanList);
const germanCarsList = (elem) => {
	const germanCarLi = document.createElement("li");
	germanList.prepend(germanCarLi);
	germanCarLi.innerHTML = `car: ${elem.car}, model: ${elem.model}`;
}

const japanList = document.createElement("ul");
document.body.prepend(japanList);
const japanCarsList = (elem) => {
	const japanCarLi = document.createElement("li");
	japanList.prepend(japanCarLi);
	japanCarLi.innerHTML = `car: ${elem.car}, model: ${elem.model}`;
}

window.onload = () => {
	const germanCarsFromLocal = JSON.parse(localStorage.getItem("germanCars"));
	germanCarsFromLocal.forEach((elem) => {
		germanCarsList(elem);
	});
	const japanCarsFromLocal = JSON.parse(localStorage.getItem("japanCars"));
	japanCarsFromLocal.forEach((elem) => {
		japanCarsList(elem);
	});
}
