const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(response => {
        response.json()
            .then(
                response => {
                    const towns = response.towns;

                    towns.forEach(
                        (town) => {
                            if (town.name.toLowerCase() === 'fish haven') {
                                // fish haven
                                document.querySelector('#fishHavenMotto')
                                    .textContent = town.motto;

                                document.querySelector('#fishHavenYearFounded')
                                    .textContent = town.yearFounded;

                                document.querySelector('#fishHavenCurrentPopulation')
                                    .textContent = town.currentPopulation;

                                document.querySelector('#fishHavenAverageRainfall')
                                    .textContent = town.averageRainfall;

                                document.querySelector('#fishHavenImage')
                                    .setAttribute('src', 'images/' + town.photo);


                            } else if (town.name.toLowerCase() === 'preston') {
                                // Preston
                                document.querySelector('#prestonMotto')
                                    .textContent = town.motto;

                                document.querySelector('#prestonYearFounded')
                                    .textContent = town.yearFounded;

                                document.querySelector('#prestonCurrentPopulation')
                                    .textContent = town.currentPopulation;

                                document.querySelector('#prestonAverageRainfall')
                                    .textContent = town.averageRainfall;

                                document.querySelector('#prestonImage')
                                    .setAttribute('src', 'images/' + town.photo);

                            } else if (town.name.toLowerCase() === 'soda springs') {
                                // Soda springs
                                document.querySelector('#sodaSpringsMotto')
                                    .textContent = town.motto;

                                document.querySelector('#sodaSpringsYearFounded')
                                    .textContent = town.yearFounded;

                                document.querySelector('#sodaSpringsCurrentPopulation')
                                    .textContent = town.currentPopulation;

                                document.querySelector('#sodaSpringsAverageRainfall')
                                    .textContent = town.averageRainfall;

                                document.querySelector('#sodaSpringsImage')
                                    .setAttribute('src', 'images/' + town.photo);
                            }
                        }
                    );
                }
            )
    });