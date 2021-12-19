
'use strict'
var arr = [1, 2, 3, 4, 4, 5, 2, 9, 4]
console.log('Исходный массив:')
console.log(arr)

const arrUnique = arr.reduce((a, b) => {
	if (a.indexOf(b) < 0) {
		a.push(b);
	}
	return a;
}, []);

console.log(' Массив без дублирующихся по своим значениям элементам :')
console.log(arrUnique)
