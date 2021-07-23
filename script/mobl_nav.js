jQuery(document).ready(function ($) {
    if (window.innerWidth >= 800) {
        $('.nav_main').show();
        $(window).resize(function () {
           if (window.innerWidth >= 800) {
                $('.nav_main').show();
            } else {
                $(".nav_main").hide();
            } 
        });
    } else {
        $(".nav_main").hide();
        $(".menu_icon").click(function () {
            $(".nav_main").slideToggle(300);
        });
        $(window).resize(function () {
            if (window.innerWidth >= 800) {
                $('.nav_main').show();
            } else {
                $(".nav_main").hide();
            }
        });
    };
});