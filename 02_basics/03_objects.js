// singleton

// object literals
   // Object.create

    const mySym = Symbol("key1"); //symbol

  const jsUser = {
    name: "sandeep",
    "full name": "sandeep dhanger",
    [mySym]: "mykey1",
    age: 20,
    location: "Indore",
    email: "sandeep@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
  }

  //  console.log(jsUser.email);
  //  console.log(jsUser["email"]);
  //  console.log(jsUser["full name"]);
  //  console.log(jsUser[mySym]); // to excess the symbol value by using this snytax

   jsUser.email = "sandeep@yahoo.com";  // change the object key
   // Object.freeze(jsUser);              //  after freeze the object no changes propogate
    jsUser.email = "sandeep@facbook.com"
    //console.log(jsUser);

    jsUser.greeting = function() {
      console.log("Hello js user");
    }

     console.log(jsUser.greeting());

     jsUser.greetingTwo = function() {
      console.log(`Hello js user, ${this.name}`);
    }

     console.log(jsUser.greetingTwo());


