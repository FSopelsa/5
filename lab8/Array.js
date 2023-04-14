
Array.prototype.removeAllOf = function (value, Array) {
    console.log(Array[1]);
    if (!values) {
        var values = [];
        for (var i = 0; i < Array.length; i++) {
            values.push(Array[i].value);  
        }
    }
    while (values.includes(value)) {
        let j = values.indexOf(value);
        values.splice(j,1);
        Array.splice(j,1);
        ArrayTwo.splice(j,1);
    }
    return Array;
}
