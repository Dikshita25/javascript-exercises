
// Example of while loops
// let rep = 1;

// while (rep<=10) {
//   console.log(`Lifting the weight for ${rep} time`);
//   rep++;
// }

// Example which depends on the variable

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !==6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if( dice === 6) console.log('Loop ended');
// }


// coding challenge

// calculate tips
const calcTip = function(bill) {
  return bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i=0; i< bills.length ; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

// console.log(tips, totals, bills);

//receives array of values
const calcAvg = function (arr) {
  let sum = 0;
  for (let i=0 ; i < arr.length; i++) {
    sum += arr[i];
    // or 
    // sum = sum + arr[i];
  }
  return sum / arr.length;
}

console.log(calcAvg(totals)); // 275.19
console.log(calcAvg(tips)); // 42. 89
