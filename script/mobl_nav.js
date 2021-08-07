var moblNav = function () {

    var nav = document.getElementById('nav_main');
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
    }
    };