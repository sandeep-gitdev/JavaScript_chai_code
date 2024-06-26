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

//   console.log(typeof outsideTemp);
   


  // ******************************************


  // Memorys
  // Stack (Primitive) (we get copy in stack), Heap (Non primitive) (we get reference in heap)

  let myYoutubename = "sandeepdhanger"

  let anothername = myYoutubename
  anothername = "chaiaurcode"

  console.log(myYoutubename);
  console.log(anothername);

  let userOne = {
     email : "user@google.com",
     upi: "user@ybl",
  }

  let userTwo = userOne 

  userTwo.email = "sandeep@google.com"

  console.log(userOne.email);
  console.log(userTwo.email);

  
