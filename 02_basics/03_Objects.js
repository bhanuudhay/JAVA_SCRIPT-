//singleton agar ap kisi constructor sse object bnata ho toh jeh apni tarah ka sirf ek hi object hai
// jab bhi ap literal declare krta hai toh singelton nhi bnta

//object literals

// Object.create yeh hota hai constructor 

const key1 = Symbol("rttre")   // #imp how to declare symbol in object
const Jsuser = {
    name: "Bhanu",
    age : 18,
    [key1]:"jgtkbf",
    "Full name" : "Bhanu Udhay Singh",
    location :"jaipur",
    email : "bhanu@gmail.com",
    isLoggedIn : true,
    lastLoginDays : ["Monday" , "Wednesday" , "Friday"]    // IMP jeh jo key hai woh string ki tarah store hoti hai 
}

console.log(Jsuser.email);
console.log(Jsuser["email"])
console.log(Jsuser["Full name"]) // . wala tarike se access nhi ho pati
console.log(Jsuser[key1])

// change krni ho value

Jsuser.isLoggedIn = false;


//Object.freeze(Jsuser); // agar ap chahta ho koi apka object ko change na kar apaya toh ap use freeze kr skta ho

Jsuser.isLoggedIn = false;

console.log(Jsuser["isLoggedIn"])

console.log(Jsuser)

//ham function bhi declare kar skta hai object meh

Jsuser.greeting = function()
{
    console.log("hello kaisa ho");
}

Jsuser.greeting2 = function()
{
    console.log(`hello js user , ${this["Full name"]}`);   // agar hame same object ko refer krna hai toh ham this lgata hai
}

console.log(Jsuser.greeting())
console.log(Jsuser.greeting2())