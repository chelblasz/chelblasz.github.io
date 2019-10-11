
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

function toggleMenu(){
    
}