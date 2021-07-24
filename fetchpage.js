function fetchPage(pgName) {
    fetch(pgName).then(function (response) {
        response.text().then(function (text) {
            document.querySelector('.maincontent').innerHTML = text;
        });
    });
}
