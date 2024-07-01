

function sayMyName() {
    console.log("s");
    console.log("a");
    console.log("n");
    console.log("d");
    console.log("y"); 
}

 // sayMyName()

//  function addTwoNumbers(num1, num2) {
//        console.log(num1 + num2);
//  }

  // addTwoNumbers(4, 6);
//   const result = addTwoNumbers(4, 6);
//   console.log("Result: ", result);


 function addTwoNumbers(num1, num2) {
    // let result = num1 + num2
    // return result
        // OR
     return num1 + num2
}

  const result = addTwoNumbers(4, 6);
 // console.log("Result: ", result);

 function loginUserMessage(username = "sandy") {
    if(username === undefined){                           // we can also use (!username) instead of ===
             console.log("please enter a username");
             return
    }
    return `${username} just logged in`
 }

 //console.log(loginUserMessage("sandeep"));    //to print retrun value or print it
 //  console.log(loginUserMessage());

   function calculateCartPrice(val1, val2, ...num1) {      // (... is rest opertor)  pass multipale value in functions
          return num1
   }

   //console.log(calculateCartPrice(200, 400, 100, 900));

   const user = {
        username: "sandeep",
        price: 199
   }
           // passing the object in function

     function handleObject(anyobject){
      //  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
     }

     //handleObject(user)

     handleObject({
        username: "sam",
        price: 499
     });

             // passing the Array in function

             const myNewArray = [200, 400, 700]

             function returnSecondValue(getArray) {
                return getArray[2]
             }

            // console.log(returnSecondValue(myNewArray));

            console.log(returnSecondValue([200,400, 800, 500]));