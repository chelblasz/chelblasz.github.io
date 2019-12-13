// fetch('json/temples.json')
const requestURL = 'json/temples.json';

fetch(requestURL)
    .then(response => {
        response.json()
            .then(
                response => {
                    const temples = response.temples;

                    temples.forEach(
                        (temple) => {
                            if (temple.name === 'Payson Utah Temple') {
                                // Payson Utah Temple
                                document.querySelector('#paysonUtahTempleAddress')
                                    .textContent = temple.address;

                                document.querySelector('#paysonUtahTempleNumber')
                                    .textContent = temple.telephone;

                                document.querySelector('#paysonUtahTempleServices')
                                    .textContent = temple.services;

                                document.querySelector('#paysonUtahTempleOrdinace')
                                    .textContent = temple.ordinanceSchedule;

                                document.querySelector('#paysonUtahTempleClosure')
                                    .textContent = temple.templeClosureSchedule;

                                document.querySelector('#paysonUtahTempleHistory')
                                    .textContent = temple.history;

                                document.querySelector('#paysonUtahTempleImg')
                                    .setAttribute('src', 'images/' + temple.photo);


                            } else if (temple.name === 'Mérida Mexico Temple') {
                                // Mérida Mexico Temple
                                document.querySelector('#méridaMexicoTempleAddress')
                                    .textContent = temple.address;

                                document.querySelector('#méridaMexicoTempleNumber')
                                    .textContent = temple.telephone;

                                document.querySelector('#méridaMexicoTempleServices')
                                    .textContent = temple.services;

                                document.querySelector('#méridaMexicoTempleOrdinace')
                                    .textContent = temple.ordinanceSchedule;

                                document.querySelector('#méridaMexicoTempleClosure')
                                    .textContent = temple.templeClosureSchedule;

                                document.querySelector('#méridaMexicoTempleHistory')
                                    .textContent = temple.history;

                                document.querySelector('#méridaMexicoTempleImg')
                                    .setAttribute('src', 'images/' + temple.photo);

                            } else if (temple.name === 'Bern Switzerland Temple') {
                                // Bern Switzerland Temple
                                document.querySelector('#bernSwitzerlandTempleAddress')
                                    .textContent = temple.address;

                                document.querySelector('#bernSwitzerlandTempleNumber')
                                    .textContent = temple.telephone;

                                document.querySelector('#bernSwitzerlandTempleServices')
                                    .textContent = temple.services;

                                document.querySelector('#bernSwitzerlandTempleOrdinace')
                                    .textContent = temple.ordinanceSchedule;

                                document.querySelector('#bernSwitzerlandTempleClosure')
                                    .textContent = temple.templeClosureSchedule;

                                document.querySelector('#bernSwitzerlandTempleHistory')
                                    .textContent = temple.history;

                                document.querySelector('#bernSwitzerlandTempleImg')
                                    .setAttribute('src', 'images/' + temple.photo);

                                } else if (temple.name === 'Cardston Alberta Temple') {
                                    // Cardston Alberta Temple
                                    document.querySelector('#cardstonAlbertaTempleAddress')
                                        .textContent = temple.address;
    
                                    document.querySelector('#cardstonAlbertaTempleNumber')
                                        .textContent = temple.telephone;
    
                                    document.querySelector('#cardstonAlbertaTempleServices')
                                        .textContent = temple.services;
    
                                    document.querySelector('#cardstonAlbertaTempleOrdinace')
                                        .textContent = temple.ordinanceSchedule;
    
                                    document.querySelector('#cardstonAlbertaTempleClosure')
                                        .textContent = temple.templeClosureSchedule;
    
                                    document.querySelector('#cardstonAlbertaTempleHistory')
                                        .textContent = temple.history;
    
                                    document.querySelector('#cardstonAlbertaTempleImg')
                                        .setAttribute('src', 'images/' + temple.photo);

                                        console.log("cardstonAlbertaTempleImg");
                            }
                        }
                    );
                }
            )
    });