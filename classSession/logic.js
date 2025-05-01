class user{
    constructor(name,email,password){
        this.name = name;
        this.email = email;
        this.password = password;
    }
    greeting(){
        console.log("Hello, i am " + this.name);
    }
    sleep(){

    }
    run(){

    }
}


const arshia = new user("arshia","arshia@gmail.com",123456789)


arshia.greeting()