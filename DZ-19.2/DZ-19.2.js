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
