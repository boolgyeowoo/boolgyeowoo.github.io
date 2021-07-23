jQuery(document).ready(function ($) {

    var btn = '#menu_icon';
    var nav = '#nav_main';

    function btnClick() {
        $(nav).slideToggle(300);
    }

    //    function showHideIf() {
    //        if (window.innerWidth >= 800) {
    //            $(nav).show();
    //            $(btn).hide();
    //        } else {
    //            $(btn).show();
    //            $(nav).hide();
    //        }
    //    }

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
        $(btn).click(function () {
            $(nav).slideToggle(300);
        });
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
