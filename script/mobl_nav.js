jQuery(document).ready(function ($) {
    $(".nav_mobl").hide();
    $(".menu_icon").click(function () {
        $(".nav_mobl").slideToggle(300);
    });
    $(window).resize(function () {
        $(".nav_mobl").hide();
    });
});
