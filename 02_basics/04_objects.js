//const instaUser = new object() // singleton obj
 
 const instaUser ={} // non singleton obj

 instaUser.id= "2356sat"
 instaUser.name= "Satyam"
 instaUser.isLoggedIn = false

//  console.log(instaUser);

const regularUser = {
    email : "some@google.com",
    fullname: {
        userfullname: {
            firstname : "Satyam",
            lastname : "Yadav"

        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1= {
    1: "a",
    2: "b",
}
const obj2= {
    3: "c",
    4: "d",
}
const obj4= {
    5: "a",
    6: "b",
}

// const obj3 =Object.assign({},obj1,obj2,obj4)


// const obj3= { ...obj1,...obj2}
// console.log(obj3);

const User =[
    {
        email : "some@google.com",
        id : 1
    },
     {
        email : "some@google.com",
        id : 1
    },
     {
        email : "some@google.com",
        id : 1
    }

]

// console.log(User[1].email);

// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));

// console.log(instaUser.hasOwnProperty('isLoggedIn'));