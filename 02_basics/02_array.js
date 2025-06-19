const marvel_heros=["thor","Ironman"]
const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const all_heros=marvel_heros.concat(dc_heros)
// console.log(all_heros);
// const all_new_heros=[...marvel_heros,...dc_heros]
// console.log(all_new_heros);

// const another_array=[1,2,3,[2,5,8],127,0,9,[7,8,[8,0,4]],9,5]

// const real_another_array=another_array.flat(Infinity)
// console.log(real_another_array);


console.log(Array.isArray("Satyam"))
console.log(Array.from("Satyam"))
console.log(Array.isArray({name :"Satyam"}))// interesting(imp for interview)
 
let a=12
let b=23
let c=34

// console.log(Array.of(a,b,c));
 // Little known fact: Array.prototype itself is an array:
// Array.isArray(Array.prototype);