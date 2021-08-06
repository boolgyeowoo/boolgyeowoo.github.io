/*
jQuery(document).ready(function ($) {

    var nav = '#nav_main';

    if (window.innerWidth >= 800) {
        $(nav).show();
        $(window).resize(function () {
            if (window.innerWidth >= 800) {
            $(nav).show();
        } else {
            $(nav).hide();
        }
        });
    } else {
        $(nav).hide();
//        $('#menu_icon').click(function () {$('#nav_main').slideToggle(300);});
        $(window).resize(function () {
            if (window.innerWidth >= 800) {
            $(nav).show();
        } else {
            $(nav).hide();
        }
        });
    }
});
*/


window.onload = function () {

    var nav = document.getElementById('nav_main');
//    var icon = document.getElementById('menu_icon');
    var show = function (elem) {
        elem.style.display = 'flex';
    };
    var hide = function (elem) {
        elem.style.display = 'none';
    };
<<<<<<< HEAD
    
    function rsWidth(elem) {
=======
    var rsWidth = function () {
>>>>>>> parent of 98141b4 (Update mobl_nav.js)
        if (window.innerWidth >= 800) {
            show(elem);
        } else {
            hide(elem);
        }
<<<<<<< HEAD
    }
    
//    var clickToggle = function(click) {
//        if (nav.style.display == 'none') {
//            nav.style.height = 'auto';
//            nav.style.overflow = 'visible';
//        } else {
//            nav.style.
//        }
//    };
    
=======
    };

>>>>>>> parent of 98141b4 (Update mobl_nav.js)
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