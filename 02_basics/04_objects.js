
 //const tinderUser = new Object();

   const tinderUser = {}

   tinderUser.id = "123abc";
   tinderUser.name = "sandy"
   tinderUser.isLoggedIn = false

 //console.log(tinderUser);

 const regularUser = {
      email: "some@gmail.com",
      fullname: {
        userfullname: {
                 firstname: "sandeep",
                 lastname: "dhanger"
        }
      }
 }

 // console.log(regularUser.fullname.userfullname);

 const obj1 = {1: "a", 2: "b"}
 const obj2 = {3: "a", 4: "b"}

 //const obj3 = { obj1, obj2}

 //  const obj3 = Object.assign(obj1, obj2,) //join object with using object.assign method

    const obj3 = {...obj1, ...obj2}  // join object with using spread method
  // console.log(obj3);


    const users = [
      {
        id: 1,
        email: "s@gmail.com"
      },
      {
        id: 1,
        email: "s@gmail.com"
      },
      {
        id: 1,
        email: "s@gmail.com"
      },
      {
        id: 1,
        email: "s@gmail.com"
      },
    ]

    users[1].email
    // console.log(tinderUser);

    // console.log(Object.keys(tinderUser));
    // console.log(Object.values(tinderUser));
    // console.log(Object.entries(tinderUser));

    // console.log(tinderUser.hasOwnProperty('isLoggedIn'));

    //  ******************  Destructuring in Objects ***************

    const course = {
       coursename: "js in hind",
       price: "999",
       courseInstructor: "sandeep"
    }

    // course.courseInstructor

    const {courseInstructor: instructor} = course // destructure the name 
   
    // console.log(courseInsttructor);
    console.log(instructor);

        // JSON api snytax

        // {
        //   "name": "sandeep",
        //   "coursename": "js in hinid",
        //   "price": "free"
        // }

        [
          {},
          {},
        ]

