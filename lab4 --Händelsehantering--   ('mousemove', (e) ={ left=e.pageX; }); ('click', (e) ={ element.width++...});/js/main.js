function init(){
    var circle = document.getElementById('box');
    var circleMidWidth;
    var circleMidHeight;

    document.addEventListener('mousemove', (e) =>{
        circle.style.left = e.pageX - circleMidWidth + 'px';
        circle.style.top = e.pageY - circleMidHeight + 'px';
    });

    document.addEventListener('click', (e) => {
        circle.style.width = circle.clientWidth +10 + 'px';
        circle.style.height = circle.clientHeight +10 + 'px';

        circleMidWidth = circle.clientWidth / 2;
        circleMidHeight = circle.clientHeight / 2;
        circle.style.left = e.pageX - circleMidWidth + 'px';
        circle.style.top = e.pageY - circleMidHeight + 'px';
    });

     
}
window.addEventListener("load",init)


