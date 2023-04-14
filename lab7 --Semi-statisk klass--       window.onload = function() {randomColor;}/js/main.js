
window.onload = function () {
     backgroundColor = Math.floor(Math.random()*0xFFFFFF).toString(16);
     textColor = Math.floor(Math.random()*0xFFFFFF).toString(16);
     document.body.style.backgroundColor = "#" + backgroundColor;
     document.body.style.color = "#" + textColor;
}

/*---------------------------------------------------------------------------//
window.onload = function () {
    const setBg = () => {
        randomColor1 = Math.floor(Math.random()*16777215).toString(16);
        randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    }
    setBg();
    setBgColor(randomColor1, randomColor2);
}
function setBgColor (randomColor1, randomColor2) {
    document.body.style.backgroundColor = "#" + randomColor1;
    document.body.style.color = "#" + randomColor2;
}
*/