jQuery(document).ready(function ($) {

    var btn = '#menu_icon';
    var nav = '#nav_main';

    if (window.innerWidth >= 800) {
        $(nav).show();
        $(btn).hide();
        $(window).resize(function () {
            if (window.innerWidth >= 800) {
            $(nav).show();
            $(btn).hide();
        } else {
            $(btn).show();
            $(nav).hide();
        }
        });
    } else {
        $(btn).show();
        $(nav).hide();
//        $(btn).click(function () {$('#nav_main').slideToggle(300);});
        $(window).resize(function () {
            if (window.innerWidth >= 800) {
            $(nav).show();
            $(btn).hide();
        } else {
            $(btn).show();
            $(nav).hide();
        }
        });
    }
});
