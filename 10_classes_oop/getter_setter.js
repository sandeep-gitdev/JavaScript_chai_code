     class User {
        constructor(email, password) {
            this.email = email;
            this.password = password;
        }

       get email(){
            return this._email.toUpperCase()
       }

       set email(value){
           return this._email = value.toUpperCase();
       }

        get password(){
            // return this._password.toUpperCase();      // get the value of the key/property for this to alter the key name (ex:- _password) if we don use than race condition start b/w constructor and getter setter 
              return `${this._password}sandeep`
        }

        set password(value){
            // this._password = value.toUpperCase();                 // set the value of the key?property alter same name as the getter 
            this._password = value;
        }

     }


     const sandeep = new User("S@sandeep.com", "abc")
     console.log(sandeep.password);
     console.log(sandeep.email)