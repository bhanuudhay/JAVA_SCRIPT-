// agar form aata hai toh submit wala event hai 
const form = document.querySelector('form')
// jab bhi form submit hota hai toh url ke pass chali jatio hai 
// by put or post action

// this usecase will give you empty value
//  const weight = parseInt(document.querySelector('#weight').value)
form.addEventListener('submit' , function(e){
    e.preventDefault()
    const height =parseInt(document.querySelector('#height').value)
    console.log(height)
    // .value se usse value mil jati hai
    const weight = parseInt(document.querySelector('#weight').value)
    console.log(weight)
    const result = document.querySelector('#result')

    if(height === '' || height <0 || isNaN(height))
    {
        result.innerHTML = `please enter a valid height ${height}`
    }
    else if(weight === '' || weight <0 || isNaN(weight))
    {
        result.innerHTML = `please enter a valid weight ${weight}`
    }
    else
    {
       const bmi =   (weight / ((height*height)/1000)).toFixed(2)
       result.innerHTML = `<span> ${bmi} </span>`
    }
    

})