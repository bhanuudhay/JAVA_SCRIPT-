const form = document.querySelector('form')
form.addEventListener('submit' , function(e){
    e.preventDefault()
    const currdate = new Date();

    const curryear = currdate.getFullYear()
    //console.log(curryear)

    const currmonth = currdate.getMonth()
    ///console.log(currmonth)

    const currDate = currdate.getDate();
    //console.log(currDate)

    const mydate = document.querySelector('#mydate')
    const myyDate = (mydate).value;

    // console.log(myyDate)
    // console.log(typeof myyDate)

    const arr  = myyDate.split('-'
        
    )
    //console.log(arr)

    const result = document.querySelector('#result')

    const yourYear = Number(arr[0])
    const yourMonth = Number(arr[1]-1) // start from  0 month
    const yourDate = Number(arr[2])

    // console.log(yourYear)
    // console.log(yourMonth)
    // console.log(yourDate)
    // special case 
     console.log()
    if(arr[2].toString().length <= 1 || arr[2].toString().length >=3 || yourDate >= 32 || yourDate < 0 )
    {
       result.innerHTML = `Day is not in valid format ${yourDate}`
    }
    else if(arr[1].toString().length <= 1 || arr[1].toString().length >=3 || yourMonth >= 12 || yourMonth < 0)
    {
        result.innerHTML = `Month is not in valid format ${arr[1]}`
    }
    else if(arr[0].toString().length <=3 || arr[0].toString().length >=5 )
    {
        result.innerHTML = `Year is not in valid format ${arr[0]}`
    }
    else if(yourYear === 0 || yourMonth < 0 || yourDate === 0  )
    {
        result.innerHTML = "Enter a valid date"
    }
    else if(isNaN(arr[0] || isNaN(arr[1]) || isNaN(arr[2])))
    {
        result.innerHTML = "Enter a valid date"
    }
    else
    {
        const yearr = curryear - yourYear
        //console.log(yearr);
        const monthh = Math.abs(currmonth - yourMonth);
        //console.log(monthh)
        const datee = currDate-yourDate
        //console.log(datee)
        result.innerHTML = `Your age is ${yearr} year , ${monthh} month, ${datee} days`
    }
})