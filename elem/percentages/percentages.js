var percentages = document.getElementById('percentages');
percentages.onmouseenter = function () {
    document.onmousewheel = function() {
        return false;
    }
};
percentages.onmouseleave = function () {
    document.onmousewheel = function() {
        return true;
    }
};
percentages.onmousewheel = function (ev) {
    var pct = document.getElementById('percentages__quatity');
    var pctCircle = document.getElementById('percentages__scale_active');
    var dataPct = pct.dataset.pct;
    var r = pctCircle.getAttribute('r');
    console.log(r);
    var c = Math.PI*(r*2);
    if ( ev.deltaY < 0 ) {
        if ( dataPct == 100 ) {
            return;
        } else {
            ++dataPct;
            var dsh = ((100-dataPct)/100)*c;
            pct.dataset.pct = dataPct;
            pctCircle.style.strokeDashoffset = dsh;
        }

    } else if ( ev.deltaY > 0 ) {
        if ( dataPct == 0 ) {
            return;
        } else {
            --dataPct;
            var dsh = ((100-dataPct)/100)*c;
            pct.dataset.pct = dataPct;
            pctCircle.style.strokeDashoffset = dsh;
        }
    }
};