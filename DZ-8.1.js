
'use strict'
const users = [
	{ name: 'Ivan', age: 18 },
	{ name: 'Petr', age: 12 },
	{ name: 'Sidor', age: 25 },
	{ name: 'Pavel', age: 16 },
	{ name: 'Sasha', age: 29 }
]

const examination = users.sort((a, b) => (a.age > b.age) ? 1 : -1)
console.log(`Отсортированный массив по возростанию:`);
console.log(examination)

const sumYoung = examination.reduce((sum, examination) => (examination.age < 18) ? sum + examination.age : sum, 0)
console.log(`Суммарный возраст всех несовершеннолетних пользователей составляет`);
console.log(sumYoung)
