// java script kaisa work kar rhi hai 
// protoype is also behavior this alo gove us access to new keyword 

// javascript ka default behaviour prototype hai 
// prototye behaviour matlab har nhi manan hama aur kya mil skta hai

function mulby5(num)
{
    return num*5;
}
mulby5.power = 5;
console.log(mulby5(5))
console.log(mulby5.power)
console.log(mulby5.prototype)

// function jo hai woh object bhi hota hai aur function bhi hota hai  

function createUser(username, score)
{
    this.username = username;
    this.score = score
}
//kya ham function meh khud ke method bna skya ho anwser is yes 
// function under prototype access krka 

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`Your score is ${this.score}`)
}
 const chai = new createUser("bhanu" ,20)
 const chai2 = new  createUser("happy" , 565) // prototype meh properties inject toh krdi par usko bind bhi toh krna pdaga
 
 chai.printMe()

 // new keyword initiate creation of new object
 