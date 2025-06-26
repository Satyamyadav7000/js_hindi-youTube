// Immediately Invoked Function Expression

(function chai(){ // named IIFE
    console.log(`DB CONNECTED`)
})();/* we use iife to avoid problem due to variable 
 created in globe scope */ 
 // to write two iife simultaneously we have to use semicolon

 ( (name) => { //unnmaed IIFE 
    console.log(`DB CONNECTED TWO ${name}`);
 })("ram ji")