var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
let params = new URLSearchParams(location.search);
var start = params.get('start');
var totalSeconds = 0;

if (start) {
    setInterval(setTime, 1000);
} else {
    setInterval(setTimeNull, 1000);
}

function setTimeNull() {
    ++totalSeconds
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function setTime() {
    var timeNow = Date.now()
    var totalSeconds = Math.floor((timeNow - start) / 1000);
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}