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
