//Immediately Invoked Function Expression (IIFE)
/*
Use cases
Global Scope ke pollution se problem hoti hai many times so from avoiding that we use this 
Aur function instantly execute ho jaya
*/


// iife kaisa likhta hai 
// ()() //pehla wala  meh function likhta hai aur dusra wala execute ke liya

(function greet()
    // named iife
{
    console.log("hello")
})();
( (name) => {
    // simple iife             /// jisme ham arrow function ka use krta hai 
    console.log(`bye  ${name}`)
})("bhanu")