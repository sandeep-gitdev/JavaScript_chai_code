//  let myName = "sandeep      "

//  console.log(myName.truelength);

  
let myHero = ["thor", "spiderman"]


let heroPower = {
     thor: "hammer",
     spiderman: "sling",

     getSpiderPower: function() {
        console.log(`Spidy power is $(this.spiderman)`)
     }
}

 Object.prototype.sandeep = function() {                   // create own method which is accessably to all (function, object, array) 
    console.log(`sandeep is present in all objects`)
 }

  Array.prototype.heySandeep = function() {        // create own method which is accesably only for array
         console.log(`sandeep say hello`)
  }

 //heroPower.sandeep()
//  myHero.sandeep()
//  myHero.heySandeep()
//  heroPower.heySandeep()


          // inheritance

    const user = {
        name: "chai",
        email: "chai@gaooogle.com"
    }

    const teacher = {
         makeVideo: true,

    }

     const teachingSupport = {
        isAbailable: false,
     }

     const TASupport = {
          makeAssignment: 'Js assignment',
          fullTime: true,
          __proto__: teachingSupport
     }

     teacher.__proto__ = user;

        // modern syntax 

         Object.setPrototypeOf(teachingSupport, teacher)
        // console.log(teachingSupport.makeVideo)

        let anotherUsername = "chaiaurcode    "

        String.prototype.trueLength = function() {    //  creating own method which trim the space and show only true lenth of the string
          //  console.log(`${this}`)
            
            console.log(`True length is: ${this.trim().length}`);    // jis ne call kiya wahi this h
        }

        anotherUsername.trueLength()
        "sandeep   ".trueLength()
        "india ".trueLength()
