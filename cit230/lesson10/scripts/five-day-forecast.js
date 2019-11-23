var todayString;

const today = new Date();
var weekDayDate = today.getDay();
//get name of the day
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var weekDay = daysOfWeek[weekDayDate];

todayString = weekDay + ", ";

//__________________________________________________________________________________________________ 
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
const apiForecastURL = 'https://api.openweathermap.org/data/2.5/forecast/?id=5604473&appid=a4de96eb4c9cdd8c0998596fbb5ae04d&units=imperial';

fetch(apiForecastURL)
    .then(
        (response) => response.json()
    )
    .then(
        (forecasts) => {
            let tomorrowDate = new Date();
            tomorrowDate.setDate(tomorrowDate.getDate() + 1);
            let dateString = getDateString(tomorrowDate);
            let hourString = "18:00:00";
            let counter = 1;

            //loop through results
            forecasts.list.forEach(
                (forecast) => {

                    if (forecast.dt_txt.includes(dateString) &&
                        forecast.dt_txt.includes(hourString)) {

                        const element = document.getElementById(`temp${counter}`);
                        element.innerHTML = forecast.main.temp + '&deg';

                        counter += 1;
                        tomorrowDate.setDate(tomorrowDate.getDate() + 1);
                        dateString = getDateString(tomorrowDate);
                    }
                }
            )

        });

function getDateString(date) {

let dateString =
    //  find full year
    date.getFullYear() + "-" +
    //get month
    (date.getMonth() + 1) + "-" +
    //get day
    date.getDate();
    
    return dateString;
}