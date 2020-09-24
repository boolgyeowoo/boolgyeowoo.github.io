$(document).ready(function () {
  $(document).on('click', '.header li a', function (event) {
    history.pushState(null, null, event.target.href);
    $('main').load(event.target.href+' section>.main');
    event.preventDefault();
  })
  $(window).on('popstate', function(event){
    $('main').load(location.href+' section>.main');
  })
});