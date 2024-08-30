// const coading= ["js" ,"ruby", "jsvs" ,"python","cpp"]

// const values = coading.forEach((item) => {
//     // console.log(item);
//     return item
// })

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

//  const newNums=[]
// myNums.forEach( (num)=>{
//     if (num>4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);


const books =[
    {title: 'book one',genre:'function', publish:1981, edition: 2004},
    {title: 'book two',genre:'Non-function', publish:1991, edition: 2008},
    {title: 'book three',genre:'History', publish:1999, edition: 2005},
    {title: 'book four',genre:'Non-function', publish:1989, edition: 2002},
    {title: 'book five',genre:'science', publish:2009, edition: 2005},
    {title: 'book six',genre:'function', publish:2011, edition: 2001},
    {title: 'book seven',genre:'History', publish:1945, edition: 2003},
    {title: 'book eight',genre:'Bengali', publish:1990, edition: 2014},
];
const userBooks = books.filter( (bk) => {
    return bk.edition >= 2005 && bk.genre=== 'History'})
console.log(userBooks);
