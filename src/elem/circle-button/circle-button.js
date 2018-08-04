import './circle-button.styl';

const circlBtn = document.getElementsByClassName('circle-button'),
      circlBtnArrow = document.getElementsByClassName('circle-button__arrow');
circlBtn[1].onmousedown = function() {
    if ( circlBtn[1].classList[1] === 'circle-button_extreme') return;
    circlBtn[1].classList.remove('circle-button_disactive');
    circlBtn[1].classList.add('circle-button_active');
    circlBtnArrow[1].classList.remove('circle-button__arrow_disactive');
    circlBtnArrow[1].classList.add('circle-button__arrow_active');
};
circlBtn[1].onmouseup = function() {
    circlBtn[1].classList.remove('circle-button_active');
    circlBtn[1].classList.add('circle-button_disactive');
    circlBtnArrow[1].classList.remove('circle-button__arrow_active');
    circlBtnArrow[1].classList.add('circle-button__arrow_disactive');
};
