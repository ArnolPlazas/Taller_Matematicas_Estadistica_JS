const btn = document.querySelector('#calculate')
const inputPrice = document.querySelector('#price')
const inputDiscount = document.querySelector('#discount')
const inputCoupon = document.querySelector('#coupon')
const pResult = document.querySelector('#result')

const couponsList = []

couponsList.push({
    name: 'MegaCoupon2022',
    discount: 30
})
couponsList.push({
    name: 'Promo2022',
    discount: 20
})
couponsList.push({
    name: 'BlackFriday2022',
    discount: 50
})
couponsList.push({
    name: 'Weekend2022',
    discount: 10
})


btn.addEventListener('click', calculatePriceWithDiscount)


function calculatePriceWithDiscount(){
    const price = Number(inputPrice.value)
    const coupon = inputCoupon.value
    let message
    let message_coupon
    
    const isCoupon = couponsList.find((e) =>{
        return e.name === coupon
    })
    console.log(isCoupon)

    if(isCoupon){
         discount = isCoupon.discount
         message_coupon = ', congratulation you apply  a coupon successfully'
    }
    else{
        discount = 0
        message_coupon = ', there are no coupon!'
    }

    if(!price){
        message = 'There are no price!'
    } else{
        const newPrice = (price * (100 - discount))/100
        message = `The new price is $ ${newPrice}`
    }
    pResult.innerHTML = message + message_coupon
}