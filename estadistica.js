function calculateAverage(array) {
    let sumArray = 0
    for(let i=0; i< array.length; i++){
        sumArray += array[i]
    }
    const average = sumArray/array.length
    return average
}


function calculateAverage2(array) {
    let sumArray =  array.reduce((accumulatedValue, newValue)=>{
        return accumulatedValue + newValue
    })
    const average = sumArray/array.length
    return average
}
