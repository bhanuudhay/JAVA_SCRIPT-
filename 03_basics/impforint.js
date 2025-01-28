/*
JavaScript Execution Context  //jo bhi file bnai hai usko javascript run kaisi krigi 

// it runs it in two face

1st>Global Execution Context ko  this  meh rakh diya jata hai

browser ke under this ki value ki window aati hai 

java script is single threaded
2nd> Functional Execution Context 
3rd> Exal Executon context // when go futher in mangose 

js runs in two phase 

1) memory creation phase   /// sirf memory allocate hoti hai 
2) execution phase


code explaination 

let val1= 30
let val2 =30
function addtwo(val1 ,val2)
{
    let total = val1+val2
    return total
}
let result = addtwo(val1,val2)
let result2 = addtwo(2,3 )


1 =>sabsa pehla aata hai global execution jitna bhi bada code ho sabsa pehla global execution aata hai

aur yeh global ececution jpo hai this ko allocate kiya jata hai

2=> Memory creation phase 
val1 = undefined 
val2 = undefined 
addnum = defintion
result1 = undefined
result2 = undefined  

3=> execution phase

val1 = 10
val2 = 5
addnum = je apna lia ek alag se execution context bnata hai   : jitna bhi function execute hota hai utna bar hi --
---#ek new ececution context create hota hai aur iska under variable ke alag se pura enviroment bnaya jata hai aur ek --
-- execution thread bnaya jata hai jis se apka sara kam hai woh execute ho jaya 
-- aur function ke liya seprate new execution context bna hai toh --
-- memory creation phase aur execution phase create hoga --
-- memory creeation phase  val1 = undefined val2 = undefined total = undefined 
-- execution context num1 =10 num2 = 5 total = 15
-- JO jeh total value hai uska global execution context meh return kr diya jata hai
-------Most important : after doing all these it get DELETED also -------

then it goes to line no 29 and then result = 15
after it goes to line no 30 and again it create new execution context and val1 =undefined , val2 = undefined , result = undefined
and then val1 =10 , val2 = 2 ,  result = 12 and return it to global execution context and return it to line no 30
result1 = undefined
result2 = undefined  

new thing also there  CALL STACK 
like there is three function 1 2 3 
            |      |
            |      |
            |   3  |   first it will remove 
            |   2  |   sec0nd this will remove 
            |___1__|   and lastly this 
            pehla 1 aaya ga jisne 2 ko call kiya hai 2 neh 3 ko call kiya
            toh sabsa pehla 3 nikla ga 2 phir 1 
             IT FOLLOWS LIFo


             
*/
