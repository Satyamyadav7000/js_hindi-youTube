let score="33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber= Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN(not a number)
// true => 1; false=> 0

let isLoggedIn=1
let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
// 1=> true ; 0=> false;
// "" => false
// "satyam" => true
let str1="sat"
let str2="yam"
let str3=str1+str2;
//console.log(str3) //satyam
//console.log(2+2)
//console.log(2-2)
//console.log(2*2)
//console.log(2**2)

console.log("1" + 2)//12
console.log(1 + "2")//12
console.log("1" +2+2)//122
console.log(1 + 2+"2")//32
