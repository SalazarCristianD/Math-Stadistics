const priceInput = document.querySelector('#price');
const discountInput = document.querySelector('#discount');
const couponInput = document.querySelector('#coupon')
const answerCalculate = document.querySelector('#answer');
const btnCalculate = document.querySelector('#btnC');
btnCalculate.addEventListener('click', calculatePercent);

class coupon{
    constructor(name, discount){
        this.name = name,
        this.discount = discount
    }
};
const coupons = [];

coupons.push(new coupon('gold', 50), new coupon('silver', 30))

function calculatePercent(){
 //(p * (100 -d )) / 100

 const validCoupon = coupons.find(item => item.name == couponInput.value);


}
console.log(coupons);