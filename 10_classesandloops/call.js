function setUsername(username)
{
    this.username = username;
}
function createUser(username , email ,passsword)
{
    setUsername.call(this , username) // muja sirf uska reference hold krka rakhna hai isliya call use kar rha hu
    this.email = email;
    this.passsword = passsword
}

const chai =  new createUser("bhanu" , "abc@gmail.com" , 123);
console.log(chai)