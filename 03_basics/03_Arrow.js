const user = {
    username: "sandeep",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)  // this is used for applying current context 
         console.log(this);
    }
  
} 


// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let username = "sandeep"
//     console.log(this.username);
// }

// chai()


//    const chai = function chai(){
//         let username = "sandeep"
//         console.log(this.username);
//      }

// const chai = () => {
//     let username = "sandeep"
//     console.log(this);
//  }

//   chai();

     // Basic arrow function

//   const addTwo = (num1, num2) => {        // if you wrap in curlbreckets than you need to use return keyword
//       return num1 + num2
//   }

     // Implicit return arrow function

 // const addTwo = (num1, num2) => num1 + num2

 // const addTwo = (num1, num2) => ( num1 + num2 )

  const addTwo = (num1, num2) => ({username: "sandeep"})
   
     console.log(addTwo(3,4));

