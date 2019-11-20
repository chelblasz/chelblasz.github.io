var currentDateString;

var currentDate = new Date();
//get day of week


var weekDayDate = currentDate.getDay();
//get name of the day
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var weekDay = daysOfWeek[weekDayDate];

currentDateString = weekDay + ", ";

currentDateString += currentDate.getDate();
//get name of the month
var months = ["January", "February", "March", "April", "May", "June", "july", "August", "September", "October", "November", "December"];

var monthNumber = currentDate.getMonth();

var month = months[monthNumber];

currentDateString += " " + month;

currentDateString += " " + currentDate.getFullYear();

document.getElementById("currentDate").innerHTML = currentDateString;


// create 5 day forecast
let currentDay = weekDayDate;

for (let i = 1; i < 6; i++) {
    //add one day to current day 
    currentDay++;


    //if current day is greater than 6 (Saturday), reset to 0
    if (currentDay > 6) {
        currentDay = 0;
    }

    //assign value to placeholder in HTML
    const element = document.getElementById(`day${i}`);

    // element.innerHTML = daysOfWeek[currentDay];

}

// FETCH THE DATA
//  function getWeather()
const apiForecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=a4de96eb4c9cdd8c0998596fbb5ae04d&units=imperial';

fetch(apiForecastURL)
    .then(
        (response) => response.json()
    )
    .then(
        (forecasts) => {

            //debugging console.log
            console.log(forecasts);
            //_____________________________________________________________ 

            let tomorrowDate = new Date();
            tomorrowDate.setDate(tomorrowDate.getDate() + 1);

            let dateString =
                //find full year
                tomorrowDate.getFullYear() + "-" +

                //get month
                (tomorrowDate.getMonth() + 1) + "-" +
                //get day
                tomorrowDate.getDate();

                //get hour
                let hourString = "18:00:00";

                //debugging
                console.log(dateString);

                let counter = 1;

                //loop through results
                forecasts.list.forEach(
                (forecast) => {

                    if (forecast.dt_txt.includes(dateString) &&
                    forecast.dt_txt.includes(hourString)) { 
                    
                     //DEBUGGING
                    console.log(forecast.main.temp);
                            

                    const element = document.getElementById(`temp${counter}`);
                    element.innerHTML = forecast.main.temp + '&deg';

                    counter += 1;
                }
            }
            )

        });