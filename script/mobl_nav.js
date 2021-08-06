window.onload = function () {

    var nav = document.getElementById('nav_main');
    var icon = document.getElementById('menu_icon');
    var show = function (elem) {
        elem.style.display = 'flex';
    };
    var hide = function (elem) {
        elem.style.display = 'none';
    };
    function rsWidth(elem) {
        if (window.innerWidth >= 800) {
            show(elem);
        } else {
            hide(elem);
        }
    };
    
    let container = nav;
    icon.onclick.addEventListener('click' function(event) {
        event.preventDefault();

        if (!container.classList.contains('active')) {
            container.classList.add('active');
            container.style.height = 'auto';

            let height = container.clientHeight + "px";

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