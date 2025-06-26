const user = {
    username : "satyam",
    price : 700,

    welcomeMessage: function(){
        console.log(`${this.username} ,welcome to website`);
        console.log(this);

    }
}
// this keyword tells us about the current context
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
//  console.log(this);

// function chai(){
    // let username = "satyam"
    // console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "satyam"
//     console.log(this.username);

// }

const chai =  () => {
    let username = "satyam"
    console.log(this);

}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2

// }

//  const addTwo = (num1, num2) => num1 + num2 //return keyword not needed

// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) =>({username : "shyam"})
console.log(addTwo(4,7));