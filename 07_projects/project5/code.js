const clock =  document.getElementById('clock')

setInterval(function(){
    const timee = new Date();
    clock.innerHTML = timee.toLocaleTimeString();
},1000)