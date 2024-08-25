// function sayMyName(){
//     console.log("S");
//     console.log("A");
//     console.log("I");
//     console.log("K");
//     console.log("A");
//     console.log("T");   
// }

// sayMyName()

// function addTowNumber(number1,number2){

//     console.log(number1 + number2);
// }

// console.log("result :", result);

function addTowNumber(number1,number2){

    // let result = number1+number2
    // return result

    return number1+ number2

}

const result = addTowNumber(3 , 5)

// console.log("result :", result);


// function logingUserMessage(username){
//     if (!username) {
//         console.log("please enter a username");
//        return
//     }
//     return`${username} just logged in`
// }

// console.log(logingUserMessage("saikat"))

function calculateCartPrice(val1,val2,...num1){    //( ... Rest Operetor)
    return num1
}
// console.log(calculateCartPrice(200 , 400, 699));

const user ={
    usernsme: "saikat",
    price :199

}
function handelObject (anyobject){
    console.log(`username is ${anyobject.usernsme} and price is 
    ${anyobject.price}`);
    
}
handelObject({
    usernsme:"saikat",
    price: 999
})
