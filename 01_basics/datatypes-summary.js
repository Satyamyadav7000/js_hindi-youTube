// primitive

// 7 types : String,Number,Boolean,null,undefined,symbol,
//BigInt

const score=100
const isLoggedIn= false
const  outsideTemp= null
let userEmail;

const id1=Symbol('123')
const id2=Symbol('123')
//console.log(id1==id2)//false
//const bigNum= 345678923849903n;
// Reference (Non primitive)

// Array,Objects,Functions

const Gods=["Krishna","Radha","Shiva"];
let myObj={
    name : "Satyam",
    age : 20,

}

const myFunc=function(){
    console.log("Radhe Radhe");

}
/*
  Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/