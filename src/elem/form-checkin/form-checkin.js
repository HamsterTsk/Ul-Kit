import './form-checkin.styl';
import '../square-button/square-button';
import '../green-slider/green-slider';
import '../stages/stages'

const formCheckinButton = document.getElementsByClassName('square-button'),
      formCheckin = document.getElementsByClassName('form-checkin__form'),
      stagesBarActive = document.getElementById('stages__bar_active'),
      formStages = document.getElementsByClassName('stages__circle');


formCheckinButton[0].onclick = function(){
    formCheckin[0].style.left = -580 + 'px';
    formStages[1].classList.remove('stages__circle_disactive');
    formStages[1].classList.add('stages__circle_active');
    stagesBarActive.style.width = '155px';
};
formCheckinButton[1].onclick = function(){
    formCheckin[0].style.left = -580*2 + 'px';
    formStages[1].classList.remove('stages__circle_disactive');
    formStages[1].classList.add('stages__circle_active');
    formStages[2].classList.remove('stages__circle_disactive');
    formStages[2].classList.add('stages__circle_active');
    stagesBarActive.style.width = '300px';
};
formCheckinButton[2].onclick = function(){
    formCheckin[0].style.left = -580*3 + 'px';
    formStages[1].classList.remove('stages__circle_disactive');
    formStages[1].classList.add('stages__circle_active');
    formStages[2].classList.remove('stages__circle_disactive');
    formStages[2].classList.add('stages__circle_active');
    formStages[3].classList.remove('stages__circle_disactive');
    formStages[3].classList.add('stages__circle_active');
    stagesBarActive.style.width = '455px';
};
formCheckinButton[3].onclick = function(){
    formCheckin[0].style.left = -580*4 + 'px';
    formStages[1].classList.remove('stages__circle_disactive');
    formStages[1].classList.add('stages__circle_active');
    formStages[2].classList.remove('stages__circle_disactive');
    formStages[2].classList.add('stages__circle_active');
    formStages[3].classList.remove('stages__circle_disactive');
    formStages[3].classList.add('stages__circle_active');
    formStages[4].classList.remove('stages__circle_disactive');
    formStages[4].classList.add('stages__circle_active');
    stagesBarActive.style.width = '600px';
};



formStages[0].onclick = function(){
    formCheckin[0].style.left = 0 + 'px';
    formStages[1].classList.remove('stages__circle_active');
    formStages[2].classList.remove('stages__circle_active');
    formStages[3].classList.remove('stages__circle_active');
    formStages[4].classList.remove('stages__circle_active');
    formStages[1].classList.add('stages__circle_disactive');
    formStages[2].classList.add('stages__circle_disactive');
    formStages[3].classList.add('stages__circle_disactive');
    formStages[4].classList.add('stages__circle_disactive');
    stagesBarActive.style.width = '0px';
};
formStages[1].onclick = function(){
    formCheckin[0].style.left = -580 + 'px';
    formStages[1].classList.remove('stages__circle_disactive');
    formStages[1].classList.add('stages__circle_active');
    formStages[2].classList.remove('stages__circle_active');
    formStages[3].classList.remove('stages__circle_active');
    formStages[4].classList.remove('stages__circle_active');
    formStages[2].classList.add('stages__circle_disactive');
    formStages[3].classList.add('stages__circle_disactive');
    formStages[4].classList.add('stages__circle_disactive');
    stagesBarActive.style.width = '155px';
};
formStages[2].onclick = function(){
    formCheckin[0].style.left = -580*2 + 'px';
    formStages[1].classList.remove('stages__circle_disactive');
    formStages[1].classList.add('stages__circle_active');
    formStages[2].classList.remove('stages__circle_disactive');
    formStages[2].classList.add('stages__circle_active');
    formStages[3].classList.remove('stages__circle_active');
    formStages[4].classList.remove('stages__circle_active');
    formStages[3].classList.add('stages__circle_disactive');
    formStages[4].classList.add('stages__circle_disactive');
    stagesBarActive.style.width = '300px';
};
formStages[3].onclick = function(){
    formCheckin[0].style.left = -580*3 + 'px';
    formStages[1].classList.remove('stages__circle_disactive');
    formStages[1].classList.add('stages__circle_active');
    formStages[2].classList.remove('stages__circle_disactive');
    formStages[2].classList.add('stages__circle_active');
    formStages[3].classList.remove('stages__circle_disactive');
    formStages[3].classList.add('stages__circle_active');
    formStages[4].classList.remove('stages__circle_active');
    formStages[4].classList.add('stages__circle_disactive');
    stagesBarActive.style.width = '455px';
};
formStages[4].onclick = function(){
    formCheckin[0].style.left = -580*4 + 'px';
    formStages[1].classList.remove('stages__circle_disactive');
    formStages[1].classList.add('stages__circle_active');
    formStages[2].classList.remove('stages__circle_disactive');
    formStages[2].classList.add('stages__circle_active');
    formStages[3].classList.remove('stages__circle_disactive');
    formStages[3].classList.add('stages__circle_active');
    formStages[4].classList.remove('stages__circle_disactive');
    formStages[4].classList.add('stages__circle_active');
    stagesBarActive.style.width = '600px';
};