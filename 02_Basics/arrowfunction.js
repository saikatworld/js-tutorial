const user ={
    username: "saikat",
    price:999,

    welcomeMessage: function(){
console.log(`${this.username},Welcome to website`);
console.log(this);

    }
}   
// user.welcomeMessage()
// user.username ="sam"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username ="saikat"
//     console.log(this.username);
// }
// chai()

// const addTow =(num1, num2) => {
//     return num1+num2
// }
// console.log((addTow(3,4)));

// const addTow =(num1, num2) => num1+num2
// const addTow =(num1, num2) => (num1+num2)
const addTow =(num1, num2) => ({username:"saikat"})

console.log(addTow(3,4))

const myArray =[2,5,3,6,7]

myArray.forEach()