const promisesOne = new Promise( function(resolve, reject) {
    //Do an async task
        // DB calls, crpytography, network
        setTimeout(function() {
            console.log('Async task is compelete');
        }, 1000)
});

promisesOne.then(function(){
    console.log("promise consume");
})

new Promise(function(resolve, reject) {
    setTimeout(function(){
      //  console.log("Async task 2")
        resolve()
    }, 1000)

  }).then(function(){
    //console.log('promise consume 2')
  })

//   const promiseThree = new Promise(function(resolve, reject){
//             setTimeout(function(){
//               resolve({username: "chai", email: "sandeeplearning111@gmail.com"})
//             }, 1000)
//   })
  
//      promiseThree.then(function(user){
//             console.log(user);
//      })



    //  const promiseFour = new Promise(function(resolve,reject) {
    //     setTimeout(function(){
    //         let error = true;
    //         if (!error){
    //             resolve({username: 'sandeep', password: "23"})
    //         }  else {
    //             reject('Error: something went wrong')
    //         }
    //     },1000)
    //  })

    //    promiseFour
    //    .then((user) => {
    //            console.log(user);
    //            return user.username;
    //         }).then((username) => {
    //             console.log(username)
    //         }).catch(function(error){
    //             console.log(error)
    //         }).finally(() => console.log("The promise is either the resolve or rejectes") )

     
     
     
    // const promiseFive = new Promise(function(resolve,reject){
    //     setTimeout(function(){
    //         let error = true;
    //         if (!error){
    //             resolve({username: 'javascript', password: "123"})
    //         }  else {
    //             reject('Error: JS went wrong')
    //         }
    //     },1000)
    //   })      
    
        //    async function consumePromiseFive(){
        //         // const response = await promiseFive
        //         // console.log(response);

        //       try {
        //         const response = await promiseFive
        //          console.log(response);
                
        //       } catch (error) {
        //           console.log(error);
        //       }
        //    }

        //    consumePromiseFive()


     
        
    // async function getAllUsers(){
    //       try {
    //           const response = await fetch('https://jsonplaceholder.typicode.com/users')
      
    //           const data = await response.json()
    //           console.log(data);
    //       } catch (error) {
    //           console.log("E: ", error);
    //       }
    //   }
      
    //   getAllUsers()

    fetch('https://api.github.com/users/sandeep-gitdev')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))