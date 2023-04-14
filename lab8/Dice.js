
class Dice {

    constructor() {
        this.value = this.randomValue();
        
    
    }
    randomValue = function() {
        return Math.floor(Math.random()*6+1);
    }
}
