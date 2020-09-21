window.onload = function () {
    if(window.innerWidth<=767) {
        var background_img = "img/index/home_s_"; /*small(mobile) size window*/
        var number = Math.floor(Math.random() * 5) + 1;
        var container = document.getElementById("bgImage");
        background_img += number + ".jpg";
        container.style.backgroundImage = "url('" + background_img + "')";
       }
    else if(window.innerWidth<=1350) {
        var background_img = "img/index/home_m_"; /*middle size window*/
        var number = Math.floor(Math.random() * 5) + 1;
        var container = document.getElementById("bgImage");
        background_img += number + ".jpg";
        container.style.backgroundImage = "url('" + background_img + "')";
    }
    else {
        var background_img = "img/index/home_l_";
        var number = Math.floor(Math.random() * 3) + 1;
        var container = document.getElementById("bgImage");
        background_img += number + ".jpg";
        container.style.backgroundImage = "url('" + background_img + "')";
    }
}
