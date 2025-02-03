class User{
    constructor(username)
    {
        this.username = username
    }

    logMe()
    {
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User
{
    constructor(username , email , pass)
    {
        super(username)   // no need to use the call function directly using super keyword
        // super keyword refer kraga konsi class use kr rha tha 
        //sath meh main automatically this apna ap behind the scene le jayunga
        this.email= email
        this.pass = pass
    }

    addcourse()
    {
        console.log(`a new course was added ${this.username}`)
    }
}

const chai = new Teacher("chai" , "abc@gmail.com" , "123")
chai.addcourse()
chai.logMe()

const user1 = new User("bhanuudhay")

user1.logMe()

console.log(chai instanceof Teacher) // to check whether it is instance of Teacher or not 