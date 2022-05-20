var decimalPhase = SunCalc.getMoonIllumination(new Date()).phase;
var phase = decimalToPhase(decimalPhase);
var infoBox = document.getElementsByClassName("info")[0];
const clock = document.getElementById("clock");
const inputBar = document.getElementById('myTextInput');
const myButton = document.getElementById('myButton');

// Display messages
var message1 = document.createElement('p');
message1.innerHTML = "&#9907; Current moon phase is " + (decimalPhase.toFixed(2) * 100) + "%" + " &#9910;";
infoBox.appendChild(message1);

var message2 = document.createElement('p');
message2.innerHTML = phase;
infoBox.appendChild(message2);

var image = document.createElement('img');
image.src = getPhaseImg(decimalPhase);
infoBox.appendChild(image);

myButton.onclick = function() {
    var searchText = inputBar.value;
    // alert("At this point, a Google search for " + searchText + " should pop open.");
    var searchString = "https://www.google.com/search?q=" + searchText;
    // alert("Its url should read " + searchString + ".");
    window.open(searchString, "_self");
}

window.onkeydown = function(key) {
    if(key.keyCode == 13) {
        myButton.click();
    }
}

function decimalToPhase(decimalPhase) {
    var degrees = decimalPhase * 360;
    var range = 360/8;
    var low = 360 - range/2;
    var high = (low + range) % 360;
    var angles = ["New Moon", "Waxing Crescent", "First Quarter", "Waxing Gibbous", 
                  "Full Moon", "Waning Gibbous", "Last Quarter", "Waning Crescent"];
    
    if (degrees >= low || degrees < high) { return "New Moon"; }
    for (angle in angles) {
        if (degrees >= low && degrees < high) { return angles[angle]; } 
        low = (low + range) % 360;
        high = (high + range) % 360;
    }
}

// Returns a string to be used as an img src
function getPhaseImg(decimalPhase) {
    var degrees = decimalPhase * 360;
    var range = 360/30;
    var low = 360 - range/2;
    var high = (low + range) % 360;
    var fileName = "img/moon phase/";
    if (degrees >= low || degrees < high) { fileName += 0; }
    for (var i = 0; i < 30; i++) {
        if (degrees >= low && degrees < high) { fileName += i; } 
        low = (low + range) % 360;
        high = (high + range) % 360;
    }
    fileName += ".png"
    return fileName;
}

function blink() {
    var colon = document.getElementById("colon");
    colon.style.visibility = colon.style.visibility == "hidden" ? "visible" : "hidden";
}

document.body.onload = function() {
    updateClock();
    setInterval("updateClock()", 1000);
    setInterval("blink()", 500);
}

function updateClock() {
    var today = new Date();
    var hours = today.getHours() % 12;
    if (hours == 0) { hours = 12; }
    var minutes = today.getMinutes();
    var timeOfDay = (today.getHours()) < 12 ? "午前" : "午後";
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    var time = hours + "<span id='colon'>:</span>" + minutes + timeOfDay;
    document.getElementById('clock').innerHTML = time;
}