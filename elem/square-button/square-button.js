var mouseCircle = document.getElementById('mouse-circle');
var squareButton = document.getElementById('square-button');
squareButton.onmousedown = function(ev) {
    var x = ev.offsetX - 22;
    var y = ev.offsetY - 22;
    if (ev.target.className == 'square-button__text') {
        x += 35;
        y += 10;
    }
    squareButton.style.boxShadow = '0 0 0 0';
    squareButton.style.marginTop = '2px';
    mouseCircle.style.display = 'block';
    mouseCircle.style.top = y + 'px';
    mouseCircle.style.left = x + 'px';
};
squareButton.onmouseup = function() {
    squareButton.style.boxShadow = '0 2px 0 0 #28a290';
    squareButton.style.marginTop = '0';
    mouseCircle.style.display = 'none';
};