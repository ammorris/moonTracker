var decimalPhase = SunCalc.getMoonIllumination(new Date()).phase;
var phase = decimalToPhase(decimalPhase);
var infoBox = document.getElementsByClassName("info")[0];

// Display messages
var message1 = document.createElement('p');
message1.innerHTML = "&#9907; Current moon phase is " + decimalPhase.toFixed(2) + " &#9910;";
infoBox.appendChild(message1);

var message2 = document.createElement('p');
message2.innerHTML = phase;
infoBox.appendChild(message2);

var image = document.createElement('img');
image.src = getPhaseImg(decimalPhase);
infoBox.appendChild(image);

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

// // A function to return the approximate current lunar phase
// function getPhase(decimalPhase) {
//     var range1 = decimalPhase >= 0.0 && decimalPhase < 0.1;
//     var range2 = decimalPhase >= 0.1 && decimalPhase < 0.2;
//     var range3 = decimalPhase >= 0.2 && decimalPhase < 0.3;
//     var range4 = decimalPhase >= 0.3 && decimalPhase < 0.4;
//     var range5 = decimalPhase >= 0.4 && decimalPhase < 0.55;
//     var range6 = decimalPhase >= 0.55 && decimalPhase < 0.7;
//     var range7 = decimalPhase >= 0.7 && decimalPhase < 0.8;
//     var range8 = decimalPhase >= 0.8 && decimalPhase <= 1.0;

//     if (range1) { return "New Moon"; } 
//     else if (range2) { return "Waxing Crescent"; } 
//     else if (range3) { return "First Quarter"; } 
//     else if (range4) { return "Waxing Gibbous"; } 
//     else if (range5) { return "Full Moon"; }
//     else if (range6) { return "Waning Gibbous"; } 
//     else if (range7) { return "Last Quarter"; } 
//     else if (range8) { return "Waning Crescent"; }
//     return error;
// }

// var message1 = document.createElement('p');
// message1.innerHTML = "&#9907; Current moon phase is " + decimalPhase.toFixed(2) + " &#9910;";
// document.getElementsByClassName("info")[0].appendChild(message1);
// var message2 = document.createElement('p');
// message2.innerHTML = phase;
// document.getElementsByClassName("info")[0].appendChild(message2);

// var image = document.createElement('img');
// var displayBox = document.getElementsByClassName("info")[0];

// if (phase.toLowerCase() == "new moon") {
//     image.src = "img/newMoon.svg";
//     displayBox.appendChild(image);
// }

// else if (phase.toLowerCase() == "waxing crescent") {
//     image.src = "img/waxingCrescent.svg";
//     displayBox.appendChild(image);
// }

// else if (phase.toLowerCase() == "first quarter") {
//     image.src = "img/firstQuarter.svg";
//     displayBox.appendChild(image);
// }

// else if (phase.toLowerCase() == "waxing gibbous") {
//     image.src = "img/waxingGibbous.svg";
//     displayBox.appendChild(image);
// }

// else if (phase.toLowerCase() == "full moon") {
//     image.src = "img/fullMoon.svg";
//     displayBox.appendChild(image);
// }

// else if (phase.toLowerCase() == "waning gibbous") {
//     image.src = "img/waningGibbous.svg";
//     displayBox.appendChild(image);
// }

// else if (phase.toLowerCase() == "las quarter") {
//     image.src = "img/lastQuarter.svg";
//     displayBox.appendChild(image);
// }

// else if (phase.toLowerCase() == "waning crescent") {
//     image.src = "img/waningCrescent.svg";
//     displayBox.appendChild(image);
// }