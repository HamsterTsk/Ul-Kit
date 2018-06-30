var date = new Date();
Date.prototype.daysInMonth = function(month) {
    if ( month == 0) return 31;
    return 33 - new Date(this.getFullYear(), month || this.getMonth(), 33).getDate();
};
Date.prototype.daysOfTheWeek = function(month, date) {
    return new Date(this.getFullYear(), month, date).getDay();
};


var calendar = {};


calendar.month = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER"
];
calendar.weekday = {
    mon: [],
    tue: [],
    wed: [],
    thu: [],
    fri: [],
    sat: [],
    sun: []
};
calendar.spareWeekdayPlus = {
    mon: [],
    tue: [],
    wed: [],
    thu: [],
    fri: [],
    sat: [],
    sun: []
};
calendar.spareWeekdayMinus = {
    mon: [],
    tue: [],
    wed: [],
    thu: [],
    fri: [],
    sat: [],
    sun: []
};
calendar.numbWeekDay = [0,1,2,3,4,5,6];
calendar.restor = function() {
    calendar.weekday.mon = [];
    calendar.weekday.tue = [];
    calendar.weekday.wed = [];
    calendar.weekday.thu = [];
    calendar.weekday.fri = [];
    calendar.weekday.sat = [];
    calendar.weekday.sun = [];
    calendar.numbWeekDay = [0,1,2,3,4,5,6];
    calendar.spareWeekdayMinus.mon = [];
    calendar.spareWeekdayMinus.tue = [];
    calendar.spareWeekdayMinus.wed = [];
    calendar.spareWeekdayMinus.thu = [];
    calendar.spareWeekdayMinus.fri = [];
    calendar.spareWeekdayMinus.sat = [];
    calendar.spareWeekdayMinus.sun = [];
    calendar.spareWeekdayPlus.mon = [];
    calendar.spareWeekdayPlus.tue = [];
    calendar.spareWeekdayPlus.wed = [];
    calendar.spareWeekdayPlus.thu = [];
    calendar.spareWeekdayPlus.fri = [];
    calendar.spareWeekdayPlus.sat = [];
    calendar.spareWeekdayPlus.sun = [];
};
calendar.elem = {
    rightBtn: document.getElementsByClassName('calendar__month_right-arrow'),
    leftBtn: document.getElementsByClassName('calendar__month_left-arrow'),
    spanMth: document.getElementsByClassName('calendar__month_text'),
    spanDays: document.getElementsByClassName('calendar__head_day'),
    bodyDays: document.getElementsByClassName('calendar__days'),
    clrBtnOpen: document.getElementsByClassName('calendar__button_open'),
    clrBtnTooday: document.getElementsByClassName('calendar__button_tooday'),
    clrBody: document.getElementsByClassName('calendar__body')
};
calendar.vars = {
    mth: date.getMonth(),
    userMth: date.getMonth(),
    daysHd: date.getDate(),
    daysOfWeek: date.getDay(),
    tooday: undefined
};
calendar.daysColor = function() {
    for ( var i = 0; i < calendar.elem.bodyDays.length; i++) {
        if (calendar.elem.bodyDays[i].textContent == calendar.vars.daysHd) {
            if (calendar.elem.bodyDays[i].style.color == 'rgb(134, 134, 134)' || calendar.elem.bodyDays[i].style.color == '') {
                calendar.elem.bodyDays[calendar.vars.daysHd + 5].style.backgroundColor = "#e75735";
                calendar.elem.bodyDays[calendar.vars.daysHd + 5].style.color = "#ffffff";
                calendar.vars.tooday = i;
            }
        }
    }

};
window.onload = function() {
    calendar.daysColor();
};
calendar.today = function() {
    this.elem.spanMth[0].innerText =  this.month[this.vars.mth];
    this.elem.spanDays[0].innerText = this.vars.daysHd;
};
calendar.today();
calendar.elem.rightBtn[0].onclick = function() {
    calendar.vars.userMth++;
    if ( calendar.vars.userMth > 11 ) {
        calendar.vars.userMth = 0;
    }
    calendar.elem.spanMth[0].innerText =  calendar.month[calendar.vars.userMth];
    calendar.getDaysOfMth(calendar.vars.userMth);
    if ( calendar.vars.userMth == calendar.vars.mth ) {
        calendar.elem.bodyDays[calendar.vars.tooday].style.backgroundColor = "#e75735";
        calendar.elem.bodyDays[calendar.vars.tooday].style.color = "#ffffff";
    } else {
        calendar.elem.bodyDays[calendar.vars.tooday].style.backgroundColor = "#f2f2f2";
        calendar.elem.bodyDays[calendar.vars.tooday].style.color = "#868686";
    }
};
calendar.elem.leftBtn[0].onclick = function() {
    calendar.vars.userMth--;
    if ( calendar.vars.userMth < 0 ) {
        calendar.vars.userMth = 11;
    }
    calendar.elem.spanMth[0].innerText =  calendar.month[calendar.vars.userMth];
    calendar.getDaysOfMth(calendar.vars.userMth);
    if ( calendar.vars.userMth == calendar.vars.mth ) {
        calendar.elem.bodyDays[calendar.vars.tooday].style.backgroundColor = "#e75735";
        calendar.elem.bodyDays[calendar.vars.tooday].style.color = "#ffffff";
    } else {
        calendar.elem.bodyDays[calendar.vars.tooday].style.backgroundColor = "#f2f2f2";
        calendar.elem.bodyDays[calendar.vars.tooday].style.color = "#868686";
    }
};
calendar.correct = function() {
//-------------------mon correct----------------------
    if ( calendar.weekday.mon[0] > 1 ) {
        calendar.weekday.mon.pop();
        calendar.weekday.mon.unshift(calendar.spareWeekdayMinus.mon[calendar.spareWeekdayMinus.mon.length - 1]);
        calendar.elem.bodyDays[0].style.color = "#ffffff";
    } else {
        calendar.elem.bodyDays[0].style.color = "#868686";
    }
    if ( calendar.weekday.mon[4] < 20) {
        calendar.elem.bodyDays[28].style.color = "#ffffff";
    } else {
        calendar.elem.bodyDays[28].style.color = "#868686";
    }
    //---------------------tue correct---------------------
    if ( calendar.weekday.tue[0] > 2 ) {
        calendar.weekday.tue.pop();
        calendar.weekday.tue.unshift(calendar.spareWeekdayMinus.tue[calendar.spareWeekdayMinus.tue.length - 1]);
        calendar.elem.bodyDays[1].style.color = "#ffffff";
    } else {
        calendar.elem.bodyDays[1].style.color = "#868686";
    }
    if ( calendar.weekday.tue[4] < 20) {
        calendar.elem.bodyDays[29].style.color = "#ffffff";
    } else {
        calendar.elem.bodyDays[29].style.color = "#868686";
    }

    //----------------------wed correct----------------------
    if ( calendar.weekday.wed[0] > 3 ) {
        calendar.weekday.wed.pop();
        calendar.weekday.wed.unshift(calendar.spareWeekdayMinus.wed[calendar.spareWeekdayMinus.wed.length - 1]);
        calendar.elem.bodyDays[2].style.color = "#ffffff";
    } else {
        calendar.elem.bodyDays[2].style.color = "#868686";
    }
    if ( calendar.weekday.wed[4] < 20) {
        calendar.elem.bodyDays[30].style.color = "#ffffff";
    } else {
        calendar.elem.bodyDays[30].style.color = "#868686";
    }

    //------------------------thu correct------------------------
    if ( calendar.weekday.thu[0] > 4 ) {
        calendar.weekday.thu.pop();
        calendar.weekday.thu.unshift(calendar.spareWeekdayMinus.thu[calendar.spareWeekdayMinus.thu.length - 1]);
        calendar.elem.bodyDays[3].style.color = "#ffffff";
    } else {
        calendar.elem.bodyDays[3].style.color = "#868686";
    }
    if ( calendar.weekday.thu[4] < 20) {
        calendar.elem.bodyDays[31].style.color = "#ffffff";
    } else {
        calendar.elem.bodyDays[31].style.color = "#868686";
    }

    //-------------------------fri correct-------------------------
    if ( calendar.weekday.fri[0] > 5 ) {
        calendar.weekday.fri.pop();
        calendar.weekday.fri.unshift(calendar.spareWeekdayMinus.fri[calendar.spareWeekdayMinus.fri.length - 1]);
        calendar.elem.bodyDays[4].style.color = "#ffffff";
    } else {
        calendar.elem.bodyDays[4].style.color = "#868686";
    }
    if ( calendar.weekday.fri[4] < 20) {
        calendar.elem.bodyDays[32].style.color = "#ffffff";
    } else {
        calendar.elem.bodyDays[32].style.color = "#868686";
    }

    //--------------------------sat correct--------------------------
    if ( calendar.weekday.sat[0] > 6 ) {
        calendar.weekday.sat.pop();
        calendar.weekday.sat.unshift(calendar.spareWeekdayMinus.sat[calendar.spareWeekdayMinus.sat.length - 1]);
        calendar.elem.bodyDays[5].style.color = "#ffffff";
    } else {
        calendar.elem.bodyDays[5].style.color = "#868686";
    }
    if ( calendar.weekday.sat[4] < 20) {
        calendar.elem.bodyDays[33].style.color = "#ffffff";
    } else {
        calendar.elem.bodyDays[33].style.color = "#868686";
    }

    //-----------------------sun correct-----------------------
    if ( calendar.weekday.sun[4] < 20) {
        calendar.elem.bodyDays[34].style.color = "#ffffff";
    } else {
        calendar.elem.bodyDays[34].style.color = "#868686";
    }
};
calendar.correct();
calendar.getDaysOfMth = function(tdM) {
    for ( var i = 0; i < calendar.elem.bodyDays.length; i++ ) {
        var j = i,
            checkMthDay = date.daysInMonth(tdM),
            checkMthDayPlus = date.daysInMonth(tdM+1),
            checkMthDayMinus = date.daysInMonth(tdM-1),
            jPlus = j - checkMthDay + 1;

        j += 1;
        if ( j <= checkMthDay ) {
            if ( date.daysOfTheWeek(tdM, j) == 1 ) {
                calendar.weekday.mon.push(j);
            }
            if ( date.daysOfTheWeek(tdM, j) == 2 ) {
                calendar.weekday.tue.push(j);
            }
            if ( date.daysOfTheWeek(tdM, j) == 3 ) {
                calendar.weekday.wed.push(j);
            }
            if ( date.daysOfTheWeek(tdM, j) == 4 ) {
                calendar.weekday.thu.push(j);
            }
            if ( date.daysOfTheWeek(tdM, j) == 5 ) {
                calendar.weekday.fri.push(j);
            }
            if ( date.daysOfTheWeek(tdM, j) == 6 ) {
                calendar.weekday.sat.push(j);
            }
            if ( date.daysOfTheWeek(tdM, j) == 0 ) {
                calendar.weekday.sun.push(j);
            }
        } else {
            if ( date.daysOfTheWeek(tdM+1, jPlus) == 1 ) {
                calendar.weekday.mon.push(jPlus);
            }
            if ( date.daysOfTheWeek(tdM+1, jPlus) == 2 ) {
                calendar.weekday.tue.push(jPlus);
            }
            if ( date.daysOfTheWeek(tdM+1, jPlus) == 3 ) {
                calendar.weekday.wed.push(jPlus);
            }
            if ( date.daysOfTheWeek(tdM+1, jPlus) == 4 ) {
                calendar.weekday.thu.push(jPlus);
            }
            if ( date.daysOfTheWeek(tdM+1, jPlus) == 5 ) {
                calendar.weekday.fri.push(jPlus);
            }
            if ( date.daysOfTheWeek(tdM+1, jPlus) == 6 ) {
                calendar.weekday.sat.push(jPlus);
            }
            if ( date.daysOfTheWeek(tdM+1, jPlus) == 0 ) {
                calendar.weekday.sun.push(jPlus);
            }
        }
        if ( j <= checkMthDayPlus ) {
            if ( date.daysOfTheWeek(tdM+1, j) == 1 ) {
                calendar.spareWeekdayPlus.mon.push(j);
            }
            if ( date.daysOfTheWeek(tdM+1, j) == 2 ) {
                calendar.spareWeekdayPlus.tue.push(j);
            }
            if ( date.daysOfTheWeek(tdM+1, j) == 3 ) {
                calendar.spareWeekdayPlus.wed.push(j);
            }
            if ( date.daysOfTheWeek(tdM+1, j) == 4 ) {
                calendar.spareWeekdayPlus.thu.push(j);
            }
            if ( date.daysOfTheWeek(tdM+1, j) == 5 ) {
                calendar.spareWeekdayPlus.fri.push(j);
            }
            if ( date.daysOfTheWeek(tdM+1, j) == 6 ) {
                calendar.spareWeekdayPlus.sat.push(j);
            }
            if ( date.daysOfTheWeek(tdM+1, j) == 0 ) {
                calendar.spareWeekdayPlus.sun.push(j);
            }
        }
        if ( j <= checkMthDayMinus ) {
            if ( date.daysOfTheWeek(tdM-1, j) == 1 ) {
                calendar.spareWeekdayMinus.mon.push(j);
            }
            if ( date.daysOfTheWeek(tdM-1, j) == 2 ) {
                calendar.spareWeekdayMinus.tue.push(j);
            }
            if ( date.daysOfTheWeek(tdM-1, j) == 3 ) {
                calendar.spareWeekdayMinus.wed.push(j);
            }
            if ( date.daysOfTheWeek(tdM-1, j) == 4 ) {
                calendar.spareWeekdayMinus.thu.push(j);
            }
            if ( date.daysOfTheWeek(tdM-1, j) == 5 ) {
                calendar.spareWeekdayMinus.fri.push(j);
            }
            if ( date.daysOfTheWeek(tdM-1, j) == 6 ) {
                calendar.spareWeekdayMinus.sat.push(j);
            }
            if ( date.daysOfTheWeek(tdM-1, j) == 0 ) {
                calendar.spareWeekdayMinus.sun.push(j);
            }
        }
    }

    calendar.correct();

    for ( var d = 0; d < calendar.weekday.mon.length; d++ ) {
        calendar.elem.bodyDays[calendar.numbWeekDay[0]].innerHTML = calendar.weekday.mon[d];
        calendar.numbWeekDay[0] += 7;
    }
    for ( var d = 0; d < calendar.weekday.tue.length; d++ ) {
        calendar.elem.bodyDays[calendar.numbWeekDay[1]].innerHTML = calendar.weekday.tue[d]
        calendar.numbWeekDay[1] += 7;
    }
    for ( var d = 0; d < calendar.weekday.wed.length; d++ ) {
        calendar.elem.bodyDays[calendar.numbWeekDay[2]].innerHTML = calendar.weekday.wed[d]
        calendar.numbWeekDay[2] += 7;
    }
    for ( var d = 0; d < calendar.weekday.thu.length; d++ ) {
        calendar.elem.bodyDays[calendar.numbWeekDay[3]].innerHTML = calendar.weekday.thu[d]
        calendar.numbWeekDay[3] += 7;
    }
    for ( var d = 0; d < calendar.weekday.fri.length; d++ ) {
        calendar.elem.bodyDays[calendar.numbWeekDay[4]].innerHTML = calendar.weekday.fri[d]
        calendar.numbWeekDay[4] += 7;
    }
    for ( var d = 0; d < calendar.weekday.sat.length; d++ ) {
        calendar.elem.bodyDays[calendar.numbWeekDay[5]].innerHTML = calendar.weekday.sat[d]
        calendar.numbWeekDay[5] += 7;
    }
    for ( var d = 0; d < calendar.weekday.sun.length; d++ ) {
        calendar.elem.bodyDays[calendar.numbWeekDay[6]].innerHTML = calendar.weekday.sun[d]
        calendar.numbWeekDay[6] += 7;
    }
    calendar.restor();
};
calendar.getDaysOfMth(calendar.vars.mth);

var checkClr = 0;
calendar.elem.clrBtnOpen[0].onclick = function() {
    if ( checkClr == 0 ) {
        calendar.elem.clrBody[0].style.height = 0 + 'px';
        calendar.elem.clrBtnOpen[0].innerHTML = 'Open';
        checkClr = 1;
        return;
    } else if ( checkClr == 1 ) {
        calendar.elem.clrBody[0].style.height = 201 + 'px';
        calendar.elem.clrBtnOpen[0].innerHTML = 'Closed';
        checkClr = 0;
        return;
    }
};
calendar.elem.clrBtnTooday[0].onclick = function() {
    calendar.today();
    calendar.getDaysOfMth(calendar.vars.mth);
    calendar.daysColor();
};
