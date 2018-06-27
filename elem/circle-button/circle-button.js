var circlBtn = document.getElementById('circle-button'),
    circlBtnArrow = document.getElementById('circle-button__arrow');
circlBtn.onmousedown = function() {
    circlBtn.classList.remove('circle-button_disactive');
    circlBtn.classList.add('circle-button_active');
    circlBtnArrow.classList.remove('circle-button__arrow_disactive');
    circlBtnArrow.classList.add('circle-button__arrow_active');
};
circlBtn.onmouseup = function() {
    circlBtn.classList.remove('circle-button_active');
    circlBtn.classList.add('circle-button_disactive');
    circlBtnArrow.classList.remove('circle-button__arrow_active');
    circlBtnArrow.classList.add('circle-button__arrow_disactive');
};
