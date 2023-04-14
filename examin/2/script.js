window.onload = function () {
   /*
    var alfa = document.getElementsByTagName("li")[0];
    var beta = document.getElementsByTagName("li")[1];
    var gamma = document.getElementsByTagName("li")[2];

    gamma.appendChild(beta);
    beta.appendChild(alfa);
    */

//---    ELLER:

    var list = document.getElementsByTagName("li");
    list[2].appendChild(list[1]);
    list[1].appendChild(list[0]);

}

//   ( .appendChild lägger alltid det man skickar sist ) -!

