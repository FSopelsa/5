class Point {

    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
}
    Point.prototype.reset = function() {
            Point.x = 0;
            Point.y = 0;
            console.log("reset");
        }

    Point.prototype.toString = function () {
            var box = document.getElementById("box");
            box.appendChild(document.createTextNode("Point[x: " + Point.x + ", y: " + Point.y + "]."));
        }
       
    
    
    
    
    


 console.log(this, Point.x,window);





window.onkeydown = () => {
    console.log(Point, Point.x, Point.y);
    Point.toString();
    console.log("Point[x: " + Point.x + ", y: " + Point.y + "].");

    var box = document.getElementById("box");
        box.appendChild(document.createTextNode("Point[x: " + Point.x + ", y: " + Point.y + "]."));
    

}
