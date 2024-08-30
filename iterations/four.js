const array1 =[1,2,3];

//const initialValue = 0;
const sumWithInitial = array1
                    .reduce((accumulator , currentValue)=> accumulator+ currentValue,0)

// console.log(sumWithInitial);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "Ai",
        price: 2999
    },
    {
        itemName: "python",
        price: 2999
    },
    
]
const priceToPay= shoppingCart.reduce((acc, item)=>acc +item.price,0)
console.log(priceToPay);
                   