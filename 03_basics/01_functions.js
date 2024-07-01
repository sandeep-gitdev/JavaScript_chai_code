

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
   console.log(loginUserMessage());
