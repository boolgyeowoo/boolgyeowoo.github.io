document.onload = function () {

    var container = document.getElementById("nav_main");
    var icon = document.getElementById("menu_icon");

    icon.addEventListener('click', function (event) {
        event.preventDefault();

        if (!container.classList.contains('active')) {
            container.classList.add('active');
            container.style.height = 'auto';

            var height = container.clientHeight + 'px';

            container.style.height = '0px';

            setTimeout(function () {
                container.style.height = height;
            }, 0);
        } else {
            container.style.height = '0px';

            container.addEventListener('transitionend', function () {
                container.classList.remove('active');
            }, {
                once: true
            });
        }
    });
};
