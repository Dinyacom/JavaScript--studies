
'use strict'
class information_user {
	constructor(first_name, second_name, age, city) {
		this.first_name = first_name;
		this.second_name = second_name;
		this.age = age;
		this.city = city;
	}
}

const user1 = new information_user('Alex', 'DD', 20, 'Minsk');
const user2 = new information_user('Pit', 'Bah', 25, 'Gomel');

console.log(`user1:`, user1);
console.log(`user2:`, user2);

