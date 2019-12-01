function getFiveDayForecast(cityId) {
var weekDay = daysOfWeek[weekDayDate];

todayString = weekDay + ", ";

//  function getWeather()
const apiForecastURL = 'https://api.openweathermap.org/data/2.5/forecast/?id=' + cityId + '&appid=a4de96eb4c9cdd8c0998596fbb5ae04d&units=imperial';

fetch(apiForecastURL)
    .then(
        (response) => response.json()
    )
    .then(
        (forecasts) => {

            let hourString = "18:00:00";
            let counter = 1;

            //loop through results
            forecasts.list.forEach(
                (forecast) => {

                    if (forecast.dt_txt.includes(hourString)) {

                            // add temp
                            const element = document.getElementById(`temp${counter}`);
                            element.innerHTML = forecast.main.temp + '&deg';
                           
                            // add day of week
                            let tomorrowDate = new Date(forecast.dt_txt);

                            const dayElement = document.getElementById(`day${counter}`);
                            dayElement.innerHTML = daysOfWeek[tomorrowDate.getDay()];

                            // add image
                            const imageElement = document.getElementById(`img${counter}`);
                            imageElement.setAttribute('src', 'https://openweathermap.org/img/w/' + forecast.weather[0].icon + ".png");
                            imageElement.setAttribute('alt', forecast.weather[0].main);
                           
                            //increment variables 
                            counter += 1;
                        }
                    }
                )

            });
        }
 