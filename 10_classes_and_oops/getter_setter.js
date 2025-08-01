class User {
    constructor(email,password){
        this.password=password;
        this.email=email;
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){

        this._email=value
    }
    get password(){
        return `${this._password}satyam`
    }

    set password(value){
        this._password=value
    }
}

const satyam = new User ("satyam@google.com","abc")
// console.log(satyam.password);
console.log(satyam.email);