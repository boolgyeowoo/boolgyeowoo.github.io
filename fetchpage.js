fetch('navlist').then(function(response){
    response.text().then(function(text){
        var linkNames = text.split(',');
        var i = 0;
        var mainNav = '';
        while(i<linkNames.length){
            var linkName = linkNames[i];
            linkName = linkName.trim();
            var navLi = '<li><a class="nav_link" href="#!'+linkName+'" onclick="fetchPage(\''+linkName+'\')">'+linkName+'</a></li>';
            mainNav = mainNav + navLi;
            i = i + 1;
        }
        document.querySelector('#nav_main').innerHTML = mainNav;
    });
});


function fetchPage(pgName) {
    fetch(pgName).then(function (response) {
        response.text().then(function (text) {
            document.querySelector('.maincontent').innerHTML = text;
        });
    });
}
