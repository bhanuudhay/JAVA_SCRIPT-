const userEmail =  "bhanu@hi.com"  // agar " " hota toh else statement execute hoti
if(userEmail)
{
    console.log("Got user Email")
}
else 
{
    console.log("Don't have user email")
}

// falsy value  false , 0 , -0 , BigInt 0n, "", null , undefined ,Nan

const emptyObj  = {}
if(Object.keys(emptyObj).length === 0 )
{   
    console.log("Empty object")
}


// ## IMP FOR INTERVIEW 
console.log(false == 0)
console.log(false == '')
console.log(0 == '')

/// NUllish coalescing Operator (??) :: null , undefined  // only about these twos 

let val1
//val1  = 5 ?? 10
// val1  = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 30 ?? 20  //  is case meh jo bhi first value hogi woh assign kar dega 

console.log(val1) // 5

// # basically for safety 
//  kya faida hua agar 1st value hi jani hai ?
// ans  : jab app database or firebase se call kroga you dont get res directly apko 2 value milti hai 
// kya pata apka pass null or undefined in that case full code structure parashan ho jaya 


// terniary operator 

// condition ? true : false

const iceTeaPrice =40
iceTeaPrice <=40 ? console.log("Affordable") :console.log("Mai nhi lega re")