var sound = new Audio("https://www.freespecialeffects.co.uk/soundfx/clocks/clock_chime.wav");
sound.loop = true;
var czas = document.getElementById('czas');
var currentTime = setInterval(function(){
    var date = new Date();
    var hours = (12 - (date.getHours()));
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = (date.getHours()) < 12 ? 'przed południem' : 'po południu';
    if (hours < 0) {
        hours = hours * -1;
    } else if (hours == 0) {
        hours = 12;
    } else {
        hours = hours;
    }
    czas.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds) + " " + ampm;
},1000);
function addZero(t) {
    return (t < 10) ? "0" + t : t;
}
function hoursMenu(){
    var select = document.getElementById('alarmhrs');
    var hrs = 12;
    for (i=1; i <= hrs; i++) {
        select.options[select.options.length] = new Option( i < 10 ? "0" + i : i, i);
    }}
hoursMenu();
function minMenu(){
    var select = document.getElementById('alarmmins');
    var min = 59;
    for (i=0; i <= min; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
    }}
minMenu();
function secMenu(){
    var select = document.getElementById('alarmsecs');
    var sec = 59;

    for (i=0; i <= sec; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
    }}
secMenu();
function alarmSet() {
    var hr = document.getElementById('alarmhrs');
    var min = document.getElementById('alarmmins');
    var sec = document.getElementById('alarmsecs');
    var ap = document.getElementById('ampm');
    var selectedHour = hr.options[hr.selectedIndex].value;
    var selectedMin = min.options[min.selectedIndex].value;
    var selectedSec = sec.options[sec.selectedIndex].value;
    var selectedAP = ap.options[ap.selectedIndex].value;
    var alarmTime = addZero(selectedHour) + ":" + addZero(selectedMin) + ":" + addZero(selectedSec) + selectedAP;
    console.log('alarmTime:' + alarmTime);

    document.getElementById('alarmhrs').disabled = true;
    document.getElementById('alarmmins').disabled = true;
    document.getElementById('alarmsecs').disabled = true;
    document.getElementById('ampm').disabled = true;

    var czas = document.getElementById('czas');

    setInterval(function(){

        var date = new Date();
        var hours = (12 - (date.getHours()));
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var ampm = (date.getHours()) < 12 ? 'AM' : 'PM';
        if (hours < 0) {
            hours = hours * -1;
        } else if (hours == 0) {
            hours = 12;
        } else {
            hours = hours;
        }
        var currentTime = czas.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds) + "" + ampm;
        if (alarmTime == currentTime) {
            sound.play();
        }
    },1000);
}

function alarmClear() {
    document.getElementById('alarmhrs').disabled = false;
    document.getElementById('alarmmins').disabled = false;
    document.getElementById('alarmsecs').disabled = false;
    document.getElementById('ampm').disabled = false;
    sound.pause();
}j