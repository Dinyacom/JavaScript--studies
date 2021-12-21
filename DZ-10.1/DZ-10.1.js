
'use strict'
// var arr = [1, 2, 3, 4, 4, 5, 2, 9, 4]
var users = [
	{ id: 1, name: "Вася", age: 19 },
	{ id: 2, name: "Петя", age: 18 },
	{ id: 3, name: "Маша", age: 17 },
	{ id: 4, name: "Света", age: 18 },
	{ id: 5, name: "Наташа", age: 17 },
	{ id: 6, name: "Женя", age: 12 },
	{ id: 7, name: "Коля", age: 30 },
	{ id: 8, name: "Настя", age: 16 },
	{ id: 9, name: "Антон", age: 19 },
	{ id: 10, name: "Иван", age: 20 },
	{ id: 11, name: "Павел", age: 16 },
	{ id: 12, name: "Денис", age: 20 }
];

console.log('Исходный массив:')
console.log(users)
const copyusers = [...users]
const usersUniqueAge = copyusers.reduce((item, index) => {
	(item.indexOf(index.age) < 0) ? (item.push(index.id) + item.push(index.name) + item.push(index.age)) : item;
	return item;
}, []);

console.log(' Массив без дублирующихся по своим значениям элементам :')
console.log(usersUniqueAge)
