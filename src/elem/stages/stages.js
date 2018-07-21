const css = require('./stages.styl');
var stages = document.getElementById('stages'),
    stagesBarActive = document.getElementById('stages__bar_active'),
    stagesCircle2 = document.getElementById('stages__circle_2'),
    stagesCircle3 = document.getElementById('stages__circle_3'),
    stagesCircle4 = document.getElementById('stages__circle_4'),
    stagesCircle5 = document.getElementById('stages__circle_5');
stages.onclick = function(ev) {
    if ( ev.clientX > 158 ) {
        stagesCircle2.classList.remove('stages__circle_disactive');
        stagesCircle2.classList.add('stages__circle_active');
        stagesBarActive.style.width = '155px';
    } else {
        stagesCircle2.classList.remove('stages__circle_active');
        stagesCircle2.classList.add('stages__circle_disactive');
        stagesBarActive.style.width = '0px';
    }
    if ( ev.clientX > 305 ) {
        stagesCircle3.classList.remove('stages__circle_disactive');
        stagesCircle3.classList.add('stages__circle_active');
        stagesBarActive.style.width = '300px';
    } else {
        stagesCircle3.classList.remove('stages__circle_active');
        stagesCircle3.classList.add('stages__circle_disactive');
    }
    if ( ev.clientX > 453 ) {
        stagesCircle4.classList.remove('stages__circle_disactive');
        stagesCircle4.classList.add('stages__circle_active');
        stagesBarActive.style.width = '455px';
    } else {
        stagesCircle4.classList.remove('stages__circle_active');
        stagesCircle4.classList.add('stages__circle_disactive');
    }
    if ( ev.clientX > 599 ) {
        stagesCircle5.classList.remove('stages__circle_disactive');
        stagesCircle5.classList.add('stages__circle_active');
        stagesBarActive.style.width = '600px';
    } else {
        stagesCircle5.classList.remove('stages__circle_active');
        stagesCircle5.classList.add('stages__circle_disactive');
    }
};