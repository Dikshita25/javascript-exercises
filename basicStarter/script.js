// // Strict mode
'use strict'; //Should be the first line , helps in showcasing errors in the console.

// let hasDriverLicense = false;
// const passTest = true;

// if(passTest) hasDriverLicense = true;

// if(hasDriverLicense) console.log('I can drive :P');

// // const interface = 'Audio'; // error shown by strict is : Uncaught SyntaxError: Unexpected strict mode reserved word

// // const private = 34; // similar like above


// Example of basic function 
// function logger () {
//   console.log('My name is Dikshita');
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();

// Function declration

// function fruitProcessor(apples, oranges) {
//   // console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// // console.log(appleJuice); 
// console.log(fruitProcessor(5,0));

// const mixJuice = fruitProcessor(3,9);
// console.log(mixJuice);

// const orangeJuice = fruitProcessor(0, 3);
// console.log(orangeJuice);

// function declaration

// function calcAge1 (birthYear) {
//   return 2021 - birthYear;
// }

// const age = calcAge1(1996);
// console.log(calcAge1(1996));


// function expression

// const calcAge2 = function (birthYear) {
//   return 2021 - birthYear;
// }
// const age2 = calcAge2(1997);
// console.log(age2);


// Arrow functions

// const ageCalc3 = birthYear => 2021 - birthYear;

// const age = ageCalc3(1998);
// console.log(age);

// const yearUntilRetirement = (birthYear, firstName, employeeID) => {
//   const age = 2021 - birthYear;
//   const retirement = 60 - age;
//   // return retirement;
//   return `${firstName} whose Id is ${employeeID} retires in ${retirement} years`;
// }

// console.log(yearUntilRetirement(1996, 'Dikshita',503));
// console.log(yearUntilRetirement(1990, 'Anesh', 209));

// Function calling another function

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   // console.log(apples, oranges);
//   const juice = `Juice with ${applePieces} piece apples and ${orangePieces} piece oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(2,3));


// const calcAge = function (birthYear) {
//  return 2021 - birthYear;
// };

// const yearUntilRetirement = function (birthYear, firstName, employeeID) {
//   const age = calcAge(birthYear);
//   const retirement = 60 - age;
//   if (retirement > 0){
//     console.log(`${firstName} whose Id is ${employeeID} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1;
//   }
//   // return retirement;
//   //return `${firstName} whose Id is ${employeeID} retires in ${retirement} years`;
// }

// console.log(yearUntilRetirement(1996, "Dikshita", 121));
// console.log(yearUntilRetirement(1990, "Anesh", 120));
// console.log(yearUntilRetirement(1960, "Mike", 120));



// Coding challenge
const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins);
console.log(scoreKoalas);

const checkWinner = function(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win the emoji (${avgDolphins} vs ${avgKoalas})`);
  }
  else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win the emoji (${avgKoalas} vs ${avgDolphins})`)
  }
  else {
    console.log('Nobody wins');
  }
}

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(200, 50);

checkWinner(50, 100);