const userEmail =[]

if (userEmail) {
    console.log("Got User Email");
    
}else{
    console.log("Dont'have user email");
    
}

// falsy values

//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//Truthy Values

// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is Empty");
    
// }

const emptyObj ={}

if (Object.keys(emptyObj).length===0) {
    console.log("object is empty");
    
}

// nullish coalescing operator(??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 
// val1 = undefined ?? 
val1 = null ??10 ??20



console.log(val1);


// Terniary Operator

// condition ? true : false

const iceTeaPrice =100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

