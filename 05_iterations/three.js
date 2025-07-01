// for of

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);    
}

const greetings = "JAI SHREE KRISHNA"

for (const greet of greetings){
    // console.log(`each charachter is ${greet}`)
}

//maps

const map= new Map()
map.set('IN', "INDIA")
map.set('AM', "AMERCA")
map.set('FR', "France")
map.set('IN', "India")

// console.log(map);

for (const [key , value] of map) {
    console.log(key, ':-', value);
}

const myObj = {
    'game1': 'NFS',
    'game2': 'AMF',

}
// for (const [key , value] of myObj) {
//     // console.log(key, ':-', value); //error -> object is not iterable
// }


    

