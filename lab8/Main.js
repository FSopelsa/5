var ArrayTwo = [];
var liList = document.getElementsByTagName("li");

class Main {
    constructor() {
        this.Array = new Array();
        while (this.Array.length < 100) {
            let i = new Dice();
            this.Array.push(i);
            ArrayTwo.push(i.value);
            
        }   console.log(this.Array);

        this.Array = Array.prototype.removeAllOf(1, this.Array);
        this.Array = Array.prototype.removeAllOf(6, this.Array);

    //  METOD??  \\ 
    //
    //   
        for (let i = 0; i < this.Array.length; i++) {
            
            var liElem = document.createElement("li");
            liElem.appendChild(document.createTextNode(this.Array[i].value));
            liList[i].appendChild(liElem);
        }
    }

    printDice = function () {
        
    }
    
}

window.onload = function () {
    var newMain = new Main();
    console.log("newMain: ", newMain.Array);
}