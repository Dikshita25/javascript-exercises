// Objects
// use strict;

// const details = {
//   firstName: 'Dikshita',
//   lastName: 'Shirodkar',
//   age: 2021-1996,
//   job: 'QA',
//   friends: ['Micheal', 'Peter', 'Anesh']
// };
// console.log(details);

// Retierving property from object
// Option 1:
// console.log(details.lastName);

// // Also using  Option 2
// console.log(details['lastName']);

// const nameKey = 'Name';

// console.log(details['first' + nameKey]); // o/p -> Dikshita
// console.log(details['last' + nameKey]); // o/p -> Shirodkar

// const interestedIn = prompt('What do you want to know about jonas? Choose between firstName, lastName, age, Job and friends');
// console.log(interestedIn);

// console.log(details[interestedIn]); // o/p -- Undefined (details does not have an property as interestedIn)
// interestedIn = job // o/p will be QA


// if (details[interestedIn]) {
//   console.log(details[interestedIn])
// } else {
//   console.log('Wrong request!');
// }

// adding elements in objects
// details.location = 'Portugal';
// details['twitter'] = '@dikshitashirodkar';
// console.log(details);


// Challenge 
// Dikshita has 3 friends and his best friend is called Michael

//console.log(`${details.firstName} has ${details.friends.length} friends and her best friends is called ${details.friends[2]}`);


// OBJECT METHODS:

// const details = {
//   firstName: 'Dikshita',
//   lastName: 'Shirodkar',
//   birthYear: 1996,
//   job: 'QA',
//   friends: ['Micheal', 'Peter', 'Anesh'],
//   hasDriverLicense: true,

  // calcAge: (birthYear) => {
  //   return 2021 - birthYear;
  // }

  // calcAge: function () {
  //   console.log(this);
  //   return 2021 - this.birthYear;
  // }
//   calcAge: function () {
//     this.age = 2021 - this.birthYear
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is ${this.calcAge()} years old ${this.job}, and she has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`;
//   }
// };

// // console.log(details.calcAge(1999)); // 22
// // console.log(details['calcAge'](1998)); // 23

// // console.log(details.calcAge()); // call first , then stores value as age = 25
// // console.log(details.age);
// // console.log(details.age);
// // console.log(details.age);


// //Challenge 
// // Dikshita is a 25year old QA, and he has a driver's license
// console.log(details.getSummary());


// Coding challenge

// bmi = mass / height ** 2 = mass /(height * height)

const mark = {
  firstName: 'Mark',
  lastName: 'Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function (mass, height) {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};
const john = {
  firstName: 'John',
  lastName: 'Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function (mass, height) {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if( mark.bmi > john.bmi) {
  console.log(`${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s BMI`);
} else {
  console.log(`${john.firstName}'s BMI (${john.bmi}) is higher than ${mark.firstName}'s BMI`);
}
