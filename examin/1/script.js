window.onload = function () {
    var list = [];
    var deleted = [];
    while (list.length < 50) {        
        var number = Math.floor(Math.random()*6+1);
        list.push(number); 
    }

    console.log(list);
    for (let i = 0; i <= list.length; i++) {
      /*  if (list[i] <= 3) {
            list.splice(list.indexOf(list[i]), 1);
            console.log(list[i]);
        }*/
        if (list.includes(1)){
         list.splice(list.indexOf(1), 1);
         deleted++;
        }
        if (list.includes(2)){
        list.splice(list.indexOf(2), 1);
        deleted++;
        }
        if (list.includes(3)) {
           list.splice(list.indexOf(3), 1);
           deleted++;
        }
    }
    console.log("nya listan: ", list, "listans längd: ", list.length, "antal borttagna: ", deleted);
}