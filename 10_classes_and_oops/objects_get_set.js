const User={
    _email : 'sat@hc.com',
    _password : "abc",

    get email(){
        return this._email.toUpperCase()

    },
    set eamil(value){
        this._email=value


    }
}


const tea = Object.create(User)
console.log(tea.email);