import './events.styl';

const eventsButton = document.getElementById('events__button');


eventsButton.onmouseup = function() {
    eventsButton.style.boxShadow = '0 3px 0 0 #369284';
    eventsButton.style.marginTop = '20px';
};
eventsButton.onmousedown = function() {
    eventsButton.style.boxShadow = '0 0 0 0';
    eventsButton.style.marginTop = '23px';
};