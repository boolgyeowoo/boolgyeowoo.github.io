jQuery(document).ready(function ($) {
//    if (window.innerWidth < 800) {
//        $(".nav_main").hide();
//        $(".menu_icon").click(function () {
//            $(".nav_main").slideToggle(300);
//        });
//        $(window).resize(function () {
//            $(".nav_main").hide();
//        });
//    } else {
//        $(window).resize(function () {
//            $(".nav_main").show();
//        });
//    }
    if ($(window).resize() === true) {
        if (window.innerWidth < 800) {
            $(".nav_mobl").hide();
            $(".menu_icon").click(function () {
                $(".nav_mobl").slideToggle(300);
            });
            $(window).resize(function () {
                $(".nav_mobl").hide();
            });
        } else {
            $(".nav_main").show();
        }
    }
});
