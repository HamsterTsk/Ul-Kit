var messageButton = document.getElementById('msg-btn');

messageButton.onmousedown = function() {
    messageButton.style.boxShadow = '0px 0px 0px #28a290';
    messageButton.style.marginTop = 3 + 'px'
};
messageButton.onmouseup = function() {
    messageButton.style.boxShadow = '0px 3px 1px #28a290';
    messageButton.style.marginTop = 0 + 'px'
};