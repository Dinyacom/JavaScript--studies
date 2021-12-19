
'use strict'
const factorial = ((n) => (n <= 1) ? 1 : (n * factorial(n - 1)));
console.log(`Фактариал из 4 =`, factorial(4))
