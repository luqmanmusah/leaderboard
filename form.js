const request = new XMLHttpRequest();
const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/aQeQLOEMph5dw2BhyuYH/scores/'

function send(e, nameInput, scoreInput) {
    e.preventDefault();
    const params = `user=${nameInput.value}&score=${scoreInput.value}`;
    request.open('POST', requestURL, true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.onreadystatechange = function () {
      if (request.readyState === 4 && request.status === 200) {
        alert(request.responseText);
      }
    };
    request.send(params);
  }