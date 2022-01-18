
'use strict'

// Создайте класс, который позволяет создавать объект пользователя с полями first_name, second_name, age, city. 
// С помощью данной функции создайте два объекта пользователей (два пользователя), имя, фамилию, возраст, город проживания задайте сами.
// Создайте функцию, которая позовляет вывести полную информацию о каждом из двух пользователей созданных в предыдущем задании. 
// Функция должна выполнять вывод информации и не принимать аргументов. По сути нужно одну функцию привязать два объекта. Используйте любой известный вам способ привязки контекста.

class users {
	constructor(first_name, second_name, age, city) {
		this.first_name = first_name;
		this.second_name = second_name;
		this.age = age;
		this.city = city;

	}
}

const user1 = new users('Alex', 'Dadi', 15, 'Minsk');
const user2 = new users('Pit', 'Bobi', 19, 'Gomel');

function Full_Information_User() {
	console.log(`Имя пользователя ${this.first_name}, Фамилия пользователя ${this.second_name}, Его возраст ${this.age}, Город прожимания ${this.city} `);

}

console.log(`Данные первого пользователя:`);
Full_Information_User.call(user1);

console.log(`Данные второго пользователя:`);
Full_Information_User.call(user2);

