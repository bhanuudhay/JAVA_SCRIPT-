const num = 100
const newNum = new Number(1001)
//console.log(newNum)

console.log(typeof num)
//console.log(newNum.toString().length) //convert to string
//console.log(newNum.toFixed(2)) //1001.00 where you want precision when in an ecommerce application

const numm = 13.57
//console.log(numm.toPrecision(2))  // values ko round off kar deta hai 

const hundreds = 10000000
//console.log(hundreds.toLocaleString('en-In')) // convert to indian type 1,00,00,000 using en-In

//////////////////////////////////Maths/////////////////////////////////////

// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.3))
// console.log(Math.ceil(4.2))  // badi value hi lega chah ha kuch bhi likh do 
// console.log(Math.floor(4.6)) // will always take small value chaha kuch bhi likh do 
// console.log(Math.min(6,3,8,0,8,3))
// console.log(Math.min(6,3,8,0,8,3))

console.log(Math.random()) // value always lie between 0 - 1
console.log((Math.random()*10)+1) // if we want our specific range like 1-1
const min = 4
const max = 9

console.log(Math.floor(Math.random() *(max-min+1)) + min)