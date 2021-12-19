
'use strict'
const fibonachi = ((n) =>
	(n < 0) ? 0 :
		(n == 1) ? 1 : (fibonachi(n - 2) + fibonachi(n - 1))
);
console.log(`Фибоначи из 8 =`, fibonachi(8))
