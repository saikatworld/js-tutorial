let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(myDate.toDateString());
// console.log(typeof myDate);

// let myCreateDate = new Date(2024,0,23 , 5 ,3)

let myCreateDate = new Date("2024-01-23")

console.log(myCreateDate.toLocaleString());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1)

newDate.toLocaleString('defult',{
    weekday:"long",
})

