var redSliderCircle = document.getElementById('red-slider__circle');
var redSlider = document.getElementById('red-slider');
var redSliderDialog = document.getElementById('red-slider__dialog');
redSliderCircle.onmousedown = function(ev) {
    var circleCoords = getCoords(redSliderCircle);
    var shiftX = ev.pageX - circleCoords.left;
    var sliderCoords = getCoords(redSlider);
    var dialSlidText;
    document.onmousemove = function(ev) {
        var newLeft = ev.pageX - shiftX - sliderCoords.left;
        if ( newLeft < 0 ) {
            newLeft = 0;
        }
        var rightEdge = redSlider.offsetWidth - redSliderCircle.offsetWidth;
        if (newLeft > rightEdge) {
            newLeft = rightEdge;
        }
        redSliderCircle.style.left = newLeft + 'px';
        dialSlidText = Math.round(newLeft/2.48);
        redSliderDialog.innerText = dialSlidText;
    };
    document.onmouseup = function() {
        document.onmousemove = document.onmouseup = null;
    };
    return false;
};
redSliderCircle.ondragstart = function() {
    return false;
};
redSlider.onclick = function(ev) {
    var newLeft = ev.clientX -302;
    if ( newLeft < 0 ) {
        newLeft = 0;
    }
    var rightEdge = redSlider.offsetWidth - redSliderCircle.offsetWidth;
    if (newLeft > rightEdge) {
        newLeft = rightEdge;
    }
    redSliderCircle.style.left = newLeft - 5 + 'px';
    dialSlidText = Math.round(newLeft/2.48);
    redSliderDialog.innerText = dialSlidText;
};
function getCoords(elem) { // кроме IE8-
    var box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}