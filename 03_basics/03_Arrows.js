// current context ke liya this keyword use krta hai 
const user  =
{
    username : "bhanu",
    price:900,
    welcomeMessage :function()
    {
        console.log(`${ this.keyword}  , welcome to our website `)
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
console.log(this)

//jb bhi browser ke andar engine kam kiya jata hai toh global object  window hoti hai

// function chai()
// {
//     console.log(this)
// }

// chai()

// const chaii = function ()
// {
//     let username= "bhanu"
//     console.log(this.username)  /// jahan pe undefined aaya ga this keyword sirf object ke ander kaam aata hai 
// }


const chaii = () =>
{
    let username= "bhanu"
    console.log(this)
}
chaii()
///////////////////////////////////////////////////////////////////////////////////////////


//one methid to declare

// const addTwo  = (num1 , num2) => {
//     return num1+num2
// }
// console.log(addTwo(3,4)) // curly braces ke under wrap kiya toh keyword likhna pdaga 

//another methid

const addTwo = (num1,num2) => (num1+num2)  // jahan return likhna ki jarurat nhi hai

const show = () => ({username:"bhanu"})
console.log(addTwo(2,3))
console.log(show())