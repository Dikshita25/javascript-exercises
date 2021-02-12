// Arrays

// const friend1 = "Dikshita";
// const friend2 = "Pankaj";
// const friend3 = "Anesh";


// // declaring array option1
// const friends = ['Micheal', 'Steven', 'Peter'];
// console.log(friends);

// // declaring array option2
// const years = new Array(1991, 1992, 2000)
// console.log(years);


// // Print first element of friends 
// console.log(friends[0]);
// // 3rd element
// console.log(friends[2]);

// // Get the length of the array
// console.log(friends.length);

// console.log(friends[friends.length - 1]); // Peter

// //changing the 2nd element in the array
// friends[2] = 'jay';
// console.log(friends[2]);
// console.log(friends);

// const firstName = 'Jonas';
// const jonasDetails = [firstName, 'Melbourne', 2021-1996, 'QA automation', friends];
// console.log(jonasDetails);


//Exercise

// const calcAge = function (birthYear) {
//     return 2021 - birthYear;
//   }
// const years = [1990, 1992, 1996, 2000];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[2]);
// console.log(age1, age2, age3);

// // Place it in the array
// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])]
// console.log(ages); // Output will be a array


// Push method - pushing a element in a array at the end

const friends = ['Micheal', 'Steven', 'Peter'];
friends.push('Anesh');
console.log(friends); // o/p -> ["Micheal", "Steven", "Peter", "Anesh"]
console.log(friends.length); 


// adding element at the first in an array

friends.unshift('Pankaj');
console.log(friends); //o/p --> ["Pankaj", "Micheal", "Steven", "Peter", "Anesh"]


// Removes the last element from the array
friends.pop();
console.log(friends); //o/P --> ["Pankaj", "Micheal", "Steven", "Peter"]
friends.pop();
console.log(friends); //o/P --> ["Pankaj", "Micheal", "Steven"]

// Remove element 1st element from array
friends.shift();
console.log(friends); //op --> ["Micheal", "Steven"]

// gives the index
console.log(friends.indexOf('Steven')); // o/p -> 1
console.log(friends.indexOf('bob')); // o/p -> -1 output of something which doesnt not exist


// Includes gives boolean output and is strict equality operators
console.log(friends.includes('Steven')); // true
console.log(friends.includes('bob')); // false

friends.push(23);
console.log(friends); //  ["Micheal", "Steven", 23]
console.log(friends.includes('23')); // false , as its strict equality operator and does not does type conversion


if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}