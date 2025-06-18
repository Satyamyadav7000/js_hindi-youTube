//date

let myDate= new Date()
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);

// let myCreatedDate= new Date(2025,0,23)
// let myCreatedDate= new Date(2025,0,23,5,3);
// let myCreatedDate= new Date("2025-01-14");
let myCreatedDate= new Date("01-21-2025");
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));//to convert miliseconds into seconds

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    
}))
