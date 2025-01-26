let score = false

console.log(typeof score);

let valueInNumber  = Number(score)

console.log(typeof valueInNumber);

console.log(valueInNumber); // NaN not a number 

// "33" => 33
// "33dds" => NaN
// true => 1 || false => 0

let isLogged =1
let booleanisLogged = Boolean(isLogged)

console.log(booleanisLogged);

// "" => false ||  "sde" => true

let number = 22
let stringNum = String(number)

console.log(stringNum);
console.log(typeof stringNum);
 

//***********************************operations*********************************************/

let value = 9
let negval = -value

console.log(negval);
console.log(2**2); // power 

let str1  = "bhanu"
let str2  = "udhay"

let str3 = str1+str2

console.log(str3);
console.log("1" + 2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");


console.log((3+2)*3-2); // use brackets

console.log(+true); // 1

console.log(+""); // 0

let num1, num2 , num3

num1 = num2 = num3 = 3+3

let gameCounter  = 100
// gameCounter++ // 101
++gameCounter // 101
console.log(gameCounter);



