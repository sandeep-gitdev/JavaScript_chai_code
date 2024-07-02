// Immediately Invoked Function Expressions (IIFE)
        // To immediately execute the function and to prevent from global scope pollution

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`)
}) ();                           // TO stop iife we need to use ; at the end

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ('sandeep')

