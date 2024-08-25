const name = "saikat"
const repoCount =50

//console.log(name + repoCount+"value");//(backdated)

console.log(`Hello my Name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('sdsj-kn')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('k'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "    saikat   "
console.log(newStringOne);
console.log(newStringOne .trim());
 

const url = "https://saikat.com/saikat%20pandit"

console.log(url.replace('%20','-'))


