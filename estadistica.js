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

function isEven(array){
     return !(array.length%2)
}

function isOdd(array){
    return array.length%2
}

function calculateMedian(array){
    sortArray = array.sort((accValue, newValue)=>{
        // if(accValue > newValue){
        //     return 1
        // } else if(accValue == newValue){
        //     return 0
        // } else if(accValue < newValue){
        //     return -1
        // }

        return accValue - newValue

    })
    console.log(sortArray);
    const arrayIsEven = isEven(sortArray)
    let medianArray 
    if(arrayIsEven){
        const halfValue1 = sortArray[(sortArray.length/2) -1]
        const halfValue2 = sortArray[sortArray.length/2]
        medianArray = calculateAverage([halfValue1, halfValue2])
    } else{
        const halfValueIndex = Math.floor(sortArray.length/2)
        medianArray = sortArray[halfValueIndex]
    }

    return medianArray
}

const histogram = array => {
    const obj = new Object()
    array.forEach(element => !obj[element] ? obj[element] = 1 : obj[element]++)
    return obj;
}

function calculateTrend(list){
    const array = Object.entries(histogram(list))
    const sortArray = array.sort((accValue, newValue)=>{
        return accValue[1] - newValue[1]

    })

    const listMaxNumber = sortArray[sortArray.length -1]
    const trend = listMaxNumber[0]

    return trend

}