// function addTwoNumber(num1, num2){
//     console.log(num1 + num2)
// }

function addTwoNumber(num1, num2){
    // let result= num1+num2
    // return result
    return num1+num2
}

const result=addTwoNumber(3,4)
// console.log("Result",result);

function loginUserMessage(username){
    
    return `${username} just logged in`
}

console.log(loginUserMessage("satyam"));


function loginUserMessage(username = "sam"){
    if(!username)// (username==undefined)
    {
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

