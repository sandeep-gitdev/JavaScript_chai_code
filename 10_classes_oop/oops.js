const user = {
    username: "sandeep",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user datails from database")
       // console.log(this.username)
       console.log(this)
    }
}

console.log(user.username)
// console.log(user.getUserDetails());
//console.log(this)



function User(username, loginCount, isLoggedIn) {
        this.username = username;
        this.loginCount = loginCount;
        this.isLoggedIn = isLoggedIn;

        this.greeting = function(){
            console.log(`Welcome ${this.username}`)
        }

       // return this;
}

const userOne = new User("sandeep", 4, true)
const userTwo = new User("chaiaurcode", 8, false)
console.log(userOne.constructor);
//console.log(userTwo);



// 1. when new key word used an a empty object created which we called instance
// 2. construction function called becouse of new key word it pack all the arguments in it
// 3. this key are injected
// 4. executed
