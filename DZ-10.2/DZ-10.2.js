
'use strict'
let user = { name: "Ivan", years: 19, car: "Subaru", telePhone: "iPhone", city: "Minsk" }


let { name: UserName, years: UserYear, car: UserCar, ...userOtherInfo } = user;
console.log(`UserName: ${UserName}`);
console.log(`UserYear: ${UserYear}`);
console.log(`UserCar: ${UserCar}`);

console.log(`userOtherInfo: `, userOtherInfo);

