

var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=brampton&limit=5&appid=a191b752c8b3165b368c0c74611ddf61';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      // TODO: Loop through the data and generate your HTML
      for (let i = 0; i < data.length; i++) {
        // Do something with data[i]
        var userName = document.createElement('h3');
        var issueTitle = document.createElement('p');
        userName.textContent = data[i].user.login;
        issueTitle.textContent = data[i].title;
        issueContainer.append(userName);
        issueContainer.append(issueTitle);
      }
    
    
    });
}
fetchButton.addEventListener('click', getApi);