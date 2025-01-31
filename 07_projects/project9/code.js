const form  = document.querySelector('form')
 const xhr = new XMLHttpRequest()

form.addEventListener('submit' , function(e){
    e.preventDefault()
    const textInp = document.querySelector('.input').value
    const prefixx = "https://api.github.com/users/"
    const apiUrl = prefixx+textInp
    const name = document.querySelector('.name') 
    const followers = document.querySelector('.followers')
    const location = document.querySelector('.location')
    const image = document.querySelector('.image')
    const linkk = document.querySelector('.linkk')
    xhr.open('GET' , apiUrl)
     xhr.onreadystatechange = function(){
        //console.log(xhr.readyState)
        if(xhr.readyState == 4)
        {
            const data = JSON.parse(this.responseText)
            name.innerHTML = `${data.name}`;
            followers.innerHTML = `Followers  ${data.followers}`
            location.innerHTML = `Location ${data.location}`
            const imageUrl = data.avatar_url
            image.src = imageUrl
            const linkkk = data.html_url
            const li = linkk.innerHTML = linkkk
        }
    }
    xhr.send()
})