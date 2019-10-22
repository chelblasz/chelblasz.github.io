var currentDateString;

var currentDate = new Date();
//get day of week


var weekDayDate = currentDate.getDay();
//get name of the day
var daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

var weekDay = daysOfWeek[weekDayDate];

currentDateString = weekDay + ", ";

currentDateString += currentDate.getDate();
//get name of the month
var months = ["January","February","March","April","May","June","july","August","September","October","November","December"];

var monthNumber = currentDate.getMonth();

var month = months[monthNumber];

currentDateString += " " + month;

currentDateString += " " + currentDate.getFullYear();

document.getElementById("currentDate").innerHTML = currentDateString;


// create 5 day forecast
let currentDay = weekDayDate;

for (let i = 1; i < 6; i++){
    //add one day to current day 
    currentDay++;


//if current day is greater than 6 (Saturday), reset to 0
if (currentDay > 6) {
    currentDay = 0;
}

//assign value to placeholder in HTML
const element = document.getElementById(`day${i}`);

element.innerHTML = daysOfWeek[currentDay];

}

//show hide pancake
if(weekDayDate === 5) {
    document.getElementById("pancake").removeAttribute("hidden");
}