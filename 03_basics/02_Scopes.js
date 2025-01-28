// let a  = 20
// const b = 30
//  var c = 900  // ambiguity is there 
//  let a  =200
// if(true)
// {
//     let a  = 20
//     const b = 30
//     var c = 90 
//     console.log("innner " , a)
// } // curly braces ko scope kehta hai     {} ke bahr jo likhta hai woh global scope hota hai aur under wala block scope 

// // console.log(a)
// // console.log(b)
// // console.log(c)   // it get printed this is a big problem
// console.log(a)

function one()
{
    const username  = "bhanu"
    function two()
    {
        const name = "udhay"
        console.log(username) // child function woh parent ke data ko access kr pata hai
    }
    // console.log(name)
    two()
}

one()

if(true)
{
    const username = "bhanu"
    if(username === "bhanu")
    {
        const movie = "hell"
        console.log(username + movie)
    }
    // console.log(movie)
}
// console.log(movie)

///////////////////////////////////////interesting//////////////////////////////////////////////////////
console.log(addone(4))

function addone(num)
{
    return num+1
}

addtwo(6)  //  now thros error because dur to the concept of hoisting 
const addtwo = function(num)
{
    return num+2;
}

