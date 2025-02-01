const user  =  {
    username : "bhanu",
    logincount : 8,
    signedIn : true ,

    getuserdetail : function(){
       // console.log("Got user detail ")
       // console.log(`Username : ${this.username}`)
       console.log(this)  /// current context 
    }
}

// new keyword is a constructor function

// console.log(user.username)
// console.log(user.getuserdetail())
// console.log(this) // global context meh {} value aayagi

function User(username, loginCount , isLoggedIn)
{
    this.username = username;
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
    this.greeting = ()=>{
        console.log(`WELCOME ${this.username}`)
    }
}

const user1 = new User("Bhanuudhay", 5 ,true)
const user2  = new  User("bhanuudhaysingh" , 6 , true) // new likhna se hama alag alag object milta hai
// console.log(user1.constructor)
console.log(user2)
console.log(user1)

// new keyword use krga toh ek empty object create hota hao jisko instance bolta hai  
//1 object created
// 2 constructor function
//3 this ke ander aad ho jaya ge
// return