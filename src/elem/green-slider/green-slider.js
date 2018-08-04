import './green-slider.styl';

const greenSliderCircle = document.getElementById('green-slider__circle'),
      greenSlider = document.getElementById('green-slider'),
      greenSliderBarActive = document.getElementById('green-slider__bar_active'),
      greenSliderNumb2 = document.getElementById('green-slider__number_2'),
      greenSliderNumb3 = document.getElementById('green-slider__number_3'),
      greenSliderNumb4 = document.getElementById('green-slider__number_4'),
      greenSliderNumb5 = document.getElementById('green-slider__number_5');
greenSliderCircle.onmousedown = function(ev) {
    let circleCoords = getCoords(greenSliderCircle),
        shiftX = ev.pageX - circleCoords.left,
        sliderCoords = getCoords(greenSlider);
    document.onmousemove = function(ev) {
        let newLeft = ev.pageX - sliderCoords.left -9;
        if ( newLeft < 0 ) {
            newLeft = 0;
        }
        let rightEdge = greenSlider.offsetWidth - greenSliderCircle.offsetWidth;
        if (newLeft > rightEdge) {
            newLeft = rightEdge;
        }
        greenSliderCircle.style.left = newLeft + 'px';
        greenSliderBarActive.style.width = newLeft + 5 + 'px';
        if ( newLeft >= 60 ) {
            greenSliderNumb2.style.color = '#4db7a7';
        }
        if ( newLeft < 60 ) {
            greenSliderNumb2.style.color = 'rgb(209,209,209)';
        }
        if ( newLeft >= 125 ) {
            greenSliderNumb3.style.color = '#4db7a7';
        }
        if ( newLeft < 125 ) {
            greenSliderNumb3.style.color = 'rgb(209,209,209)';
        }
        if ( newLeft >= 190 ) {
            greenSliderNumb4.style.color = '#4db7a7';
        }
        if ( newLeft < 190 ) {
            greenSliderNumb4.style.color = 'rgb(209,209,209)';
        }
        if ( newLeft >= 240 ) {
            greenSliderNumb5.style.color = '#4db7a7';
        }
        if ( newLeft < 240 ) {
            greenSliderNumb5.style.color = 'rgb(209,209,209)';
        }
    };
    document.onmouseup = function() {
        document.onmousemove = document.onmouseup = null;
    };
    return false;
};
greenSliderCircle.ondragstart = function() {
    return false;
};
greenSlider.onclick = function(ev) {
    let sliderCoords = getCoords(greenSlider);
    let newLeft = ev.pageX - sliderCoords.left - 9;
    let rightEdge = greenSlider.offsetWidth - greenSliderCircle.offsetWidth/2;
    if (newLeft > rightEdge) {
        newLeft = rightEdge;
    }
    if ( newLeft < 0 ) {
        newLeft = 0;
    }
    greenSliderCircle.style.left = newLeft + 'px';
    greenSliderBarActive.style.width = newLeft + 'px';
    if ( newLeft >= 60 ) {
        greenSliderNumb2.style.color = '#4db7a7';
    }
    if ( newLeft < 60 ) {
        greenSliderNumb2.style.color = 'rgb(209,209,209)';
    }
    if ( newLeft >= 125 ) {
        greenSliderNumb3.style.color = '#4db7a7';
    }
    if ( newLeft < 125 ) {
        greenSliderNumb3.style.color = 'rgb(209,209,209)';
    }
    if ( newLeft >= 190 ) {
        greenSliderNumb4.style.color = '#4db7a7';
    }
    if ( newLeft < 190 ) {
        greenSliderNumb4.style.color = 'rgb(209,209,209)';
    }
    if ( newLeft >= 248 ) {
        greenSliderNumb5.style.color = '#4db7a7';
    }
    if ( newLeft < 248 ) {
        greenSliderNumb5.style.color = 'rgb(209,209,209)';
    }
    return false;
};
function getCoords(elem) { // кроме IE8-
    let box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}