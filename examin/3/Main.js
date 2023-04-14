var userlist = [];

window.onload = function () {
    testt = new Main();

    formElem = document.getElementById("form1");
    uNameInput = formElem.elements[0].value;
    pWordInput = formElem.elements[1].value;

   console.log(testt, Users, User, formElem);
}

class Main {
    constructor() {
        this.a = new Users();
    }    
}

class Users {
    constructor() {
            this.j = new User("kalle","Karl Johan Rosqvist","karl.rosqvist@lnu.se","pass123");
            this.k = new User("pelle", "Per", "per@lnu.se", "pass321");
            userlist.push(this.j, this.k);
            console.log(userlist);
    }
}
    Users.prototype.login = function () {
        
        if (uNameInput == Users.j.username && checkPassword())
            console.log("login");
    }

class User {
    username;
    name;
    email;
    #password;
        constructor(username, name, email, password) {
            this.username = username;
            this.name = name;
            this.email = email; 
            this.#password = password;
        }

    checkPassword() {
        for (var i = 0; i < userlist.length; i++) {
            if (pWordInput == Users.j.#password)
            console.log(formElem.elements[0].value, formElem.elements[1].value);
            return true;
        }
    }    

    sayHello() {
        alert("hejhej");
    }
}