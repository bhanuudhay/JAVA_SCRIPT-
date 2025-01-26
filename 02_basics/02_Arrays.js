const marvel_heros = ["thor","spiderman","ironman"]
const dc_heros = ["superman", "flash","batman"]
// marvel_heros.push(dc_heros)

// console.log(marvel_heros) // array ke andar array aa aya

const new_hero = marvel_heros.concat(dc_heros)

const all_new_hero = [...marvel_heros , ...dc_heros] // spread operator
// console.log(all_new_hero)
// console.log(new_hero)

const another_array = [1,2,3 ,[23,4,5,] ,5,6,7,[3,45,[5,7,67],5],5]
const real_another_array = another_array.flat(Infinity)

console.log(real_another_array)

console.log(Array.isArray("Bhanu"))
console.log(Array.from("Bhanu"))

console.log(Array.from({name:"Bhanu"})) // interesing case kisko main array bnau key or pair 

let score1 =100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)) // convert them into array  agar alag alag variable ho 