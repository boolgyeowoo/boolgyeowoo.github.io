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
