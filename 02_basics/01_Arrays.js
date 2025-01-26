// arrays 
const arr = [1,2,3,4,5] // collection of element in one variable 
const myHero = ["spiderman", "batman","ironman"]
const myArr = new Array(1,2,3,4) // automatically brackets add kr dega 
console.log(typeof arr) // object
//shallow copies of an object share the same reference 
// deep copies donot share the same reference 

// Arrays methods

arr.push(6);
arr.push(7);
arr.pop() //jo bhi last value hogi array ke andar usko pop kar dega 
arr.unshift(8) // starting meh add kar dega
arr.shift() // starting value ko remove kar dega

const newArray = arr.join() // bind the value and converted them into the strings 

console.log(arr.includes(9))
console.log(arr.indexOf(9))
console.log(arr)
console.log(newArray)


//slice  , splice
// in case of splice ot manipulate the original array if we spilice from 0 to 3 index  then in original array only 3 - n element will be present in the array 


console.log("A" , arr)

const myn1 = arr.slice(0,3)

console.log(myn1)
console.log("B" , arr)

const myn2 = arr.splice(0,3)
console.log("C" , arr)
console.log(myn2);