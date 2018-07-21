const css = require('./form.styl');
const formInput = document.getElementsByClassName('form__input'),
    formCheck = document.getElementsByClassName('form__check'),
    formCheckDecore = document.getElementsByClassName('form__check_decore'),
    formCheckText = document.getElementsByClassName('form__check_text'),
    formButton = document.getElementsByClassName('form__button');
formButton[0].onmousedown = function() {
    formButton[0].style.boxShadow = '0px 0px 0px 0px #27a18f';
    formButton[0].style.marginTop = '2px';
};
formButton[0].onmouseup = function() {
    formButton[0].style.boxShadow = '0px 2px 1px 0px #27a18f';
    formButton[0].style.marginTop = '0px';
};
formButton[0].onclick = function() {
    for (let i = 0; i < formInput.length; i++ ) {
        if ( formInput[i].value == '' ) {
            formCheck[i].classList.add('form__check_false');
            formCheckDecore[i].classList.add('form__check_false');
            formCheck[i].classList.remove('form__check_true');
            formCheckDecore[i].classList.remove('form__check_true');
            formCheckText[i].innerHTML = 'ERROR';
            formCheck[i].style.opacity = '1';
        } else {
            formCheck[i].classList.add('form__check_true');
            formCheckDecore[i].classList.add('form__check_true');
            formCheck[i].classList.remove('form__check_false');
            formCheckDecore[i].classList.remove('form__check_false');
            formCheckText[i].innerHTML = 'THANKS!';
            formCheck[i].style.opacity = '1';
        }
    }
};
