
'use strict'

//  Создайте метод calcArea который будет возвращать суммарную площадь всех этажей дома. Данный метод занести в прототип конструктора. 
//Вызвать данный метод на каждом созданном объекте и результат записать в поле totalArea каждого объекта.

class calcArea {
	constructor(width, length, floors, totalArea = width * length * floors) {
		this.width = width;
		this.length = length;
		this.floors = floors;
		this.totalArea = totalArea;
	}
}

const firstHouse = new calcArea(40, 20, 5);
const secondHouse = new calcArea(60, 30, 9);

console.log(`Первый дом:`, firstHouse);
console.log(`Второй дом:`, secondHouse);