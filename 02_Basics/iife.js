// Immediately Invoked Function Expression(IIFE)


(function chai() {
    //names IIFE
    console.log(`DB CONNECTED`);
})();

((name) => {
    console.log(`DB CONNECTED 2 ${name}`);
    
})('saikat')