// these variables hold reference to the clock's arms;
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

// create a Date Instance, reppresenting the current Time and Date.
let date = new Date();

// get the current hour, minutes and seconds, with Data Object Methods.
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

//convert current hour, minutes and seconds into degrees
/* the following variables will eventually store the degrees I want to position the clock's arms */
let hrPosition = (hr * 360 / 12) + (min * 360 / 60 / 12);
let minPosition = (min * 360 / 60) + (sec * 360 / 60 / 60);
let secPosition = sec * 360 / 60;

//this function syncs the clock with the current time of the data object;
function syncClock(){
    // update the Date Instance, reppresenting the current Time and Date.
    date = new Date();
    
    // update the current hour, minutes and seconds, with Data Object Methods.
    hr = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();    

    //convert current hour, minutes and seconds into degrees
    /* the following variables will eventually store the degrees I want to position the clock's arms */
    hrPosition = (hr * 360 / 12) + (min * 360 / 60 / 12);
    minPosition = (min * 360 / 60) + (sec * 360 / 60 / 60);
    secPosition = sec * 360 / 60;
}

/* this function runs the clock on the basis of JS engine;
    it risks to go async with the real time, thus I added above the syncClock function; */
function runClock() {
    secPosition += 6;
    minPosition += 6/60;
    hrPosition += 30/60/60;    

    // rotate the clock's arms
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

//interval of 1 sec to run the clock with JS engine;
setInterval(function() {
    runClock();
  }, 1000);

// interval of 10 minutes to sync the clock with current time;
setInterval(function() {
    syncClock();
  }, 600000);