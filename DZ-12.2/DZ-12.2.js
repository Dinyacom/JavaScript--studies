
'use strict'
//Создайте класс House, которая позволяет создавать объект здания с параметрами длины(length), ширины(width) и количество этажей(floors)
//Добавьте ему статический метод sortBuyFloors который можно будет использовать для сортировки зданий по возрастанию их высоты. 
// На основании класса House создайте класс Skyscraper (небоскреб, по сути реализуйте через наследование). Данный класс кроме свойств
// length, width и floors должен предоставлять дополнительное свойство offices(количество выделенных в офисе задний, можете задать их любым на ваше усмотрение). 
// Создайте три внебоскреба firstSkyscraper, secondSkyscraper и thirdSkyscraper. Оберните firstSkyscraper, secondSkyscraper и thirdSkyscraper  
// в массив skyscrapers и отсортируйте его по возрастанию высоты небоскребов, используя статический метод sortBuyFloors.

// создание портотипа для зданий
class House {
	constructor(length, width, floors) {
		this.length = length;
		this.width = width;
		this.floors = floors;
	}
	// выполняет сортировку зданий по высоте
	static sortBuyFloors(arr) {
		arr.sort((a, b) => (a.floors - b.floors))
	}
}

// добовляет кол-во офисов в здании Skyscraper + добовляет кол-во офисов offices в здании.
//Для того, чтобы наследовать класс от другого, мы должны использовать ключевое слово "extends" и указать название родительского класса перед {..}
//super.method(...) вызывает родительский метод.
//super(...) вызывает родительский конструктор (работает только внутри нашего конструктора).
class Skyscraper extends House {
	constructor(length, width, floors, offices) {
		super(length, width, floors);
		this.offices = offices;
	}
}

// данные по зданиям
const firstSkyscraper = new Skyscraper(40, 20, 30, 10);
const secondSkyscraper = new Skyscraper(60, 30, 9, 20);
const thirdSkyscraper = new Skyscraper(60, 30, 5, 15);

console.log(`Данные по зданию firstSkyscraper`);
console.log(`Длинна ${firstSkyscraper.length} м, Ширина ${firstSkyscraper.width} м, Количество этажей ${firstSkyscraper.floors}, Количество офисов ${firstSkyscraper.offices}`);
console.log(`Данные по зданию secondSkyscraper`);
console.log(`Длинна ${secondSkyscraper.length} м, Ширина ${secondSkyscraper.width} м, Количество этажей ${secondSkyscraper.floors}, Количество офисов ${secondSkyscraper.offices}`);
console.log(`Данные по зданию thirdSkyscraper`);
console.log(`Длинна ${thirdSkyscraper.length} м, Ширина ${thirdSkyscraper.width} м, Количество этажей ${thirdSkyscraper.floors}, Количество офисов ${thirdSkyscraper.offices}`);

// вывод отсортированного результата зданий по высоте в сассив 
let skyscrapers = [firstSkyscraper, secondSkyscraper, thirdSkyscraper];
Skyscraper.sortBuyFloors(skyscrapers)

console.log(`Отсортированные здания по высоте`);
console.log(skyscrapers)
