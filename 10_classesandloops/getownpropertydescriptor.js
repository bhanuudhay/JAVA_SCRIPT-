//const descriptor = Object.getOwnPropertyDescriptor(Math , "PI") // object ke baare meh kuch hidden chije btati hai
//console.log(descriptor)
// console.log(Math.PI)
// const pii  = Math.pi

const chai = {
    name :"masala chai",
    price : 900,
    isAvailable : true,

    orderChai : function(){
        console.log("chai nhi bani")
    }
}

console.log(Object.getOwnPropertyDescriptor(chai ,  "name"))  // agar sirf chai likho ge toh error aayaga  kyunki chai toh ek object object hai 
// toh isliye second parameter dena padta hai 
Object.defineProperty(chai, 'name', { // kiski property set krni hai aur konsi krni hai  
   // writable: false,
    enumerable: true,
})

console.log(Object.getOwnPropertyDescriptor(chai ,  "name")) 

for(let [key,value] of Object.entries(chai))  // not iterable likh ke aayaga 
{
    if(typeof value !== 'function')
    console.log(`${key} : ${value}`)
}

// main point is file ka yeh hai ki ham kisi bhi object ki properties dekh skta hai jo bhi unko inbuild milti hai 
//  aaisa ham sirf isko browser peh dekh skta hai but node meh dekhna ke liya yeh use krna padta hai 

