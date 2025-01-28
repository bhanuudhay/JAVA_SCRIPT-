// array specific loop 
// for of 
/*
[ "" , "" , ""]
[ {} , {} ,{} ]
*/
const arr =[1,2,3,4,5]
for (const el of arr) {
    //console.log(el)
}
const st = "bhanu udhay singh"

for (const el of st) {
    //console.log(el)
}

// Maps    // diff between map and object is that there is unique value in maps

const map =new Map
map.set('In' , "India")
map.set('En' , "England")
map.set('USA' , "United State Of America")
map.set('In' , "India")

//console.log(map)

for(const [key,value] of map)
{
    console.log(key , ":-" , value)
}

const myobj =
{
    'game1' : 'nfc',
    'game2' : 'wwe'
}

// for(const [key,value] of myobj)
// {
//     console.log(key , ":-" , value)
// }