class User{
    constructor(username)
    {
        this.username = username
    }

    logMe()
    {
        console.log(`Username : ${this.username}`)
    }

    static createId() // ham is method ka access has us object ko nhi dena chahta jo is class se extend hua hai 
    {
        return '123'
    }
}

const user1 = new User("bhanu")
console.log(user1.createId())