// let myName  = "bhanu      "
// // console.log(myName.length)
// console.log(myName.truelength)



let heros = [ "spiderman" , 'shaktiman']

let heropower = {
    spiderman : "sling",
    shaktiman : "fly",

    getspiderpower : function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

//specifically har ek meh power insert krnaki jagah sidh object meh hi  insert kar din jayatoh mja hi aa jaya
Object.prototype.bhanu = function(){
    console.log("bhanu is present in all object")
}

// heropower.bhanu() 

Array.prototype.heybhanu = function()
{
    console.log("bhanu says hello")
}
heros.bhanu()
heros.heybhanu()
// heropower.heybhanu() iska pass power nhi aaya go kyunki  hama power sirf array ko di hai not object ko nhi

// inheritance
const user = {
    name :"chai",
    emal : "guru@gmail.com"

}
const Teacher = {
    makeVideo : true
}
const TeachingAssistance = 
{
    isAvailable : true
}
const TAsupport = {
    makeAssignment : "js assignment",
    fulltime :true,
    __proto__: TeachingAssistance
}
// upar wala 3 ki alag alag properties hai 
Teacher.__proto__ = user
// this above is old approach 
 

// this is the modern syntax
Object.setPrototypeOf(TeachingAssistance , Teacher)

let anotherUsername = "ChaiaurCode      "

String.prototype.truelength = function(){
    console.log(`${this}`)
    console.log(`true lenght is ${this.trim().length}`)
}

anotherUsername.truelength()