
'use strict'
let counter = () => {
   let a = 0;
   return function () {
		
      a += 1
      console.log(a)
   }
}

let click = counter()
console.log(click())
console.log(click())
console.log(click())
