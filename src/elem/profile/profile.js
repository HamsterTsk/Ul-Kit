const css = require('./profile.styl');

const profileImage = document.getElementById('profile__image'),
    profileBase = document.getElementById('profile__base'),
    profile = document.getElementById('profile');
profileImage.onmouseenter = function() {
    profileBase.style.opacity = '1';
};

profile.onmouseleave = function() {
    profileBase.style.opacity = '0';
};
