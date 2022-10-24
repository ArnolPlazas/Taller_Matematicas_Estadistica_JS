const btn = document.querySelector('#calculate')
const inputPrice = document.querySelector('#price')
const inputDiscount = document.querySelector('#discount')
const pResult = document.querySelector('#result')

btn.addEventListener('click', calculatePriceWithDiscount)


function calculatePriceWithDiscount(){
    const price = Number(inputPrice.value)
    const discount = Number(inputDiscount.value)
    let message
    if( !price || !discount){
        message = 'There are no values!'
    } 
    else if(discount < 0 || discount > 100){
        message = 'this values are not possible'
    } else{
        const newPrice = (price * (100 - discount))/100
        message = `The new price is $ ${newPrice}`
    }
    pResult.innerHTML = message
}