
'use strict'

//  Создайте метод calcArea который будет возвращать суммарную площадь всех этажей дома. Данный метод занести в прототип конструктора. 
//Вызвать данный метод на каждом созданном объекте и результат записать в поле totalArea каждого объекта.

class CalcArea {
	constructor(width, length, floors) {
		this.width = width;
		this.length = length;
		this.floors = floors;
	}
	CalcArea() {
		this.totalArea = this.width * this.length * this.floors;
	}
}
const firstHouse = new CalcArea(40, 20, 5);
const secondHouse = new CalcArea(60, 30, 9);

console.log(`Информация по первому дому (firstHouse):`);
firstHouse.CalcArea();
console.log(`Ширина ${firstHouse.width} м, Длинна ${firstHouse.length} м, Количество этажей ${firstHouse.floors}, Площадь всех этажей ${firstHouse.totalArea} м2`);

secondHouse.CalcArea();
console.log(`Информация по второму дому(secondHouse):`);
console.log(`Ширина ${secondHouse.width} м, Длинна ${secondHouse.length} м, Количество этажей ${secondHouse.floors}, Площадь всех этажей ${secondHouse.totalArea} м2`);



