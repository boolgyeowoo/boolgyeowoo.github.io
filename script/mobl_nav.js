window.onload = function () {

    var nav = document.getElementById('nav_main');
    var show = function (elem) {
        elem.style.display = 'flex';
    };
    var hide = function (elem) {
        elem.style.display = 'none';
    };
/*    var rsWidth = function () {
        if (window.innerWidth >= 800) {
            show(nav);
        } else {
            hide(nav);
        }
    };
*/

    if (window.innerWidth >= 800) {
        show(nav);
        window.onresize = function () {
            if (window.innerWidth >= 800) {
                show(nav);
            } else {
                hide(nav);
            }
        };
    } else {
        hide(nav);
        window.onresize = function () {
            if (window.innerWidth >= 800) {
                show(nav);
            } else {
                hide(nav);
            }
        };
    }
};