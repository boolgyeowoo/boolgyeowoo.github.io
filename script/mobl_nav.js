var moblNav = function () {

    var nav = document.getElementById('nav_main');
    var icon = document.getElementById('menu_icon');
    var show = function (elem) {
        elem.style.display = 'flex';
    };
    var hide = function (elem) {
        elem.style.display = 'none';
    };
    var rsWidth = function(elem) {
        if (window.innerWidth >= 800) {
            show(elem);
        } else {
            hide(elem);
        }
    }
    
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
    };
    icon.addEventListener('click', function (event) {
        if (nav.className != 'open') {
            show(nav);
            nav.className = 'open';
        } else {
            hide(nav);
            nav.className = '';
        };
    });
}

/*
기존 : 
800 이상 항상 보임
800 이하 숨김, 아이콘 클릭시 메뉴 보임
-> display 속성 변경

Jorge Maiden :
클릭시 content element의 height를 0에서 auto로 변경함

개정안 : 
전부 다 갈아엎기
-display 속성은 항상 flex로.
-800이하일때 height 값을 0로, overflow: hidden으로(css 에서). (기본은 auto, auto)
-icon 클릭시(#5) nav의 classlist에 open이 없으면 nav의 height와 overflow 값을 기본값으로 변경. classlist에 open 추가.
-nav의 classlist에 open이 있으면 nav의 height와 overflow 값을 각각 0, hidden 으로 바꿀것. classlist에서 open 제거.
-나머지는 그냥 가져오면 될듯 함. for 문 제외.
-버그때문에 padding 값도 0으로 바꾸는식으로 해야될듯.
*/
