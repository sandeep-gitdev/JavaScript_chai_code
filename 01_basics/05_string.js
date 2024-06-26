const name = "sandeep"
const repoCount = 50

// console.log(name + repoCount + " Value");   old method 

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('sandeep-DC');

// console.log(gameName[0]);
// console.log(gameName.__proto__);

//  console.log(gameName.length);
//  console.log(gameName.toUpperCase());
//  console.log(gameName.charAt(2));
//  console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
//console.log(newString);

const anotherString = gameName.slice(-9, 4); // we can use -ve no. in slice method
//console.log(anotherString);

const newStringOne = "  sandeep  ";
//console.log(newStringOne);
//console.log(newStringOne.trim());

const url = "https://sandeep.com/sandeep%40dhanger"

console.log(url.replace('%40', '-'));  // replace method

console.log(url.includes('sandeep'));  // includes method used to find specifice string 

console.log(gameName.split('-'));   // split method used to split the line according given reference
