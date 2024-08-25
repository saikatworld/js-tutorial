// primitive Data type

// 7 type : String (call by value), number, boolean, null, undefined, symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const OutsideTemp = null
let userEmail;

const id =Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 24432665432548n


// Refrence Type (Non Primitive)

// Array , Objects, Functions

const heros = ["Shaktiman", "nagraj", "doga"]

let myObj ={
    name:"saikat",
    age : 22,
}

//Function

const myFunction=function(){
    console.log("Hello World")
}

console.log(typeof anotherId)


//+++++++++++++++++++++++++++++++++++++++

//  Stack(Primitive) and Heap (Non primitive)

let myYoutubeName ="Saikat Babur Adda"

let anotherName = myYoutubeName
anotherName = " vlog Saikat with "
console.log(myYoutubeName);
console.log(anotherName);

let userOne ={
    email: "user@gmail.com",
    upi : "user@123"
}

let userTwo = userOne

userTwo.email ="saikat@87.com"

console.log(userOne.email)
console.log(userTwo.email)
