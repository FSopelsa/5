
class User {
    constructor(name, email) {
        if (name, email) {
            this.NAME = name;
            this.EMAIL = email;
        }
        else {
            this.NAME = "John Doe";
            this.EMAIL = "john.doe@lnu.se";
        }
    }
    sayHello() {
        console.log("Hi, my name is " + this.NAME)
    }

    sayContactInformation() {
        console.log("Send me a email at " + this.EMAIL)
    }

}

document.addEventListener('click', (e) => {
        var kalle = new User("Karl Johan Rosqvist", "karl.johan.rosqvist@lnu.se");
        kalle.sayHello();
        kalle.sayContactInformation();
        var pelle = new User();
        pelle.sayHello();
        pelle.sayContactInformation();  
    });


