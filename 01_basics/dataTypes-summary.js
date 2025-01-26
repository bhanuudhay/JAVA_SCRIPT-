//kis basis pe data ko memory meh rakha gaya hai us basis pe data ko categorized kiya gya hai 

// primitive 

// 7 types : String : Number : Boolean : null : undefined : Symbol : BigInt

// non primitive (reference)

// Arrays(typeof kiya toh object aaaya ) , Objects , Functions  // sabka data type  object hi  aata hai

// JavaScript is dynamically typed language 

const score =100;
const  scoreVal = 100.3
const isLogged = true
const outSide = null
let username

let id  = Symbol('13')

let anotherid =  Symbol('13')

console.log(id == anotherid);

const bigNum  = 353436546978n //bigint ban gya 


const ids   = ["bhanu" , "udhay" , "singh"]   // arrays

let mobj = { 
    name: "hitesh" , id: 4    // object jo bhi is bracket ke under hai
}


const myFunc = function(){
    console.log("hello world");
    
} // function


console.log(typeof  score)
console.log(typeof  scoreVal)
console.log(typeof  isLogged)
console.log(typeof  outSide)
console.log(typeof  id)
console.log(typeof  bigNUm)
console.log(typeof  ids)
console.log(typeof  mobj)
console.log(typeof  myFunc)