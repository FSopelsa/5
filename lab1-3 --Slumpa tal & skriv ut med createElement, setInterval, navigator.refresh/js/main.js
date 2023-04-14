var numbers = [0,1,2,3,4,5,6,7,8,9];
var numberOne;
var numberTwo;
var myInterval;

function init(){
    myInterval = setInterval(randomNumbers, 1000);

}
window.addEventListener("load",init)

function randomNumbers() {
    while (numbers.length > 2) {
        var n1 = Math.floor(Math.random() * 9);
        if (numbers.includes(n1)) {
            numbers.splice(numbers.indexOf(n1), 1);
            numberOne = n1;
            break;
        }
    }
    while (numbers.length > 2) {
        var n2 = Math.floor(Math.random() * 9);
    //    var test2 = numbers.indexOf(n2);
        if (numbers.includes(n2)) {
    //        numbers.splice(, 1);
            numberTwo = n2;
            break;
        }
    }
    if (numbers.length <= 2) {
        numberOne = numbers[0];
        numberTwo = numbers[1];
        numbers = [];
        clearInterval(myInterval);
    }    
    console.log(numberOne + " + " + numberTwo);
    console.log(numbers);
    
    numbers.splice(numbers.indexOf(n2), 1);
    console.log(numbers, "hej");
   
    writeOutCalculations();
} // end randomNumbers
//____________________________________________________________________\\

function writeOutCalculations () {
    let sum = numberOne + numberTwo;
    let list = document.createElement('li');
    list.innerText = numberOne + " + " + numberTwo + " = " + sum;
    document.querySelector('#sum-list').appendChild(list);
    if (numbers.length <= 0) {
        location.reload();
    }    
}
