class User{
    constructor(username , email , pass)
        {
            this.username = username
            this.email = email
            this.pass = pass
        }
    encryptPass (){
        return `${this.pass}abc`
    }
    changeUserName()
    {
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("bhanu" , "abc@gmail.com" , "123")
console.log(chai.encryptPass())
console.log(chai.changeUserName())

// behind the scene 

function createUser(username , email , pass)
{
    this.username = username;
    this.email = email;
    this.pass = pass;
}
createUser.prototype.changeUserNamee = function()
{
    return `${this.username.toUpperCase()}`
}

const tea = new User("happy" , "abc@gmail.com" , "123")
console.log(tea.changeUserName())