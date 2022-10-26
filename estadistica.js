function calculateAverage(array) {
    let sumArray = 0
    for(let i=0; i< array.length; i++){
        sumArray += array[i]
    }
    const average = sumArray/array.length
    return average
}

