const URL = "https://v2.jokeapi.dev/joke/Programming?type=single"

fetch(URL)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        console.log(json.joke);
    })
    .catch(function (error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
    });