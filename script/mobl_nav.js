var moblNav = function () {
    var nav = document.getElementById('nav_main');
    var icon = document.getElementById('menu_icon');
    
    var open = function (elem) {
        elem.style.overflow = 'auto';
        elem.style.height = 'auto';
        elem.style.padding = '1vh 0';
    };
    var close = function (elem) {
        elem.style.overflow = 'hidden';
        elem.style.height = '0';
        elem.style.padding = '0';
    };
    
    //I don't know what will happen. I just made a spaghetti
    var iconClick = function() {
        icon.addEventListener('click', function(event){
            event.preventDefault();
        
            if (!nav.classList.contains('open')) {
              
              nav.classList.add('open');
              open(nav);
        
              var height = nav.clientHeight + 'px';
        
              nav.style.height = '0px';
        
              setTimeout(function () {
                nav.style.height = height;
              }, 0);
              
            } else {
              
              nav.style.height = '0px';
        
              nav.addEventListener('transitionend', function () {
                nav.classList.remove('open');
              }, {
                once: true;
              });
              
            }
        });
    }
    
    var rsWidth = function(elem) {
        if (window.innerWidth >= 800) {
            defOpen(elem);
        } else {
            close(elem);
            iconClick();
        }
    }
    
    //when page is loaded, start this function
    if (window.innerWidth >= 800) {
        window.onresize = function() {
            rsWidth(nav);
        };
    } else {
        close(nav);
        iconClick();
        window.onresize = function () {
            rsWidth(nav);
        };
    };
    
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
-윈도우 리사이즈 => 클래스 초기화
! 중요 ! 800px 이하에서 기본값은 숨김. 800px 이상에선 작동 안함. 800이상에선 보이도록 css 초기화.
(할 필요가 있나? 미디어 쿼리로 될텐데? 일단 해보고 나서 안되면 if문 쓸것.)
(아니면 once 문으로 해결 될수도 있음.)
-처음에 로딩 됐을때 800 이상이면 기본 상태임. 그러다 800 보다 작아지면 윈도우 리사이즈 이벤트로 체크해서
css를 클로즈 상태로 만들어야됨. 이때 클래스는 변경되지 않아도 된다. 그러나 작은 상태에서 오픈 한 후 늘리면 리사이즈 이벤트가 발생
이러면 클로즈 상태가 되야 하는데 이때 클래스에 오픈이 있으니까 클로즈에도 오픈삭제 있얻야되네
아 일단 다시 if문에 and로 하면 가능할것 같은데 800 이하일때 클래스가 오픈이 아니라면?
페이지 로드 -> 800 이하인가? -> 클로즈 -> 눌렸는가? -> 오픈 -> 리사이즈? -> 800이하인가 -> 클로즈 눌렸는가? -> 오픈 -> 리사이즈 -> 800이상 -> 초기상태
페이지 로드 -> 800이상 -> 초기상태 + 리사이즈리스너 -> 리사이즈 -> 800이하 -> 클로즈 -> 클릭 -> 오픈 -> 클릭 -> 클로즈 -> 클릭 -> 오픈 -> 리사이즈 -> 800이하 -> 클로즈 -> ......
이렇게 하면 되지 않을까?
*/
