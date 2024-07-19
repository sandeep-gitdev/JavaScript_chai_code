  

  class User {
    constructor(username){
       this.username = username;
    }

    logMe(){
       console.log(`Username: ${this.username}`);
    }

      static createdId(){
       return `123`
      }

 }

   const sandeep = new User("sandeep")
  // console.log(sandeep.createId())

    class Teacher extends User {
       constructor(username, email){
           super(username)
           this.email = email
       }
    }

     const iphone = new Teacher("iphone", "i@phone.com")
        //   iphone.logMe()

      console.log(iphone.createdId())

