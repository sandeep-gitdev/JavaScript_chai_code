// Primitive datatype
         // they are call by values
// 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt


    const score = 100
    const scoreValue = 100.3

    const isLoggedIn = false
    const outsideTemp = null   // typeof is object
    let userEmail ;

    const id = Symbol('123')
    const anotherId = Symbol('123')

    // console.log(id === anotherId)

    const bigNumber = 2312343423423434553n //BigInt


// Reference (Non primitive)

// Array, Objects, Functions

  const heros = ["shaktiman", "naagraj"]; // Arrays

let myObj = {
       name: "sandeep",
       age: 26,
}

  const myFunction = function() {
       console.log("Hello World");
  }

  console.log(typeof outsideTemp);
   
