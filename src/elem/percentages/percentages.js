import './percentages.styl';

const percentages = document.getElementById('percentages');
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
    let pct = document.getElementById('percentages__quatity'),
        pctCircle = document.getElementById('percentages__scale_active'),
        dataPct = pct.dataset.pct,
        r = pctCircle.getAttribute('r'),
        c = Math.PI*(r*2);
    if ( ev.deltaY < 0 ) {
        if ( dataPct == 100 ) {
            return;
        } else {
            ++dataPct;
            let dsh = ((100-dataPct)/100)*c;
            pct.dataset.pct = dataPct;
            pctCircle.style.strokeDashoffset = dsh;
        }

    } else if ( ev.deltaY > 0 ) {
        if ( dataPct == 0 ) {
            return;
        } else {
            --dataPct;
            let dsh = ((100-dataPct)/100)*c;
            pct.dataset.pct = dataPct;
            pctCircle.style.strokeDashoffset = dsh;
        }
    }
};