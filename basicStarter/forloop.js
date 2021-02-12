// FOR LOOPS:


// for loops keeps running while condition is true
// for (let i = 1; i <=10; i++) {
//   console.log(`Hello here printed here for the ${i} time`);
// }


// For looping within arrays
const detailsArray = [
  'Dikshita',
  'Shirodkar',
  2021-1996,
  'QA',
  ['Peter', 'Micheal', 'James'],
];

// const types = [];

// // looping arrays and getting typeOf in a for loop
// for (let i=0; i< detailsArray.length; i++) {

//   // Reading from jonas array
//   // console.log(detailsArray[i], typeof detailsArray[i]);
  
//   //filling the types array
//   // types[i] = typeof detailsArray[i];

//   types.push(typeof detailsArray[i]);
// }
// console.log(types);

// const years = [1992, 1998, 2000, 1996, 1990];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2021 - years[i]);
// }
// console.log(ages);


// Print only strings from arrays using continue statement
// CONTINUES
// console.log('------ONLY STRINGS -------')
// for (let i=0 ; i< detailsArray.length; i++) {
//   if( typeof detailsArray[i] !== 'string') continue;
//   console.log(detailsArray[i], typeof detailsArray[i]);
// }
// console.log('------BREAK WITH NUMBER -------')
// for (let i=0 ; i< detailsArray.length; i++) {
//   if( typeof detailsArray[i] === 'number') break;
//   console.log(detailsArray[i], typeof detailsArray[i]);
// }


// console.log('------Looping the array backwards -------')
// // console.log(detailsArray.length) // 5
// for (let i = detailsArray.length-1 ; i>=0 ; i--) {
//   console.log(detailsArray[i], i);
// }

// LOOPING INSIDE A LOOP

for (let exercise =1 ; exercise < 3; exercise++) {
  console.log(`Starting exercise ${exercise}`);

  for (let rep = 1; rep < 4 ;rep++) {
    console.log(`Exercise ${exercise}: {Lifting weight repetition ${rep}`);
  }
}