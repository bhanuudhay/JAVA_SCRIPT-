const coding  =  ["react" , "js"  , "ruby" , "java" , "cpp"]

// coding.forEach( function (item) {
//     console.log(item)
// } )

// coding.forEach((k)=> console.log(k))

// function printMe(item)
// {
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach( (item , index , arr) => {
    console.log(item , index , arr)
})

const mycoding = [
    {
        languageName : "java script",
        filename : "js"
    }
    ,
    {
        languageName : "c++",
        filename : "cpp"
    }
    ,
    {
        languageName : "python",
        filename : "py"
    }
    ,
    {
        languageName : "java",
        filename : "java"
    }
]
mycoding.forEach( (item) =>
{
    console.log(item.filename)
})