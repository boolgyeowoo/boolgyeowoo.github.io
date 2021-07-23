jQuery(document).ready(function ($) {
    if (window.innerWidth >= 800) {
        $('.nav_main').show();
        $('.menu_icon').hide();
        $(window).resize(function () {
            if (window.innerWidth >= 800) {
                $('.nav_main').show();
                $('.menu_icon').hide();
            } else {
                $(".menu_icon").show();
                $(".nav_main").hide();
                $(".menu_icon").click(function () {
                    $(".nav_main").slideToggle(300);
                });
            }
        });
    } else {
        $(".menu_icon").show();
        $(".nav_main").hide();
        $(".menu_icon").click(function () {
            $(".nav_main").slideToggle(300);
        });
        $(window).resize(function () {
            if (window.innerWidth >= 800) {
                $('.nav_main').show();
                $(".menu_icon").hide();
            } else {
                $('.menu_icon').show();
                $(".nav_main").hide();
                $(".menu_icon").click(function () {
                    $(".nav_main").slideToggle(300);
                });
            }
        });
    };
});
