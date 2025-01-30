let mydate = new Date()
console.log(typeof mydate)
console.log(mydate.toString())
console.log(mydate.toDateString()) // sirf date and day  deta hai
console.log(mydate.toISOString()) // 
console.log(mydate.toJSON())
console.log(mydate.toLocaleDateString())
console.log(mydate.toLocaleString())

const tm1 = (mydate.getMonth())
const ty1 = (mydate.getFullYear())
const td1 = (mydate.getDate())

// const todaydate  = mydate.toLocaleDateString()// onyl give date in m/d/y format

const st = "2004-01-20"
const arr  = st.split('-')
const ye = Number(arr[0])
const mo = Number(arr[1]-1) // start from  0 month
const da = Number(arr[2])
console.log(ye)
console.log(mo)
console.log(da)

const y = ty1 - ye
const m = tm1 - mo
const d=  td1 - da

console.log(` your age is ${y} years - ${m} month -   ${d} days `)

const currDate = new Date();
    const curryear = currDate.getFullYear()
    console.log(curryear)
    const currmonth = currDate.getMonth()
    console.log(currDate)
// console.log(mydob.toLocaleDateString())
// console.log(todaydate)

// const myage  = todaydate - mydob;
// console.log(myage)
//console.log(mydate.toLocaleString())  // give date and time

// yeh yadd rakhna main toString toDateString toLocalString toLocalDateString

// console.log(typeof mydate) // object 

// let myCreatedDate = new Date(2025,0,1) // month jo hai zero se start hota hai js meh
// let myCreatedDate = new Date(2025,0,1,5,6)
// let myCreatedDate = new Date("2025-01-23") // jab ap dd/mm/yy krta hai toh 01 se start hota hai month
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now() // 1 jan 1970 se abhi tak ka miliseconds mil jaya ga 

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// //to get value in seconds

// console.log(Math.floor(Date.now() /1000))

// let newDate = new Date()
// console.log(newDate.getMonth()+1) // month jo hai zero se start hota hai
// console.log(newDate.getDay())
// console.log(newDate.getDate())


// console.log(newDate.toLocaleString('default',{
//     weekday:"long",
//     day:"numeric",
//     year:"numeric" // pura year aaya ga 
// }))
