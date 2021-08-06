window.onload = function () {

    var nav = document.getElementById('nav_main');
//    var icon = document.getElementById('menu_icon');
    var show = function (elem) {
        elem.style.display = 'flex';
    };
    var hide = function (elem) {
        elem.style.display = 'none';
    };
    
    function rsWidth(elem) {
        if (window.innerWidth >= 800) {
            show(elem);
        } else {
            hide(elem);
        }
    }
    
//    var clickToggle = function(click) {
//        if (nav.style.display == 'none') {
//            nav.style.height = 'auto';
//            nav.style.overflow = 'visible';
//        } else {
//            nav.style.
//        }
//    };
    
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