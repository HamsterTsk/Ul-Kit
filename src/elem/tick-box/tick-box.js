import './tick-box.styl';
var tickBox = document.getElementById('tick-box'),
    tickBoxMark = document.getElementById('tick-box__mark');
tickBox.onclick = function() {
    for ( var i = 0; i < tickBox.classList.length; i++ ) {
        if ( tickBox.classList[i] == 'tick-box_active') {
            tickBox.classList.remove('tick-box_active');
            tickBox.classList.add('tick-box_disactive');
            tickBoxMark.classList.remove('tick-box__mark_active');
            tickBoxMark.classList.add('tick-box__mark_disactive');
            return;
        }
        if ( tickBox.classList[i] == 'tick-box_disactive') {
            tickBox.classList.remove('tick-box_disactive');
            tickBox.classList.add('tick-box_active');
            tickBoxMark.classList.remove('tick-box__mark_disactive');
            tickBoxMark.classList.add('tick-box__mark_active');
            return;
        }
    }
};