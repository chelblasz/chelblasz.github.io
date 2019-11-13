const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(response => {
        response.json()
            .then(
                response => {
                    const prophets = response.prophets;
                    prophets.forEach(
                        (prophet) => {
                            let article = document.createElement('article');
                            let h2 = document.createElement('h2');

                            h2.textContent = prophet.name + ' ' + prophet.lastname;

                            article.appendChild(h2);

                            //add date of birth
                            let birthdatediv = document.createElement('div');

                            let birthdatelabel = document.createElement('label');
                            birthdatelabel.textContent = 'Day of Birth: ';

                            let birthdateSpan = document.createElement('span');
                            birthdateSpan.textContent = prophet.birthdate;

                            birthdatediv.appendChild(birthdatelabel);
                            birthdatediv.appendChild(birthdateSpan);

                            article.appendChild(birthdatediv);


                            //add place of birth
                            let birthplacediv = document.createElement('div');

                            let birthplacelabel = document.createElement('label');
                            birthplacelabel.textContent = 'Place of Birth: ';

                            let birthplaceSpan = document.createElement('span');
                            birthplaceSpan.textContent = prophet.birthplace;

                            birthplacediv.appendChild(birthplacelabel);
                            birthplacediv.appendChild(birthplaceSpan);

                            article.appendChild(birthplacediv);

                            //add an image

                            let imageDiv = document.createElement('div');
                            let image = document.createElement('img');

                            image.setAttribute('src', prophet.imageurl);
                            image.setAttribute('alt', prophet.name + ' ' + prophet.lastname + ' - ' + prophet.order);

                            imageDiv.appendChild(image);

                            article.appendChild(image);

                            document.querySelector('section.prophets').appendChild(article);

                        });
                });
    });