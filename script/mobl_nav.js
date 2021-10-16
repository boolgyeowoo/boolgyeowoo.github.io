var moblNav = function () {

    var nav = document.getElementById('nav_main');
    var icon = document.getElementById('menu_icon');
    var show = function (elem) {
        elem.style.display = 'flex';
    };
    var hide = function (elem) {
        elem.style.display = 'none';
    };
    var rsWidth = function(elem) {
        if (window.innerWidth >= 800) {
            show(elem);
        } else {
            hide(elem);
        }
    }
    
    if (window.innerWidth >= 800) {
        show(nav);
        window.onresize = function() {
            rsWidth(nav);
        };
    } else {
        hide(nav);
        window.onresize = function () {
            rsWidth(nav);
        };
    };
    icon.addEventListener('click', function (event) {
        if (nav.className != 'nav_main open') {
//            show(nav);
            nav.className = 'nav_main open';
        } else {
//            hide(nav);
            nav.className = 'nav_main';
        };
    });
}
