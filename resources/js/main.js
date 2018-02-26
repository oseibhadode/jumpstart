$(document).ready(function(){
  $('.carousel').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    fade: true,
    draggable: false
  });

  var userScroll = 0;

  $(window).scroll(function(){
    var userActive = $(this).scrollTop();
    if (userActive- userScroll > 50){
      var userDone = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + userDone}, 150);
      userScroll = userActive;
    } else if (userScroll - userActive > 50) {
      $('.navbar').animate({top: '0px'}, 150);
      userScroll = userActive;
    }
  });
});
