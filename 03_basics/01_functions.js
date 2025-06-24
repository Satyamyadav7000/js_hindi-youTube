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

// function loginUserMessage(username){
    
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("satyam"));


// function loginUserMessage(username = "sam"){
//     if(!username)// (username==undefined)
//     {
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200,2,400,500))

const user = {
    username: "Satyam",
    price : 30
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);
}
// handleObject(user)

// handleObject({
//     username : "Ram",
//     price : 34
// })

const myArray = [2,3,4,5]

function returnArray(anyArray){
    return anyArray[1]
}

// console.log(returnArray(myArray));
console.log(returnArray([20,30,40]));


