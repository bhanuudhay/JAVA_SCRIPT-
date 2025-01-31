let id;

const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const body = document.querySelector('body')

const changecolor = function()
{
const colors = ['Aqua','Black','Blue','Fuchsia','Gray','Green','Lime','Maroon','Navy','Olive','Purple','Red','Silver','Teal','White','Yellow','Coral','DodgerBlue','Gold','HotPink','LightCoral','MediumSeaGreen','SlateBlue','Tomato','Turquoise','Violet','Indigo','Crimson','DarkOrange','MediumPurple','SkyBlue'];
    const randomIndex = Math.floor(Math.random() * colors.length)
    const randomColor =colors[randomIndex]
    console.log(randomColor)
    body.style.backgroundColor = randomColor
}
changecolor()
start.addEventListener('click' , function(){
    id = setInterval(changecolor , 1000)
})

stop.addEventListener('click' , function(){
    clearInterval(id)
})