$(document).ready(function () {
  $(document).on('click', '.header li a', function (event) {
    history.pushState(null, null, event.target.href);
    $('.maincontent').load(event.target.href+' .contentbox>.maincontent');
    event.preventDefault();
  })
  $(window).on('popstate', function(event){
    $('.maincontent').load(location.href+' .contentbox>.maincontent');
  })
});