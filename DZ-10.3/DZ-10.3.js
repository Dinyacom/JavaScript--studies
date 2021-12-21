
'use strict'
let arr = [1, 'str', 24, { name: 'Ivan' }, 89, undefined, '10'];

let [firstElement, secondElement, , fifthElement, ...otherElements] = arr;
console.log(`firstElement: ${firstElement}`);
console.log(`secondElement: ${secondElement}`);
console.log(`fifthElement: ${fifthElement}`);

console.log(`otherElements: `, otherElements);

