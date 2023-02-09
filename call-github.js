const XMLHttpRequest = require('xhr2');

// /* connect to test api and return json response */
// xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);
// xhr.onreadystatechange = function() {
//   if (xhr.readyState == 4) {
//     var data = JSON.parse(xhr.responseText);
//     console.log(data);
//   }
// }
// xhr.send();

/* javascript code to connect to github site */
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.github.com/users/james-priest', true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    var data = JSON.parse(xhr.responseText);
    console.log(data);
  }
};
xhr.send();



// const request = require('request');
// const fs = require('fs');
// const url = 'https://api.github.com/repos/request/request';

// var xhr = new XMLHttpRequest();
// xhr.open('GET', url, true);
// xhr.setRequestHeader('Authorization', 'Basic ,' + Buffer.toString('username:password'));
// xhr.send();

// /* how to process the response from xhr.send() */
// xhr.onreadystatechange = function() {
//   if (xhr.readyState == 4) {
//     if (xhr.status == 200) {
//       console.log(xhr.responseText);
//     } else {
//       console.log('Error: ' + xhr.status);
//     }
//   }
// };


// request(url, function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     try {
//       const parsedData = JSON.parse(body);
//       console.log(parsedData.stargazers_count + " Stars");
//       console.log(parsedData.forks_count + " Forks");
//     } catch (error) {
//       console.log(error)
//     }
//   } else {
//     console.log(response.statusCode)
//   }
// });