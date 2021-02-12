/* 
Given an array of forecasted maximum temp the thermometer displays a string with these temperature

Create a function 'printForecast' which takes in an array 'arr' and logs a string to the console.

testData 1 : [17, 21, 23]
testDate 2:[12, 5, -5, 0, 4]

// Understand the problem

** Array transform to string, seperated by 3 dots
** Numbers coming from array
** what are the X days --Answer  index + 1 is the X days

Break up into sub task
- Transform array into string
- Transform element to string with Celsius
- String needs to contain days i.e index + 1
- Also add ... between elements and start and end of string
*/
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

//String like this
// console.log(`... ${data1[0]}C ... ${data1[1]}C`);

const printForecast = function(arr) {
  let string = '';
  for (let i = 0; i < arr.length; i++) {
    string += `${arr[i]}C in ${i + 1} days ...`;
  }
  console.log('...' + string);
};
printForecast(data1);
