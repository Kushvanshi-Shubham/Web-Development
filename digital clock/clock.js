// For representing time 
function time() {
    var _time = new Date();
    var h = _time.getHours();     //Hours
    var m = _time.getMinutes();   //Minutes
    var s = _time.getSeconds();   //Seconds
    var session = "AM"

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM"
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    document.getElementById("Digital_clock").innerHTML = h + ":" + m + ":" + s + " " + session;
    setTimeout(time, 1000);
}

//For representing date and day in alpha numeric form
function date() {
    var date = new Date();
    var _date = date.getDate();                                                                                    //Day
    var month = date.getMonth();
    var monthlist = ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY", "AUG", "SEP", "OCT", "NOV", "DEC"]         //Month
    var day = date.getDay();
    var daylist = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]                                                //Day
    document.getElementById("Digital_clock_date",).innerHTML = daylist[day] + ", " + _date + ' ' + monthlist[month]
}
time();
date();