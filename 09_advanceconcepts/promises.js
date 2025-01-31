// promises - pending , fullfilled , rejected 
//functionn(resolve , reject )
// then catch finally
// asyns - yeh ek function hota hai 
// await try{} catch{}
const promiseOne = new Promise(function(resolve , reject)
{
    // Do an  async call
    // DB call ,crtpyography , network
    setTimeout(function(){
        console.log("Async task is completed")
        resolve() // directly connect with .then function
    } , 1000)
})
promiseOne.then(function(){
    console.log("Promise consumed")
})
//then ka sidha relation resolve se hai

new Promise(function(resolve , rejected){
    setTimeout(function(){
        console.log("Async 2 created")
        resolve()
    } , 1000)
}).then(function(){
    console.log("Async 2 consumed")
})

const promiseThree = new Promise(function(resolve , rejected)
{
    setTimeout(function(){
        resolve({ username : "bhanu" , email: "user@example.com"})
    },1000)
})

promiseThree.then(function(user){
console.log(user)
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
    let error = false;
    if(!error)
    {
        resolve({username : "bhanu" , password : "123"})
    }
    else{
        reject("Error : Something went wrong ")
    }
    },1000)
})

promiseFour.then( (user) =>
{
    console.log(user)
    return user.username
}).then( (username)=> {
    console.log(username)
}).catch( function(error)
{
    console.log(error)
}).finally(() => console.log("Finally"))

const promiseFive = new Promise( function(resolve,reject) {
     setTimeout(function(){
    let error = true;
    if(!error)
    {
        resolve({username : "javascript" , password : "123"})
    }
    else{
        reject("Error : js went wrong ")
    }
})
},1000 ) 

async function consumePromiseFive(){
   try{
    const response  =  await promiseFive
    console.log(response)
   } 
   catch{
    console.log("error occured")
   }
}

consumePromiseFive()
// thoda der wait krta hai kaam ke complete hona ka aur phir message deta hai
async function getuserdata()
{
   try{ const res =  await fetch("https://api.github.com/users/bhanuudhay")
    const data = await res.json()
    console.log(data) 
    }
    catch{
        console.log("Error occured")
    }
}
getuserdata()

fetch("https://api.github.com/users/bhanuudhay")
.then( (response) =>
{
    return response.json()
})
.catch(function (error) 
{
    console.log("error")
})