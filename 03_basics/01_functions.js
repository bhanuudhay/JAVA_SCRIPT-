// function ka matlab hai jo bhi apna code likha hai usko ek package ke andar band kr diya hai 

function sayMyName()
{
    console.log("hi")
    console.log("hi")
    console.log("hi")
    console.log("hi")
    console.log("hi")
    console.log("hi")
    console.log("hi")
}
//sayMyName // yeh ho gya referene (woh function waha rehta hai )
// () // yeh hota hai execute krwana ke liya 

// sayMyName()

// function addtwonum(number1 ,number2) //  function ko define krta hai  aur jo bhi input lee hai usse parameter bolta hai
// {
//     console.log(number1+number2)
// }

function addtwonum(number1 ,number2) //  function ko define krta hai  aur jo bhi input lee hai usse parameter bolta hai
{
    // let result = number1+number2
    // return result   // return ke badh kuch bhi daldo woh execute nhi hota 
    return number1+number2
}
//const result = addtwonum(3,5) // function ko jab call krwata hain toh usko argument bolta hai

// console.log("result  : ",result)

function loginUser(username = "sam")     //uski min se min value sam hogi undefined hogi nhi
{
    if(username === undefined)
    {
        console.log("please enter username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUser())  // agar koi value hi pass nhi kar rha toh undefined aata hai


function addcartitems(val1,val2 ,...num1)  // rest operator 
{
    return num1;
}
console.log(addcartitems(200,233,400,300))  // 200 toh chala gya val1 meh and 233 val2 meh and rest aayaga num1 

const user = {
    username : "bhanu",
    price: 199
}

function handleObj(anyobj)
{
    console.log(`username is ${anyobj.username} and price is ${anyobj.price}`)
}

handleObj(user)

const mynewArray = [1,2,4,3]

function returnsecondvalue(getarray)
{
    return getarray[1]
}

console.log(returnsecondvalue(mynewArray))