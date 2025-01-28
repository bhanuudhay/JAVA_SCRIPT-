const accountId = 2424 // value can't be change now 
let accountEmail = "bhanu@gmIL.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState

// var aur let dono method variable declare krne ke liya hota hai but problem arises in var that is scope {} agar iska 
// var jo hai woh scope ke bahr bhi execute ho jata hai 
// under kuch change krta tha toh sab jagah  change ho jata tha 
// accountId = 34  // not allowed


accountEmail = "dev@gmail.com"
accountPassword = "211121"
accountCity = "banglore"

console.log(accountId);

console.table([accountId , accountEmail , accountPassword , accountCity ,accountState])

