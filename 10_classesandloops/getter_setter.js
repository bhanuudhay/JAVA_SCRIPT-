// Object.create( kis object ke basis pe obj create kru) // factory function
// memory meh values kpo override krna ke liya getter aur setter ko diya  jata hai
class User{
    constructor(email , password)
    {
        this.email = email
        this.password = password
    }
    get email()
    {
        return this._email.split('@')
    }
    set email(valuee)
    {
        this._email = valuee;
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value)
    {
        this._password = value;
    }
} 

// main problem

/**
  constructor bhi value ko set kr rha hai 
  aur setter bhi value ko set kr rha hai 
  toh dono ke beech meh race hoti hai 
  (main set krunga , main set krunga )
  // max call stack size exceeded
    is problem ko solve krna ke liya naya hi variable le liya 
 */

// getter define kar rha ho toh setter bi define krna hi hoga 
// class ke bahar se koi value get krna chahta ho isliye getter hota hai 
// class ke under koi bhi value set krna chahta ho toh toh setter 
const bhanu = new User("bhanuudhay@gmail.com" , "abcd")
console.log(bhanu.password)
console.log(bhanu.email)

// basically hmara mrji rehti hai kaisa value get aur set kra

 // old function method to get and set 

 function Userr(email , pass)
 {
    this._email = email
    this._pass = pass
    Object.defineProperties(this , 'email' , {
        get: function()
        {
            return this._email.toUpperCase()
        },
        set :function(value){
            this._email = value
        }
    })
 }

 // third 

const userrr = 
{
    _emaill : "bhanu@gmail.com",
    password : "abcde",

    get email()
    {
        return this._emaill.toUpperCase
    },
    set email(value)
    {
        this._emaill = value
    }
}