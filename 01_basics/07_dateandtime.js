let mydate = new Date()
console.log(typeof mydate)
console.log(mydate.toString())
console.log(mydate.toDateString()) // sirf date and day  deta hai
console.log(mydate.toISOString()) // 
console.log(mydate.toJSON())
console.log(mydate.toLocaleDateString()) // onyl give date in m/d/y format
console.log(mydate.toLocaleString())  // give date and time

// yeh yadd rakhna main toString toDateString toLocalString toLocalDateString

console.log(typeof mydate) // object 

// let myCreatedDate = new Date(2025,0,1) // month jo hai zero se start hota hai js meh
// let myCreatedDate = new Date(2025,0,1,5,6)
let myCreatedDate = new Date("2025-01-23") // jab ap dd/mm/yy krta hai toh 01 se start hota hai month
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now() // 1 jan 1970 se abhi tak ka miliseconds mil jaya ga 

console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
//to get value in seconds

console.log(Math.floor(Date.now() /1000))

let newDate = new Date()
console.log(newDate.getMonth()+1) // month jo hai zero se start hota hai
console.log(newDate.getDay())
console.log(newDate.getDate())


console.log(newDate.toLocaleString('default',{
    weekday:"long",
    day:"numeric",
    year:"numeric" // pura year aaya ga 
}))
