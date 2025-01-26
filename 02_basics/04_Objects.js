//const  tinderUser = new Object() // yeh ek singelton oject hai  
const  tinderUser1 = {} // yeh ek non singelton object hai
// rest dono ki output same aayagi
tinderUser1.name = "xyz"
tinderUser1.age =34;
tinderUser1.email = "xyz@gmail.com"

// 
const regularUser =
{
    email : "someone@gmail.com",
    fullname :
    {
        username :
        {
            firstname:"bhanu",
            lastname:"singh"
        }
    }
}
// object ke ander object
// console.log(regularUser.fullname.username.firstname)

//merge two objects

const obj1 = {1:"1" , 2:"2"}
const obj2 = {3:"3" , 4:"4"}
const obj4 = {4:"4" , 5:"5"}

//const obj3 = {obj1 , obj2}

// const obj3 = Object.assign( {} ,obj1,obj2,obj4)  // merge two {} isliye liya kyunki hmara pass aur bhi objects ho skta hai

const obj3 = {...obj1 , ...obj2 ,...obj4}   // spread operator
console.log(obj3)

console.log(Object.keys(tinderUser1))
console.log(Object.values(tinderUser1))

console.log(Object.entries(tinderUser1))  // object to array 

console.log(tinderUser1.hasOwnProperty('name')) // kya jeh present hai 