import './square-button.styl';
const mouseCircle = document.getElementsByClassName('square-button__circle');
const squareButton = document.getElementsByClassName('square-button');
squareButton[0].onmousedown = function(ev) {
    let x = ev.offsetX - 22;
    let y = ev.offsetY - 22;
    if (ev.target.className === 'square-button__text') {
        x += 35;
        y += 10;
    }
    squareButton[0].style.boxShadow = '0 0 0 0 #bf3d1f';
    squareButton[0].style.marginTop = '2px';
    mouseCircle[0].style.display = 'block';
    mouseCircle[0].style.top = y + 'px';
    mouseCircle[0].style.left = x + 'px';
};
squareButton[0].onmouseup = function() {
    squareButton[0].style.boxShadow = '0 2px 0 0 #bf3d1f';
    squareButton[0].style.marginTop = '0';
    mouseCircle[0].style.display = 'none';
};
squareButton[1].onmousedown = function(ev) {
    let x = ev.offsetX - 22;
    let y = ev.offsetY - 22;
    if (ev.target.className === 'square-button__text') {
        x += 35;
        y += 10;
    }
    squareButton[1].style.boxShadow = '0 0 0 0 #bf3d1f';
    squareButton[1].style.marginTop = '2px';
    mouseCircle[1].style.display = 'block';
    mouseCircle[1].style.top = y + 'px';
    mouseCircle[1].style.left = x + 'px';
};
squareButton[1].onmouseup = function() {
    squareButton[1].style.boxShadow = '0 2px 0 0 #bf3d1f';
    squareButton[1].style.marginTop = '0';
    mouseCircle[1].style.display = 'none';
};
squareButton[2].onmousedown = function(ev) {
    let x = ev.offsetX - 22;
    let y = ev.offsetY - 22;
    if (ev.target.className === 'square-button__text') {
        x += 35;
        y += 10;
    }
    squareButton[2].style.boxShadow = '0 0 0 0 #bf3d1f';
    squareButton[2].style.marginTop = '2px';
    mouseCircle[2].style.display = 'block';
    mouseCircle[2].style.top = y + 'px';
    mouseCircle[2].style.left = x + 'px';
};
squareButton[2].onmouseup = function() {
    squareButton[2].style.boxShadow = '0 2px 0 0 #bf3d1f';
    squareButton[2].style.marginTop = '0';
    mouseCircle[2].style.display = 'none';
};
squareButton[3].onmousedown = function(ev) {
    let x = ev.offsetX - 22;
    let y = ev.offsetY - 22;
    if (ev.target.className === 'square-button__text') {
        x += 35;
        y += 10;
    }
    squareButton[3].style.boxShadow = '0 0 0 0 #bf3d1f';
    squareButton[3].style.marginTop = '2px';
    mouseCircle[3].style.display = 'block';
    mouseCircle[3].style.top = y + 'px';
    mouseCircle[3].style.left = x + 'px';
};
squareButton[3].onmouseup = function() {
    squareButton[3].style.boxShadow = '0 2px 0 0 #bf3d1f';
    squareButton[3].style.marginTop = '0';
    mouseCircle[3].style.display = 'none';
};
