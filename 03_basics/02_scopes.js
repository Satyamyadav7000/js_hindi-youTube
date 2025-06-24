
// var c = 30 
 if (True) {
    let a = 10 
    const b =20 
    // console.log("inner :" ,a);
 }

// console.log(a)
// console.log(b);
// console.log(c);

function one(){
    const username ="Satyam"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website)// it will give error

    two()

}
//  one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh"){
        const website = " youtube"
        // console.log(username + website);
    }
    //console.log(website);//error
}

// +++++++++++++++ interesting  ++++++++++++++++

console.log(addone(5)); // no error 

function addone(num){
    return num +1
}

addtwo(5) // error
const addtwo = function(num){
    return num+2
}
