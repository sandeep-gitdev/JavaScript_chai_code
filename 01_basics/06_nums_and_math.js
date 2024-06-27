const score = 400
//console.log(score);

const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(1));

const otherNumber = 123.8966

//console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));  //comas are used according indian standards

// **************** Maths **************************

//   console.log(Math);
//   console.log(Math.abs(-4)); // return the absolute value of number
//   console.log(Math.round(4.6));
//   console.log(Math.ceil(4.2));
//   console.log(Math.floor(4.9));  // it give nearest number to bottom 
//   console.log(Math.sqrt(25));  //square root
//   console.log(Math.min(4,5,7,2));
//   console.log(Math.max(4,5,7,2));

console.log(Math.random()); // In random the value always b/w 0-1
console.log((Math.random() * 10) + 1); // number b/w 1-10 but to avoid the 0 we use + 1 in it
console.log(Math.floor(Math.random() * 10) + 1); 

const min = 10 
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min )