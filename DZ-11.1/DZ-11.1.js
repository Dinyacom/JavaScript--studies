
'use strict'

// Создайте функцию-конструктор houseBuilder, которая позволяет создавать объект дачного дома с параметрами ширины длины и количества этажей.
// Создайте два объекта firstHouse и secondHouse на основании этой функции конструктора. (Длина, ширина, количество этажей - числовой тип данных,
// значения придумайте сами).

class HouseBuilder {
	constructor(width, length, floors) {
		this.width = width;
		this.length = length;
		this.floors = floors;

	}
}

const firstHouse = new HouseBuilder(40, 20, 5);
const secondHouse = new HouseBuilder(60, 30, 9);

console.log(`Первый дом:`, firstHouse);
console.log(`Второй дом:`, secondHouse);