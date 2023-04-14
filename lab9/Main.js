//statiskt klass

Main = {
    init: function() {
        var p = new Point(10, 10);
        var r = new Rectangle(50, 50, 100, 200);
        //p.reset();

console.log(p,r);

        p.toString();
        r.toString();
    }
}
window.addEventListener("load", Main.init);





