const name  = "hello"
const repoCount = 19

console.log(typeof name)
//console.log(name+repoCount+"Value");

console.log(`hello my name is ${name} and my repoCount is ${repoCount}`);  // string interpolation // modern syntax

const gameName = new String("bhanu_udhay")

console.log(gameName[0])

console.log(gameName.__proto__)

console.log(gameName.length)

console.log(gameName.toUpperCase())

console.log(gameName.charAt(6))

console.log(gameName.indexOf('u'))

const newString  = gameName.substr(0,4)  // 4-1 tak hi jata hai yaad rakhna

console.log(newString)

const anotherString  = gameName.slice(-11,6)

console.log(anotherString)

const newStringOne = "    bhanu    "

console.log(newStringOne);
console.log(newStringOne.trim())   // remove all spaces

const url ="https://bhanu.com/bhanu%20udhay"

console.log(url.replace('%20' , '-'))

console.log(url.includes('bhanu'))

const namee = "bhanu-udhay-singh"

console.log(namee.split('-'))

console.log(namee.repeat(2))  // bhanu-udhay-singhbhanu-udhay-singh

let str = '5'

console.log(str.padStart(3,"0"))
console.log(str.padEnd(3,"0"))

console.log(namee.startsWith('bhanu')) // true
console.log(namee.startsWith('b')) //true
console.log(namee.startsWith(('u'))) //false
console.log(namee.endsWith('h')) //true
console.log(namee.endsWith("singh")) //true