const PlatziMath = {}

PlatziMath.calculateAverage = (array) =>{
    let sumArray = 0
    for(let i=0; i< array.length; i++){
        sumArray += array[i]
    }
    const average = sumArray/array.length
    return average
}


PlatziMath.calculateAverage2 = (array) =>{
    let sumArray =  array.reduce((accumulatedValue, newValue)=>{
        return accumulatedValue + newValue
    })
    const average = sumArray/array.length
    return average
}

PlatziMath.isEven = (array) =>{
     return !(array.length%2)
}

PlatziMath.isOdd = (array) =>{
    return array.length%2
}

PlatziMath.calculateMedian = (array) =>{
    sortArray = array.sort((accValue, newValue)=>{
        return accValue - newValue

    })
    const arrayIsEven = PlatziMath.isEven(sortArray)
    let medianArray 
    if(arrayIsEven){
        const halfValue1 = sortArray[(sortArray.length/2) -1]
        const halfValue2 = sortArray[sortArray.length/2]
        medianArray = PlatziMath.calculateAverage([halfValue1, halfValue2])
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

PlatziMath.calculateTrend = (array) =>{
    const arrayHistogram = Object.entries(histogram(array))
    const sortArray = arrayHistogram.sort((accValue, newValue)=>{
        return accValue[1] - newValue[1]

    })

    const listMaxNumber = sortArray[sortArray.length -1]
    const trend = listMaxNumber[0]

    return trend

}