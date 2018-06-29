// var prof2Base = document.getElementById('prof2-img');
// var prof2 = document.getElementById('profile2');
// prof2Base.onmouseenter = function() {
//     document.getElementById('prof2-base-full').style.opacity = '1';
// };
// prof2.onmouseleave = function() {
//     document.getElementById('prof2-base-full').style.opacity = '0';
// };

var profileImage = document.getElementById('profile__image'),
    profileBase = document.getElementById('profile__base'),
    profile = document.getElementById('profile');
profileImage.onmouseenter = function() {
    profileBase.style.opacity = '1';
};
profile.onmouseleave = function() {
    profileBase.style.opacity = '0';
};