//singleton
// object.create




//object literals

const mySym = Symbol("key1")

const JsUser= {
    name : "Satyam",
    [mySym] : "mykey1",
    "full name" : "Satyam yadav",
    age : 18,
    location : "Jaipur",
    isLoggedIn : false,
}
// console.log(JsUser.name)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(typeof [mySym])// object

// JsUser.location= "Delhi"
// Object.freeze(JsUser)
// JsUser.location="Mumbai"
// // console.log(JsUser);
//  console.log(JsUser.location);

 JsUser.greeting= function(){
    console.log("hello Js user")
 }
 JsUser.greetingTwo= function(){
    console.log(`hello Js user, $ (this.namae)`);
 }
 
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
