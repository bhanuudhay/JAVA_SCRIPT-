// const coding  = ["js" ,"ruby" ,"java" , "python" , "cpp"]
// const values  = coding.forEach( (item) => 
// {
//     console.log(item)
//     return item
// } )

// console.log(values)

const myNums = [1,2,3,4,5,6,7,8,9]

//const newNum  = myNums.filter( (nums) => nums>4 )   // return the value

// const newNum  = myNums.filter( (nums) => 
// {
//     return nums>4   // return likhna pdta hai
// } )

const newarr=[]

// myNums.forEach( (nums) => 
// {
//     if(nums>4)
//     {
//         newarr.push(nums)
//     }
// })

// console.log(newarr)



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const mybooks = books.filter( (item) => {
    return item.genre === 'History' && item.publish > 2000
})

const nonficbooks =  books.filter( (item) => 
{
    return item.genre === 'Non-Fiction'
})
console.log(mybooks)
console.log(nonficbooks)

//////////////////////map////////////////////////////////

const newnums = [1,2,3,4,5,7,8,9,5]

const res = newnums.map( (num) => num+10)

console.log(res)


/// chaining matlan two three method app ek sath use kr skta hai 
// jab bhi chaining hoti hai uska result second meh pass ho jata hai

const newwnum = newnums.map( (item) => item*10)
                        .map( (item) => item+1)
                        .filter( (item) => item >=30)

console.log(newwnum)


//  reduce method 

const mynumms = [1,2,3,5,6,7]

const ress = mynumms.reduce ( function (acc ,curr)
{
    console.log(`accumulator : ${acc} and current ${curr}`)
    return acc+curr
},0)

//const ress= mynumms.reduce( (acc , curr) => acc+curr,0)

console.log(ress)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);