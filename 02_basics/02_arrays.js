
const marvel_heros = ["Thor", "Ironman", "Dr.strange"]
const dc_heros = ["superman", "batman", "aquaman"]

//marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

//  const allHeros = marvel_heros.concat(dc_heros)  // concat method
//  console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros];  // spread method
//console.log(all_new_heros);

  const another_array = [1, 2, 3, [4, 5, 6], 7,[6, 7, [4, 5]]];

  const real_another_array = another_array.flat(Infinity);
 // console.log(real_another_array);

//  console.log(Array.isArray("sandeep"));  // to find a it's array or not
//  console.log(Array.from("sandeep"));   // convert into array
//  console.log(Array.from({name: "sandeep"})) // interseting


 let score1 = 100
 let score2 = 200
 let score3 = 400

 console.log(Array.of(score1, score2, score3))  // Returns a new array from a set of elements