import './toggle.styl';
var toggle = document.getElementById('toggle'),
    checkToggle = 1;
toggle.onclick = function() {
    if ( checkToggle == 1 ) {
        toggle.classList.remove('toggle_active');
        toggle.classList.add('toggle_disactive');
        for ( var i = 0; i < toggle.childNodes.length; i++ ) {
            if ( toggle.childNodes[i].classList ) {
                if ( toggle.childNodes[i].classList[0] == 'toggle__text') {
                    toggle.childNodes[i].classList.remove('toggle__text_active');
                    toggle.childNodes[i].classList.add('toggle__text_disactive');
                    toggle.childNodes[i].innerText = 'OFF';
                }
                if ( toggle.childNodes[i].classList[0] == 'toggle__circle') {
                    toggle.childNodes[i].classList.remove('toggle__circle_active');
                    toggle.childNodes[i].classList.add('toggle__circle_disactive');
                }
            }
        }
        checkToggle = 0;
        return;
    }
    if ( checkToggle == 0 ) {
        toggle.classList.remove('toggle_disactive');
        toggle.classList.add('toggle_active');
        for ( var j = 0; j < toggle.childNodes.length; j++ ) {
            if ( toggle.childNodes[j].classList ) {
                if ( toggle.childNodes[j].classList[0] == 'toggle__text') {
                    toggle.childNodes[j].classList.remove('toggle__text_disactive');
                    toggle.childNodes[j].classList.add('toggle__text_active');
                    toggle.childNodes[j].innerText = 'ON';
                }
                if ( toggle.childNodes[j].classList[0] == 'toggle__circle') {
                    toggle.childNodes[j].classList.remove('toggle__circle_disactive');
                    toggle.childNodes[j].classList.add('toggle__circle_active');
                }
            }
        }
        checkToggle = 1;
        return;
    }
};