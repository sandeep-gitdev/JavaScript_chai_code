// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


//let myCreateDate = new Date(2023, 3, 21);
//let myCreateDate = new Date(2023, 3, 21, 4, 2);
//let myCreateDate = new Date("2023-03-21");
    let myCreateDate = new Date("01-14-2023");
 //console.log(myCreateDate.toLocaleString());

   let myTimeStamp = Date.now()

//    console.log(myTimeStamp);
//    console.log(myCreateDate.getTime());
//    console.log(Math.round(Date.now()/1000));
   
let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());

newDate.toLocaleString('locales',{
    weekday: "long",
    timeZone: 'en-IN',
})



