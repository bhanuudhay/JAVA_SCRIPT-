const myobj = 
{
    js :"javaScript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myobj) {
    console.log(`${key} is having value ${myobj[key]}`)
}

// checking if its working on array also 

const arr = ["ruby","java","c++"]
for(const key in arr)
{
    console.log(arr[key])     ///  return the index only 
}

// for in not work on map beacuse map is not iteratable 